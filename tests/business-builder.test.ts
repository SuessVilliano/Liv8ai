import { test } from "node:test";
import assert from "node:assert/strict";
import { businessIntakeSchema, buildBusinessBlueprint } from "../server/business-builder/blueprint.js";
import { provisionHighLevelLocation } from "../server/integrations/highlevel/provision-location.js";

test("business intake rejects unapproved goals and extra fields", () => {
  assert.equal(businessIntakeSchema.safeParse({ mode:"grow", name:"Test", industry:"Dental", goals:["publish"] }).success, false);
  assert.equal(businessIntakeSchema.safeParse({ mode:"grow", name:"Test", industry:"Dental", goals:["website"], token:"secret" }).success, false);
});
test("blueprint never claims to provision or research a business", () => {
  const input=businessIntakeSchema.parse({mode:"grow",name:"Example Dental",industry:"Dental",goals:["website","appointments","agents"]});
  const plan=buildBusinessBlueprint(input);
  assert.equal(plan.accountCreated,false);
  assert.equal(plan.verifiedResearch,false);
  assert.equal(plan.tasks.find(t=>t.id==="provision")?.status,"blocked");
  assert.equal(plan.tasks.find(t=>t.id==="agents")?.requiresApproval,true);
});
test("HighLevel provisioning refuses calls without customer approval", async () => {
  let calls=0;
  await assert.rejects(provisionHighLevelLocation({tenantId:"t",businessName:"Test",companyId:"c",snapshotId:"s"}, {
    token:"token",authorized:false,idempotencyKey:"key",fetchImpl:async()=>{calls++;throw Error("Unexpected network");}
  }),/authorization required/i);
  assert.equal(calls,0);
});
test("HighLevel adapter returns location ID with approved snapshot", async () => {
  const result=await provisionHighLevelLocation({tenantId:"tenant",businessName:"Test",companyId:"agency",snapshotId:"snap"},{
    token:"test",authorized:true,idempotencyKey:"locked-key",
    fetchImpl:async(_url,init)=> {
      assert.equal(JSON.parse(String(init?.body)).snapshotId,"snap");
      return {ok:true,json:async()=>({id:"location-123"})} as Response;
    }
  });
  assert.equal(result.locationId,"location-123");
});

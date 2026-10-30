import { z } from "zod";

export const businessIntakeSchema = z.object({
  mode: z.enum(["start", "grow"]),
  name: z.string().trim().min(2).max(120),
  website: z.string().url().max(2048).optional(),
  industry: z.string().trim().min(2).max(100),
  city: z.string().trim().max(100).optional(),
  goals: z.array(z.enum(["website", "leads", "appointments", "seo", "aeo", "automation", "agents"])).min(1).max(7),
}).strict();

export type BusinessIntake = z.infer<typeof businessIntakeSchema>;

export function buildBusinessBlueprint(input: BusinessIntake) {
  const services = new Set(input.goals);
  const tasks = [
    { id: "research", label: "Research business and verify competitor sources", requiresApproval: false, status: "pending" },
    { id: "strategy", label: "Review positioning and growth opportunities", requiresApproval: true, status: "pending" },
    { id: "provision", label: "Create authorized HighLevel sub-account", requiresApproval: true, status: "blocked" },
    { id: "snapshot", label: "Install approved industry snapshot", requiresApproval: true, status: "blocked" },
    ...(services.has("website") ? [{ id: "website", label: "Prepare website and verify lead capture", requiresApproval: true, status: "blocked" }] : []),
    ...(services.has("seo") || services.has("aeo") ? [{ id: "visibility", label: "Audit SEO and AEO with cited findings", requiresApproval: true, status: "blocked" }] : []),
    ...(services.has("automation") || services.has("appointments") || services.has("leads") ? [{ id: "workflows", label: "Test CRM, pipeline and appointment workflows", requiresApproval: true, status: "blocked" }] : []),
    ...(services.has("agents") ? [{ id: "agents", label: "Configure, test and approve managed agents", requiresApproval: true, status: "blocked" }] : []),
    { id: "qa", label: "Verify production readiness and obtain launch approval", requiresApproval: true, status: "blocked" },
  ];
  return {
    version: 1,
    business: input,
    tasks,
    stage: "blueprint",
    verifiedResearch: false,
    accountCreated: false,
    note: "Planning output only. No live competitor research, provisioning, deployment or publishing has occurred.",
  };
}

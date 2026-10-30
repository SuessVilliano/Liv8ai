/**
 * HighLevel agency provisioning adapter.
 * Server-only: never import into the browser bundle.
 * Requires a supported agency-level token and a pre-existing snapshot.
 * Does not run automatically on signup; call only after account authorization.
 */
export interface ProvisionBusiness {
  tenantId: string;
  businessName: string;
  companyId: string;
  snapshotId: string;
  website?: string;
  phone?: string;
  timezone?: string;
  country?: string;
}
export interface ProvisionResult {
  tenantId: string;
  locationId: string;
  snapshotId: string;
}
export class ProvisioningError extends Error {
  constructor(message: string, public readonly status: number) { super(message); }
}
export async function provisionHighLevelLocation(
  business: ProvisionBusiness,
  opts: { token: string; authorized: boolean; idempotencyKey: string; fetchImpl?: typeof fetch }
): Promise<ProvisionResult> {
  if (!opts.authorized) throw new ProvisioningError("Customer authorization required", 403);
  if (!opts.token || !opts.idempotencyKey) throw new ProvisioningError("Credentials and idempotency key required", 400);
  if (!business.tenantId || !business.businessName || !business.companyId || !business.snapshotId)
    throw new ProvisioningError("Missing tenant, business, agency or snapshot", 400);
  // IMPORTANT: The caller MUST persist and lock idempotencyKey to tenantId before calling.
  // HighLevel does not document idempotent POST semantics for this endpoint.
  // Never retry ambiguous network failures without reconciling the created location.
  const fetcher = opts.fetchImpl ?? fetch;
  const response = await fetcher("https://services.leadconnectorhq.com/locations/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${opts.token}`,
      Version: "v3",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: business.businessName,
      companyId: business.companyId,
      snapshotId: business.snapshotId,
      ...(business.website ? { website: business.website } : {}),
      ...(business.phone ? { phone: business.phone } : {}),
      ...(business.timezone ? { timezone: business.timezone } : {}),
      country: business.country ?? "US",
    }),
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) {
    // Avoid leaking API response content, which may contain account data.
    throw new ProvisioningError("HighLevel location provisioning failed", response.status);
  }
  const result: unknown = await response.json();
  if (!result || typeof result !== "object" || !("id" in result) || typeof result.id !== "string")
    throw new ProvisioningError("HighLevel returned no location ID; reconcile before retry", 502);
  return { tenantId: business.tenantId, locationId: result.id, snapshotId: business.snapshotId };
}

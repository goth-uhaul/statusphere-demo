import { OAuthSession } from "@atproto/oauth-client-node";
import { cookies } from "next/headers";
import { getOAuthClient } from "./client";

export async function getSession(): Promise<OAuthSession | null> {
  const did = await getDid();
  if (!did) return null;

  try {
    const client = await getOAuthClient();
    return await client.restore(did);
  } catch {
    return null;
  }
}

export async function getDid(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get("did")?.value ?? null;
}

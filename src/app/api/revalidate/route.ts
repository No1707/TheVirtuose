import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export const runtime = "nodejs";

/**
 * Sanity calls this when content is published, so the live site refreshes
 * within seconds instead of waiting for the cache to expire.
 * Point a Sanity webhook at /api/revalidate and share the same secret.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Revalidation is not configured." },
      { status: 503 }
    );
  }

  try {
    const { isValidSignature } = await parseBody(req, secret);
    if (!isValidSignature) {
      return NextResponse.json({ error: "Bad signature." }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  // Content appears on both the home page and /work, so refresh everything.
  revalidatePath("/", "layout");

  return NextResponse.json({ revalidated: true, at: Date.now() });
}

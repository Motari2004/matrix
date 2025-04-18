import { NextRequest } from "next/server";
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await context.params;
  const { id } = resolvedParams;
  return new Response(`User ID: ${id}`);
}

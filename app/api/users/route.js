import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const results = await prisma.user.findMany();
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Error Fetching users", err);
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
    });
  }
}

import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  try {
    const resume = await readFile(path.join(process.cwd(), "assets", "Avila, Dariel_CV.pdf"));

    return new Response(resume, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Dariel-Avila-Resume.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Resume unavailable", { status: 404 });
  }
}

import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const resume = await readFile(path.join(process.cwd(), "assets", "Avila, Dariel_CV.pdf"));
    const shouldDownload = new URL(request.url).searchParams.get("download") === "1";

    return new Response(resume, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${shouldDownload ? "attachment" : "inline"}; filename="Dariel-Avila-Resume.pdf"`,
        "Content-Length": resume.byteLength.toString(),
        "Cache-Control": "public, max-age=3600",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Resume unavailable", { status: 404 });
  }
}

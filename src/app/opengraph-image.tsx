import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/lib/site";

export const alt = "Rafia Eman — HR Executive & Recruitment Specialist in Islamabad, Pakistan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public", profile.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #2a1520 0%, #0c0a0e 55%, #1d1712 100%)",
          color: "#f5eee9",
          padding: 64,
          alignItems: "center",
          gap: 56,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#ee8fa3", textTransform: "uppercase" }}>
            HR &amp; Recruitment Professional
          </div>
          <div style={{ fontSize: 104, lineHeight: 1, marginTop: 24, fontWeight: 700, letterSpacing: -3 }}>Rafia Eman</div>
          <div style={{ fontSize: 34, marginTop: 28, color: "#d8cdd1", lineHeight: 1.3 }}>
            Recruitment · Onboarding · Payroll · Salary Reconciliation · HR Reporting
          </div>
          <div style={{ display: "flex", marginTop: 40, fontSize: 24, color: "#a99ea3" }}>Islamabad, Pakistan</div>
        </div>
        <div
          style={{
            display: "flex",
            width: 380,
            height: 480,
            borderRadius: "190px 190px 40px 40px",
            overflow: "hidden",
            border: "2px solid rgba(238,143,163,0.5)",
          }}
        >
          <img src={photoSrc} alt="" width={380} height={507} style={{ objectFit: "cover", marginTop: -20 }} />
        </div>
      </div>
    ),
    size,
  );
}

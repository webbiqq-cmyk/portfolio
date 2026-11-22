import { existsSync } from "node:fs";
import path from "node:path";

/** True when public/cv.pdf exists at build time. Drop the PDF in and rebuild to enable the download button. */
export const hasCv = existsSync(path.join(process.cwd(), "public", "cv.pdf"));

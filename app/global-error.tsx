"use client";

import ErrorSection from "@/app/_components/error-section";
import type { AppError } from "@/lib/types";

export default function GlobalError({ reset }: AppError) {
  return (
    <html>
      <body>
        <ErrorSection onClick={() => reset()} />
      </body>
    </html>
  );
}

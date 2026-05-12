"use client";

import QRCode from "react-qr-code";

export const INSTAGRAM_LEDGER_URL =
  "https://www.instagram.com/gaiamutfakta";

export function InstagramQr() {
  return (
    <a
      href={INSTAGRAM_LEDGER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block size-32 shrink-0 leading-none"
      aria-label="Gaia Mutfak Instagram hesabını aç"
    >
      <QRCode
        value={INSTAGRAM_LEDGER_URL}
        size={128}
        className="size-full h-auto w-full max-w-full"
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      />
    </a>
  );
}

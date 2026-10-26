import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const vitePkg = JSON.parse(
  readFileSync(
    new URL("../node_modules/vite/package.json", import.meta.url),
    "utf8",
  ),
) as { version: string };

describe("vite CVE fix (GHSA-587h-7wmj-h5pm)", () => {
  test("installed vite is the patched release", () => {
    expect(vitePkg.version).toBe("8.3.3");
  });
});

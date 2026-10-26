import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const zodPkg = JSON.parse(
  readFileSync(
    new URL("../node_modules/zod/package.json", import.meta.url),
    "utf8",
  ),
) as { version: string };

describe("zod CVE fix (GHSA-mrhx-c7xc-m3w5)", () => {
  test("installed zod is the patched release", () => {
    expect(zodPkg.version).toBe("4.6.6");
  });
});

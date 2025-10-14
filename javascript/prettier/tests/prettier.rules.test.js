import { describe, expect, it } from "vitest";
import prettier from "prettier";
import config from "../prettier.config.js";

async function format(input, parser = "babel") {
  return await prettier.format(input, { ...config, parser });
}

describe("prettier config", () => {
  it("uses double quotes and trailing semicolons", async () => {
    const input = "const s = 'hi'\n";
    const output = await format(input);
    expect(output).toContain('"hi"');
    expect(output.trim().endsWith(";")).toBe(true);
  });

  it("sorts JSON keys via plugin", async () => {
    const input = `{"b":1,"a":2}`;
    const output = await format(input, "json");
    expect(output.indexOf("\"a\"")).toBeLessThan(output.indexOf("\"b\""));
  });
});

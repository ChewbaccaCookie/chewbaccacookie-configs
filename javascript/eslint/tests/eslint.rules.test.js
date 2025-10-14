import { describe, expect, it } from "vitest";
import { FlatESLint } from "eslint/use-at-your-own-risk";

async function lintText(code, filename = "sample.js") {
  const configFile = new URL("../eslint.config.js", import.meta.url).pathname;
  const eslint = new FlatESLint({
    overrideConfigFile: configFile,
    overrideConfig: { rules: { "prettier/prettier": "off" } },
  });
  const [result] = await eslint.lintText(code, { filePath: filename });
  return result;
}

describe("eslint rules", () => {
  it("enforces double quotes and semicolons", async () => {
    const result = await lintText("const a = 'x'\n");
    const ruleIds = new Set(result.messages.map((m) => m.ruleId));
    expect(ruleIds.has("quotes")).toBe(true);
    expect(ruleIds.has("semi")).toBe(true);
  });

  it("flags unused imports via plugin", async () => {
    const code = "import x from 'y'; console.log('ok');\n";
    const result = await lintText(code);
    const ruleIds = new Set(result.messages.map((m) => m.ruleId));
    expect(ruleIds.has("unused-imports/no-unused-imports")).toBe(true);
  });

  it("enforces simple-import-sort/imports", async () => {
    const code = [
      "import z from 'z';",
      "import a from 'a';",
      "console.log(z, a);",
      "",
    ].join("\n");
    const result = await lintText(code);
    const ruleIds = new Set(result.messages.map((m) => m.ruleId));
    expect(ruleIds.has("simple-import-sort/imports")).toBe(true);
  });
});

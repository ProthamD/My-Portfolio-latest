import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "prefer-const": "off",
      "no-var": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@next/next/no-img-element": "off", // disables img tag warning
      "@typescript-eslint/no-unused-vars": "off", // disables unused vars error
      "react-hooks/exhaustive-deps": "off", // disables missing deps warning
    }
  }
];

export default eslintConfig;

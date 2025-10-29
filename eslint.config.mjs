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
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Disable TypeScript 'any' type warnings
      "@typescript-eslint/no-explicit-any": "off",
      
      // Disable unused variables warnings
      "@typescript-eslint/no-unused-vars": "off",
      
      // Disable React hooks exhaustive deps warnings
      "react-hooks/exhaustive-deps": "off",
      
      // Disable Next.js img element warnings
      "@next/next/no-img-element": "off",
      
      // Disable prefer-const warnings
      "prefer-const": "off",
    },
  },
];

export default eslintConfig;

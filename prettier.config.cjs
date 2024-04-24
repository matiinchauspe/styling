/** @type {import('prettier').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<BUILT_IN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^(@/pages/(.*)$)|^(@/pages$)",
    "^(@/components/(.*)$)|^(@/components$)",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};

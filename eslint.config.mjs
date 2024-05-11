import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: {
    "process": true,
    "require":true,
    "console":true,
    "module":true
  } }},
  pluginJs.configs.recommended,
];
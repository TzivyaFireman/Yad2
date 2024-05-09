import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: {
    "process": true,
    "require":true,
    "console":true
  } }},
  pluginJs.configs.recommended,
];
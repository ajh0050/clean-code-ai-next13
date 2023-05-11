import React from "react";
import useScreenWidthCheck from "../hooks/screenWidth";

const languages = [
  "abap",
  "aes",
  "apex",
  "azcli",
  "bat",
  "bicep",
  "brainfuck",
  "c",
  "cameligo",
  "clike",
  "clojure",
  "coffeescript",
  "cpp",
  "csharp",
  "csp",
  "css",
  "dart",
  "dockerfile",
  "ecl",
  "elixir",
  "erlang",
  "flow9",
  "freemarker2",
  "fsharp",
  "go",
  "graphql",
  "handlebars",
  "hcl",
  "html",
  "ini",
  "java",
  "javascript",
  "js",
  "json",
  "jsx",
  "julia",
  "kotlin",
  "less",
  "lex",
  "lexon",
  "liquid",
  "livescript",
  "lua",
  "m3",
  "markdown",
  "mips",
  "msdax",
  "mysql",
  "nginx",
  "objective-c",
  "pascal",
  "pascaligo",
  "perl",
  "pgsql",
  "php",
  "pla",
  "plaintext",
  "postiats",
  "powerquery",
  "powershell",
  "proto",
  "pug",
  "python",
  "qsharp",
  "r",
  "razor",
  "redis",
  "redshift",
  "restructuredtext",
  "ruby",
  "rust",
  "sb",
  "scala",
  "scheme",
  "scss",
  "shell",
  "sol",
  "sparql",
  "sql",
  "st",
  "stylus",
  "swift",
  "systemverilog",
  "tcl",
  "toml",
  "ts",
  "tsx",
  "twig",
  "typescript",
  "vb",
  "vbscript",
  "verilog",
  "vue",
  "xml",
  "yaml",
];

const LanguageSelect = ({ language, handleLanguageChange }) => {
    const isScreenWidthSmallerThan647 = useScreenWidthCheck(647);
  return (
    <div>
      {!isScreenWidthSmallerThan647 && <label htmlFor="language" className="mr-2">
        Language:
      </label>}
      <select
        name="language"
        id="language"
        value={language}
        onChange={handleLanguageChange}
        className="h-[30px] m-1 rounded px-2 py-1 text-black"
      >
        {languages.map((language) => {
          return (
            <option key={language} value={language}>
              {language}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LanguageSelect;

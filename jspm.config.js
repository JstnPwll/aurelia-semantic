SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "local:": "jspm_packages/local/"
  },
  browserConfig: {
    "paths": {
      "*": "dist/*"
    }
  },
  transpiler: false,
  map: {
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0"
  },
  packages: {
    "npm:aurelia-polyfills@1.0.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json",
    "local:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "aurelia-semanticui": "github:JstnPwll/aurelia-semanticui@0.1.0",
    "better-console": "npm:better-console@1.0.0",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2"
  },
  packages: {
    "npm:better-console@1.0.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "cli-table": "npm:cli-table@0.3.1"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:cli-table@0.3.1": {
      "map": {
        "colors": "npm:colors@1.0.3"
      }
    },
    "npm:colors@1.0.3": {
      "map": {}
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:supports-color@2.0.0": {
      "map": {}
    }
  }
});

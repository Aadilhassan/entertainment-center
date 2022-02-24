var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/aadilhassan/remix-new/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
function meta() {
  return { title: "New Remix App" };
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/home/aadilhassan/remix-new/app/routes/tv/$id/$se/$ep/index.jsx
var ep_exports = {};
__export(ep_exports, {
  default: () => tv
});
init_react();
var import_react_bootstrap = require("react-bootstrap");
var import_remix3 = __toESM(require_remix());
function tv() {
  let { se } = (0, import_remix3.useParams)();
  let { id: id2 } = (0, import_remix3.useParams)();
  let { ep } = (0, import_remix3.useParams)();
  let link = "https://database.gdriveplayer.us/player.php?type=series&tmdb=" + id2 + "&season=" + se + "&episode=" + ep;
  let tv4 = (0, import_remix3.useLoaderData)();
  console.log(tv4);
  let img = "https://image.tmdb.org/t/p/w500";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("iframe", {
    style: { width: "96vw", height: "96vh", alignSelf: "center" },
    sandbox: "allow-forms allow-scripts allow-same-origin allow-top-navigation allow-fullscreen",
    src: link,
    allowfullscreen: true
  }));
}

// route:/home/aadilhassan/remix-new/app/routes/tv/$id/$se/index.jsx
var se_exports = {};
__export(se_exports, {
  default: () => tv2,
  loader: () => loader
});
init_react();
var import_react_bootstrap2 = require("react-bootstrap");
var import_remix4 = __toESM(require_remix());
async function loader({ params }) {
  let res = await fetch("https://api.themoviedb.org/3/tv/" + params.id + "/season/" + params.se + "?api_key=8b62f4bda40c67dbe48ddb6db1f858dc");
  console.log(res);
  return res.json();
}
function tv2() {
  let { se } = (0, import_remix4.useParams)();
  let { id: id2 } = (0, import_remix4.useParams)();
  let tv4 = (0, import_remix4.useLoaderData)();
  console.log(tv4);
  let img = "https://image.tmdb.org/t/p/w500";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap", justifyContent: "space-around" }
  }, tv4.episodes.map((ep) => /* @__PURE__ */ React.createElement(import_react_bootstrap2.Card, {
    style: { width: "12rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(import_react_bootstrap2.Card.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + ep.still_path
  }), /* @__PURE__ */ React.createElement(import_react_bootstrap2.Card.Body, null, /* @__PURE__ */ React.createElement(import_react_bootstrap2.Card.Title, null, " ", /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/tv/" + id2 + "/" + se + "/" + ep.episode_number
  }, ep.name, " "), ep.episode_number))))));
}

// route:/home/aadilhassan/remix-new/app/routes/movies/index.jsx
var movies_exports = {};
__export(movies_exports, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_react_bootstrap3 = require("react-bootstrap");
async function loader2() {
  let res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=8b62f4bda40c67dbe48ddb6db1f858dc`);
  return res.json();
}
function Index() {
  let img = "https://image.tmdb.org/t/p/w500";
  let movies = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap", justifyContent: "space-around" }
  }, movies.results.map((movie) => /* @__PURE__ */ React.createElement(import_react_bootstrap3.Card, {
    style: { width: "10rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(import_react_bootstrap3.Card.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + movie.poster_path
  }), /* @__PURE__ */ React.createElement(import_react_bootstrap3.Card.Body, null, /* @__PURE__ */ React.createElement(import_react_bootstrap3.Card.Title, null, " ", /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/movies/" + movie.id
  }, movie.name, movie.title))))));
}

// route:/home/aadilhassan/remix-new/app/routes/tv/$id/index.jsx
var id_exports = {};
__export(id_exports, {
  default: () => tv3,
  loader: () => loader3
});
init_react();
var import_react_bootstrap4 = require("react-bootstrap");
var import_remix6 = __toESM(require_remix());
async function loader3({ params }) {
  let res = await fetch("https://api.themoviedb.org/3/tv/" + params.id + "?api_key=8b62f4bda40c67dbe48ddb6db1f858dc");
  console.log(res);
  return res.json();
}
function tv3() {
  let { id: id2 } = (0, import_remix6.useParams)();
  let tv4 = (0, import_remix6.useLoaderData)();
  console.log(tv4);
  let img = "https://image.tmdb.org/t/p/w500";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Title:", tv4.original_name, "  "), "Id: ", id2, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap", justifyContent: "space-around" }
  }, tv4.seasons.map((season) => /* @__PURE__ */ React.createElement(import_react_bootstrap4.Card, {
    style: { width: "12rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(import_react_bootstrap4.Card.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + tv4.backdrop_path
  }), /* @__PURE__ */ React.createElement(import_react_bootstrap4.Card.Body, null, /* @__PURE__ */ React.createElement(import_react_bootstrap4.Card.Title, null, " ", /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/tv/" + id2 + "/" + season.season_number
  }, " ", season.name), "Total episodes:  ", season.episode_count))))));
}

// route:/home/aadilhassan/remix-new/app/routes/movies/$id.jsx
var id_exports2 = {};
__export(id_exports2, {
  default: () => id,
  loader: () => loader4
});
init_react();
var import_remix7 = __toESM(require_remix());
async function loader4({ params }) {
  let res = await fetch("https://api.themoviedb.org/3/movie/" + params.id + "?api_key=8b62f4bda40c67dbe48ddb6db1f858dc");
  return res.json();
}
function id() {
  let movie = (0, import_remix7.useLoaderData)();
  console.log(movie);
  const id2 = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Title:", movie.title, "  "), "Id: ", movie.id);
}

// route:/home/aadilhassan/remix-new/app/routes/tv/index.jsx
var tv_exports = {};
__export(tv_exports, {
  default: () => Index2,
  loader: () => loader5
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_react_bootstrap5 = require("react-bootstrap");
async function loader5() {
  let res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=8b62f4bda40c67dbe48ddb6db1f858dc`);
  return res.json();
}
function Index2() {
  let img = "https://image.tmdb.org/t/p/w500";
  let tvs = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap", justifyContent: "space-around" }
  }, tvs.results.map((tv4) => /* @__PURE__ */ React.createElement(import_react_bootstrap5.Card, {
    style: { width: "12rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(import_react_bootstrap5.Card.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + tv4.poster_path
  }), /* @__PURE__ */ React.createElement(import_react_bootstrap5.Card.Body, null, /* @__PURE__ */ React.createElement(import_react_bootstrap5.Card.Title, null, " ", /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/tv/" + tv4.id
  }, tv4.name, tv4.title))))));
}

// route:/home/aadilhassan/remix-new/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  loader: () => loader6
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_react_bootstrap6 = require("react-bootstrap");
async function loader6() {
  let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8b62f4bda40c67dbe48ddb6db1f858dc`);
  return res.json();
}
function Index3() {
  let img = "https://image.tmdb.org/t/p/w500";
  let movies = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap", justifyContent: "space-around" }
  }, movies.results.map((movie) => /* @__PURE__ */ React.createElement(import_react_bootstrap6.Card, {
    style: { width: "10rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(import_react_bootstrap6.Card.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + movie.poster_path
  }), /* @__PURE__ */ React.createElement(import_react_bootstrap6.Card.Body, null, /* @__PURE__ */ React.createElement(import_react_bootstrap6.Card.Title, null, " ", /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/movies/" + movie.id
  }, movie.title), /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/tv/" + movie.id
  }, movie.name))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "786e7bd6", "entry": { "module": "/build/entry.client-YFTQW3T4.js", "imports": ["/build/_shared/chunk-QOL5BKLQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MDMFCSWG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-BPLDX4V6.js", "imports": ["/build/_shared/chunk-ZVVUAG5U.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/movies/$id": { "id": "routes/movies/$id", "parentId": "root", "path": "movies/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/movies/$id-KOWUFJZU.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/movies/index": { "id": "routes/movies/index", "parentId": "root", "path": "movies", "index": true, "caseSensitive": void 0, "module": "/build/routes/movies/index-RJPHC5NQ.js", "imports": ["/build/_shared/chunk-ZVVUAG5U.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tv/$id/$se/$ep/index": { "id": "routes/tv/$id/$se/$ep/index", "parentId": "root", "path": "tv/:id/:se/:ep", "index": true, "caseSensitive": void 0, "module": "/build/routes/tv/$id/$se/$ep/index-UXHVVP5G.js", "imports": ["/build/_shared/chunk-ZVVUAG5U.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tv/$id/$se/index": { "id": "routes/tv/$id/$se/index", "parentId": "root", "path": "tv/:id/:se", "index": true, "caseSensitive": void 0, "module": "/build/routes/tv/$id/$se/index-GII4VYQM.js", "imports": ["/build/_shared/chunk-ZVVUAG5U.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tv/$id/index": { "id": "routes/tv/$id/index", "parentId": "root", "path": "tv/:id", "index": true, "caseSensitive": void 0, "module": "/build/routes/tv/$id/index-63NWMJ26.js", "imports": ["/build/_shared/chunk-ZVVUAG5U.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tv/index": { "id": "routes/tv/index", "parentId": "root", "path": "tv", "index": true, "caseSensitive": void 0, "module": "/build/routes/tv/index-KBRQOTC3.js", "imports": ["/build/_shared/chunk-ZVVUAG5U.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-786E7BD6.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tv/$id/$se/$ep/index": {
    id: "routes/tv/$id/$se/$ep/index",
    parentId: "root",
    path: "tv/:id/:se/:ep",
    index: true,
    caseSensitive: void 0,
    module: ep_exports
  },
  "routes/tv/$id/$se/index": {
    id: "routes/tv/$id/$se/index",
    parentId: "root",
    path: "tv/:id/:se",
    index: true,
    caseSensitive: void 0,
    module: se_exports
  },
  "routes/movies/index": {
    id: "routes/movies/index",
    parentId: "root",
    path: "movies",
    index: true,
    caseSensitive: void 0,
    module: movies_exports
  },
  "routes/tv/$id/index": {
    id: "routes/tv/$id/index",
    parentId: "root",
    path: "tv/:id",
    index: true,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/movies/$id": {
    id: "routes/movies/$id",
    parentId: "root",
    path: "movies/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/tv/index": {
    id: "routes/tv/index",
    parentId: "root",
    path: "tv",
    index: true,
    caseSensitive: void 0,
    module: tv_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGU6L2hvbWUvYWFkaWxoYXNzYW4vcmVtaXgtbmV3L2FwcC9yb290LmpzeCIsICJyb3V0ZTovaG9tZS9hYWRpbGhhc3Nhbi9yZW1peC1uZXcvYXBwL3JvdXRlcy90di8kaWQvJHNlLyRlcC9pbmRleC5qc3giLCAicm91dGU6L2hvbWUvYWFkaWxoYXNzYW4vcmVtaXgtbmV3L2FwcC9yb3V0ZXMvdHYvJGlkLyRzZS9pbmRleC5qc3giLCAicm91dGU6L2hvbWUvYWFkaWxoYXNzYW4vcmVtaXgtbmV3L2FwcC9yb3V0ZXMvbW92aWVzL2luZGV4LmpzeCIsICJyb3V0ZTovaG9tZS9hYWRpbGhhc3Nhbi9yZW1peC1uZXcvYXBwL3JvdXRlcy90di8kaWQvaW5kZXguanN4IiwgInJvdXRlOi9ob21lL2FhZGlsaGFzc2FuL3JlbWl4LW5ldy9hcHAvcm91dGVzL21vdmllcy8kaWQuanN4IiwgInJvdXRlOi9ob21lL2FhZGlsaGFzc2FuL3JlbWl4LW5ldy9hcHAvcm91dGVzL3R2L2luZGV4LmpzeCIsICJyb3V0ZTovaG9tZS9hYWRpbGhhc3Nhbi9yZW1peC1uZXcvYXBwL3JvdXRlcy9pbmRleC5qc3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9hYWRpbGhhc3Nhbi9yZW1peC1uZXcvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvYWFkaWxoYXNzYW4vcmVtaXgtbmV3L2FwcC9yb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9hYWRpbGhhc3Nhbi9yZW1peC1uZXcvYXBwL3JvdXRlcy90di8kaWQvJHNlLyRlcC9pbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvYWFkaWxoYXNzYW4vcmVtaXgtbmV3L2FwcC9yb3V0ZXMvdHYvJGlkLyRzZS9pbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvYWFkaWxoYXNzYW4vcmVtaXgtbmV3L2FwcC9yb3V0ZXMvbW92aWVzL2luZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvaG9tZS9hYWRpbGhhc3Nhbi9yZW1peC1uZXcvYXBwL3JvdXRlcy90di8kaWQvaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9ob21lL2FhZGlsaGFzc2FuL3JlbWl4LW5ldy9hcHAvcm91dGVzL21vdmllcy8kaWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9ob21lL2FhZGlsaGFzc2FuL3JlbWl4LW5ldy9hcHAvcm91dGVzL3R2L2luZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9hYWRpbGhhc3Nhbi9yZW1peC1uZXcvYXBwL3JvdXRlcy9pbmRleC5qc3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3R2LyRpZC8kc2UvJGVwL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90di8kaWQvJHNlLyRlcC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0di86aWQvOnNlLzplcFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3R2LyRpZC8kc2UvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3R2LyRpZC8kc2UvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidHYvOmlkLzpzZVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL21vdmllcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbW92aWVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1vdmllc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3R2LyRpZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdHYvJGlkL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInR2LzppZFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL21vdmllcy8kaWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21vdmllcy8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibW92aWVzLzppZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvdHYvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3R2L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInR2XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvblxufSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDYXJkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG4gXG4vLyBleHBvcnQgIGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7cGFyYW1zfSkge1xuLy8gICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvJytwYXJhbXMuaWQrJy9zZWFzb24vJytwYXJhbXMuc2UrJz9hcGlfa2V5PThiNjJmNGJkYTQwYzY3ZGJlNDhkZGI2ZGIxZjg1OGRjJyk7XG4vLyBjb25zb2xlLmxvZyhyZXMpXG4vLyAgIHJldHVybiByZXMuanNvbigpO1xuLy8gfVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHYoKSB7XG5cbiAgbGV0IHsgc2UgfSA9IHVzZVBhcmFtcygpO1xuICAgbGV0IHtpZCB9ID0gdXNlUGFyYW1zKCk7XG4gICBsZXQge2VwfSA9IHVzZVBhcmFtcygpO1xuXG4gICBsZXQgbGluayA9ICdodHRwczovL2RhdGFiYXNlLmdkcml2ZXBsYXllci51cy9wbGF5ZXIucGhwP3R5cGU9c2VyaWVzJnRtZGI9JytpZCsnJnNlYXNvbj0nK3NlKycmZXBpc29kZT0nK2VwXG5cbiAgICBsZXQgdHYgPSB1c2VMb2FkZXJEYXRhKCk7XG4gICAgY29uc29sZS5sb2codHYpXG4gICAgbGV0IGltZyA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuPGlmcmFtZVxuICBzdHlsZT17e3dpZHRoOiAnOTZ2dycsIGhlaWdodDonOTZ2aCcsIGFsaWduU2VsZjogJ2NlbnRlcid9fVxuICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctc2NyaXB0cyBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy10b3AtbmF2aWdhdGlvbiBhbGxvdy1mdWxsc2NyZWVuXCJcbiAgc3JjPXtsaW5rfVxuICBhbGxvd2Z1bGxzY3JlZW5cbi8+XG5cbnsvKiB7bGlua30gKi99XG5cbiAgIFxuICAgIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSIsICJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDYXJkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG4gXG5leHBvcnQgIGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7cGFyYW1zfSkge1xuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvJytwYXJhbXMuaWQrJy9zZWFzb24vJytwYXJhbXMuc2UrJz9hcGlfa2V5PThiNjJmNGJkYTQwYzY3ZGJlNDhkZGI2ZGIxZjg1OGRjJyk7XG5jb25zb2xlLmxvZyhyZXMpXG4gIHJldHVybiByZXMuanNvbigpO1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0digpIHtcblxuICBsZXQgeyBzZSB9ID0gdXNlUGFyYW1zKCk7XG4gICBsZXQge2lkIH0gPSB1c2VQYXJhbXMoKTtcbiAgICBsZXQgdHYgPSB1c2VMb2FkZXJEYXRhKCk7XG4gICAgY29uc29sZS5sb2codHYpXG4gICAgbGV0IGltZyA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuICAgICAgICB7LyogPGgxPlRpdGxlOnt0di5vcmlnaW5hbF9uYW1lfSAgPC9oMT5cbiAgICAgICAgICBJZDoge2lkfSAqL31cblxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleFdyYXA6XCJ3cmFwXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwifX0+IFxuICAgICAgICAgIFxuICAgICAgICAgIHt0di5lcGlzb2Rlcy5tYXAoZXAgPT4gKFxuXG5cbiAgICAgICBcbiAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMTJyZW0nLCBtYXJnaW5Ub3A6ICc0MHB4JyB9fT5cbiAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzdHlsZT17eyB3aWR0aDogJzEwcmVtJyB9fSBzcmM9e2ltZytlcC5zdGlsbF9wYXRofSAvPlxuICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgIDxDYXJkLlRpdGxlPiA8TGluayB0bz17Jy90di8nK2lkKycvJytzZSsnLycrIGVwLmVwaXNvZGVfbnVtYmVyIH0+e2VwLm5hbWV9IDwvTGluaz57ZXAuZXBpc29kZV9udW1iZXJ9XG4gICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICB7LyogPENhcmQuVGV4dD57bW92aWUub3ZlcnZpZXd9PC9DYXJkLlRleHQ+ICovfVxuICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIFxuXG4gICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0iLCAiaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgcmVkaXJlY3QsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3RyZW5kaW5nL21vdmllL2RheT9hcGlfa2V5PThiNjJmNGJkYTQwYzY3ZGJlNDhkZGI2ZGIxZjg1OGRjYClcbiByZXR1cm4gcmVzLmpzb24oKTtcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4vLyBhcGkgLS0tIDhiNjJmNGJkYTQwYzY3ZGJlNDhkZGI2ZGIxZjg1OGRjXG4gICAgbGV0IGltZyA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJztcbiAgICBsZXQgbW92aWVzID0gdXNlTG9hZGVyRGF0YSgpO1xuLy8gICAgbGV0IG1vdmllcyA9IEFycmF5LmZyb20odXNlTG9hZGVyRGF0YSgpKTtcblxuICAgIHJldHVybiAoXG4gICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixmbGV4V3JhcDpcIndyYXBcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCJ9fT5cbiAgICAgICAge21vdmllcy5yZXN1bHRzLm1hcChtb3ZpZSA9PiAoXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMTByZW0nLCBtYXJnaW5Ub3A6ICc0MHB4JyB9fT5cbiAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzdHlsZT17eyB3aWR0aDogJzEwcmVtJyB9fSBzcmM9e2ltZyttb3ZpZS5wb3N0ZXJfcGF0aH0gLz5cbiAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICA8Q2FyZC5UaXRsZT4gPExpbmsgdG89eycvbW92aWVzLycrIG1vdmllLmlkIH0+e21vdmllLm5hbWV9e21vdmllLnRpdGxlfTwvTGluaz48L0NhcmQuVGl0bGU+XG4gICAgICAgIHsvKiA8Q2FyZC5UZXh0Pnttb3ZpZS5vdmVydmlld308L0NhcmQuVGV4dD4gKi99XG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgIDwvQ2FyZD5cbiAgICAgICAgKSl9XG48L2Rpdj5cbiAgICApO1xuICB9IiwgImltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIENhcmQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbiBcbmV4cG9ydCAgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHtwYXJhbXN9KSB7XG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di8nK3BhcmFtcy5pZCsnP2FwaV9rZXk9OGI2MmY0YmRhNDBjNjdkYmU0OGRkYjZkYjFmODU4ZGMnKTtcbmNvbnNvbGUubG9nKHJlcylcbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR2KCkge1xuXG4gIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcbiAgIFxuICAgIGxldCB0diA9IHVzZUxvYWRlckRhdGEoKTtcbiAgICBjb25zb2xlLmxvZyh0dilcbiAgICBsZXQgaW1nID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxoMT5UaXRsZTp7dHYub3JpZ2luYWxfbmFtZX0gIDwvaDE+XG4gICAgICAgICAgSWQ6IHtpZH1cblxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleFdyYXA6XCJ3cmFwXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwifX0+IFxuICAgICAgICAgIFxuICAgICAgICAgIHt0di5zZWFzb25zLm1hcChzZWFzb24gPT4gKFxuXG5cbiAgICAgICBcbiAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMTJyZW0nLCBtYXJnaW5Ub3A6ICc0MHB4JyB9fT5cbiAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzdHlsZT17eyB3aWR0aDogJzEwcmVtJyB9fSBzcmM9e2ltZyt0di5iYWNrZHJvcF9wYXRofSAvPlxuICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgIDxDYXJkLlRpdGxlPiA8TGluayB0bz17Jy90di8nK2lkKycvJysgc2Vhc29uLnNlYXNvbl9udW1iZXIgfT4ge3NlYXNvbi5uYW1lfTwvTGluaz5cbiAgICAgICAgVG90YWwgZXBpc29kZXM6ICB7c2Vhc29uLmVwaXNvZGVfY291bnR9PC9DYXJkLlRpdGxlPlxuICAgICAgICB7LyogPENhcmQuVGV4dD57bW92aWUub3ZlcnZpZXd9PC9DYXJkLlRleHQ+ICovfVxuICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIFxuXG4gICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSAsIHVzZVBhcmFtc30gZnJvbSBcInJlbWl4XCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHtwYXJhbXN9KSB7XG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLycrcGFyYW1zLmlkKyc/YXBpX2tleT04YjYyZjRiZGE0MGM2N2RiZTQ4ZGRiNmRiMWY4NThkYycpXG4gcmV0dXJuIHJlcy5qc29uKCk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWQoKSB7XG4gICAgbGV0IG1vdmllID0gdXNlTG9hZGVyRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKG1vdmllKVxuICAgIGNvbnN0IGlkID0gdXNlTG9hZGVyRGF0YSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VGl0bGU6e21vdmllLnRpdGxlfSAgPC9oMT5cbiAgICAgICAgICBJZDoge21vdmllLmlkfVxuICAgICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSIsICJpbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCByZWRpcmVjdCwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHJlbmRpbmcvdHYvZGF5P2FwaV9rZXk9OGI2MmY0YmRhNDBjNjdkYmU0OGRkYjZkYjFmODU4ZGNgKVxuIHJldHVybiByZXMuanNvbigpO1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbi8vIGFwaSAtLS0gOGI2MmY0YmRhNDBjNjdkYmU0OGRkYjZkYjFmODU4ZGNcbiAgICBsZXQgaW1nID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAnO1xuICAgIGxldCB0dnMgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgICByZXR1cm4gKFxuICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleFdyYXA6XCJ3cmFwXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwifX0+XG4gICAgICAgIHt0dnMucmVzdWx0cy5tYXAodHYgPT4gKFxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzEycmVtJywgbWFyZ2luVG9wOiAnNDBweCcgfX0+XG4gICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3R5bGU9e3sgd2lkdGg6ICcxMHJlbScgfX0gc3JjPXtpbWcrdHYucG9zdGVyX3BhdGh9IC8+XG4gICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgPENhcmQuVGl0bGU+IDxMaW5rIHRvPXsnL3R2LycrIHR2LmlkIH0+e3R2Lm5hbWV9e3R2LnRpdGxlfTwvTGluaz48L0NhcmQuVGl0bGU+XG4gICAgICAgIHsvKiA8Q2FyZC5UZXh0Pnttb3ZpZS5vdmVydmlld308L0NhcmQuVGV4dD4gKi99XG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgIDwvQ2FyZD5cbiAgICAgICAgKSl9XG48L2Rpdj5cbiAgICApO1xuICB9IiwgImltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0LCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90cmVuZGluZy9hbGwvZGF5P2FwaV9rZXk9OGI2MmY0YmRhNDBjNjdkYmU0OGRkYjZkYjFmODU4ZGNgKVxuIHJldHVybiByZXMuanNvbigpO1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbi8vIGFwaSAtLS0gOGI2MmY0YmRhNDBjNjdkYmU0OGRkYjZkYjFmODU4ZGNcbiAgICBsZXQgaW1nID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAnO1xuICAgIGxldCBtb3ZpZXMgPSB1c2VMb2FkZXJEYXRhKCk7XG4vLyAgICBsZXQgbW92aWVzID0gQXJyYXkuZnJvbSh1c2VMb2FkZXJEYXRhKCkpO1xuXG4gICAgcmV0dXJuIChcbiAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGZsZXhXcmFwOlwid3JhcFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIn19PlxuICAgICAgICB7bW92aWVzLnJlc3VsdHMubWFwKG1vdmllID0+IChcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICcxMHJlbScsIG1hcmdpblRvcDogJzQwcHgnIH19PlxuICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHN0eWxlPXt7IHdpZHRoOiAnMTByZW0nIH19IHNyYz17aW1nK21vdmllLnBvc3Rlcl9wYXRofSAvPlxuICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgIDxDYXJkLlRpdGxlPiA8TGluayB0bz17Jy9tb3ZpZXMvJysgbW92aWUuaWQgfT57bW92aWUudGl0bGV9PC9MaW5rPlxuICAgICAgICA8TGluayB0bz17Jy90di8nKyBtb3ZpZS5pZH0gPnttb3ZpZS5uYW1lfTwvTGluaz5cbiAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICB7LyogPENhcmQuVGV4dD57bW92aWUub3ZlcnZpZXd9PC9DYXJkLlRleHQ+ICovfVxuICAgICAgICA8L0NhcmQuQm9keT5cbiAgICA8L0NhcmQ+XG4gICAgICAgICkpfVxuPC9kaXY+XG4gICAgKTtcbiAgfSIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic3ODZlN2JkNicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtWUZUUVczVDQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFPTDVCS0xRLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1NRE1GQ1NXRy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUJQTERYNFY2LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aVlZVQUc1VS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tb3ZpZXMvJGlkJzp7J2lkJzoncm91dGVzL21vdmllcy8kaWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbW92aWVzLzppZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tb3ZpZXMvJGlkLUtPV1VGSlpVLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tb3ZpZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbW92aWVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21vdmllcycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbW92aWVzL2luZGV4LVJKUEhDNU5RLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aVlZVQUc1VS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90di8kaWQvJHNlLyRlcC9pbmRleCc6eydpZCc6J3JvdXRlcy90di8kaWQvJHNlLyRlcC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0di86aWQvOnNlLzplcCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdHYvJGlkLyRzZS8kZXAvaW5kZXgtVVhIVlZQNUcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpWVlVBRzVVLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90di8kaWQvJHNlL2luZGV4Jzp7J2lkJzoncm91dGVzL3R2LyRpZC8kc2UvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondHYvOmlkLzpzZScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdHYvJGlkLyRzZS9pbmRleC1HSUk0VllRTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWlZWVUFHNVUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdHYvJGlkL2luZGV4Jzp7J2lkJzoncm91dGVzL3R2LyRpZC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0di86aWQnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3R2LyRpZC9pbmRleC02M05XTUoyNi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWlZWVUFHNVUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdHYvaW5kZXgnOnsnaWQnOidyb3V0ZXMvdHYvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondHYnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3R2L2luZGV4LUtCUlFPVEMzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aVlZVQUc1VS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNzg2RTdCRDYuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FB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

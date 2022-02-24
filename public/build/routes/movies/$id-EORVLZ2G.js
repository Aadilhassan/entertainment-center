import {
  useLoaderData
} from "/build/_shared/chunk-IYDLYMNK.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/movies/$id.jsx?browser
init_react();

// app/routes/movies/$id.jsx
init_react();
function id() {
  let movies = useLoaderData();
  console.log(movies);
  const id2 = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Some Movie  ", id2, " "));
}
export {
  id as default
};
//# sourceMappingURL=/build/routes/movies/$id-EORVLZ2G.js.map

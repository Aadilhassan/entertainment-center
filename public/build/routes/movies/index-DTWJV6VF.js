import {
  useLoaderData
} from "/build/_shared/chunk-HSJUEGPW.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/movies/index.jsx?browser
init_react();

// app/routes/movies/index.jsx
init_react();
function Index() {
  let movies = Array.from(useLoaderData());
  console.log(movies);
  return /* @__PURE__ */ React.createElement("ul", null, movies.map((movie) => /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", null, movie.results.id))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/movies/index-DTWJV6VF.js.map

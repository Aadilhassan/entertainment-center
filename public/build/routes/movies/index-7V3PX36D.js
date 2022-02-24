import {
  Card_default
} from "/build/_shared/chunk-ZVVUAG5U.js";
import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-QOL5BKLQ.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/movies/index.jsx?browser
init_react();

// app/routes/movies/index.jsx
init_react();
function Index() {
  let img = "https://image.tmdb.org/t/p/w500";
  let movies = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap", justifyContent: "space-around" }
  }, movies.results.map((movie) => /* @__PURE__ */ React.createElement(Card_default, {
    style: { width: "10rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(Card_default.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + movie.poster_path
  }), /* @__PURE__ */ React.createElement(Card_default.Body, null, /* @__PURE__ */ React.createElement(Card_default.Title, null, " ", /* @__PURE__ */ React.createElement(Link, {
    to: "/movies/" + movie.id
  }, movie.name, movie.title))))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/movies/index-7V3PX36D.js.map

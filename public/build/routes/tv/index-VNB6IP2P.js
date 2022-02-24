import {
  Card_default
} from "/build/_shared/chunk-O5MBGNTM.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-2FO6P6BK.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/tv/index.jsx?browser
init_react();

// app/routes/tv/index.jsx
init_react();
function Index() {
  let img = "https://image.tmdb.org/t/p/w500";
  let tvs = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap", justifyContent: "space-around" }
  }, tvs.results.map((tv) => /* @__PURE__ */ React.createElement(Card_default, {
    style: { width: "12rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(Card_default.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + tv.poster_path
  }), /* @__PURE__ */ React.createElement(Card_default.Body, null, /* @__PURE__ */ React.createElement(Card_default.Title, null, " ", /* @__PURE__ */ React.createElement(Link, {
    to: "/tv/" + tv.id
  }, tv.name, tv.title))))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/tv/index-VNB6IP2P.js.map

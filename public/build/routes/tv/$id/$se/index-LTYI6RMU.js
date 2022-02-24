import {
  Card_default
} from "/build/_shared/chunk-O5MBGNTM.js";
import {
  Link,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-LJ6TSL57.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/tv/$id/$se/index.jsx?browser
init_react();

// app/routes/tv/$id/$se/index.jsx
init_react();
function tv() {
  let { se } = useParams();
  let { id } = useParams();
  let tv2 = useLoaderData();
  console.log(tv2);
  let img = "https://image.tmdb.org/t/p/w500";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap", justifyContent: "space-around" }
  }, tv2.episodes.map((ep) => /* @__PURE__ */ React.createElement(Card_default, {
    style: { width: "12rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(Card_default.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + tv2.backdrop_path
  }), /* @__PURE__ */ React.createElement(Card_default.Body, null, /* @__PURE__ */ React.createElement(Card_default.Title, null, " ", /* @__PURE__ */ React.createElement(Link, {
    to: "/tv/" + id + "/" + se
  }, ep.name, " ", ep.episode_number)))))));
}
export {
  tv as default
};
//# sourceMappingURL=/build/routes/tv/$id/$se/index-LTYI6RMU.js.map

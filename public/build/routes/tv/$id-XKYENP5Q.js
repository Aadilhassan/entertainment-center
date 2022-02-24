import {
  Card_default
} from "/build/_shared/chunk-O5MBGNTM.js";
import {
  Link,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-Y2CJU4VJ.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/tv/$id.jsx?browser
init_react();

// app/routes/tv/$id.jsx
init_react();
function tv() {
  let { id } = useParams();
  let tv2 = useLoaderData();
  console.log(tv2);
  let img = "https://image.tmdb.org/t/p/w500";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Title:", tv2.original_name, "  "), "Id: ", id, tv2.seasons.map((season) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Card_default, {
    style: { width: "12rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(Card_default.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + tv2.backdrop_path
  }), /* @__PURE__ */ React.createElement(Card_default.Body, null, /* @__PURE__ */ React.createElement(Card_default.Title, null, " ", /* @__PURE__ */ React.createElement(Link, {
    to: "/tv/" + tv2.id + "/" + season.season_number
  }, " ", season.name)))))));
}
export {
  tv as default
};
//# sourceMappingURL=/build/routes/tv/$id-XKYENP5Q.js.map

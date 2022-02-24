import {
  Card_default
} from "/build/_shared/chunk-WVIDEW6I.js";
import {
  Link,
  React,
  init_react,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-7O5H2MHK.js";

// browser-route-module:/home/aadilhassan/remix-new/app/routes/tv/$id/index.jsx?browser
init_react();

// app/routes/tv/$id/index.jsx
init_react();
function tv() {
  let { id } = useParams();
  let tv2 = useLoaderData();
  console.log(tv2);
  let img = "https://image.tmdb.org/t/p/w500";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Title:", tv2.original_name, "  "), "Id: ", id, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap", justifyContent: "space-around" }
  }, tv2.seasons.map((season) => /* @__PURE__ */ React.createElement(Card_default, {
    style: { width: "12rem", marginTop: "40px" }
  }, /* @__PURE__ */ React.createElement(Card_default.Img, {
    variant: "top",
    style: { width: "10rem" },
    src: img + tv2.backdrop_path
  }), /* @__PURE__ */ React.createElement(Card_default.Body, null, /* @__PURE__ */ React.createElement(Card_default.Title, null, " ", /* @__PURE__ */ React.createElement(Link, {
    to: "/tv/" + id + "/" + season.season_number
  }, " ", season.name), "Total episodes:  ", season.episode_count))))));
}
export {
  tv as default
};

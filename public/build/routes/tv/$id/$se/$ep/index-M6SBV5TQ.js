import "/build/_shared/chunk-ZVVUAG5U.js";
import {
  React,
  init_react,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-QOL5BKLQ.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/tv/$id/$se/$ep/index.jsx?browser
init_react();

// app/routes/tv/$id/$se/$ep/index.jsx
init_react();
function tv() {
  let { se } = useParams();
  let { id } = useParams();
  let { ep } = useParams();
  let link = "https://database.gdriveplayer.us/player.php?type=series&tmdb=" + id + "&season=" + se + "&episode=" + ep;
  let tv2 = useLoaderData();
  console.log(tv2);
  let img = "https://image.tmdb.org/t/p/w500";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("iframe", {
    style: { width: "96vw", height: "96vh", alignSelf: "center" },
    sandbox: "allow-forms allow-scripts allow-same-origin allow-top-navigation allow-fullscreen",
    src: link,
    allowfullscreen: true
  }));
}
export {
  tv as default
};
//# sourceMappingURL=/build/routes/tv/$id/$se/$ep/index-M6SBV5TQ.js.map

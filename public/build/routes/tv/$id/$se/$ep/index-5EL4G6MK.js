import "/build/_shared/chunk-MC3ZNWL4.js";
import {
  useLoaderData,
  useParams
} from "/build/_shared/chunk-6PTEIFXX.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-CHMKRF27.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/tv/$id/$se/$ep/index.jsx?browser
init_react();

// app/routes/tv/$id/$se/$ep/index.jsx
init_react();
function tv() {
  let { se } = useParams();
  let { id } = useParams();
  let { ep } = useParams();
  let link = "https://database.gdriveplayer.us/player.php?type=series&tmdb=" + params.id + "&season=" + params.se + "&episode=" + params.ep;
  let tv2 = useLoaderData();
  console.log(tv2);
  let img = "https://image.tmdb.org/t/p/w500";
  return /* @__PURE__ */ React.createElement("div", null, link, "hello");
}
export {
  tv as default
};

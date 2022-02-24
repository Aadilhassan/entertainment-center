import {
  ThemeProvider_default
} from "/build/_shared/chunk-TG4L4VAT.js";
import {
  useLoaderData,
  useParams
} from "/build/_shared/chunk-6NPDRP2J.js";
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
  console.log(ThemeProvider_default);
  let tv2 = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, "hvj", /* @__PURE__ */ React.createElement("h1", null, "Title:", tv2.name, "  "), "Id: ", id);
}
export {
  tv as default
};
//# sourceMappingURL=/build/routes/tv/$id-XV4T66IE.js.map

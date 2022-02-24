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
var { id } = useParams();
function tv() {
  let tv2 = useLoaderData();
  console.log(ThemeProvider_default);
  return /* @__PURE__ */ React.createElement("div", null, truder, "jgvh", /* @__PURE__ */ React.createElement("h1", null, "Title:", tv2.title, "  "), "Id: ", id);
}
export {
  tv as default
};
//# sourceMappingURL=/build/routes/tv/$id-T6VFM3ZH.js.map

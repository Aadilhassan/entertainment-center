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
  let { id: id2 } = useParams();
  console.log(ThemeProvider_default);
  let tv2 = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, "jgvh", /* @__PURE__ */ React.createElement("h1", null, "Title:", tv2.title, "  "), "Id: ", id2);
}
export {
  tv as default
};
//# sourceMappingURL=/build/routes/tv/$id-HOSJYIIU.js.map
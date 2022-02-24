import {
  ThemeProvider_default
} from "/build/_shared/chunk-PVZR6J77.js";
import {
  useLoaderData,
  useParams
} from "/build/_shared/chunk-6PTEIFXX.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-CHMKRF27.js";

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

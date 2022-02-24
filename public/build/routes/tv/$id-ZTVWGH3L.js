import {
  ThemeProvider_default
} from "/build/_shared/chunk-TG4L4VAT.js";
import {
  useLoaderData
} from "/build/_shared/chunk-FSUNIRKX.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/tv/$id.jsx?browser
init_react();

// app/routes/tv/$id.jsx
init_react();
var truder = async ({ params }) => {
  return params.id;
};
function id() {
  let tv = useLoaderData();
  console.log(ThemeProvider_default);
  const id2 = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, truder, "jgvh", /* @__PURE__ */ React.createElement("h1", null, "Title:", tv.title, "  "), "Id: ", tv.id);
}
export {
  id as default
};
//# sourceMappingURL=/build/routes/tv/$id-ZTVWGH3L.js.map

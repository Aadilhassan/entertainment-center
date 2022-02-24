import "/build/_shared/chunk-MC3ZNWL4.js";
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
  let tv2 = useLoaderData();
  console.log(tv2);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Title:", tv2.original_name, "  "), "Id: ", id);
}
export {
  tv as default
};

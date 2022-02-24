import "/build/_shared/chunk-O5MBGNTM.js";
import {
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
  let { id: id2 } = useParams();
  let tv2 = useLoaderData();
  console.log(tv2);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Title:", tv2.original_name, "  "), "Id: ", id2);
}
export {
  tv as default
};
//# sourceMappingURL=/build/routes/tv/$id-SGCG2ZX7.js.map

import {
  useLoaderData
} from "/build/_shared/chunk-6PTEIFXX.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-CHMKRF27.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/movies/$id.jsx?browser
init_react();

// app/routes/movies/$id.jsx
init_react();
function id() {
  let movie = useLoaderData();
  console.log(movie);
  const id2 = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Title:", movie.title, "  "), "Id: ", movie.id);
}
export {
  id as default
};

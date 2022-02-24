import {
  useLoaderData
} from "/build/_shared/chunk-ALWT3NDG.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-CHMKRF27.js";

// browser-route-module:/home/aadilhassan/my-remix-app/app/routes/movies/index.jsx?browser
init_react();

// app/routes/movies/index.jsx
init_react();
function Index() {
  async function getMovies() {
    let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8b62f4bda40c67dbe48ddb6db1f858dc`);
    return res;
  }
  let loader = async () => {
    return getMovies();
  };
  let movies = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl text-red-500 my-5"
  }, "Hello Fetch")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "columns-1 md:columns-2 lg:columns-xl"
  }, movies.map((movie) => /* @__PURE__ */ React.createElement("div", {
    key: movie.imdb_id,
    className: "flex flex-col w-full border-solid border-2 border-blue-400 rounded-lg px-2 py-2 my-0.5"
  }, /* @__PURE__ */ React.createElement("img", {
    src: movie.image,
    className: "w-10 h-10 rounded-full"
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "text-1xl font-semibold"
  }, "User: ", movie.title), /* @__PURE__ */ React.createElement("a", null, "Github Profile: ", movie.description)))))), /* @__PURE__ */ React.createElement("h1", null, "Hello"));
}
export {
  Index as default
};

import lazyLoadComponent from "./lazyLoadComponent";

export default [
  {
    path: "http",
    label: "HTTP",
    lazy: () => lazyLoadComponent("../pages/http-demo/index"),
  },
];

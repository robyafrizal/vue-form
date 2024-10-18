import Vue from "vue";
import Router from "vue-router";
import FormValidation from "./components/FormValidation.vue";
import PreviewPage from "./components/PreviewPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "FormValidation",
      component: FormValidation,
    },
    {
      path: "/preview",
      name: " PreviewPage",
      component: PreviewPage,
      props: (route) => ({ ...route.query }),
    },
  ],
});

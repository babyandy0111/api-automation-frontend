import Vue from 'vue';
import { ValidationProvider, extend } from "vee-validate";
import { required, alpha } from "vee-validate/dist/rules";

Vue.component('ValidationProvider', ValidationProvider);

extend("required", {
  ...required,
  message: "This field is required"
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters"
});

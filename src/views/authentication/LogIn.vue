<template>
  <!--begin::LogIn-->
  <div class="log_in">
    <!--begin::Form-->
    <Form
      class="log_in__form form"
      @submit="onSubmitButton"
      :validation-schema="login"
    >
      <!--begin::Input group-->
      <div class="form__group">
        <!--begin::Input-->
        <Field
          type="text"
          class="form__input"
          name="email"
          autocomplete="off"
          placeholder="Your email or login"
        />
        <!--end::Input-->

        <div class="form__help">
          <div class="form__block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="form__group">
        <!--begin::Input-->
        <Field
          type="password"
          class="form__input"
          name="password"
          autocomplete="off"
          placeholder="Confirm password"
        />
        <!--end::Input-->
        <div class="form__help">
          <div class="form__block">
            <ErrorMessage name="password" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="form__footer">
        <button type="submit" class="button button--login-form">Log In</button>
      </div>
      <!--end::Actions-->
    </Form>
    <!--end::Form-->

    <!--begin::Bottom-->
    <div class="log_in__bottom">
      <p class="log_in__information">
        Don't have an account?
        <a href="https://gamerhash.com" class="log_in__link">Register</a>
      </p>
      <p class="log_in__information">
        Forgot your password?
        <a href="https://gamerhash.com" class="log_in__link">Click here</a>
        to reset
      </p>
    </div>
    <!--end::Bottom-->
  </div>
  <!--end::LogIn-->
</template>

<script>
import { defineComponent } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "LogIn",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    const onSubmitButton = async (values, actions) => {
      await ApiService.post("auth", values)
        .then(() => {
          alert("Welcome!");
        })
        .catch(() => {
          actions.resetForm();
          alert("An unexpected error has occurred");
        });
    };

    return {
      login,
      onSubmitButton,
    };
  },
});
</script>

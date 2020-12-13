<template>
  <top-wave />
  <div
    class="flex justify-center items-center w-screen h-screen bg-primary-light"
  >
    <form @submit.prevent="onSubmit">
      <div
        class="flex flex-col bg-white p-6 w-screen h-screen justify-center md:w-96 md:h-full md:rounded-lg"
      >
        <p class="text-primary text-center text-4xl p-10">TEACH ME!</p>
        <text-input label="E-MAIL" v-model="email" />
        <text-input label="SENHA" v-model="password" />
        <p class="text-primary text-right text-xs pr-2 pb-9">
          <a href="">ESQUECEU SUA SENHA?</a>
        </p>
        <div class="flex justify-center">
          <submit-button label="ENTRAR" style="width: 140px; height: 40px" />
        </div>
        <p class="text-primary text-center text-xs pt-5">
          <a href="">CRIAR CONTA</a>
        </p>
      </div>
    </form>
  </div>
  <bottom-wave />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { TextInput, SubmitButton, TopWave, BottomWave } from "@/components";
import { signIn } from "@/api/auth.api";

export default defineComponent({
  name: "Login",
  components: {
    TextInput,
    SubmitButton,
    TopWave,
    BottomWave,
  },
  setup() {
    const formValues = reactive({
      email: "",
      password: "",
    });

    const onSubmit = async () => await signIn(formValues);

    return { ...toRefs(formValues), onSubmit };
  },
});
</script>
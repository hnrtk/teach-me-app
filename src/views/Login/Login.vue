<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent="onsubmit">
      <div class="flex-grow">
        <TextInput label="E-mail" v-model="email" />
        <TextInput label="Senha" v-model="password" />
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TextInput } from "@/components";

export default defineComponent({
  name: "Login",
  components: {
    TextInput,
  },
  setup() {
    const email = ref<string>();
    const password = ref<string>();

    const onsubmit = () => console.log(email.value, password.value);

    return { email, password, onsubmit };
  },
});
</script>

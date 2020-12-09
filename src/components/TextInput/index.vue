/* eslint-disable vue/no-mutating-props */
<template>
  <div class="block p-1">
    <label class="block mb-1 text-primary font-medium" id="name">{{
      label
    }}</label>
    <input
      class="bg-gray-100 rounded-lg py-3 px-2 h-10 outline-nonefocus:ring-2 focus:ring-primary"
      type="text"
      v-model="inputValue"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "TextInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: String,
  },
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value?.toString()),
    });

    return { inputValue };
  },
});
</script>

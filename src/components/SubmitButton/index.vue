<template>
  <button
    type="submit"
    class="py-2 px-4 bg-primary text-sm text-white subpixel-antialiased font-medium rounded-xl shadow-md hover:bg-primary-dark focus:outline-none"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>


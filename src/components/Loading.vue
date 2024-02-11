<template>
  <div class="spinner-border text-primary" role="status" v-if="props.isLoading"/>
</template>

<script setup lang="ts">
const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
</style>

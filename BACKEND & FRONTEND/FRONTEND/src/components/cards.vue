<template>
  <div class="e-card">
    <h1>{{ topic }}</h1>
    <div class="e-card__body">
      <h2>Description</h2>
      {{ description }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["topic", "description"]
};
</script>
<template>
  <h1>Component</h1>
  <child-component />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
};
</script>
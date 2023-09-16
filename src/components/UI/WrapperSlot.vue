<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WrapperSlot',
  props: {}
}
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 30rem;
  border: 1px solid #E6E9F0;
  border-radius: .8rem;
  margin: 2rem auto;
  overflow: hidden;
}
</style>
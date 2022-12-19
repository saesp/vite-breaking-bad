<script>
export default {
  name: "SingleCharacter",
  props: ["info"]
}
</script>

<template>
  <div class="character">
    <img :src="info.image" alt="">
    <div>{{ info.id }}</div>
  </div>
</template>

<style lang="scss">

</style>




















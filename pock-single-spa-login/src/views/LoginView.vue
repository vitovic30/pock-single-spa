<template>
  <div class="container">
    <Login/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import Login from '@/components/Login.vue'; // @ is an alias to /src

export default defineComponent({
  components: {
    Login,
  },
  setup() {
    let path = ref('../assets/logo.png')
    return {
      path,
    }
  }
})
</script>
<style lang="scss">
.container{
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 720px) { flex-flow: row;}
}
</style>

<template>
  <div>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        style="padding: 0 !important;"
        :disable-resize-watcher="true"
      >
        <v-list>
          <v-list-item
            :prepend-avatar="require('@/assets/logo.png')"
            title="Vitor Vicente"
            subtitle="vitor.vicente@om30.com.br"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <!-- <v-list-item prepend-icon="mdi-account-multiple" title="About" value="About" to="dashboard"></v-list-item> -->
          <v-list-item prepend-icon="mdi-star" title="Cadastro" value="cadastro" @click="pushCadastro()"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
    <v-btn
        v-if="haha"
        text
        class="ma-2 float-right"
        @click="$nextTick(() => {
          haha = false
          return $router.go(-1)
        })"
      >
        <v-icon
          start
          icon="mdi-arrow-left"
        ></v-icon>
         back
    </v-btn>
    
  </div>
</template>
<script lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { defineComponent, ref, onMounted, onUnmounted, nextTick } from 'vue'

export default defineComponent({

  setup() {
    const router = useRouter()
    let haha = ref(false)

    function pushCadastro() {
      haha.value = true
      router.push('/dashboard/cadastro')
    }
    return {
      router,
      haha,
      pushCadastro,
    }
  }
})
</script>
<style lang="scss" scoped>
a:hover {
  color: #2c3e50 !important;
  text-decoration: none;
}
nav {
  padding: 0 !important;
}
hr {
  border-color: #2c3e50 !important;
  margin-top: 0 !important;
}
</style>
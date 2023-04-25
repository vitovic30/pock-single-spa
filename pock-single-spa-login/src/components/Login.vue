<template>
  <div class="col col-sm-8 col-md-6 col-lg-4">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Digite seu email</label>
        <input type="email" v-model="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" v-model="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
      </div>
      <div class="mb-3">
        <v-btn
          depressed
          color="primary"
          :disabled="!email || !password"
          @click="acessar()"
        >
          Acessar
        </v-btn>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
let email = ref('')
let password = ref('')

function acessar() {
  let token = Math.random().toString(36).substr(2) + 
    Math.random().toString(36).substr(2) + 
    Math.random().toString(36).substr(2)
  
  localStorage.setItem('token', token)
  router.push('/dashboard')
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
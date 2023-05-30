<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {hookFunDemo} from 'package-name';
// console.log('111', await toBeExposedFun())
const a = await hookFunDemo();
console.log('a :>> ', a);
if (a.data.code === 1) {
  console.log('a.msg :>> ', a.msg);
  const b = await a.nextStep()
  console.log('b :>> ', b);
}
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

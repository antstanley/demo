<template>
  <div class="w-100 w-auto-ns tc tr-ns pa3 avenir">
    <nuxt-link id="home" class="dib pv2 ph3 black pointer no-underline underline-grow" to="/">Home</nuxt-link>
    <div class="dib" v-for="item in navBarItems" v-bind:key="item.key">
      <nuxt-link
        id="item.key"
        class="dib ph3 pv2 black pointer no-underline underline-grow"
        v-if="item.path && item.isNav"
        v-bind:to="item.path"
      >{{ item.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
//import profileBadge from '../components/profileBadge.vue';
import gql from "graphql-tag";

export default {
  props: {
    navBarItems: Array
  }
};
</script>

<style>
.underline-grow::after {
  content: "";
  display: block;
  height: 4px;
  margin-top: -1px;
  width: 0;
  background: transparent;
  transition: width 0.7s ease, background-color 0.7s ease;
}
.underline-grow:hover:after {
  background: #7777ff;
  width: 100%;
}
</style>
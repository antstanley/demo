<template>
  <div class="w-100">
    <nav-bar :nav-bar-items="allSections"/>
    <div class="w-100 mt5 pa4 tc avenir">
      <h1 class="f1 fw4">AutoGraphQL</h1>
      <p class="f4">The GraphQL bundling and deployment tool for FaaS environments</p>
    </div>
    <cards :cardSet="allSections"/>
  </div>
</template>

<script>
import navBar from "../components/navBar.vue";
import cards from "../components/cards.vue";
import { allSections } from "../middleware/gql";

export default {
  components: { navBar, cards },
  data() {
    return {
      allSections: []
    };
  },
  apollo: {
    allSections: {
      query: allSections,
      variables: { status: "published" }
    }
  }
};
</script>

<template>
  <div id="app">
    <Header id="header" />
    <router-view id="main" />
    <Footer id="footer" />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
@import "@/assets/common.scss";

#app {
  color: #2c3e50;
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header" ". main ." "footer footer footer";
}

#header {
  grid-area: header;
  padding-left: 12%;
  padding-right: 12%;
}

#main {
  grid-area: main;
}

#footer {
  grid-area: footer;
  padding-left: 12%;
  padding-right: 12%;
}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 12px auto 12px;
    #header,
    #footer {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
}
</style>

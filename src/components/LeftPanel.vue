<!--
<template>
  <f7-panel left :reveal="isiOS" :effect="panelEffect">
    <f7-navbar title="Menu"></f7-navbar>
    <f7-page :style="pageStyle">
      <f7-block-title>Menu</f7-block-title>
      <f7-list>
        <f7-list-item
          link="/"
          title="Home"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="logout"
          link="/"
          title="Logout"
          link-view="#main-view"
          panel-close
          reload-all
        />
      </f7-list>
    </f7-page>
  </f7-panel>
</template>
<script>
export default {
  name: 'LeftPanel',
  data() {
    return {
      isMaterial: window.isMaterial,
      isiOS: window.isiOS
    };
  },
  computed: {
    pageStyle() {
      return this.isiOS ? 'background-color: white;' : '';
    },
    panelEffect() {
      return this.isiOS ? 'reveal' : 'cover';
    }
  },
  methods: {
    logout () {
      window.plugins.googleplus.logout(
      function (msg) {
        alert(msg); // do something useful instead of alerting
        })
    }
  }
};
</script>
<style scoped>
.panel-left .page {
  margin-top: 44px;
  padding-bottom: 44px;
}
@media (min-width: 960px) {
  .panel.panel-left {
    border-right: 1px solid #b2b2b2;
  }
}
</style>
-->
<template>
  <f7-page name="Performance">
      <!-- MAIN NAV BAR -->
    <f7-navbar back-link="Back" sliding>
    <f7-nav-title>
        Performance
      </f7-nav-title>
    </f7-navbar>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-list>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  name: 'Performance',
  data() {
    return {
      title: 'Performance Page'
    };
  }
};
</script>

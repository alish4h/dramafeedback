<template>
  <f7-page name="before">
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    
    <br>
    <p>{{rangeValue}}</p>
  </f7-page>
</template>

<script>
export default {
  name: 'before',
  data() {
    return {
      title: 'Before Form',
      rangeValue: null
    };
  },
  methods () {
  }
};
</script>

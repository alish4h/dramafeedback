<template>
  <f7-page name="after">
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Distinctio est aliquam officiis quaerat placeat, cum explicabo magni
      soluta totam maxime autem minima accusamus eos suscipit dignissimos
      corporis modi voluptatum fugiat!
    </f7-block>
    <f7-list>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  name: 'after',
  data() {
    return {
      title: 'After Form'
    };
  }
};
</script>

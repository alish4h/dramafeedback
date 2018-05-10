<template>
  <f7-page name="Session">
    <f7-navbar back-link="Back" sliding>
    <f7-nav-title>
        Session
      </f7-nav-title>
    </f7-navbar>

    <f7-list v-show="!showQuestions">
      <f7-list-button @click="beforeForm">Before</f7-list-button>
      <f7-list-button @click="afterForm">After</f7-list-button>
    </f7-list>

    <!-- Show Questions-->
    <after-form v-show="showAfter"></after-form>
    <before-form v-show="showBefore"></before-form>
  </f7-page>
</template>

<script>
import AfterForm from './forms/After'
import BeforeForm from './forms/Before'

export default {
  name: 'Session',
  components: {
    AfterForm,
    BeforeForm
  },
  data() {
    return {
      title: 'Session Page',
      showQuestions: false,
      showBefore: false,
      showAfter: false
    }
  },
  methods: {
      beforeForm () {
        this.showBefore = true
        this.showQuestions = true
      },
      afterForm () {
        this.showAfter = true
        this.showQuestions = true
      }
  }
};
</script>

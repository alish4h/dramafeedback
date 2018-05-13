<template>
  <f7-page name="Session">
    <f7-navbar back-link="Back" sliding>
    <f7-nav-title>
        Session
      </f7-nav-title>
    </f7-navbar>
    <!-- Student Select -->
    <f7-list>
    <f7-list-item>
      <f7-label>Select Student</f7-label>
    <f7-input type="select" placeholder="Students">
        <option
        v-for="student in students"
        :key="student"
        :value="student"
        >{{student}}</option>
    </f7-input>
    </f7-list-item>
    </f7-list>
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
import store from '@/store/store'
import axios from 'axios'
// axios.defaults.headers.common['Authorization'] = `Bearer ya29.Glu6BQgoZGbA59RHGx0eRlVnSlYSb64MV8DY0rAL2mFMgAYLUqnCSjyPWJqoOdtA8pg7h0RXg8aUmP9emWgT7QLpGMGXNF7do9fw9nC0lGKoJuWiywR0ocENTSwP`;

export default {
  name: 'Session',
  components: {
    AfterForm,
    BeforeForm
  },
  created () {
    // Load all students from spreadsheet
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${store.state.sheetId}/values/Students!A2:D`
    axios.get(url)
    .then(response => {
      const studentArray = []
      for (var student in response.data.values) {
        studentArray.push(response.data.values[student][0])
      }
      this.students = studentArray
    })
  },
  data() {
    return {
      title: 'Session Page',
      showQuestions: false,
      showBefore: false,
      showAfter: false,
      students: []
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

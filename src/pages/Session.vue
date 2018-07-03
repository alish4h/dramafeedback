<template>
  <f7-page name="Session">
    <f7-navbar back-link="Back" sliding>
    <f7-nav-title>
        Session
      </f7-nav-title>
    </f7-navbar>
    <!-- Student Select -->
    <p>Student name {{studentName}}</p>
    <p>Session date {{sessionDate}}</p>
    <f7-list v-show="showStudentSelect">
    <f7-list-item>
        <f7-label>Session Date</f7-label>
        <f7-input type="date" :value="sessionDate" @input="sessionDate = $event.target.value" placeholder="Session Date" required clear-button>
        </f7-input>
    </f7-list-item>
    <f7-list-item>
      <f7-label>Select Student</f7-label>
    <f7-input type="select" :value="studentName" placeholder="Students" @input="studentName = $event.target.value" required>
        <option
        v-for="s in students"
        :key="s"
        :value="s"
        >{{s}} </option>
    </f7-input>
    </f7-list-item>
    </f7-list>
    <f7-list v-show="!showQuestions">
      <f7-list-button @click="beforeForm">Before</f7-list-button>
      <f7-list-button @click="afterForm">After</f7-list-button>
      <f7-block>
        <h5>{{error}}</h5>
      </f7-block>
    </f7-list>

    <!-- Show Questions-->
    <after-form v-if="showAfter"></after-form>
    <before-form v-if="showBefore"></before-form>
  </f7-page>
</template>

<script>
import AfterForm from './forms/After'
import BeforeForm from './forms/Before'
import store from '@/store/store'
import axios from 'axios'

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

    // Check from response sheet
    const url2 = `https://sheets.googleapis.com/v4/spreadsheets/${store.state.sheetId}/values/Responses!B1:B?majorDimension=ROWS`
    axios.get(url2)
    .then(response => {
      var nameArray = []
      var dateArray = []
      var newArray = []
      var parentArray = response.data.values
      for(var i = 0; i < parentArray.length; i++){
          for(var j = 0; j < parentArray[i].length; j++){
            newArray.push(parentArray[i][j])
          }
      }
      for(var k=0; k < newArray.length; k+=8) {
        nameArray.push(newArray[k])
      }
      this.existingStudents = nameArray
      this.checkNameExist();
    })
    .catch(error => {
      console.log(error)
    })
  },
  watch: {
    studentName: function () {
        this.$store.dispatch('setName', this.studentName)
        this.$store.dispatch('setDate', this.sessionDate)
        this.error = null
        console.log('Name changed', store.state.name)
        this.checkNameExist();
        console.log('Name Exist', store.state.nameExist)
    },
    sessionDate: function () {
      this.error = null
    }
  },
  data() {
    return {
      title: 'Session Page',
      sessionDate: null,
      studentName: null,
      showStudentSelect: true,
      showQuestions: false,
      showBefore: false,
      showAfter: false,
      students: [],
      response: [],
      existingStudents: [],
      error: null
    }
  },
  methods: {
    checkNameExist () {
      console.log(this.existingStudents)
      for (var name in this.existingStudents) {
        if (store.state.name === this.existingStudents[name]) {
          console.log('exists', store.state.name)
          console.log('At position', 1 + (name* 8))
          this.$store.dispatch('setCellPos', 1+(name*8))
          console.log('Stored at', store.state.pos)
          this.$store.dispatch('setNameExist', true)
          console.log('Name exists in watcher', store.state.nameExist)
          return true
        } else {
          this.$store.dispatch('setNameExist', false)
        }
      }
    },
    beforeForm () {
      if(this.validInput()) {
        this.showStudentSelect = false
        this.showBefore = true
        this.showQuestions = true
        this.error = null
      }
    },
    afterForm () {
      if(this.validInput()) {
        this.showStudentSelect = false
        this.showAfter = true
        this.showQuestions = true
        this.error = null
      }
    },
    validInput () {
      if (this.sessionDate) {
        if (this.studentName) {
          return true
        } else {
          this.error = 'Please Select Student'
        }
      } else {
        this.error = 'Please Select Session Date'
      }
    }
  }
};
</script>
<style scoped>
h5 {
  color: red
}
</style>

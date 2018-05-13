<template>
  <f7-page name="students">
    <f7-navbar back-link="Back" sliding>
      <f7-nav-title>
        Students
      </f7-nav-title>
    </f7-navbar>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
    <f7-list>
    <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input type="text" :value="student.name" @input="student.name = $event.target.value" placeholder="Name" clear-button></f7-input>
    </f7-list-item>
    <f7-list-item>
        <f7-label>Age</f7-label>
        <f7-input type="number" :value="student.age" @input="student.age = $event.target.value" placeholder="Age" clear-button></f7-input>
    </f7-list-item>
    <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input type="select" :value="student.gender" @input="student.gender = $event.target.value" placeholder="Gender" clear-button>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </f7-input>
    </f7-list-item>
    <f7-list-item>
        <f7-label>School</f7-label>
        <f7-input type="select" :value="student.school" @input="student.school = $event.target.value" placeholder="School" clear-button>
            <option value="London">London</option>
            <option value="Birmingham">Birmingham</option>
            <option value="Manchester">Manchester </option>
        </f7-input>
    </f7-list-item>
    <f7-list-item>
        <f7-label>Start Date</f7-label>
        <f7-input type="date" :value="student.startdate" @input="student.startdate = $event.target.value" placeholder="Start date" clear-button>
        </f7-input>
    </f7-list-item>
    <br>
    <f7-button fill-ios='true' big-ios='true' @click="addStudent">Add Student</f7-button>
    </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
import axios from 'axios'
import store from '@/store/store'
axios.defaults.headers.common['Authorization'] = `Bearer ya29.Glu6BVJT5EiQqaiIsjd_deRm5s4g-TYtehnQ7YDPD26__W-e90UDaOl1HLDf3vuESE3ULE1iTVDxf6UyjwxyiebbZadH8-hToSfl_KY1asIgs-zZCj5pna9X9xAe`;

export default {
  name: 'Students',
  created () {
    this.token = store.state.token
  },
  data() {
    return {
      title: 'Students Page',
      showAddForm: false,
      student: {
        name: null,
        age: null,
        gender: null,
        school: null,
        startdate: null
      },
      students: [],
      token: null,
      result: {},
      spreadsheetId: store.state.sheetId
    };
  },
  methods: {
    addStudent () {
      // add a student to 'students' sheet
      alert('Adding student')
      const data = {
        "range": "Students!A2:D",
        "majorDimension": "ROWS",
        "values": [
          [this.student.name, this.student.age, this.student.gender, this.student.location, this.student.startdate]
        ],
      }
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/Students!A2:D:append?valueInputOption=RAW`
      axios.post(url, data)
      .then(response => {
        console.log(response)
        alert(response)
      })
    }
  }
};
</script>

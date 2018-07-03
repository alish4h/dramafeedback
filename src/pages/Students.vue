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
    <p>{{token}}</p>
    </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
import axios from 'axios'
import store from '@/store/store'
// axios.defaults.headers.common['Authorization'] = `Bearer ya29.GlvtBd1oFR1vy2XO-YAJYHZ5owcRMlNNec9wbk_4re93__TO7Q8jSrX_r5khN0Wn94WvRpCmHaam_uHKmj1gk5akPL-BInebi74svP8bf47DxjV0XGDIeYbYuwam`;

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
      token: store.state.token,
      result: {},
      spreadsheetId: store.state.sheetId
    };
  },
  methods: {
    addStudent () {
      // add a student to 'students' sheet
      progress.show("Connecting to Google Sheets...");
      setTimeout(function () {
            progress.update("Adding Student...");
      }, 1500);

      const data = {
        "range": "Students!A2:D",
        "majorDimension": "ROWS",
        "values": [
          [this.student.name, this.student.age, this.student.gender, this.student.school, this.student.startdate]
        ],
      }
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/Students!A2:D:append?valueInputOption=RAW`
      axios.post(url, data)
      .then((response) => {
        setTimeout(function () {
            progress.hide();
        }, 2000);
          navigator.notification.alert(
            "Student Added",  // message
            null,         // callback
            'Success',            // title
            'OK'                  // buttonName
        )
        console.log(response.data)
      })
      .catch(error => {
            navigator.notification.alert(
            error,  // message
            null,         // callback
            'Error',            // title
            'OK'                  // buttonName
        )
        console.log(error)
      })
    }
  }
};
</script>

<template>
  <f7-page id="myElement" name="before">
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <br>
    <f7-block id="page">
    <f7-block>
      <h2>Hi, {{responseObj.name}}</h2>
    </f7-block>
    <f7-block>
      <h1>{{questions[counter]}}</h1>
    </f7-block>
    <f7-row>
      <img @click="happy" src="@/assets/happy.png" width="80" height="80">
      <img @click="excited" src="@/assets/excited.png" width="80" height="80">
      <img @click="amused" src="@/assets/amused2.png" width="80" height="80">
      <img @click="indifferent" src="@/assets/indifferent.png" width="80" height="80">
      <img @click="angry" src="@/assets/angry2.png" width="80" height="80">
    </f7-row>
    <input
    class="slider"
    type="range"
    min="0"
    :max="max"
    :value="rangeValue"
    v-on:input="onChg($event)">
<f7-row>{{rangeValue}}</f7-row>
<f7-row>
    <f7-button @click="reset" >Reset</f7-button>
    <f7-button v-show="showDone" @click="done">Done!</f7-button>
    <f7-button @click="next" >Next</f7-button>
</f7-row>
    </f7-block>
    <f7-block>
      <h5>{{error}}</h5>
    </f7-block>
  </f7-page>
</template>

<script>
import store from '@/store/store'
import axios from 'axios'

export default {
  name: 'before',
  data() {
    return {
      title: 'Before Form',
      showDone: false,
      max: 4,
      rangeValue: 2,
      responseObj: {
        name: null,
        date: null,
        answers: []
      },
      counter:0,
      questions: ['How has your week been?','How are things out of school?','How are things in school?', 'How are you today?'],
      students: [],
      error: null,
      Responsefields: ['Name','Date','Before: How has your week been?','Before: How are things out of school?','Before: How are things in school?','Before: How are you today?', 'After: How was being in the group with other people', 'After: Are you now the same or different?']
    };
  },
  created () {
    this.responseObj.name = store.state.name
    this.responseObj.date = store.state.date
  },
  methods: {
    done () {
      //submit the response
      progress.show("Connecting to Google Sheets...");
            setTimeout(function () {
            progress.update("Saving Responses");
      }, 1500)
      console.log(this.responseObj)
      console.log('Name exists', store.state.nameExist)
      if(store.state.nameExist) {
      const customRange = `Responses!B${store.state.pos}`
      const data = {
        "range": customRange,
        "majorDimension": "COLUMNS",
        "values": [
          [this.responseObj.name, this.responseObj.date, this.responseObj.answers[0], this.responseObj.answers[1], this.responseObj.answers[2], this.responseObj.answers[3], null, null]
        ],
      }
      console.log(data)
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${store.state.sheetId}/values/${customRange}?valueInputOption=RAW`
      axios.put(url, data)
      .then(response => {
        setTimeout(function () {
            progress.hide();
        }, 2000);
          navigator.notification.alert(
            "Responses Saved",  // message
            null,         // callback
            'Success',            // title
            'OK'                  // buttonName
        )
        console.log(response)
      })
      .catch(error => {
        navigator.notification.alert(
          error,  // message
          null,         // callback
          'Error',            // title
          'OK'                  // buttonName
        )
      })
      } else {
      const customRange = `Responses!B1`
      const data = {
        "range": customRange,
        "majorDimension": "COLUMNS",
        "values": [
          this.Responsefields,
          [this.responseObj.name, this.responseObj.date, this.responseObj.answers[0], this.responseObj.answers[1], this.responseObj.answers[2], this.responseObj.answers[3], null, null]
        ],
      }
      console.log(data)
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${store.state.sheetId}/values/${customRange}:append?valueInputOption=RAW`
      axios.post(url, data)
      .then(response => {
        setTimeout(function () {
            progress.hide();
        }, 2000);
          navigator.notification.alert(
            "Responses Saved",  // message
            null,         // callback
            'Success',            // title
            'OK'                  // buttonName
        )
      })
      .catch(error => {
        navigator.notification.alert(
          error,  // message
          null,         // callback
          'Error',            // title
          'OK'                  // buttonName
        )
      })
      }
    },
    next (){
      if(this.counter<4){
        this.responseObj.answers[this.counter] = this.rangeValue;
       this.counter++;
       if(this.counter > 3) {
         this.showDone = true
         this.questions.push("You're Done!")
       } else {
         this.showDone = false
       }
      }
    },
    reset (){
      this.counter=0;
      this.showDone=false;
      },
    happy (){
      this.rangeValue=0;
    },
    excited (){
      this.rangeValue=1;
    },
    amused (){
      this.rangeValue=2;
    },
    indifferent (){
      this.rangeValue=3;
    },
    angry (){
      this.rangeValue=4;
    },
    onChg (e) {
      this.rangeValue = e.target.value;
    }
  }
};
</script>
<style scoped>
h5 {
  color: red;
}
h2 {
  font-size: 30px;
}
h1{
  font-size: 40px;
}
.myElement{
  vertical-align: center;
}
.slider {
    width: 100%; 
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;   
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}
.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #4286f4;
    cursor: pointer;
}
.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4286f4;
    cursor: pointer;
}
</style>

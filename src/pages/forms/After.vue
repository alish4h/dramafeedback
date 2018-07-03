<template>
  <f7-page id="myElement" name="after">
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
    <f7-button @click="reset" >reset</f7-button>
    <f7-button v-show="showDone" @click="done">Done!</f7-button>
    <f7-button @click="next" >Next</f7-button>
</f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import store from '@/store/store'
import axios from 'axios'

export default {
  name: 'after',
  data() {
    return {
      title: 'After Form',
      max: 4,
      node: {
        sum: 2,
      },
      counter:0,
      rangeValue: 2,
      showDone: false,
      questions: ['How was being in the group today with other people?','Are you feeling the same or different?'],
      responseObj: {
        name: null,
        answers: []
      }
    };
  },
  created () {
    this.responseObj.name = store.state.name
  },
  methods:{
    done () {
      //submit the response
      progress.show("Connecting to Google Sheets...");
      setTimeout(function () {
        progress.update("Saving Responses");
      }, 1500)
      console.log(this.responseObj)
      if(store.state.nameExist) {
      const customRange = `Responses!B${store.state.pos+6}`
      const data = {
        "range": customRange,
        "majorDimension": "COLUMNS",
        "values": [
          [this.responseObj.answers[0], this.responseObj.answers[1]]
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
          [this.responseObj.answers[0], this.responseObj.answers[1]]
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
      }
    },
    next (){
      if(this.counter<2){
        this.responseObj.answers[this.counter] = this.rangeValue
      this.counter++;
      if(this.counter>1) {
        this.showDone = true
        this.questions.push("You're Done")
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
h2 {
  font-size: 30px;
}
.page{
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

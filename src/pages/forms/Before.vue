<template>
  <f7-page id="myElement" name="before">
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <br>
    <f7-block id="page">
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
    :value="node.sum"
    v-on:input="onChg($event)">
  
<f7-row>{{node.sum}}</f7-row>
<f7-row>
    <f7-button  @click="previous" >Previous</f7-button>
    <f7-button @click="next" >Next</f7-button>
</f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name: 'before',
  data() {
    return {
      title: 'Before Form',
      max: 4,
      node: {
        sum: 2,
      },
     
      counter:0,
      questions: ['How has your week been?','How are things out of school?','How are things in school?']
    };
  },
  methods:{
    next (){
      if(this.counter<2){
       this.counter++;
       
      }
    },
    previous (){
      if(this.counter>0){
      this.counter--;
      }
    },
    happy (){
      this.node.sum=0;
    },
    excited (){
      this.node.sum=1;
    },
    amused (){
      this.node.sum=2;
    },
    indifferent (){
      this.node.sum=3;
    },
    angry (){
      this.node.sum=4;
    },
    onChg (e) {
      this.node.sum = e.target.value;
    }
  }
};
</script>
<style scoped>
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

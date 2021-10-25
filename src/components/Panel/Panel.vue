<template>
  <div class="w3-container tab-panel">
    <div v-if="this.hasBtnPanel" class="addButton" v-on:click="showAction()"><i class="fas addCategoryButtonIcon" v-bind:class="this.icon" ></i></div>
    <div class="card">
      <Spinner style="position:relative" :showSpinner="this.spinnerVisible"/>
      <div id="showcaseCategoryError" v-if="this.hasError">
        <p class="w3-center para-text-blue"><b id="errorCategoryText">{{this.errorMsg}}</b><b class="para-text-red">.</b></p>
        <p id="errorCategoryMessage" class="w3-center para-text-red para-manda-font para-manda-size">{{this.errorMsg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/w3.css'
import '../../assets/css/all.min.css'
import './panel.css';

import Spinner from '../Spinner/Spinner.vue';
export default {
  name: 'Panel',
  components: {Spinner},
  props: {
    id: String,
    spinnerVisible: Boolean,
    hasError:Boolean,
    errorMsg: String,
    hasBtnPanel: Boolean,
    icon: String
  },
  methods:{
    showAction: function(){
      this.$emit("action");
    },
  }
}
</script>
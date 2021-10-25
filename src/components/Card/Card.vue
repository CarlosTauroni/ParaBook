<template>
  <div>
    <Spinner style="position:relative" :showSpinner="this.spinnerVisible"/>
    <div id="showcaseUserError" v-if="this.hasError">
      <p class="w3-center para-text-blue"><b id="errorUserText">{{this.errorMsg}}</b><b class="para-text-red">.</b></p>
      <p id="errorUserMessage" class="w3-center para-text-red para-manda-font para-manda-size">{{this.errorMsg}}</p>
    </div>				
    <ul class="SG" v-bind:id="this.id" v-if="!this.hasError && !this.spinnerVisible">
      <li class="sgLiCat">
        <div class="box">
          <div class="deleteWrapper" v-on:click="deleteItem">
            <span class="w3-button w3-xxlarge w3-display-topright deleteButton"><i class="far fa-trash-alt deleteIcon"></i></span>
          </div>
          <h3><i class="fas fa-user-astronaut"></i>{{this.fullname}}</h3>
          <ul>
            <li><i class="fas fa-journal-whills"></i>{{this.name}}</li>
            <li><i class="fas fa-signature"></i>{{this.surname}}</li>
            <li><i class="far fa-envelope"></i>{{this.email}}</li>
            <li><i class="fas fa-mobile"></i>{{this.phone}}</li>
            <li>
              <i class="fab fa-galactic-republic"></i>
              <i v-if="this.status === 'AVAILABLE'" class="fas fa-check" style="color:yellowgreen"></i>
              <i v-if="this.status === 'UNAVAILABLE'" class="fas fa-times" style="color:red"></i>
              <i v-if="this.status === 'PENDING'" class="fas fa-clock" style="color:orange"></i>
            </li>
          </ul> 
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import '../../assets/css/w3.css'
import '../../assets/css/all.min.css'
import './card.css';

import Spinner from '../Spinner/Spinner.vue';
export default {
  name: 'Card',
  components: {Spinner},
  props: {
    id: String,
    spinnerVisible: Boolean,
    hasError:Boolean,
    errorMsg: String,
    fullname: String,
    name: String,
    surname: String,
    email: String,
    phone: String,
    status: String
  },
  methods:{
    deleteItem: function(){
      this.$emit("delete", this.id);
    }
  }
}
</script>
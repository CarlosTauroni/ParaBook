<template>
  <div>
    <Spinner style="position:relative" :showSpinner="this.spinnerVisible"/>
    <div id="showcaseUserError" v-if="this.hasError">
      <p class="w3-center para-text-blue"><b id="errorUserText">{{this.errorMsg}}</b><b class="para-text-red">.</b></p>
      <p id="errorUserMessage" class="w3-center para-text-red para-manda-font para-manda-size">{{this.errorMsg}}</p>
    </div>				
    <ul class="SG" v-bind:id="this.id" v-if="!this.hasError && !this.spinnerVisible">
      <li v-bind:id="this.id" class="sgLi sgLiFullWidth">
        <div class="box boxCat">
          <div class="deleteWrapper" v-on:click="deleteItem()">
            <span class="w3-button w3-xxlarge w3-display-topright deleteButton"><i class="far fa-trash-alt deleteIcon"></i></span>
          </div>
          <h3><i class="fas fa-jedi"></i>{{this.fullname}}<b class="para-text-red"> - </b><b class="para-manda-font para-manda-size-cat">{{this.fullname}}</b><b class="para-text-red">.</b></h3>
          <div class="productPhoto">
            <img v-bind:src='this.imgUrl' class='para-cart-img' alt='${products.alttext}'/>
          </div>
          <div class="productInfo">
            <ul>
              <li class="licat"><i class="fas fa-info"></i>{{this.description}}</li>
              <li class="listInline" v-if="this.category !== null"><i class="fas fa-cubes"></i>{{this.category}}</li>
              <li class="listInline" v-if="this.category === null"><i class="fas fa-cubes"></i>Sin Categoría</li>
              <li class="listInline"><i class="fas fa-tag"></i>{{this.groupname}}</li>
              <li class="listInline"><i class="fas fa-dollar-sign"></i>{{this.prize}} €</li>
              <li class="listInline">
                <i class="fab fa-galactic-republic"></i>
                <i v-if="this.status === 'AVAILABLE'" class="fas fa-check" style="color:yellowgreen"></i>
                <i v-if="this.status === 'UNAVAILABLE'" class="fas fa-times" style="color:red"></i>
                <i v-if="this.status === 'PENDING'" class="fas fa-clock" style="color:orange"></i>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import '../../assets/css/w3.css'
import '../../assets/css/all.min.css'
import './cardlong.css';

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
    imgUrl: String,
    description: String,
    category: String,
    groupname: String,
    prize: Number,
    status: String
  },
  methods:{
    deleteItem: function(){
      this.$emit("delete", this.id);
    }
  }
}
</script>
<template>
  <div>
    <button type="button" class="w3-button w3-light-gray w3-padding-large w3-hover-black" v-if="type === 'primary' && size === 'small'" v-on:click="onClick()">{{msg}}</button>
    <button type="button" class="w3-button w3-red w3-padding-large w3-hover-black"  v-if="type==='secondary' && size === 'small'" v-on:click="onClick()">{{msg}}</button>
    <button type="button" class="w3-button w3-padding-large para-blue w3-margin-bottom" v-if="type === 'tertiary' && size === 'small'" v-on:click="onClick()">{{msg}}</button>
    <button type="button" class="w3-button w3-block w3-light-gray w3-padding-large w3-hover-black" v-if="type === 'primary' && size === 'large'" v-on:click="onClick()">{{msg}}</button>
    <button type="button" class="w3-button w3-block w3-red w3-padding-large w3-hover-black"  v-if="type ==='secondary' && size === 'large'" v-on:click="onClick()">{{msg}}</button>
    <button type="button" class="w3-button w3-block w3-padding-large para-blue w3-margin-bottom" v-if="type === 'tertiary' && size === 'large'" v-on:click="onClick()">{{msg}}</button>
  </div>
</template>

<script>
import '../../assets/css/w3.css'
import './button.css'
export default {
  name: 'Button',

  props: {
    msg: String,
    type: String,
    size: String
  },
  methods: {
    onClick: function(){
      console.log('Esta acción del botón debe ser definida');
      this.$emit('click', true);
    }
  }
};
</script>
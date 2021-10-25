<template>
  <div id="user-spinner" class="para-spin" v-if="showSpinner">
    <div class="para-spin-external"></div>
    <div class="para-spin-internal"></div>
  </div>
</template>

<script>
import '../../assets/css/w3.css'
import './spinner.css';
export default {
  name: 'Spinner',
  props: {
    showSpinner: Boolean
  }
}
</script>
<template>
  <div class="w3-container w3-display-container" id="showcase">
    <p class="w3-center">
      <img style="width: 75px;" src="../../assets/img/Watto-Silohuette.png"/>
    </p>
    <h1 class="w3-center para-jumbo para-w-full para-text-blue para-title-font"><b>{{msg}}</b><b class="para-text-red">.</b></h1>
    <h1 class="w3-center para-jumbo para-w-full para-text-blue para-min-container"><b class="para-text-red">-</b> {{submsg}} <b class="para-text-red">-</b></h1>
  </div>
</template>

<script>
import './title.css';
export default {
  name: 'Title',
  props: {
    msg: String,
    submsg: String
  }
}
</script>
<template>
  <div>
    <h1 class="w3-display-container w3-xxxlarge para-w-full para-text-blue para-min-container">
      <b>{{msg}}</b><b class="para-text-red"> - </b><b class="para-manda-font para-manda-size">{{msg}}</b><b class="para-text-red">.</b>
    </h1>
    <hr style="width:50px;border:5px solid #FF4543" class="w3-round">
  </div>
</template>

<script>
import './sectiontitle.css';
export default {
  name: 'SectionTitle',
  props: {
    msg: String,
  },
}
</script>
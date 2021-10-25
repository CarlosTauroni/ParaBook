<template>
  <div>
    <div class="w3-container w3-display-container" id="services">
			<SectionTitle :msg="msg"/>
      <div id="bodytext"></div>
			<a href="#contact" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom">Contactar</a>
		</div>
  </div>
</template>

<script>
import SectionTitle from '../../components/SectionTitle/SectionTitle.vue';
export default {
  name: 'Services',
  components: {SectionTitle},
  props:{
    text: String
  },
  data(){
    return {
      msg: 'Servicios',
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.getElementById("bodytext").innerHTML = this.text;
    });
  },
}
</script>
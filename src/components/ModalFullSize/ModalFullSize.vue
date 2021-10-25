<template>
  <div id="modal01" class="w3-modal w3-black" style="padding-top:0" onclick="this.style.display='none'">
    <span class="w3-button w3-black w3-xxlarge w3-display-topright">×</span>
    <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" class="w3-image">
      <p id="caption"></p>
      <p id="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalFullSize',
  props: {
    msg: String,
    display: Boolean
  },
  mounted() {
    this.$nextTick(() => {
      const element = {
        img: '',
        alttext: '',
      }
      if (this.display){
        document.getElementById("img01").src = element.img;
        document.getElementById("modal01").style.display = "block";
        document.getElementById("caption").innerHTML = element.alttext;
        document.getElementById("description").innerHTML = this.msg;
      }
    });
  },
  updated() {
    this.$nextTick(() => {
      const element = {
        img: '',
        alttext: '',
      }
      if (this.display){
        document.getElementById("img01").src = element.img;
        document.getElementById("modal01").style.display = "block";
        document.getElementById("caption").innerHTML = element.alttext;
        document.getElementById("description").innerHTML = this.msg;
      }
      else{
        document.getElementById("modal01").style.display = "none";
      }
    });
  },
}
</script>
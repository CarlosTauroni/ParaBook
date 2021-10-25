<template>
  <nav class="para-sidebar para-blue w3-collapse w3-large w3-padding" style="z-index:3;width:300px;" id="mySidebar"><br>
		<div class="para-comp-hl"></div>
		<a href="javascript:void(0)" v-on:click="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Close Menu</a>
		<div class="w3-container">
			<p class="w3-center" style="margin-bottom: 0px;"><img src="../../assets/img/Watto-Silohuette-White.png"/></p>
			<h3 class="para-logo-padding para-logo-font para-logo-sidebar">{{title}}</h3>
		</div>
		<div class="w3-bar-block" v-bind:key="item.id" v-for="item in data">
			<a :href=item.link v-on:click="w3_close()" class="w3-bar-item w3-button w3-hover-white">{{item.name}} <b class="para-text-red">-</b> <span class="para-manda-font">{{item.name}}</span><b class="para-text-red">.</b></a>
		</div>
	</nav>
</template>

<script>
import '../../assets/css/w3.css'
import './sidebar.css';
export default {
  name: 'Sidebar',
	props: {
		title: String,
    data: [],
  },
  methods: {
		w3_close: function() {
			document.getElementById("mySidebar").style.display = "none";
			document.getElementById("myOverlay").style.display = "none";
		}
  }
}
</script>
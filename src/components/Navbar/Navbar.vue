<template>
  <div class="tab">
		<button id="item.id" :key='item.id' v-for="item in items" class="tablinks" v-on:click="openTab(item.tab)">{{item.name}}</button>
	</div>
</template>

<script>
import '../../assets/css/w3.css'
import './navbar.css';

export default {
  name: 'Navbar',
  props: {
    items: Array,
  },
  methods: {
    openTab: function(tabclicked){
      console.log('Esta acción del botón debe ser definida', tabclicked);
      this.$emit(tabclicked, true);
    }
  }
}
</script>
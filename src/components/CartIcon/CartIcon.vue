<template>
  <div class="w3-container w3-display-container" id="contact">
    <img class="w3-display-topright para-card-icon" src="../../assets/img/Card.png" alt="Carrito Compra" v-on:click="toggleSideShoppingCart()"/>
    <ShoppingCart 
      @ShowCart="toggleSideShoppingCart"
      @removeItemFromCart="removeFromCart"
      @sendOrder="sendOrder"
      :openCart="showCart" 
      :totalprice="totalCart" 
      :itemsInCart="cart"
    />
  </div>
</template>

<script>
import './carticon.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart.vue';
export default {
  name: 'CartIcon',
  components: { ShoppingCart},
  props: {
    cart: [] ,
    showCart: Boolean,
    totalCart: Number
  },
  methods:{
    removeFromCart: function(id){
      console.log('Eliminar de la lista y llamar al servicio');
    },
    sendOrder: function(){
      if (this.totalCart > 0){
        console.log('Se ha comprado los items y se resetea la compra.');
        this.totalCart = 0;
        this.cart = [];
        return;
      }
      console.log('El carrito está vacio');
      return;
    },
    toggleSideShoppingCart: function(){
      this.showCart = !this.showCart;
      //this.$emit("ShowCart", true);
    }
  }
}
</script>
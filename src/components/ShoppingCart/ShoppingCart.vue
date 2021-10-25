<template>
  <div id="shoppingSideBar" class="para-shopping-cart" v-bind:class="{ 'para-sideopen': this.showCart }">
    <span class="w3-button w3-xxlarge w3-display-topright para-black" style="z-index:40" v-on:click="toggleSideShoppingCart()">×</span>
    <div class="w3-container" id="showcase">
      <h1 class="w3-display-container w3-xxxlarge w3-text-white para-min-container">
        <b>Carrito</b><b class="para-text-red"> - </b><b class="para-manda-font para-manda-size">Carrito</b><b class="para-text-red">.</b>
      </h1>
      <hr style="width:50px;border:5px solid #FF4543" class="w3-round">
      <ul id="cartContainer" class="w3-ul w3-white w3-center" v-bind:key="item.id" v-for="item in items">
        <li :id="item.id" class="w3-padding-16" style="height: 160px; position: relative;">
          <div class="w3-half">
            <img :src="item.img" class='para-cart-img para-shop-item' :alt="item.alttext">
          </div>
          <div class="w3-half">
            <p>{{item.name}}</p>
            <span>{{parseFloat(item.price).toFixed(2)}}€</span>
            <br/>
            <span>Cantidad: {{item.amount}}</span>
          </div>
          <span class="w3-button para-black w3-large w3-display-topright" style="position:absolute" v-on:click="removeItemFromCart(item.id)">×</span>
        </li>
      </ul>
      <ul class="w3-ul w3-light-grey w3-center">
        <li class="w3-padding-16 w3-center">
          <span class="w3-opacity">Total</span>
          <h2 id="totalCart" class="para-w-full">{{this.total}}€</h2>
        </li>
        <li class="w3-light-grey w3-padding-24 w3-center">
          <Button :msg="this.msg" :size="this.size" :type="this.type" @click="getOrder()" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import './shoppingcart.css';
import Button from '../Button/Button.vue'
export default {
  name: 'ShoppingCart',
  components: { Button },
  props: {
    openCart: Boolean,
    totalprice: Number,
    itemsInCart: Array,
  },
  data(){
    return {
      msg: 'Tramitar Pedido',
      size: 'small',
      type: 'tertiary',
      showCart : this.openCart,
      total: this.totalprice,
      items: this.itemsInCart
    }
  },
  methods:{
    toggleSideShoppingCart: function(){
      this.showCart = !this.showCart;
      this.$emit("show", false);
    },
    removeItemFromCart: function(id){
      this.itemsInCart.forEach((item, index) => {
        if(item.id === id){
          this.total = parseFloat(this.total) - (parseFloat(item.price) * parseFloat(item.amount));
          this.itemsInCart.splice(index,1);
        }
      });
      this.$emit("remove", id, this.total);
    },
    getOrder: function(){
      this.items = [];
      this.total = 0;
      this.$emit("send");
    }
  }
}
</script>
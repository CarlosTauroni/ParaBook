<template>
  <div class="w3-main admin-login-container">
    <SectionTitle :msg="msg"/>
    <div class="w3-container tab-panel">	
      <div class="card">		
        <div class="SG" >
          <div class="sgLiCat">
            <div id="box" class="box loginbox">
              <form class="loginform">
                <div class="container">
                  <p>
                    <label for="username"><strong>Usuario</strong></label>
                    <input id="username" type="text" placeholder="Nombre de usuario" name="username" v-model="username" required>
                  </p>
                  <p>
                    <label for="password"><strong>Contraseña</strong></label>
                    <input id="password" type="password" placeholder="Contraseña" name="password" v-model="password" required>
                  </p>
                  <p id="login"></p>
                  <div id="showcaseUserError" v-if="hasError">
                    <p class="w3-center para-text-blue"><b id="errorUserText">{{this.errorMsg}}</b><b class="para-text-red">.</b></p>
                    <p id="errorUserMessage" class="w3-center para-text-red para-manda-font para-manda-size">Sample Text</p>
                  </div>
                </div>
                <Button :msg="msgbtn" :size="size" :type="type" @click="trylogin()" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/w3.css'
import '../../assets/css/all.min.css'
import './login.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle.vue';
import Button from '../../components/Button/Button.vue';
export default {
  name: 'Login',
  components: {SectionTitle, Button},
  data () {
    return {
      errorMsg: 'Error - Recuerda que has de definir la llamada al servicio de Login',
      hasError: false,
      msg: 'Watto Shop Administration',
      msgbtn: 'Acceder',
      password:'',
      size: 'large',
      type: 'secondary',
      username:''
    }
  },
  methods: {
    trylogin: function (){
      console.log('Aqui se desarrollaría toda la función de llamada al servicio de Login.')
      console.log(this.username, this.password);
      this.hasError=true;
    }
  }
}
</script>
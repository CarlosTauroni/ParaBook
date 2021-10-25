<template>
  <div class="w3-container w3-display-container" id="contact">
    <SectionTitle :msg="msg"/>
    <p>¿Quieres ponerte en contacto? Recuerda que Watto no admite devoluciones, no se hace responsable del malfuncionamiento de las piezas y no tramitamos garantías. Después de todo, es material de vertedero.</p>
    <form action="/action_page.php" target="_blank">
      <div class="w3-section">
        <input class="w3-input" type="text" name="Nombre" placeholder="Nombre" required>
      </div>
      <div class="w3-section">
        <input class="w3-input" type="text" name="Correo" placeholder="Correo" required>
      </div>
      <div class="w3-section">
        <input class="w3-input" type="text" name="Mensaje" placeholder="Mensaje" required>
      </div>
      <Button :msg="msgbtn" :size="size" :type="type" @click="sendContat()" />
    </form>  
  </div>
</template>

<script>
import './contact.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle.vue';
import Button from '../../components/Button/Button.vue'
export default {
  name: 'Contact',
  components: {SectionTitle, Button},
  data(){
    return {
      msg: 'Contacto',
      msgbtn: 'Enviar Mensaje',
      size: 'large',
      type: 'secondary'
    }
  },
  methods:{
    sendContat: function(){
      console.log('Llamada al servicio para envio de contacto.')
    }
  }
}
</script>
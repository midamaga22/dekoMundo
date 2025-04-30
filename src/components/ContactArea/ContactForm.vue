<template>
    <div class="send-message">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <h4 class="title-1 title-border text-uppercase mb-30">Déjanos un mensaje</h4>
        
        <input 
          v-model="formData.name" 
          type="text" 
          name="name" 
          placeholder="Nombre*" 
          required
        >
        
        <input 
          v-model="formData.email" 
          type="email" 
          name="email" 
          placeholder="Email*" 
          required
        >
        
        <input 
          v-model="formData.subject" 
          type="text" 
          name="subject" 
          placeholder="Asunto"
        >
        
        <textarea 
          v-model="formData.message" 
          class="custom-textarea" 
          name="message" 
          placeholder="Mensaje*" 
          required
        ></textarea>
        
        <button 
          class="button-one submit-button mt-30" 
          type="submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
        </button>
        
        <p v-if="formMessage" class="form-message" :class="messageClass">
          {{ formMessage }}
        </p>
        
        <p class="form-note">
          Su dirección de correo electrónico no será publicada.
          Los campos obligatorios están marcados con *.
        </p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const isSubmitting = ref(false);
  const formMessage = ref('');
  const messageClass = ref('');
  
  const handleSubmit = async () => {
    isSubmitting.value = true;
    formMessage.value = '';
    
    try {
      // Aquí iría la lógica para enviar el formulario
      // Por ejemplo, una llamada a una API
      // await submitForm(formData.value);
      
      formMessage.value = 'Mensaje enviado con éxito. Nos pondremos en contacto pronto.';
      messageClass.value = 'success';
      
      // Resetear el formulario
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      formMessage.value = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
      messageClass.value = 'error';
    } finally {
      isSubmitting.value = false;
    }
  };
  </script>
  
  <style scoped>
  .send-message {
    padding: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
  }
  
  .contact-form input,
  .contact-form textarea {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .custom-textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  .button-one {
    background-color: #333;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .button-one:hover {
    background-color: #555;
  }
  
  .button-one:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
  
  .form-message {
    margin-top: 15px;
    padding: 10px;
    border-radius: 4px;
  }
  
  .form-message.success {
    background-color: #dff0d8;
    color: #3c763d;
  }
  
  .form-message.error {
    background-color: #f2dede;
    color: #a94442;
  }
  
  .form-note {
    font-size: 0.8em;
    color: #666;
    margin-top: 15px;
  }
  </style>
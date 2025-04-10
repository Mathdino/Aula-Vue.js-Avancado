<template>
  <div class="modal">
    <slot name="header"></slot>
    <h1>Esse é o modal</h1>
    <p>{{ user.nome }}</p>
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'ModalPrincipal',
  data() {
    return {
      user: {
        nome: 'Matheus',
      },
    };
  },
};
</script>

<style></style>

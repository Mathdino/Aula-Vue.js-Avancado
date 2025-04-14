<template>
  <h1 @click="navegarCursos">Essa é a home</h1>
</template>

<script>
export default {
  methods: {
    navegarCursos() {
      this.$router.push('cursos');
      setTimeout(() => {
        this.$router.push('acoes');
      }, 2000);
    },
  },
};
</script>

<style></style>

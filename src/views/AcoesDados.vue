<template>
  <div>
    <div v-if="loading">Carregando.. .</div>
    <div v-else>
      <p>{{ simbolo }}</p>
      <div>{{ acao }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['simbolo'],
  data() {
    return {
      acao: null,
      loading: true,
    };
  },
  methods: {
    puxarAcao(simbolo) {
      this.loading = true;
      this.acao = null;
      fetch(`https://api.origamid.dev/stock/${simbolo}/quote`)
        .then((r) => r.json())
        .then((r) => {
          this.acao = r;
          this.loading = false;
        });
    },
  },
  created() {
    this.puxarAcao(this.simbolo);
  },
  BeforeRouteUpdate(to, from, next) {
    this.puxarAcao(to.params.simbolo);
    next();
  },
};
</script>

<style></style>

<template>
  <div>
    <button @click="filtroAZ">A - Z</button>
    <button @click="filtroZA">Z - A</button>
    <transition-group tag="ul">
      <li v-for="filme in filmes" :key="filme">
        {{ filme }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: ['Titanic', 'Star Wars', 'O Senhor dos Anéis', 'Harry Potter'],
    };
  },
  methods: {
    filtroAZ() {
      this.filmes.sort();
    },
    filtroZA() {
      this.filmes.sort().reverse();
    },
  },
};
</script>

<style>
.v-mode {
  transition: transform 0.3s;
}
li {
  list-style: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>

<template>
  <div>
    <button @click="ativo = !ativo">Ativar</button>
    <transition name="fade">
      <h1 v-show="ativo">Serviços</h1>
    </transition>
    <!--Hooks-->
    <!--Podemos mudar o elemento assim que a animação ocorre-->
    <button @click="ativar = !ativar">Ativar 2</button>
    <transition name="fade" @enter="enter" @leave="leave">
      <h1 v-show="ativar">Contato</h1>
    </transition>
    <!--Appear-->
    <!--A animação so ocorre quando o usuário entra no site e vê o elemento-->
    <transition appear name="fade" @enter="enter" @leave="leave">
      <h1>Sobre</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: false,
      ativar: false,
    };
  },
  methods: {
    enter(elemento) {
      console.log(elemento.classList.add('teste'));
    },
    leave(elemento) {
      console.log('elemento sumiu');
    },
  },
};
</script>

<style>
/* 
v-enter (adicionada antes do elemento ser inserido)
v-enter-active (adicionada durante a animação)
v-enter-to (adicionada assim que a animação termina)
v-leave (adicionada assim que o elemento começa a sair)
v-leave-active (adicionada enquanto o elemento está saindo)
v-leave-to (adicionada quando o elemento saiu)

São classes adicionadas pelos vue.
O nome inicial (v) depende do atributo name
*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

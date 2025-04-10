<template>
  <div>
    <button @click="estoque++">Adicionar Estoque</button>
    <button @click="estoque = 0">Deletar Estoque</button>
    <transition mode="out-in"
      ><!--O modo out-in faz com que o elemento que está saindo seja removido do DOM antes do elemento que está entrando ser adicionado-->
      <p v-if="estoque > 0" key="estoque">Itens em estoque</p>
      <p v-else key="esgotado">Produto fora de estoque</p>
    </transition>
    <div>
      <ul>
        <li @click="componenteAtivo = 'CompSobre'">Sobre</li>
        <li @click="componenteAtivo = 'CompServicos'">Serviços</li>
      </ul>
      <transition name="Component" mode="out-in">
        <component :is="componenteAtivo"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import CompServicos from './CompServicos.vue';
import CompSobre from './CompSobre.vue';

export default {
  data() {
    components: {
      CompServicos, CompSobre;
    }
    return {
      estoque: 0,
      componenteAtivo: 'ComSobre',
    };
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

.Component-enter-active,
.Component-leave-active {
  transition: all 0.3s;
}
.Component-enter,
.Component-leave-to {
  opacity: 0;
  transform: translate3d(0, -20px, 0);
}
</style>

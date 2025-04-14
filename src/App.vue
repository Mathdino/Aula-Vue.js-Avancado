<template>
  <div>
    <!--HeaderPrincipal-->
    <div id="app">
      {{ mensagem }}
      <HeaderPrincipal />
      <!--ModalPrincipal-->
      <modal-principal>
        <template v-slot:header>Esse é o header</template>
        <template v-slot:default="{ user }">
          {{ user.nome }}
          <p>Esse é um teste</p>
          <button>Comprar</button>
        </template>
        <template #footer>
          <p>Esse é o footer</p>
        </template>
      </modal-principal>
      <!--AulaDescricao e AulaDownload-->
      <button @click="componenteAtivo = 'AulaDescricao'">Descrição</button>
      <button @click="componenteAtivo = 'AulaDownload'">Download</button>
      <component :is="componenteAtivo"></component>
      <!--Menu 
        Crie 3 componentes:
        1: Componente falando sobre a empresa
        2: Componente com os serviços da empresa
        3: Componente com um formulário de contato
        Crie um menu, que ao clique ele mude os componentes
        acima de forma dinâmica. Não destrua o componente, apenas mude o que é exibido
      -->
      <ul>
        <li @click="menuAtivo = 'SobreEmpresa'">Sobre</li>
        <li @click="menuAtivo = 'ServicoEmpresa'">Serviços</li>
        <li @click="menuAtivo = 'ContatoEmpresa'">Contato</li>
      </ul>
      <keep-alive>
        <component :is="menuAtivo"></component>
      </keep-alive>
      <!--Modal-->
      <modal></modal>
      <!--Router-->
      <h1 @click="mostrarRouter">Logo</h1>
      <nav class="aulaRouter">
        <router-link to="/">Home</router-link>
        <router-link to="/cursos">Cursos</router-link>
        <router-link to="/acoes">Acoes</router-link>
      </nav>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import ModalPrincipal from './components/ModalPrincipal.vue';
import HeaderPrincipal from './components/HeaderPrincipal.vue';
import AulaDescricao from './components/AulaDescricao.vue';
import AulaDownload from './components/AulaDownload.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    ModalPrincipal,
    HeaderPrincipal,
    AulaDescricao,
    AulaDownload,
    Modal,
    SobreEmpresa: function () {
      //Importação de forma asincrona
      return import('./components/SobreEmpresa.vue');
    },
    //Importação de forma asincrona reduzida
    ServicoEmpresa: () => import('./components/ServicoEmpresa.vue'),
    ContatoEmpresa: () => import('./components/ContatoEmpresa.vue'),
  },
  data() {
    return {
      mensagem: 'Essa é uma mensagem',
      componenteAtivo: 'AulaDescricao',
      menuAtivo: 'SobreEmpresa',
    };
  },
  methods: {
    mostrarRouter() {
      console.log(this.$route);
    },
  },
};
</script>

<style>
a {
  padding: 10px;
  color: #234;
}

.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
}

.aulaRouter {
  padding: 20px 0;
  border: 4px solid #234;
  margin: 20px;
}
</style>

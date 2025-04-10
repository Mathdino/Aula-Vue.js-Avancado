<template>
  <div>
    <button @click="modalAtivo = !modalAtivo">Cadastre-se</button>
    <transition name="modal" :duration="300">
      <div class="modal-wrapper" v-show="modalAtivo" @click="cliqueFora">
        <div class="modal">
          <h1>Cadastre-se</h1>
          <form action="">
            <label for="email">Email</label>
            <input type="email" id="email" />
            <label for="senha">Senha</label>
            <input type="password" id="senha" />
            <input type="submit" value="Logar" />
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      modalAtivo: false,
    };
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) {
        this.modalAtivo = false;
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin: 0px 0px 20px 0px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input,
button {
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 15px 10x;
  font-size: 1rem;
  margin-bottom: 20px;
}
input [type='submit'],
button {
  max-width: 200px;
  background: #84e;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 2px solid #000;
  font-weight: bold;
  cursor: pointer;
}
button {
  margin-top: 20px;
  display: block;
  cursor: pointer;
}
input [type='submit']:active,
button:active {
  background: #94e;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-to {
  transition: opacity 0.3s; /*Tempo de duração da animação, este tempo é o mesmo do tempo de duração de outras animações*/
}
.modal-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: #e5e5e5;
  padding: 20px;
  max-width: 400px;
  margin: 120px auto 0 auto;
  z-index: 10;
  border-radius: 4px;
}
.modal-enter-to .modal {
  animation: slide 0.3s;
}
.modal-leave-to .modal {
  animation: slide 0.3s reverse;
}

@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0px, 0);
  }
}
</style>

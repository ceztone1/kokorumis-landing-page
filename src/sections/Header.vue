<template>
  <header
    id="main-header"
    class="fixed flex w-full items-center justify-center gap-4 py-1"
  >
    <img
      class="h-[60px] w-[60px] rounded-full"
      src="img/logo.webp"
      alt="Kokorumis logo"
    />
    <h1 class="kokorumis font-Chewy text-4xl text-fontColor">Kokorumis</h1>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 35) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
});
</script>
<style>
header {
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: rgb(255 255 255 / 0.3);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
.kokorumis {
  animation-name: bounceInTop;
  animation-duration: 1s;
}
@keyframes bounceInTop {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
.scrolled {
  background-color: rgb(255 255 255 / 0.1);
  backdrop-filter: blur(4px);
}
</style>

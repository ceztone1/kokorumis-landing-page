<template>
  <div class="carousel-container flex flex-col p-6 appear2">
    <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
      <Slide class="slide" v-for="(image, index) in images" :key="index">
        <img
          :src="image"
          alt="Gallery Image"
          class="w-[90%] h-full lg:object-cover lg:w-[50%] lg:h-full"
        />
      </Slide>
    </Carousel>

    <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
      <Slide v-for="(image, index) in images" :key="index">
        <template #default="{ currentIndex, isActive }">
          <div
            :class="['thumbnail', { 'is-active': isActive }]"
            @click="slideTo(currentIndex)"
          >
            <img :src="image" alt="Thumbnail Image" class="thumbnail-image" />
          </div>
        </template>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const currentSlide = ref(0);
const screenWidth = ref(window.innerWidth);
const _LG = 1024;
const thumbnailsConfig = computed(() => {
  return {
    itemsToShow: screenWidth.value > _LG ? 6 : 3,
    wrapAround: true,
    touchDrag: true,
    mouseDrag: false,
    gap: 10,
    height: screenWidth.value > _LG ? 200 : 100,
  };
});

const galleryConfig = computed(() => {
  return {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: "fade",
    mouseDrag: false,
    touchDrag: true,
    height: screenWidth.value > _LG ? 600 : 350,
    autoplay: 4000,
  };
});

const images = ref([
  "img/image1.webp",
  "img/image2.webp",
  "img/image3.webp",
  "img/image4.webp",
  "img/image5.webp",
]);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

const updateDimensions = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  console.log("se monto");
  window.addEventListener("resize", updateDimensions);
});
</script>
<style scoped>
:root {
  background-color: #242424;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
}

.thumbnail-image {
  object-fit: cover;
}

#thumbnails {
  margin-top: 10px;
}

.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}
.gallery-image {
  object-fit: cover;
}

.appear2 {
  animation-name: appear;
  animation-duration: 2s;
}
@keyframes appear {
  0% {
    opacity: 0;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@media (min-width: 768px) {
  .md\:text-8xl {
    font-size: 6rem /* 96px */;
    line-height: 1;
  }
}
</style>

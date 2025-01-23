<template>
  <div class="carousel-container flex flex-col p-6 appear2">
    <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
      <Slide class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Gallery Image" class="gallery-image" />
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
import { onMounted, ref } from "vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const currentSlide = ref(0);
const thumbnailsConfig = {
  itemsToShow: 6,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
  height: 200,
};

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade",
  mouseDrag: false,
  touchDrag: false,
  height: 600,
  autoplay: 4000,
};

const images = ref([
  "img/image1.webp",
  "img/image2.webp",
  "img/image3.webp",
  "img/image4.webp",
  "img/image5.webp",
]);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

onMounted(() => {});
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
  width: 100%;
  height: 100%;
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
  width: 30%;
  height: 100%;
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
</style>

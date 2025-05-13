<template>
    <div class="product-area pt-40 pb-30 product-style-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <h2 class="title-border">¿POR QUÉ DEKO MUNDO?</h2>
            </div>
            
            <!-- Versión móvil -->
            <div class="d-block d-md-none">
              <div class="mobile-carousel">
                <div v-for="(slide, index) in slides" :key="'mobile-' + index" 
                     class="carousel-slide" :class="{ active: currentMobileSlide === index }">
                  <img :src="slide.image" class="d-block w-100" :alt="slide.alt">
                </div>
              </div>
            </div>
            
            <!-- Versión escritorio -->
            <div class="desktop-carousel d-none d-md-block">
              <div class="carousel-track" :style="trackStyle">
                <div v-for="(slide, index) in slides" :key="'desktop-' + index" 
                     class="carousel-slide">
                  <div class="single-product">
                    <div class="product-img">
                      <a :href="slide.link">
                        <img :src="slide.image" :alt="slide.alt">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  
  // Datos del carrusel
  const slides = ref([
    {
      image: 'src/assets/img/product/BANNERS660X600_PET.jpg',
      alt: 'Banner PET',
      link: 'shop-Vinil.html'
    },
    {
      image: 'src/assets/img/product/BANNERS660X600_CREA.jpg',
      alt: 'Banner CREA',
      link: 'single-product.html'
    },
    {
      image: 'src/assets/img/product/BANNERS660X600_FACILINSTALACION.jpg',
      alt: 'Banner Instalación',
      link: 'single-product.html'
    },
    {
      image: 'src/assets/img/product/BANNERS660X600_instaladores.jpg',
      alt: 'Banner Instaladores',
      link: 'single-product.html'
    },
    {
      image: 'src/assets/img/product/BANNERS660X600_transporte.jpg',
      alt: 'Banner Transporte',
      link: 'single-product.html'
    }
  ]);
  
  // Estado del carrusel
  const currentSlide = ref(0);
  const currentMobileSlide = ref(0);
  const slideInterval = ref(null);
  const transitionSpeed = 2000; // 2 milisegundos
  
  // Estilo dinámico para el track del carrusel
  const trackStyle = computed(() => {
    const slideWidth = 100 / 3; // 3 slides visibles en escritorio
    return {
      transform: `translateX(-${currentSlide.value * slideWidth}%)`,
      transition: `transform ${transitionSpeed}ms ease-in-out`
    };
  });
  
  // Avanzar al siguiente slide
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % (slides.value.length - 2);
    currentMobileSlide.value = (currentMobileSlide.value + 1) % slides.value.length;
  };
  
  // Iniciar el carrusel automático
  const startCarousel = () => {
    slideInterval.value = setInterval(nextSlide, transitionSpeed + 2000); // 2 segundos entre transiciones
  };
  
  // Detener el carrusel automático
  const stopCarousel = () => {
    if (slideInterval.value) {
      clearInterval(slideInterval.value);
      slideInterval.value = null;
    }
  };
  
  // Iniciar cuando el componente se monta
  onMounted(() => {
    startCarousel();
  });
  
  // Limpiar cuando el componente se desmonta
  onBeforeUnmount(() => {
    stopCarousel();
  });
</script>
  
  <style scoped>
  /* Estilos base */
  .product-area {
    background-color: #fff;
  }
  
 
  
  .title-border {
    display: inline-block;
    position: relative;
    padding-bottom: 15px;
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }
  
  .title-border::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 80px;
    height: 2px;
    background: #333;
    transform: translateX(-50%);
  }
  
  /* Estilos del carrusel móvil */
  .mobile-carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  
  .mobile-carousel .carousel-slide {
    display: none;
    width: 100%;
  }
  
  .mobile-carousel .carousel-slide.active {
    display: block;
  }
  
  /* Estilos del carrusel de escritorio */
  .desktop-carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  
  .carousel-track {
    display: flex;
    width: 100%;
  }
  
  .carousel-slide {
    flex: 0 0 33.3333%; /* 3 slides visibles */
    padding: 0 5px;
    box-sizing: border-box;
  }
  
  .single-product {
    position: relative;
    margin-bottom: 0px;
  }
  
  .product-img {
    position: relative;
    overflow: hidden;
  }
  
  .product-img a {
    display: block;
  }
  
  .product-img img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
  
  /* Efecto hover para los productos */
  .product-img:hover img {
    transform: scale(1.03);
  }
  
  /* Responsive */
  @media (max-width: 767px) {
    .carousel-slide {
      flex: 0 0 100%; /* 1 slide visible en móvil */
    }
    
    .title-border {
      font-size: 20px;
    }
  }
  </style>
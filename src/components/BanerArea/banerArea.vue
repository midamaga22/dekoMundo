<template>
    <div class="venezuela-dekomundo">
      <!-- BANNER-AREA START -->
      <div class="banner-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12 d-none d-md-block">
              <!-- Single-banner start -->
              <div class="single-banner banner-1 banner-4">
                <a class="banner-thumb" href="#">
                  <img 
                    src="@/assets/img/slider/slider-2/DEKOvisualizer.jpg" 
                    alt="Visualizador DEKO"
                    loading="lazy"
                  >
                </a>		
                <a href="#" class="button-one font-16px" data-text="INICIAR EXPERIENCIA">
                  INICIAR EXPERIENCIA
                </a>
              </div>
              <!-- Single-banner end -->					
            </div>
            <div class="col-md-12 d-md-none">
              <!-- Single-banner start -->
              <div class="single-banner banner-1 banner-4">
                <a class="banner-thumb" href="#">
                  <img src="@/assets/img/banner/roomvo-banner-mobile.jpeg"  alt="Visualizador DEKO móvil" loading="lazy">
                </a>	
                <a href="#" class="button-one font-16px" data-text="INICIAR EXPERIENCIA">INICIAR EXPERIENCIA</a>
              </div>
              <!-- Single-banner end -->					
            </div>
          </div>
        </div>
      </div>
      <!-- BANNER-AREA END -->
    </div>
</template>
  
<script setup>
</script>
  
<style scoped>

  /* Estilos específicos del componente */
  .banner-area {
    margin: 0;
    padding: 0;
    position: relative;
  }
  
  .single-banner {
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  
  .banner-thumb img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
  
  .button-one {
    position: absolute;
    right: 5%;
    bottom: 10%;
    display: inline-block;
    padding: 1px 24px;
    background-color: #86786e;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 4px;
    transition: all 0.3s ease;
    text-decoration: none;
    white-space: nowrap;
    font-size: 16px;
    max-width: 240px;
    width: auto;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  .button-one:hover {
    background-color: #e05d00;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  /* Estilos para móvil */
  @media (max-width: 767.98px) {
    .button-one {
      right: 5%;
      bottom: 8%;
      padding: 10px 16px;
      font-size: 14px;
      max-width: 180px;
    }
  }
  
  /* Estilos para pantallas muy pequeñas */
  @media (max-width: 480px) {
    .button-one {
      right: 5%;
      bottom: 5%;
      padding: 2px 12px;
      font-size: 12px;
      max-width: 160px;
    }
  }
  </style>
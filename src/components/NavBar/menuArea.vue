<script setup>

import { ref, onMounted, onUnmounted, computed } from 'vue';
//----------Variables Reactivas------------------
// Controla si el menú principal está abierto
const isMenuOpen = ref(false);
// Controla si el menú móvil está abierto
const isMobileMenuOpen = ref(false);
 // Almacena el ancho actual de la ventana
const windowWidth = ref(window.innerWidth);
// Referencia al elemento del header
const headerRef = ref(null);
// Controla si el header debe ser sticky
const isSticky = ref(false);

//---------------Computed Property---------------
// Determina si el viewport es de escritorio (ancho >= 768px)
const isDesktop = computed(() => windowWidth.value >= 768);



//Funciones de Control de Menús
//toggleMenu()
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value; // Alterna el estado del menú principal
  // Cerramos el menú móvil si está abierto
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false; // Cierra el menú móvil si está abierto
  }
};

//-------closeMenu-------------

const closeMenu = () => {
  isMenuOpen.value = false; // Cierra el menú principal
};

//-----------------toggleMobileMenu-----------
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;// Alterna el menú móvil
  // Cerramos el menú de escritorio si está abierto
  if (isMenuOpen.value) {
    isMenuOpen.value = false; // Cerramos el menú de escritorio si está abierto
  }
};

//--------------Manejo de Clics Externos----------------

const handleClickOutside = (event) => {
  const menuElement = document.querySelector('.menu-toggle');
  const mainMenuElement = document.querySelector('.main-menu');
  
  if (menuElement && mainMenuElement && 
      !menuElement.contains(event.target) && 
      !mainMenuElement.contains(event.target)) {
    closeMenu();// cierra el menu al hacer clik fuera de el 
  }
};

//-------------Manejo del Redimensionamiento------------
const handleResize = () => {
  windowWidth.value = window.innerWidth;// Actualiza el ancho de ventana
 
  if (isDesktop.value && isMenuOpen.value) {
    closeMenu(); // Cierra el menú al cambiar a desktop si estaba abierto
  }
};



//----------Comportamiento Sticky del Header
const checkSticky = () => {
  if (headerRef.value) {
    const headerHeight = headerRef.value.offsetHeight;
    isSticky.value = window.scrollY > headerHeight;// Activa sticky al pasar la altura del header
  }
};

//------------Hooks del Ciclo de Vida

onMounted(() => {
  document.addEventListener('click', handleClickOutside); // Listener para clics externos
  window.addEventListener('resize', handleResize);// Listener para redimensionamiento
  window.addEventListener('scroll', checkSticky); // Listener para scroll
  checkSticky(); // Verifica posición inicial del scroll
  
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside); // Limpieza
  window.removeEventListener('resize', handleResize); // Limpieza
  window.removeEventListener('scroll', checkSticky); // Limpieza
});


</script>

<template>

<div class="wrapper bg-dark-white">

<!-- HEADER-AREA START -->
<header ref="headerRef"   class="header header-2" :class="{ 'sticky': isSticky }">
  <div class="header-area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-md-4 col-">
          <div class="logo text-center text-md-center">
            <router-link to="/mainView" ><img src="/src/assets/img/logo/logo.png" alt=""></router-link>
            
          </div>
        </div>
      
      </div>
    </div>
    
  </div>
  <!-- MAIN-MENU START -->
  <div @click="toggleMenu" class="menu-toggle hamburger hamburger--emphatic d-none d-md-block">
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
    
  </div>
  <div v-if="isMenuOpen" class="main-menu h-auto  d-none d-md-block">
    <nav>
      <ul>							
        <li><a>PISOS</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li><router-link to="/viewVinil" >Vinil LVT Macizo</router-link> </li>
                   
                    <li>
                      <a href="shop-SPC.html"aria-expanded="false">
                        Pisos flotantes SPC
                      </a>
                      
                      </li>
                    <li><a href="shop-Decks.html">Decks</a></li>
                  </ul>
                </div>
              
                <div class="full-width">
                  <div class="mega-menu-img">
                    <a href="single-product.html"><img src="/src/assets/img/megamenu/PISOS.jpg" alt=""></a>
                  </div>
                </div>
                <div class="pb-40"></div>
              </div>
            </div>
          </div>
        </li>
        <li><a href="shop.html">Paredes</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Wall Panel
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Wall panel MDF</a></li>
                        <li><a class="dropdown-item" href="#">Wall panel PS</a></li>
                      </ul>
                      </li>
                    
                    <li><a href="#">WPC</a></li>
                    <li><a href="#">3D Wall Cover</a></li>
                    <li><a href="#">Marble Sheets</a></li>
                    <li><a href="#">Papel Tapiz</a></li>
                    
                  </ul>
                </div>
              
                <div class="full-width">
                  <div class="mega-menu-img">
                    <a href="single-product.html"><img src="/src/assets/img/megamenu/paredes.jpg" alt=""></a>
                  </div>
                </div>
                <div class="pb-40"></div>
              </div>
            </div>
          </div>
        </li>
        <li><a href="shop.html">EXTERIORES</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li><a href="elements-accordions.html">Wall cladding</a></li>
                    <li><a href="elements-toggles.html">Bamboo Composite</a></li>
                    <li><a href="elements-tab.html">Grama artificial</a></li>
                    <li><a href="elements-product-tab.html">Follaje Artificial</a></li>
                    
                  </ul>
                </div>
              
                <div class="full-width">
                  <div class="mega-menu-img">
                    <a href="single-product.html"><img src="/src/assets/img/megamenu/exteriores.jpg" alt=""></a>
                  </div>
                </div>
                <div class="pb-80"></div>
              </div>
            </div>
          </div>
        </li>
        <li><a href="shop.html">ACABADOS</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li><a href="elements-accordions.html">Rodapiés</a></li>
                    <li><a href="elements-toggles.html">Molduras y Cornisas</a></li>		
                  </ul>
                </div>
              
                <div class="full-width">
                  <div class="mega-menu-img">
                    <a href="single-product.html"><img src="/src/assets/img/megamenu/RODAPIE.jpg" alt=""></a>
                  </div>
                </div>
                <div class="pb-80"></div>
              </div>
            </div>
          </div>
        </li>                        
        <li><a href="shop-sidebar.html">DEKO PAC</a></li>
        <li><a href="shop.html">ACCESORIOS</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li><a href="shop.html">Rodapiés</a></li>
                    <li><a href="shop-sidebar.html">Decks</a></li>
                    <li><a href="shop-grid-right-sidebar.html">Pisos de Vinil</a></li>
                    <li><a href="shop-list.html">Wall Claddings</a></li>
                    <li><a href="shop-list-right-sidebar.html">Pegamento</a></li>
                    <li><a href="single-product.html">Follaje artificial</a></li>	
                  </ul>
                </div>
              
                <div class="full-width">
                  <div class="mega-menu-img">
                    <a href="single-product.html"><img src="/src/assets/img/megamenu/ACCESORIOS.jpg" alt=""></a>
                  </div>
                </div>
                <div class="pb-80"></div>
              </div>
            </div>
          </div>
        </li>
        <li class="mb-30"><a href="#">ABOUT</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- MAIN-MENU END -->
</header>
<!-- HEADER-AREA END -->

<!-- Mobile-menu start -->
<div class="mobile-menu-area">
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 d-block d-md-none">
        
        <div class="">
        
              
                <button @click="toggleMobileMenu" class="hamburger hamburger--emphatic">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
                <nav id="dropdown"  v-if="isMobileMenuOpen">
            <ul>
              <li><a href="index.html">PISOS</a>
                <ul>
                  <li><a href="shop-Vinil.html">Vinil LVT Macizo</a></li>
                  <li class="nav-item dropdown">
                    <a class="nav-link " href="shop-SPC.html" role="button" aria-expanded="false">
                      Pisos flotantes SPC
                    </a>
                    </li>
                  <li><a href="shop-Decks.html">Decks</a></li>
                </ul>
              </li>
              <li><a href="index.html">PAREDES</a>
                <ul>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Wall Panel
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Wall panel MDF</a></li>
                      <li><a class="dropdown-item" href="#">Wall panel PS</a></li>
                    </ul>
                    </li>
                  
                  <li><a href="#">WPC</a></li>
                  <li><a href="#">3D Wall Cover</a></li>
                  <li><a href="#">Marble Sheets</a></li>
                  <li><a href="#">Papel Tapiz</a></li>
                  
                </ul>
              </li>
              <li><a href="index.html">EXTERIORES</a>
                <ul>
                  <li><a href="elements-accordions.html">Wall cladding</a></li>
                  <li><a href="elements-toggles.html">Bamboo Composite</a></li>
                  <li><a href="elements-tab.html">Grama artificial</a></li>
                  <li><a href="elements-product-tab.html">Follaje Artificial</a></li>
                  
                </ul>
              </li>
              <li><a href="index.html">ACABADOS</a>
                <ul>
                  <li><a href="elements-accordions.html">Rodapiés</a></li>
                  <li><a href="elements-toggles.html">Molduras y Cornisas</a></li>		
                </ul>
              </li>
              <li><a href="shop-sidebar.html">DEKO PAC</a></li>
              <li><a href="#">ACCESORIOS</a>
                <ul>
                  <li><a href="shop.html">Rodapiés</a></li>
                  <li><a href="shop-sidebar.html">Decks</a></li>
                  <li><a href="shop-grid-right-sidebar.html">Pisos de Vinil</a></li>
                  <li><a href="shop-list.html">Wall Claddings</a></li>
                  <li><a href="shop-list-right-sidebar.html">Pegamento</a></li>
                  <li><a href="single-product.html">Follaje artificial</a></li>	
                </ul>
              </li>
              <li><a href="#">CONTACTANOS</a></li>
            </ul>
          </nav>
              </div>  
          
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Mobile-menu end -->



</template>

<style scoped>




.main-menu {
  position: absolute;
  
  left: 0;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  min-width: 200px;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
}


.header {
  transition: all 0.3s ease;
  width: 100%;
  z-index: 1000; /* Asegúrate de que esté por encima de otros elementos */
}

.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white; /* O el color que prefieras */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.3s ease-out;
}

/* Para evitar el salto de contenido cuando el header se hace fixed */
.wrapper {
  padding-top: var(--header-height, 0); /* Ajusta según la altura de tu header */
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Tus otros estilos existentes... */
</style>







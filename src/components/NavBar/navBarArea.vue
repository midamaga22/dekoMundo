<script setup>

import { ref, onMounted, onUnmounted, computed } from 'vue';

//----------Variables Reactivas------------------
const isMenuOpen = ref(false);
const isMobileMenuOpen = ref(false);
const windowWidth = ref(window.innerWidth);
const headerRef = ref(null);
const isSticky = ref(false);

//---------------Computed Property---------------
const isDesktop = computed(() => windowWidth.value >= 768);

//Funciones de Control de Menús
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

// Función para cerrar ambos menús
const closeAllMenus = () => {
  closeMenu();
  closeMobileMenu();
};

//--------------Manejo de Clics Externos----------------
const handleClickOutside = (event) => {
  // Verifica que el clic no sea en ningún elemento del menú
  const clickedElement = event.target;
  
  // Si el menú está abierto y el clic fue fuera, ciérralo
  if (isMenuOpen.value && 
      !clickedElement.closest('.menu-toggle') && 
      !clickedElement.closest('.main-menu')) {
    closeMenu();
  }
  
  // Lo mismo para el menú móvil
  if (isMobileMenuOpen.value && 
      !clickedElement.closest('.mobile-menu-area .hamburger') && 
      !clickedElement.closest('#dropdown')) {
    closeMobileMenu();
  }
};

//-------------Manejo del Redimensionamiento------------
const handleResize = () => {
  windowWidth.value = window.innerWidth;
  if (isDesktop.value && isMenuOpen.value) {
    closeMenu();
  }
};

//----------Comportamiento Sticky del Header
const checkSticky = () => {
  try {
    if (!headerRef.value) return;
    const headerHeight = headerRef.value.offsetHeight;
    isSticky.value = window.scrollY > headerHeight;
  } catch (error) {
    console.error('Error checking sticky header:', error);
    isSticky.value = false;
  }
};
//------------Hooks del Ciclo de Vida
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', checkSticky);
  checkSticky();
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', checkSticky);
});
</script>

<template>
<div class="wrapper bg-dark-white">
<!-- HEADER-AREA START -->
<header ref="headerRef" class="header header-2" :class="{ 'sticky': isSticky }">
  <div class="header-area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-md-4 col-">
          <div class="logo d-none d-md-block text-md-center">    
            <router-link :to="{name: 'home'}" @click="closeAllMenus">
                <img  src="/src/assets/img/logo/logo.png" alt="logo de la empresa">
            </router-link>
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
  <div v-if="isMenuOpen" class="main-menu h-auto ">
    <nav>
      <ul>							
        <li><a>PISOS</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li v-for="category in ['Vinil LVT Macizo', 'SPC click 5.5 mm', 'SPC click 6.7 mm','Decks']">
                      <router-link :to="{name: 'category', params: {category: 'pisos', name: category}}" @click="closeMenu">{{category}}</router-link>
                    </li>     
                  </ul>
                </div>
                <div class="full-width">
                  <div class="mega-menu-img " style="width: 15%;">
                    <a href="single-product.html"><img src="/src/assets/img/megamenu/PISOS.jpg" alt=""></a>
                  </div>
                </div>
                <div class="pb-40"></div>
              </div>
            </div>
          </div>
        </li>
        <li><a>PAREDES</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li v-for="category in ['Wall panel MDF', 'Wall panel PS','WPC', '3D Wall Cover', 'Marble Sheets', 'Papel Tapiz']">
                      <router-link :to="{name: 'category', params: {category: 'panels', name: category}}"  @click="closeMenu">{{ category }}</router-link>
                    </li>
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
        <li><a>EXTERIORES</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li v-for="category in ['Wall cladding', 'Bamboo Composite', 'Grama artificial', 'Follaje Artificial']">
                      <router-link :to="{name: 'category', params: {category: 'exteriores', name: category }}" @click="closeMenu">{{category}}</router-link>
                    </li>
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
        <li><a>ACABADOS</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li v-for="category in ['Rodapiés', 'Molduras y Cornisas']">
                      <router-link :to="{name: 'category', params: {category: 'acabados', name: category} }" @click="closeMenu">{{ category }}</router-link>
                    </li>
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
        <li><a>ACCESORIOS</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li v-for="category in ['Rodapiés', 'Decks', 'Pisos de Vinil', 'Wall Claddings', 'Pegamento', 'Follaje artificial' ]"> 
                      <router-link :to="{name: 'category', params: {category: 'acabados', name: category} }" @click="closeMenu">{{ category }}</router-link>
                    </li>	
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
        <li>
          <router-link :to="{name: 'category', params: {category: 'pacs', name: 'Deko pac'}}" @click="closeMenu">DEKO PAC</router-link>
        </li>
        <li class="mb-30"><router-link :to="{name: 'category', params: {category: 'info', name: 'About'}}">ABOUT</router-link></li>
       
      </ul>
    </nav>
  </div>
  <!-- MAIN-MENU END -->
   <!-- Mobile-menu start -->
<div class="mobile-menu-area">
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 d-block d-md-none">
        
     <div class="d-flex justify-content-between align-items-center">
  
    <button @click="toggleMobileMenu" class="hamburger hamburger--emphatic">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <img class="w-25 mx-3 mt-3 mb-3" src="/src/assets/img/logo/logo.png" alt="logo de la empresa">

  
    
  
</div>
         
 
                 
          <nav id="dropdown" v-if="isMobileMenuOpen">
            <ul>
              <li><a>PISOS</a>
                <ul>
                  <li v-for="category in ['Vinil LVT Macizo', 'SPC click 5.5 mm', 'SPC click 6.7 mm','Decks']">
                      <router-link :to="{name: 'category', params: {category: 'pisos', name: category}}" @click="closeMenu">{{category}}</router-link>
                  </li> 
                </ul>
              </li>
              <li><a>PAREDES</a>
                <ul>
                  <li v-for="category in ['Wall panel MDF', 'Wall panel PS','WPC', '3D Wall Cover', 'Marble Sheets', 'Papel Tapiz']">
                      <router-link :to="{name: 'category', params: {category: 'panels', name: category}}"  @click="closeMenu">{{ category }}</router-link>
                    </li>
                </ul>
              </li>
              <li><a>EXTERIORES</a>
                <ul>
                  <li v-for="category in ['Wall cladding', 'Bamboo Composite', 'Grama artificial', 'Follaje Artificial']">
                      <router-link :to="{name: 'category', params: {category: 'exteriores', name: category }}" @click="closeMenu">{{category}}</router-link>
                  </li>
                </ul>
              </li>
              <li><a>ACABADOS</a>
                <ul>
                  <li v-for="category in ['Rodapiés', 'Molduras y Cornisas']">
                      <router-link :to="{name: 'category', params: {category: 'acabados', name: category} }" @click="closeMenu">{{ category }}</router-link>
                  </li>	
                </ul>
              </li>
              <li><a>ACCESORIOS</a>
                <ul>
                  <li v-for="category in ['Rodapiés', 'Decks', 'Pisos de Vinil', 'Wall Claddings', 'Pegamento', 'Follaje artificial' ]"> 
                      <router-link :to="{name: 'category', params: {category: 'acabados', name: category} }" @click="closeMenu">{{ category }}</router-link>
                  </li>	
                </ul>
              </li>
              <li>
                 <router-link :to="{name: 'category', params: {category: 'pacs', name: 'Deko pac'}}">DEKO PAC</router-link>
              </li>           
              <li> <router-link :to="{name: 'category', params: {category: 'info', name: 'About'}}">ABOUT</router-link></li>
            </ul>
          </nav>
        
      </div>
    </div>
  </div>
</div>
<!-- Mobile-menu end -->
</header>
</div>
</template>

<style scoped>
.main-menu {
  position: absolute;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  min-width: 200px;
  z-index: 1000;
}

.header {
  transition: all 0.3s ease;
  width: 100%;
  z-index: 1000;
}

.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.3s ease-out;
}


@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
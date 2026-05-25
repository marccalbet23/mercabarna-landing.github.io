let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('font-bold', 'text-brand-green');
            btn.classList.remove('text-gray-500');
        } else {
            btn.classList.remove('font-bold', 'text-brand-green');
            btn.classList.add('text-gray-500');
        }
    });

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function renderHeader() {
    const headerHTML = `
        <nav class="bg-white shadow-sm fixed w-full z-50 top-0">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-20 items-center">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <a href="#" class="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
                            <i class="fa-solid fa-leaf text-brand-green"></i>
                            <span class="hidden sm:block">Horts Calbet Garcia</span>
                            <span class="sm:hidden">HCG</span>
                        </a>
                    </div>

                    <!-- Desktop Menu -->
                    <div class="hidden md:flex space-x-8 items-center">
                        <a href="#inicio" class="text-gray-700 hover:text-brand-green px-3 py-2 text-sm font-semibold transition-colors" data-i18n="nav_inicio">Inicio</a>
                        <a href="#historia" class="text-gray-700 hover:text-brand-green px-3 py-2 text-sm font-semibold transition-colors" data-i18n="nav_historia">Historia</a>
                        <a href="#productos" class="text-gray-700 hover:text-brand-green px-3 py-2 text-sm font-semibold transition-colors" data-i18n="nav_productos">Productos</a>
                        <a href="#mercabarna" class="text-gray-700 hover:text-brand-green px-3 py-2 text-sm font-semibold transition-colors" data-i18n="nav_mercabarna">Mercabarna</a>

                        <!-- Language Switcher -->
                        <div class="flex items-center gap-2 ml-4 border-l pl-4 border-gray-300">
                            <button onclick="setLanguage('es')" class="lang-btn text-sm hover:text-brand-green transition-colors" data-lang="es">ES</button>
                            <span class="text-gray-300">|</span>
                            <button onclick="setLanguage('ca')" class="lang-btn text-sm hover:text-brand-green transition-colors" data-lang="ca">CA</button>
                        </div>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="md:hidden flex items-center gap-4">
                        <div class="flex items-center gap-2 border-r pr-4 border-gray-300">
                            <button onclick="setLanguage('es')" class="lang-btn text-sm hover:text-brand-green" data-lang="es">ES</button>
                            <span class="text-gray-300">|</span>
                            <button onclick="setLanguage('ca')" class="lang-btn text-sm hover:text-brand-green" data-lang="ca">CA</button>
                        </div>
                        <button onclick="toggleMobileMenu()" class="text-gray-700 hover:text-brand-green focus:outline-none">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="md:hidden hidden bg-white border-t border-gray-100">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#inicio" onclick="toggleMobileMenu()" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50" data-i18n="nav_inicio">Inicio</a>
                    <a href="#historia" onclick="toggleMobileMenu()" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50" data-i18n="nav_historia">Historia</a>
                    <a href="#productos" onclick="toggleMobileMenu()" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50" data-i18n="nav_productos">Productos</a>
                    <a href="#mercabarna" onclick="toggleMobileMenu()" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50" data-i18n="nav_mercabarna">Mercabarna</a>
                </div>
            </div>
        </nav>
    `;
    document.getElementById('header-container').innerHTML = headerHTML;
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function renderMainContent() {
    const mainHTML = `
        <!-- Hero Section -->
        <section id="inicio" class="hero-bg relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
            <div class="absolute top-0 w-full h-full bg-black opacity-50"></div>
            <div class="container relative mx-auto px-4">
                <div class="items-center flex flex-wrap">
                    <div class="w-full lg:w-8/12 mx-auto text-center">
                        <div class="mt-20">
                            <h2 class="text-white font-semibold tracking-wide text-sm md:text-base uppercase mb-4" data-i18n="hero_subtitle">TRADICIÓN Y CALIDAD</h2>
                            <h1 class="text-white font-serif font-bold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight" data-i18n="hero_title">
                                Directo del campo a tu mesa
                            </h1>
                            <p class="mt-4 text-lg text-gray-200 mb-10 max-w-2xl mx-auto" data-i18n="hero_desc">
                                Horts Calbet Garcia: Cultivando los mejores productos frescos en el corazón del Baix Llobregat para ofrecerte la máxima calidad cada día.
                            </p>
                            <a href="#productos" class="inline-block bg-brand-green text-white font-bold px-8 py-4 rounded shadow-lg hover:bg-brand-dark transition-colors duration-300 transform hover:scale-105" data-i18n="hero_cta">
                                Descubre nuestros productos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Products Section -->
        <section id="productos" class="py-20 bg-[#fdfbf7]">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap justify-center text-center mb-16">
                    <div class="w-full lg:w-6/12 px-4">
                        <h2 class="text-4xl font-serif font-bold text-gray-800 mb-4" data-i18n="prod_title">Nuestros Productos</h2>
                        <p class="text-lg leading-relaxed m-4 text-brand-green font-semibold" data-i18n="prod_subtitle">
                            Frescura garantizada
                        </p>
                    </div>
                </div>

                <!-- Cherry Tomato Highlight -->
                <div class="flex flex-wrap items-center mb-16 bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="w-full md:w-1/2 h-64 md:h-auto cherry-bg"></div>
                    <div class="w-full md:w-1/2 p-8 md:p-12">
                        <div class="flex items-center gap-3 mb-4">
                            <i class="fa-solid fa-star text-yellow-500 text-xl"></i>
                            <h3 class="text-2xl font-serif font-bold text-gray-800" data-i18n="prod_cherry_title">Nuestra Especialidad: Tomate Cherry</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-lg" data-i18n="prod_cherry_desc">
                            Cultivados con esmero para lograr el equilibrio perfecto entre dulzor y acidez. Un bocado de sabor intenso que marca la diferencia en cualquier plato.
                        </p>
                    </div>
                </div>

                <!-- Product Grid -->
                <div class="flex flex-wrap">
                    <!-- Vegetables -->
                    <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg h-full transition-transform duration-300 hover:-translate-y-2">
                            <img alt="Verduras" src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full align-middle rounded-t-lg h-64 object-cover">
                            <div class="p-6 flex-grow">
                                <h4 class="text-xl font-bold font-serif mb-2 text-gray-800" data-i18n="prod_veg_title">Verduras de Temporada</h4>
                                <p class="text-gray-600 font-light" data-i18n="prod_veg_desc">
                                    Seleccionamos las mejores variedades adaptadas a cada estación para garantizar el máximo sabor y nutrientes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Fruits -->
                    <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg h-full transition-transform duration-300 hover:-translate-y-2">
                            <img alt="Frutas" src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full align-middle rounded-t-lg h-64 object-cover">
                            <div class="p-6 flex-grow">
                                <h4 class="text-xl font-bold font-serif mb-2 text-gray-800" data-i18n="prod_fruit_title">Frutas Frescas</h4>
                                <p class="text-gray-600 font-light" data-i18n="prod_fruit_desc">
                                    Fruta madurada al sol, recolectada en su punto óptimo para disfrutar de toda su frescura.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="historia" class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap items-center">
                    <div class="w-full md:w-5/12 px-4 mr-auto ml-auto mb-10 md:mb-0">
                        <div class="text-brand-earth p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-brand-earth/10">
                            <i class="fa-solid fa-seedling text-xl"></i>
                        </div>
                        <h3 class="text-3xl mb-2 font-serif font-bold text-gray-800" data-i18n="about_title">
                            Nuestra Historia Familiar
                        </h3>
                        <h4 class="text-xl mb-6 font-semibold text-brand-green" data-i18n="about_subtitle">
                            Pasión por la tierra
                        </h4>
                        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600" data-i18n="about_p1">
                            Horts Calbet Garcia es una empresa familiar arraigada en las fértiles tierras del Baix Llobregat. Durante generaciones, hemos cultivado la tierra con el mismo respeto y dedicación que nuestros antepasados.
                        </p>
                        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-600" data-i18n="about_p2">
                            Nuestro compromiso es ofrecer frutas y verduras de la más alta calidad, cuidando cada paso del proceso, desde la semilla hasta que llega a Mercabarna. Creemos en una agricultura sostenible y en el valor del trabajo bien hecho.
                        </p>
                    </div>
                    <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <div class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-brand-green">
                            <img alt="..." src="https://images.unsplash.com/photo-1595841696650-a4f5b4f4ce51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full align-middle rounded-t-lg">
                            <div class="p-8">
                                <div class="flex justify-around text-white text-center">
                                    <div>
                                        <h5 class="text-3xl font-bold font-serif mb-1">+50</h5>
                                        <p class="text-sm opacity-80" data-i18n="about_stats_1">Años de experiencia</p>
                                    </div>
                                    <div>
                                        <h5 class="text-3xl font-bold font-serif mb-1">100%</h5>
                                        <p class="text-sm opacity-80">Local</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mercabarna / Contact Section -->
        <section id="mercabarna" class="py-20 bg-brand-dark relative">
            <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div class="container mx-auto px-4 relative z-10">
                <div class="flex flex-wrap justify-center text-center mb-12">
                    <div class="w-full lg:w-6/12 px-4">
                        <h2 class="text-4xl font-serif font-bold text-white mb-4" data-i18n="contact_title">Encuéntranos en Mercabarna</h2>
                        <p class="text-lg leading-relaxed m-4 text-brand-lightGreen font-semibold uppercase tracking-wider" data-i18n="contact_subtitle">
                            Venta al por mayor
                        </p>
                        <p class="text-gray-300 text-lg" data-i18n="contact_desc">
                            Distribuimos nuestros productos diariamente desde nuestro punto de venta en Mercabarna, garantizando frescura inmediata a profesionales del sector.
                        </p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8 mt-10">
                    <!-- Location Box -->
                    <div class="w-full md:w-5/12 lg:w-3/12 px-4 text-center">
                        <div class="text-white p-4 inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-brand-green">
                            <i class="fa-solid fa-map-location-dot text-2xl"></i>
                        </div>
                        <h6 class="text-xl font-semibold text-white">Mercabarna</h6>
                        <p class="mt-2 mb-4 text-gray-300">
                            <span data-i18n="contact_pavilion">Pabellón</span> G<br>
                            <span data-i18n="contact_stall">Parada</span> 7048
                        </p>
                    </div>

                    <!-- Phone Box -->
                    <div class="w-full md:w-5/12 lg:w-3/12 px-4 text-center">
                        <div class="text-white p-4 inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-brand-green">
                            <i class="fa-solid fa-phone text-2xl"></i>
                        </div>
                        <h6 class="text-xl font-semibold text-white" data-i18n="contact_phone_label">Teléfono</h6>
                        <p class="mt-2 mb-4 text-gray-300">
                            +34 123 456 789<br>
                            +34 987 654 321
                        </p>
                    </div>

                    <!-- Email Box -->
                    <div class="w-full md:w-5/12 lg:w-3/12 px-4 text-center">
                        <div class="text-white p-4 inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-brand-green">
                            <i class="fa-solid fa-envelope text-2xl"></i>
                        </div>
                        <h6 class="text-xl font-semibold text-white" data-i18n="contact_email_label">Email</h6>
                        <p class="mt-2 mb-4 text-gray-300">
                            info@hortscalbetgarcia.com<br>
                            ventas@hortscalbetgarcia.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
    document.getElementById('main-content').innerHTML = mainHTML;
}

function renderFooter() {
    const footerHTML = `
        <footer class="bg-gray-900 pt-8 pb-6">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-gray-400 font-semibold py-1">
                            <span data-i18n="footer_rights">© 2024 Horts Calbet Garcia. Todos los derechos reservados.</span><br>
                            <span class="font-light text-xs mt-2 block" data-i18n="footer_desc">Cultivando calidad en el Baix Llobregat.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    document.getElementById('footer-container').innerHTML = footerHTML;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderMainContent();
    renderFooter();
    setLanguage('es');
});

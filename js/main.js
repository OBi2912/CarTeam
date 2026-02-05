document.addEventListener('DOMContentLoaded', () => {

    // --- Internationalization (i18n) Data ---
    // Defined at the top to avoid ReferenceErrors
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_categories: "Categorías",
            nav_products: "Productos",
            nav_contact: "Contacto",
            btn_buy: "Comprar Ahora",
            hero_title: "Equipa tu Vehículo con lo Mejor",
            hero_desc: "Descubre nuestra exclusiva selección de repuestos, llantas y accesorios de lujo para llevar tu auto al siguiente nivel.",
            hero_btn_catalog: "Ver Catálogo",
            hero_btn_contact: "Contáctanos",
            cat_title: "Nuestras Categorías",
            cat_subtitle: "Todo lo que necesitas en un solo lugar.",
            prod_title: "Productos Destacados",
            prod_subtitle: "Lo más vendido de la temporada.",
            btn_show_all: "Ver Todos",
            footer_about: "Tu destino número uno para accesorios automotrices de alta gama. Calidad garantizada en cada pieza.",
            footer_links: "Enlaces Rápidos",
            footer_contact: "Contacto",
            footer_terms: "Términos y Condiciones",
            footer_rights: "Todos los derechos By OBi reservados.",
            // Dynamic content (Categories)
            cat_repuestos: "Repuestos",
            cat_repuestos_desc: "Piezas originales y de alto rendimiento.",
            cat_llantas: "Llantas y Rines",
            cat_llantas_desc: "Estilo y agarre para cualquier terreno.",
            cat_interior: "Interior",
            cat_interior_desc: "Confort y tecnología para tu cabina.",
            cat_exterior: "Exterior",
            cat_exterior_desc: "Body kits, luces y protección.",
            cat_audio: "Audio y Video",
            cat_audio_desc: "Sonido de alta fidelidad y pantallas.",
            cat_care: "Car Care",
            cat_care_desc: "Productos de limpieza y detailing.",
            // Cart
            cart_title: "Tu Carrito",
            cart_empty: "Tu carrito está vacío.",
            cart_total: "Total:",
            cart_checkout: "Proceder al Pago",
            cart_remove: "Eliminar",
            // Checkout
            checkout_back: "Volver a la Tienda",
            checkout_shipping_title: "Detalles de Envío",
            checkout_name: "Nombre",
            checkout_lastname: "Apellido",
            checkout_address: "Dirección",
            checkout_city: "Ciudad",
            checkout_zip: "Código Postal",
            checkout_payment_title: "Método de Pago",
            checkout_card: "Número de Tarjeta",
            checkout_exp: "Fecha Exp.",
            checkout_pay_btn: "Pagar Ahora",
            checkout_summary_title: "Resumen del Pedido",
            checkout_total: "Total",
            checkout_success_title: "¡Pago Exitoso!",
            checkout_success_msg: "Gracias por tu compra. Recibirás un correo con los detalles.",
            checkout_success_btn: "Volver al Inicio",
            // Modal
            modal_quality: "Calidad:",
            modal_price: "Precio:",
            modal_quantity: "Cantidad:",
            modal_add_cart: "Añadir al Carrito",
            btn_details: "Ver Detalles",
            // Payment Methods
            pm_card: "Tarjeta",
            checkout_redirect_msg: "Serás redirigido para completar tu pago de forma segura.",
            // Sidebar
            sidebar_title: "Ofertas Flash",
            promo_1_title: "Kit de Limpieza",
            promo_2_title: "Luces LED RGB",
            btn_view: "Ver"
        },
        en: {
            nav_home: "Home",
            nav_categories: "Categories",
            nav_products: "Products",
            nav_contact: "Contact",
            btn_buy: "Shop Now",
            hero_title: "Equip Your Vehicle with the Best",
            hero_desc: "Discover our exclusive selection of spare parts, rims, and luxury accessories to take your car to the next level.",
            hero_btn_catalog: "View Catalog",
            hero_btn_contact: "Contact Us",
            cat_title: "Our Categories",
            cat_subtitle: "Everything you need in one place.",
            prod_title: "Featured Products",
            prod_subtitle: "Best sellers of the season.",
            btn_show_all: "View All",
            footer_about: "Your number one destination for high-end automotive accessories. Guaranteed quality in every piece.",
            footer_links: "Quick Links",
            footer_contact: "Contact",
            footer_terms: "Terms & Conditions",
            footer_rights: "All rights reserved By OBi.",
            // Dynamic content (Categories)
            cat_repuestos: "Spare Parts",
            cat_repuestos_desc: "Original and high-performance parts.",
            cat_llantas: "Wheels & Rims",
            cat_llantas_desc: "Style and grip for any terrain.",
            cat_interior: "Interior",
            cat_interior_desc: "Comfort and technology for your cabin.",
            cat_exterior: "Exterior",
            cat_exterior_desc: "Body kits, lights, and protection.",
            cat_audio: "Audio & Video",
            cat_audio_desc: "High-fidelity sound and screens.",
            cat_care: "Car Care",
            cat_care_desc: "Cleaning and detailing products.",
            // Cart
            cart_title: "Your Cart",
            cart_empty: "Your cart is empty.",
            cart_total: "Total:",
            cart_checkout: "Proceed to Checkout",
            cart_remove: "Remove",
            // Checkout
            checkout_back: "Back to Store",
            checkout_shipping_title: "Shipping Details",
            checkout_name: "First Name",
            checkout_lastname: "Last Name",
            checkout_address: "Address",
            checkout_city: "City",
            checkout_zip: "Zip Code",
            checkout_payment_title: "Payment Method",
            checkout_card: "Card Number",
            checkout_exp: "Exp. Date",
            checkout_pay_btn: "Pay Now",
            checkout_summary_title: "Order Summary",
            checkout_total: "Total",
            checkout_success_title: "Payment Successful!",
            checkout_success_msg: "Thank you for your purchase. You will receive an email with details.",
            checkout_success_btn: "Back to Home",
            // Modal
            modal_quality: "Quality:",
            modal_price: "Price:",
            modal_quantity: "Quantity:",
            modal_add_cart: "Add to Cart",
            btn_details: "View Details",
            // Payment Methods
            pm_card: "Card",
            checkout_redirect_msg: "You will be redirected to complete your payment securely.",
            // Sidebar
            sidebar_title: "Flash Deals",
            promo_1_title: "Cleaning Kit",
            promo_2_title: "RGB LED Lights",
            btn_view: "View"
        }
    };

    // Product Data (for i18n)
    const productsData = {
        1: {
            es: { title: "Rines Deportivos 19\"", desc: "Rines ligeros de alta resistencia. Diseño aerodinámico para mejor rendimiento.", quality: "Aleación Premium" },
            en: { title: "Sport Rims 19\"", desc: "Lightweight high-strength rims. Aerodynamic design for better performance.", quality: "Premium Alloy" }
        },
        2: {
            es: { title: "Kit de Luces LED Underglow", desc: "Iluminación LED personalizable con control remoto. Resistente al agua y golpes.", quality: "RGB Impermeable" },
            en: { title: "LED Underglow Kit", desc: "Customizable LED lighting with remote control. Water and shock resistant.", quality: "Waterproof RGB" }
        },
        3: {
            es: { title: "Fundas de Asiento Premium", desc: "Fundas a medida con costuras reforzadas. Máximo confort y durabilidad.", quality: "Cuero Genuino" },
            en: { title: "Premium Seat Covers", desc: "Custom-fit covers with reinforced stitching. Maximum comfort and durability.", quality: "Genuine Leather" }
        },
        4: {
            es: { title: "Kit de Frenos Cerámicos", desc: "Frenos de alto rendimiento para pista y calle. Disipación de calor superior.", quality: "Premium Racing" },
            en: { title: "Ceramic Brake Kit", desc: "High-performance brakes for track and street. Superior heat dissipation.", quality: "Premium Racing" }
        },
        5: {
            es: { title: "Subwoofer 12\"", desc: "Graves profundos y potentes. Cono reforzado y bobina de voz doble.", quality: "High Fidelity" },
            en: { title: "12\" Subwoofer", desc: "Deep and powerful bass. Reinforced cone and dual voice coil.", quality: "High Fidelity" }
        },
        6: {
            es: { title: "Kit de Pulido", desc: "Restaura el brillo de tu auto. Incluye pulidora, almohadillas y compuestos.", quality: "Professional Grade" },
            en: { title: "Polishing Kit", desc: "Restore your car's shine. Includes polisher, pads, and compounds.", quality: "Professional Grade" }
        },
        7: {
            es: { title: "Aceite Sintético 5W-30", desc: "Máxima protección para tu motor. Intervalos de cambio extendidos.", quality: "Full Synthetic" },
            en: { title: "Synthetic Oil 5W-30", desc: "Maximum protection for your engine. Extended change intervals.", quality: "Full Synthetic" }
        },
        8: {
            es: { title: "Alerón Fibra de Carbono", desc: "Mejora la aerodinámica y el estilo. Acabado brillante y ligero.", quality: "Carbon Fiber" },
            en: { title: "Carbon Fiber Spoiler", desc: "Improves aerodynamics and style. Glossy and lightweight finish.", quality: "Carbon Fiber" }
        },
        9: {
            es: { title: "Pantalla Multimedia 10\"", desc: "Android Auto y Apple CarPlay. Navegación GPS y Bluetooth 5.0.", quality: "HD Touchscreen" },
            en: { title: "10\" Multimedia Screen", desc: "Android Auto and Apple CarPlay. GPS Navigation and Bluetooth 5.0.", quality: "HD Touchscreen" }
        },
        10: {
            es: { title: "Neumático All-Terrain", desc: "Tracción superior en tierra y asfalto. Durabilidad extrema.", quality: "Off-Road" },
            en: { title: "All-Terrain Tire", desc: "Superior traction on dirt and asphalt. Extreme durability.", quality: "Off-Road" }
        },
        11: {
            es: { title: "Dash Cam 4K Ultra HD", desc: "Grabación en bucle, visión nocturna y sensor de impacto G-Sensor.", quality: "Ultra HD" },
            en: { title: "Dash Cam 4K Ultra HD", desc: "Loop recording, night vision and G-Sensor impact detection.", quality: "Ultra HD" }
        },
        12: {
            es: { title: "Barra de Techo Aerodinámica", desc: "Capacidad de 75kg, diseño silencioso y compatible con la mayoría de autos.", quality: "Aluminum Alloy" },
            en: { title: "Aerodynamic Roof Rack", desc: "75kg capacity, silent design and compatible with most cars.", quality: "Aluminum Alloy" }
        }
    };

    // Sticky Header Effect
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.category-card, .product-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // --- Category Filtering Logic ---
    const categoryCards = document.querySelectorAll('.category-card');
    const productCards = document.querySelectorAll('.product-card');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const productsSection = document.getElementById('productos');

    if (categoryCards.length > 0) {
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;

                // Scroll to products
                productsSection.scrollIntoView({ behavior: 'smooth' });

                // Filter products
                productCards.forEach(product => {
                    if (product.dataset.category === category) {
                        product.style.display = 'block';
                        // Re-trigger animation
                        setTimeout(() => {
                            product.style.opacity = '1';
                            product.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        product.style.display = 'none';
                    }
                });

                // Show reset button
                if (resetFilterBtn) resetFilterBtn.style.display = 'inline-block';
            });
        });
    }

    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', () => {
            productCards.forEach(product => {
                product.style.display = 'block';
                setTimeout(() => {
                    product.style.opacity = '1';
                    product.style.transform = 'translateY(0)';
                }, 100);
            });
            resetFilterBtn.style.display = 'none';
        });
    }

    // --- Cart Logic ---
    let cart = JSON.parse(localStorage.getItem('carTeamCart')) || [];
    const cartIcon = document.getElementById('cartIcon');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');
    const cartCountEl = document.querySelector('.cart-count');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Update Cart UI
    const updateCartUI = () => {
        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        if (cart.length === 0) {
            // Get current lang for empty message
            const currentLang = localStorage.getItem('carTeamLang') || 'es';
            const emptyText = translations[currentLang] ? translations[currentLang]['cart_empty'] : 'Tu carrito está vacío.';
            cartItemsContainer.innerHTML = `<p class="empty-cart-msg">${emptyText}</p>`;
        } else {
            cart.forEach((item, index) => {
                total += item.price * item.quantity;
                count += item.quantity;

                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                // Get current lang for remove button
                const currentLang = localStorage.getItem('carTeamLang') || 'es';
                const removeText = translations[currentLang] ? translations[currentLang]['cart_remove'] : 'Eliminar';

                itemEl.innerHTML = `
                    <img src="${item.img}" alt="${item.title}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">$${item.price}</div>
                        <div class="cart-item-controls">
                            <span>Cant: ${item.quantity}</span>
                            <span class="remove-item" data-index="${index}">${removeText}</span>
                        </div>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
        }

        if (cartTotalEl) cartTotalEl.textContent = `$${total.toFixed(2)}`;
        if (cartCountEl) cartCountEl.textContent = count;

        // Save to local storage
        localStorage.setItem('carTeamCart', JSON.stringify(cart));

        // Attach remove listeners
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                cart.splice(index, 1);
                updateCartUI();
            });
        });
    };

    // Open/Close Cart
    const openCart = () => {
        if (cartDrawer) cartDrawer.classList.add('open');
        if (cartOverlay) cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeCart = () => {
        if (cartDrawer) cartDrawer.classList.remove('open');
        if (cartOverlay) cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    if (cartIcon) cartIcon.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // Add to Cart
    const addToCartBtns = document.querySelectorAll('.add-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Get data from modal
            const title = document.getElementById('modalTitle').textContent;
            const price = parseFloat(document.getElementById('modalPrice').textContent.replace('$', ''));
            const img = document.getElementById('modalImg').src;
            const quantity = parseInt(document.getElementById('quantity').value);

            // Check if item exists
            const existingItem = cart.find(item => item.title === title);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ title, price, img, quantity });
            }

            updateCartUI();
            closeModal(); // Close product modal
            openCart();   // Open cart drawer
        });
    });

    // Checkout Button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                window.location.href = 'checkout.html';
            } else {
                // Get current lang for alert
                const currentLang = localStorage.getItem('carTeamLang') || 'es';
                const alertText = currentLang === 'en' ? 'Your cart is empty' : 'Tu carrito está vacío';
                alert(alertText);
            }
        });
    }

    // Initialize Cart
    updateCartUI();


    // --- Modal Logic ---
    const modal = document.getElementById('productModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    // Elements to populate
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrice = document.getElementById('modalPrice');
    const modalQuality = document.getElementById('modalQuality');
    const qtyInput = document.getElementById('quantity');
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');

    // Open Modal
    if (openModalBtns.length > 0) {
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.product-card');
                const id = card.dataset.id;
                const currentLang = localStorage.getItem('carTeamLang') || 'es';

                // Fallback to dataset if not in JS (though it should be)
                let title = card.dataset.title;
                let desc = card.dataset.desc;
                let quality = card.dataset.quality;

                if (productsData[id] && productsData[id][currentLang]) {
                    const data = productsData[id][currentLang];
                    title = data.title;
                    desc = data.desc;
                    quality = data.quality;
                }

                modalImg.src = card.dataset.img; // Image is same for both
                modalTitle.textContent = title;
                modalDesc.textContent = desc;
                modalPrice.textContent = `$${card.dataset.price}`;
                modalQuality.textContent = quality;
                qtyInput.value = 1;

                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });
    }

    // Close Modal Function
    const closeModal = () => {
        if (modal) modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Quantity Logic
    if (minusBtn) {
        minusBtn.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val > 1) qtyInput.value = val - 1;
        });
    }

    if (plusBtn) {
        plusBtn.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val < 10) qtyInput.value = val + 1;
        });
    }

    const langSelect = document.getElementById('langSelect');

    // Helper to get current language
    const getCurrentLang = () => localStorage.getItem('carTeamLang') || 'en';

    const updateLanguage = (lang) => {
        // Save preference
        localStorage.setItem('carTeamLang', lang);

        // Update static elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Category Cards (Manual update as they have structure)
        const catCards = document.querySelectorAll('.category-card');
        const catKeys = ['repuestos', 'llantas', 'interior', 'exterior', 'audio', 'care'];

        catCards.forEach((card, index) => {
            if (index < catKeys.length) {
                const key = catKeys[index];
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                if (h3) h3.textContent = translations[lang][`cat_${key}`];
                if (p) p.textContent = translations[lang][`cat_${key}_desc`];
            }
        });

        // Update Cart Dynamic Elements (Empty msg, Remove buttons)
        const emptyMsg = document.querySelector('.empty-cart-msg');
        if (emptyMsg) emptyMsg.textContent = translations[lang]['cart_empty'];

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.textContent = translations[lang]['cart_remove'];
        });

        // Update Product Cards (Grid)
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const id = card.dataset.id;
            if (productsData[id] && productsData[id][lang]) {
                const data = productsData[id][lang];
                const titleEl = card.querySelector('h3');
                // We don't update price here as it's numeric/same, but we could if needed
                if (titleEl) titleEl.textContent = data.title;
            }
        });

        // Update Select Value if exists
        if (langSelect) langSelect.value = lang;
    };

    // Initialize Language
    const savedLang = getCurrentLang();
    updateLanguage(savedLang);

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }

    // --- Theme Switcher Logic ---
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    const updateTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('carTeamTheme', theme);

        if (themeIcon) {
            if (theme === 'light') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    };

    // Initialize Theme
    const savedTheme = localStorage.getItem('carTeamTheme') || 'light';
    updateTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            updateTheme(newTheme);
        });
    }


    // --- Payment Method Selection Logic ---
    const paymentMethods = document.querySelectorAll('.payment-method-card');
    const cardForm = document.getElementById('cardForm');
    const paypalForm = document.getElementById('paypalForm');
    const appleForm = document.getElementById('appleForm');
    const googleForm = document.getElementById('googleForm');
    const altPaymentMsg = document.getElementById('altPaymentMsg'); // Keep just in case

    const hideAllForms = () => {
        if (cardForm) cardForm.style.display = 'none';
        if (paypalForm) paypalForm.style.display = 'none';
        if (appleForm) appleForm.style.display = 'none';
        if (googleForm) googleForm.style.display = 'none';
        if (altPaymentMsg) altPaymentMsg.style.display = 'none';

        // Disable required on card inputs
        if (cardForm) {
            cardForm.querySelectorAll('input').forEach(input => input.required = false);
        }
    };

    if (paymentMethods.length > 0) {
        paymentMethods.forEach(method => {
            method.addEventListener('click', () => {
                // Remove selected class from all
                paymentMethods.forEach(m => m.classList.remove('selected'));
                // Add to clicked
                method.classList.add('selected');

                hideAllForms();

                const type = method.getAttribute('data-method');
                if (type === 'card') {
                    if (cardForm) {
                        cardForm.style.display = 'block';
                        // Enable required inputs
                        cardForm.querySelectorAll('input').forEach(input => input.required = true);
                    }
                } else if (type === 'paypal') {
                    if (paypalForm) paypalForm.style.display = 'block';
                } else if (type === 'apple') {
                    if (appleForm) appleForm.style.display = 'block';
                } else if (type === 'google') {
                    if (googleForm) googleForm.style.display = 'block';
                }
            });
        });
    }

    // --- Promotional Sidebar Logic ---
    const sidebar = document.getElementById('promoSidebar');
    const toggleBtn = document.getElementById('toggleSidebar');

    if (sidebar && toggleBtn) {
        // Check saved state
        const isCollapsed = localStorage.getItem('carTeamSidebarCollapsed') === 'true';
        if (isCollapsed) {
            sidebar.classList.add('collapsed');
        }

        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            localStorage.setItem('carTeamSidebarCollapsed', sidebar.classList.contains('collapsed'));
        });
    }

    // --- Random Promo Logic ---
    const renderRandomPromos = () => {
        const promoContainer = document.getElementById('promoContainer');
        const productCards = document.querySelectorAll('.product-card');

        if (!promoContainer || productCards.length < 2) return;

        // Get 2 unique random indices
        const indices = new Set();
        while (indices.size < 2) {
            indices.add(Math.floor(Math.random() * productCards.length));
        }

        promoContainer.innerHTML = '';

        Array.from(indices).forEach(index => {
            const card = productCards[index];
            const id = card.dataset.id;
            const title = card.dataset.title;
            const price = parseFloat(card.dataset.price);
            const img = card.dataset.img;

            // Calculate fake original price (15-30% higher)
            const originalPrice = (price * (1.15 + Math.random() * 0.15)).toFixed(2);

            // Random tag
            const tags = ['HOT', '20% OFF', 'SALE', 'DEAL'];
            const randomTag = tags[Math.floor(Math.random() * tags.length)];

            const promoHTML = `
                <div class="promo-card">
                    <div class="promo-tag">${randomTag}</div>
                    <img src="${img}" alt="${title}">
                    <h4>${title}</h4>
                    <p class="promo-price">$${price.toFixed(2)} <span class="original-price">$${originalPrice}</span></p>
                    <button class="btn btn-sm btn-primary promo-btn" data-id="${id}" data-i18n="btn_view">Ver</button>
                </div>
            `;
            promoContainer.innerHTML += promoHTML;
        });

        // Update translations for new elements
        // Note: We are reusing 'btn_view' which is already in translations.
        // The titles are dynamic from the product, so they don't need i18n keys, 
        // BUT we should check if we need to translate the "Ver" button text manually if i18n doesn't auto-run.
        // The current i18n implementation likely runs on load. We might need to re-run it or manually set text.
        const currentLang = localStorage.getItem('carTeamLang') || 'es';
        const viewText = translations[currentLang]['btn_view'];
        promoContainer.querySelectorAll('.promo-btn').forEach(btn => btn.textContent = viewText);
    };

    renderRandomPromos();

    // Event Delegation for Promo Buttons (Dynamic Content)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('promo-btn')) {
            const id = e.target.getAttribute('data-id');
            const productCard = document.querySelector(`.product-card[data-id="${id}"]`);
            if (productCard) {
                const viewBtn = productCard.querySelector('.open-modal-btn');
                if (viewBtn) viewBtn.click();
            }
        }
    });
});

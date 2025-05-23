
   
        // Product Data (Mock)
        const productsData = [
            {
                id: 1,
                title: "Wireless Bluetooth Headphones",
                category: "electronics",
                price: 2999.99,
                originalPrice: 5000.99,
                rating: 4.5,
                ratingCount: 328,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHS2XAv4tQVRSpvqEtUriH9xJtHIxOq5Yi5w&s",
                badge: "Best Seller",
                isNew: true,
                dateAdded: "2025-05-15"
            },
            {
                id: 2,
                title: "Ultra HD Smart TV - 55 inch",
                category: "electronics",
                price: 19999.99,
                originalPrice: 24999.99,
                rating: 4.7,
                ratingCount: 546,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHOjoEhVEuApVPURe2Zgd0joxSCz-TAZkhA&s",
                badge: null,
                isNew: false,
                dateAdded: "2025-03-10"
            },
            {
                id: 3,
                title: "Men's Casual Cotton Shirt",
                category: "clothing",
                price: 699.99,
                originalPrice: 999.99,
                rating: 4.2,
                ratingCount: 188,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKzNCOmfpss4eiBfn57gAb8XSlmSlFcc3VQ&s",
                badge: null,
                isNew: false,
                dateAdded: "2025-04-20"
            },
            {
                id: 4,
                title: "Non-Stick Cooking Set (10 Pieces)",
                category: "home",
                price: 1999.99,
                originalPrice: 2999.99,
                rating: 4.8,
                ratingCount: 256,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QRrEooP3oUC9tDuCs4wHVbK59MZNJiwuDA&s",
                badge: "Top Rated",
                isNew: false,
                dateAdded: "2025-02-05"
            },
            {
                id: 5,
                title: "Organic Facial Moisturizer",
                category: "beauty",
                price: 399.99,
                originalPrice: 499.99,
                rating: 4.4,
                ratingCount: 412,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMxQqB8B2fG9ryf9GiOba7-W54YajKv3gSw&s",
                badge: null,
                isNew: false,
                dateAdded: "2025-03-25"
            },
            {
                id: 6,
                title: "Portable Bluetooth Speaker",
                category: "electronics",
                price: 1999.99,
                originalPrice: 3000,
                rating: 4.1,
                ratingCount: 189,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNG7hodJkYWzo-10bGviubSXlxt2IxtNYbog&s",
                badge: null,
                isNew: true,
                dateAdded: "2025-05-18"
            },
            {
                id: 7,
                title: "Yoga Mat with Carrying Strap",
                category: "sports",
                price: 400,
                originalPrice: 500,
                rating: 4.6,
                ratingCount: 302,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROg0iTtFqEC4l4q0mJXPAoY5PuJi6Nuctzag&s",
                badge: null,
                isNew: false,
                dateAdded: "2025-04-10"
            },
            {
                id: 8,
                title: "Women's Running Shoes",
                category: "sports",
                price: 1499.99,
                originalPrice: 2000,
                rating: 4.3,
                ratingCount: 267,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmrTI4ZVKLeYV16qAnag3NgqrgjNUiE6t0g&s",
                badge: null,
                isNew: false,
                dateAdded: "2025-03-05"
            },
            {
                id: 9,
                title: "Digital Camera with 4K Video",
                category: "electronics",
                price: 7999.99,
                originalPrice: 10000,
                rating: 4.9,
                ratingCount: 178,
                image: "https://images-cdn.ubuy.qa/65446bf2ddeb0f30a756db43-4k-video-camera-camcorder-64mp-60fps-hd.jpg",
                badge: "Premium",
                isNew: true,
                dateAdded: "2025-05-12"
            },
            {
                id: 10,
                title: "Stainless Steel Water Bottle",
                category: "sports",
                price: 399.99,
                originalPrice: 500,
                rating: 4.7,
                ratingCount: 423,
                image: "https://m.media-amazon.com/images/I/71wFyZlg58L.jpg",
                badge: "Eco-Friendly",
                isNew: false,
                dateAdded: "2025-02-18"
            },
            {
                id: 11,
                title: "Women's Cotton Summer Dress",
                category: "clothing",
                price: 499.99,
                originalPrice: 700,
                rating: 4.4,
                ratingCount: 211,
                image: "https://i.etsystatic.com/22279588/r/il/f8eb70/4735910802/il_570xN.4735910802_r16q.jpg",
                badge: null,
                isNew: false,
                dateAdded: "2025-04-05"
            },
            {
                id: 12,
                title: "Smart Fitness Tracker",
                category: "electronics",
                price: 2999.99,
                originalPrice: 4000,
                rating: 4.2,
                ratingCount: 356,
                image: "https://m.media-amazon.com/images/I/61YwaovfYFL.jpg",
                badge: null,
                isNew: true,
                dateAdded: "2025-05-08"
            },
            {
                id: 13,
                title: "Men's Leather Wallet",
                category: "clothing",
                price: 999.99,
                originalPrice: 2000,
                rating: 4.8,
                ratingCount: 189,
                image: "https://m.media-amazon.com/images/I/81aCiKE2FML._AC_UY1100_.jpg",
                badge: null,
                isNew: false,
                dateAdded: "2025-03-20"
            },
            {
                id: 14,
                title: "Ceramic Dinner Set (12 Pieces)",
                category: "home",
                price: 2000,
                originalPrice: 3000,
                rating: 4.5,
                ratingCount: 221,
                image: "https://m.media-amazon.com/images/I/718fa-REjrL.jpg",
                badge: null,
                isNew: false,
                dateAdded: "2025-02-25"
            },
            {
                id: 15,
                title: "Vitamin C Serum",
                category: "beauty",
                price: 699.99,
                originalPrice: 1000,
                rating: 4.6,
                ratingCount: 378,
                image: "https://skyatransdermic.com/cdn/shop/files/4_2048x2048.jpg?v=1708940173",
                badge: "Popular",
                isNew: false,
                dateAdded: "2025-04-15"
            },
            {
                id: 16,
                title: "Wireless Computer Mouse",
                category: "electronics",
                price: 19999,
                originalPrice: 500,
                rating: 4.3,
                ratingCount: 267,
                image: "https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/pointing-devices/ms300/ms300-kbm-04-bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=381&qlt=100,1&resMode=sharp2&size=381,320&chrss=full",
                badge: null,
                isNew: false,
                dateAdded: "2025-03-12"
            },
            {
                id: 17,
                title: "Luxury Scented Candles Set",
                category: "home",
                price: 32.99,
                originalPrice: 45.99,
                rating: 4.7,
                ratingCount: 196,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVgJ4wi_knHRImc0O2VIHD6u6THvjgnSmYw&s",
                badge: null,
                isNew: true,
                dateAdded: "2025-05-01"
            },
            {
                id: 18,
                title: "Men's Running Shorts",
                category: "sports",
                price: 29.99,
                originalPrice: 39.99,
                rating: 4.4,
                ratingCount: 233,
                image: "https://5.imimg.com/data5/SELLER/Default/2023/10/350630111/IT/LD/EW/96658807/thai-shorts-500x500.jpg",
                badge: null,
                isNew: false,
                dateAdded: "2025-04-02"
            },
            {
                id: 19,
                title: "Anti-Aging Night Cream",
                category: "beauty",
                price: 49.99,
                originalPrice: 69.99,
                rating: 4.5,
                ratingCount: 287,
                image: "https://images-static.nykaa.com/media/catalog/product/3/3/331bfc6NOORS00000005_1.jpg.jpg?tr=w-500",
                badge: null,
                isNew: false,
                dateAdded: "2025-03-18"
            },
           {
                id: 20,
                title: "Adjustable Dumbbell Set",
                category: "sports",
                price: 199.99,
                originalPrice: 249.99,
                rating: 4.9,
                ratingCount: 156,
                image: "https://m.media-amazon.com/images/I/515uY4BSuYL._AC_UF894,1000_QL80_.jpg",
                badge: "Best Value",
                isNew: false,
                dateAdded: "2025-02-10"
            }
        ];

        // Global Variables
        let filteredProducts = [...productsData];
        let currentFilters = {
            categories: [],
            priceRange: { min: 0, max: 1000 },
            rating: 0,
            search: ''
        };
        let currentSort = 'featured';
        let currentPage = 1;
        const productsPerPage = 9;
        let cartCount = 0;

        // DOM Elements
        const productsGrid = document.getElementById('productsGrid');
        const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
        const priceSlider = document.getElementById('priceSlider');
        const minPriceInput = document.getElementById('minPrice');
        const maxPriceInput = document.getElementById('maxPrice');
        const applyPriceBtn = document.getElementById('applyPriceFilter');
        const ratingRadios = document.querySelectorAll('.rating-radio');
        const sortOptions = document.querySelectorAll('.sort-option');
        const searchInput = document.getElementById('searchInput');
        const activeFiltersContainer = document.getElementById('activeFilters');
        const paginationContainer = document.getElementById('pagination');
        const cartBadge = document.querySelector('.cart-badge');

        // Dropdown functionality
        const dropdownBtns = document.querySelectorAll('.dropdown-btn');
        const dropdownContents = document.querySelectorAll('.dropdown-content');

        dropdownBtns.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const dropdown = dropdownContents[index];
                const isOpen = dropdown.classList.contains('active');
                
                // Close all dropdowns
                dropdownContents.forEach(content => content.classList.remove('active'));
                
                // Toggle current dropdown
                if (!isOpen) {
                    dropdown.classList.add('active');
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            dropdownContents.forEach(content => content.classList.remove('active'));
        });

        // Prevent dropdown from closing when clicking inside
        dropdownContents.forEach(content => {
            content.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });

        // Initialize the application
        function init() {
            setTimeout(() => {
                renderProducts();
                setupEventListeners();
                updateActiveFilters();
                updatePagination();
            }, 1000); // Simulate loading time
        }

        // Setup event listeners
        function setupEventListeners() {
            // Category filters
            categoryCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', handleCategoryFilter);
            });

            // Price filter
            priceSlider.addEventListener('input', updatePriceDisplay);
            minPriceInput.addEventListener('input', updatePriceFromInput);
            maxPriceInput.addEventListener('input', updatePriceFromInput);
            applyPriceBtn.addEventListener('click', applyPriceFilter);

            // Rating filter
            ratingRadios.forEach(radio => {
                radio.addEventListener('change', handleRatingFilter);
            });

            // Sort options
            sortOptions.forEach(option => {
                option.addEventListener('click', handleSort);
            });

            // Search
            searchInput.addEventListener('input', debounce(handleSearch, 300));
        }

        // Category filter handler
        function handleCategoryFilter() {
            const selectedCategories = Array.from(categoryCheckboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
            
            currentFilters.categories = selectedCategories;
            currentPage = 1;
            applyFilters();
        }

        // Price filter handlers
        function updatePriceDisplay() {
            const value = parseInt(priceSlider.value);
            maxPriceInput.value = value;
            currentFilters.priceRange.max = value;
        }

        function updatePriceFromInput() {
            const min = parseInt(minPriceInput.value) || 0;
            const max = parseInt(maxPriceInput.value) || 1000;
            
            if (max >= min) {
                priceSlider.value = max;
                currentFilters.priceRange = { min, max };
            }
        }

        function applyPriceFilter() {
            currentPage = 1;
            applyFilters();
            // Close dropdown after applying
            document.getElementById('priceDropdown').classList.remove('active');
        }

        // Rating filter handler
        function handleRatingFilter(e) {
            currentFilters.rating = parseFloat(e.target.value);
            currentPage = 1;
            applyFilters();
        }

        // Sort handler
        function handleSort(e) {
            const sortType = e.target.dataset.sort;
            currentSort = sortType;
            
            // Update active sort option
            sortOptions.forEach(option => option.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update sort button text
            document.getElementById('currentSort').textContent = e.target.textContent;
            
            currentPage = 1;
            applyFilters();
            
            // Close dropdown
            document.getElementById('sortDropdown').classList.remove('active');
        }

        // Search handler
        function handleSearch(e) {
            currentFilters.search = e.target.value.toLowerCase().trim();
            currentPage = 1;
            applyFilters();
        }

        // Apply all filters and sort
        function applyFilters() {
            let filtered = [...productsData];

            // Apply category filter
            if (currentFilters.categories.length > 0) {
                filtered = filtered.filter(product => 
                    currentFilters.categories.includes(product.category)
                );
            }

            // Apply price filter
            filtered = filtered.filter(product => 
                product.price >= currentFilters.priceRange.min && 
                product.price <= currentFilters.priceRange.max
            );

            // Apply rating filter
            if (currentFilters.rating > 0) {
                filtered = filtered.filter(product => 
                    product.rating >= currentFilters.rating
                );
            }

            // Apply search filter
            if (currentFilters.search) {
                filtered = filtered.filter(product =>
                    product.title.toLowerCase().includes(currentFilters.search) ||
                    product.category.toLowerCase().includes(currentFilters.search)
                );
            }

            // Apply sorting
            filtered = sortProducts(filtered);

            filteredProducts = filtered;
            updateActiveFilters();
            renderProducts();
            updatePagination();
        }

        // Sort products based on current sort option
        function sortProducts(products) {
            switch (currentSort) {
                case 'priceAsc':
                    return products.sort((a, b) => a.price - b.price);
                case 'priceDesc':
                    return products.sort((a, b) => b.price - a.price);
                case 'ratingDesc':
                    return products.sort((a, b) => b.rating - a.rating);
                case 'newest':
                    return products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                case 'featured':
                default:
                    return products.sort((a, b) => {
                        if (a.badge && !b.badge) return -1;
                        if (!a.badge && b.badge) return 1;
                        return b.rating - a.rating;
                    });
            }
        }

        // Update active filters display
        function updateActiveFilters() {
            const activeFilters = [];

            // Category filters
            currentFilters.categories.forEach(category => {
                activeFilters.push({
                    type: 'category',
                    value: category,
                    label: category.charAt(0).toUpperCase() + category.slice(1),
                    removeHandler: () => removeCategoryFilter(category)
                });
            });

            // Price filter
            if (currentFilters.priceRange.min > 0 || currentFilters.priceRange.max < 1000) {
                activeFilters.push({
                    type: 'price',
                    value: 'price',
                    label: `${currentFilters.priceRange.min} - ${currentFilters.priceRange.max}`,
                    removeHandler: removePriceFilter
                });
            }

            // Rating filter
            if (currentFilters.rating > 0) {
                activeFilters.push({
                    type: 'rating',
                    value: 'rating',
                    label: `${currentFilters.rating}★ & above`,
                    removeHandler: removeRatingFilter
                });
            }

            // Search filter
            if (currentFilters.search) {
                activeFilters.push({
                    type: 'search',
                    value: 'search',
                    label: `Search: "${currentFilters.search}"`,
                    removeHandler: removeSearchFilter
                });
            }

            // Render active filters
            if (activeFilters.length > 0) {
                activeFiltersContainer.innerHTML = activeFilters.map(filter => `
                    <div class="filter-tag">
                        ${filter.label}
                        <span onclick="removeFilter('${filter.type}', '${filter.value}')">&times;</span>
                    </div>
                `).join('');
                activeFiltersContainer.style.display = 'flex';
            } else {
                activeFiltersContainer.style.display = 'none';
            }
        }

        // Remove filter functions
        function removeFilter(type, value) {
            switch (type) {
                case 'category':
                    removeCategoryFilter(value);
                    break;
                case 'price':
                    removePriceFilter();
                    break;
                case 'rating':
                    removeRatingFilter();
                    break;
                case 'search':
                    removeSearchFilter();
                    break;
            }
        }

        function removeCategoryFilter(category) {
            const checkbox = document.getElementById(category);
            if (checkbox) checkbox.checked = false;
            currentFilters.categories = currentFilters.categories.filter(cat => cat !== category);
            applyFilters();
        }

        function removePriceFilter() {
            currentFilters.priceRange = { min: 0, max: 1000 };
            minPriceInput.value = 0;
            maxPriceInput.value = 1000;
            priceSlider.value = 1000;
            applyFilters();
        }

        function removeRatingFilter() {
            currentFilters.rating = 0;
            document.getElementById('ratingAll').checked = true;
            applyFilters();
        }

        function removeSearchFilter() {
            currentFilters.search = '';
            searchInput.value = '';
            applyFilters();
        }

        // Render products
        function renderProducts() {
            const startIndex = (currentPage - 1) * productsPerPage;
            const endIndex = startIndex + productsPerPage;
            const productsToShow = filteredProducts.slice(startIndex, endIndex);

            if (productsToShow.length === 0) {
                productsGrid.innerHTML = `
                    <div class="no-products">
                        <h3>No products found</h3>
                        <p>Try adjusting your filters or search terms</p>
                    </div>
                `;
                return;
            }

            productsGrid.innerHTML = productsToShow.map(product => `
                <div class="product-card">
                    ${product.badge ? `<div class="product-badge ${product.originalPrice > product.price ? 'discount-badge' : ''}">${product.badge}</div>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                        <h3 class="product-title">${product.title}</h3>
                        <div class="rating">
                            <div class="stars">${generateStars(product.rating)}</div>
                            <span class="rating-count">(${product.ratingCount})</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">${product.price}</span>
                            ${product.originalPrice > product.price ? `
                                <span class="original-price">${product.originalPrice}</span>
                                <span class="discount-percent">${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off</span>
                            ` : ''}
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">
                            🛒 Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Generate star rating display
        function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            let stars = '';

            for (let i = 0; i < fullStars; i++) {
                stars += '★';
            }
            if (hasHalfStar) {
                stars += '☆';
            }
            for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
                stars += '☆';
            }

            return stars;
        }

        // Update pagination
        function updatePagination() {
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            
            if (totalPages <= 1) {
                paginationContainer.innerHTML = '';
                return;
            }

            let paginationHTML = '';

            // Previous button
            paginationHTML += `
                <button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">‹</button>
            `;

            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
                    paginationHTML += `
                        <button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>
                    `;
                } else if (i === currentPage - 3 || i === currentPage + 3) {
                    paginationHTML += '<span>...</span>';
                }
            }

            // Next button
            paginationHTML += `
                <button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">›</button>
            `;

            paginationContainer.innerHTML = paginationHTML;
        }

        // Change page
        function changePage(page) {
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            if (page >= 1 && page <= totalPages) {
                currentPage = page;
                renderProducts();
                updatePagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Add to cart function
        function addToCart(productId) {
            cartCount++;
            cartBadge.textContent = cartCount;
            
            // Add visual feedback
            const button = event.target;
            const originalText = button.innerHTML;
            button.innerHTML = '✓ Added!';
            button.style.backgroundColor = '#38b000';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
            }, 1500);
        }

        // Utility function for debouncing
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Initialize the application
        init();
  
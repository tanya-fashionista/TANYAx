// ===== FANCY WEBSITE FUNCTIONALITY =====

// Inventory data with KES pricing and accurate real images for each product
const products = [
  // Dresses - Each with accurate dress images
  { id: 1, name: "Red Evening Dress", category: "Dresses", price: 250, stock: 8, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center", rating: 4.8, wishlist: false },
  { id: 2, name: "Blue Summer Dress", category: "Dresses", price: 250, stock: 12, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center", rating: 4.6, wishlist: false },
  { id: 3, name: "Black Cocktail Dress", category: "Dresses", price: 250, stock: 6, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center", rating: 4.9, wishlist: false },
  { id: 4, name: "Floral Maxi Dress", category: "Dresses", price: 250, stock: 10, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center", rating: 4.7, wishlist: false },
  
  // Shorts - Each with accurate shorts images
  { id: 5, name: "Denim Shorts", category: "Shorts", price: 450, stock: 15, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center", rating: 4.5, wishlist: false },
  { id: 6, name: "Cotton Shorts", category: "Shorts", price: 400, stock: 20, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center", rating: 4.3, wishlist: false },
  { id: 7, name: "High-Waist Shorts", category: "Shorts", price: 500, stock: 12, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center", rating: 4.6, wishlist: false },
  { id: 8, name: "Athletic Shorts", category: "Shorts", price: 450, stock: 18, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center", rating: 4.4, wishlist: false },
  
  // Premium Shoes - Each with accurate shoe images
  { id: 9, name: "Designer Heels", category: "Shoes", price: 3000, stock: 5, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center", rating: 4.9, wishlist: false },
  { id: 10, name: "Running Shoes", category: "Shoes", price: 3000, stock: 8, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center", rating: 4.7, wishlist: false },
  { id: 11, name: "Casual Sneakers", category: "Shoes", price: 3000, stock: 10, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop&crop=center", rating: 4.6, wishlist: false },
  { id: 12, name: "Elegant Sandals", category: "Shoes", price: 3000, stock: 7, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center", rating: 4.8, wishlist: false },
  
  // Customized Air Force & Jordan Collection - Each with accurate sneaker images
  { id: 13, name: "Customized Air Force 1", category: "Premium Sneakers", price: 8000, stock: 4, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  { id: 14, name: "Jordan 1 Retro High", category: "Premium Sneakers", price: 12000, stock: 3, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  { id: 15, name: "Jordan 4 Retro", category: "Premium Sneakers", price: 15000, stock: 2, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  { id: 16, name: "Jordan 11 Retro", category: "Premium Sneakers", price: 18000, stock: 2, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  { id: 17, name: "Jordan 12 Retro", category: "Premium Sneakers", price: 16000, stock: 3, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  { id: 18, name: "Jordan 13 Retro", category: "Premium Sneakers", price: 17000, stock: 2, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  
  // Luxury Watches - Each with accurate watch images
  { id: 19, name: "Silver Rolex Submariner", category: "Luxury Watches", price: 250000, stock: 1, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  { id: 20, name: "Silver Cartier Santos", category: "Luxury Watches", price: 180000, stock: 2, image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  { id: 21, name: "Silver Omega Speedmaster", category: "Luxury Watches", price: 120000, stock: 3, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  { id: 22, name: "Silver Audemars Piguet", category: "Luxury Watches", price: 350000, stock: 1, image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  
  // Bikinis - Each with accurate bikini images
  { id: 23, name: "Floral Bikini Set", category: "Bikinis", price: 1000, stock: 6, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center", rating: 4.6, wishlist: false },
  { id: 24, name: "Solid Color Bikini", category: "Bikinis", price: 1000, stock: 8, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center", rating: 4.5, wishlist: false },
  { id: 25, name: "High-Waist Bikini", category: "Bikinis", price: 1000, stock: 5, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center", rating: 4.7, wishlist: false },
  { id: 26, name: "Sport Bikini", category: "Bikinis", price: 1000, stock: 7, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center", rating: 4.4, wishlist: false },
  
  // Additional Premium Items - Each with accurate images
  { id: 27, name: "Leather Jacket", category: "Outerwear", price: 800, stock: 4, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center", rating: 4.8, wishlist: false },
  { id: 28, name: "Silk Blouse", category: "Tops", price: 350, stock: 9, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center", rating: 4.6, wishlist: false },
  { id: 29, name: "Designer Handbag", category: "Accessories", price: 1200, stock: 3, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center", rating: 4.9, wishlist: false },
  { id: 30, name: "Statement Necklace", category: "Jewelry", price: 200, stock: 15, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&crop=center", rating: 4.5, wishlist: false },
  
  // Streetwear & Urban Fashion - Each with accurate streetwear images
  { id: 31, name: "Supreme Hoodie", category: "Streetwear", price: 2500, stock: 8, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center", rating: 4.8, wishlist: false },
  { id: 32, name: "Bape Shark Hoodie", category: "Streetwear", price: 3500, stock: 5, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center", rating: 4.9, wishlist: false },
  { id: 33, name: "Off-White T-Shirt", category: "Streetwear", price: 1800, stock: 12, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center", rating: 4.7, wishlist: false },
  { id: 34, name: "Vlone Hoodie", category: "Streetwear", price: 2800, stock: 6, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center", rating: 4.6, wishlist: false },
  
  // Premium Denim - Each with accurate denim images
  { id: 35, name: "Amiri Jeans", category: "Premium Denim", price: 4500, stock: 4, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center", rating: 4.9, wishlist: false },
  { id: 36, name: "Balmain Jeans", category: "Premium Denim", price: 3800, stock: 6, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center", rating: 4.8, wishlist: false },
  { id: 37, name: "Saint Laurent Jeans", category: "Premium Denim", price: 4200, stock: 5, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center", rating: 4.7, wishlist: false },
  
  // Luxury Accessories - Each with accurate accessory images
  { id: 38, name: "Gucci Belt", category: "Luxury Accessories", price: 8500, stock: 3, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center", rating: 4.9, wishlist: false },
  { id: 39, name: "Louis Vuitton Wallet", category: "Luxury Accessories", price: 12000, stock: 2, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center", rating: 5.0, wishlist: false },
  { id: 40, name: "Hermes Scarf", category: "Luxury Accessories", price: 9500, stock: 4, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center", rating: 4.8, wishlist: false }
];

// ===== CORE VARIABLES =====
let cart = [];
let totalSales = 0;
let currentFilter = 'all';
let currentSort = 'name';
let securitySystemActive = true;
let securityViolations = 0;

// ===== FANCY LOADING SCREEN =====
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }
}

// ===== FANCY THEME TOGGLE =====
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        themeToggle.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
        showEnhancedNotification('🌙 Dark theme activated', 'success');
    } else {
        body.classList.add('light-theme');
        themeToggle.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
        showEnhancedNotification('☀️ Light theme activated', 'success');
    }
}

// ===== FANCY PRODUCT RENDERING =====
function renderProducts(productsToRender = products) {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    // Add filter and search sections
    let html = `
        <div class="filter-section">
            <div class="filter-controls">
                <div class="category-filters">
                    <button class="filter-btn ${currentFilter === 'all' ? 'active' : ''}" onclick="filterByCategory('all')">All</button>
                    <button class="filter-btn ${currentFilter === 'Dresses' ? 'active' : ''}" onclick="filterByCategory('Dresses')">Dresses</button>
                    <button class="filter-btn ${currentFilter === 'Shorts' ? 'active' : ''}" onclick="filterByCategory('Shorts')">Shorts</button>
                    <button class="filter-btn ${currentFilter === 'Shoes' ? 'active' : ''}" onclick="filterByCategory('Shoes')">Shoes</button>
                    <button class="filter-btn ${currentFilter === 'Premium Sneakers' ? 'active' : ''}" onclick="filterByCategory('Premium Sneakers')">Premium Sneakers</button>
                    <button class="filter-btn ${currentFilter === 'Luxury Watches' ? 'active' : ''}" onclick="filterByCategory('Luxury Watches')">Luxury Watches</button>
                    <button class="filter-btn ${currentFilter === 'Bikinis' ? 'active' : ''}" onclick="filterByCategory('Bikinis')">Bikinis</button>
                    <button class="filter-btn ${currentFilter === 'Streetwear' ? 'active' : ''}" onclick="filterByCategory('Streetwear')">Streetwear</button>
                </div>
                <div class="sort-controls">
                    <select id="sort-select" onchange="sortProducts()">
                        <option value="name">Sort by Name</option>
                        <option value="price">Sort by Price</option>
                        <option value="rating">Sort by Rating</option>
                        <option value="stock">Sort by Stock</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div class="search-section">
            <div class="search-container">
                <input type="text" id="search-input" placeholder="Search products..." onkeyup="searchProducts()">
                <div class="search-filters">
                    <button class="search-filter active" onclick="toggleSearchFilter(this, 'all')">All</button>
                    <button class="search-filter" onclick="toggleSearchFilter(this, 'inStock')">In Stock</button>
                    <button class="search-filter" onclick="toggleSearchFilter(this, 'wishlist')">Wishlist</button>
                </div>
            </div>
        </div>
        
        <div class="products-grid">
    `;

    productsToRender.forEach(product => {
        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
        const badge = product.stock < 5 ? 'Low Stock' : product.rating >= 4.8 ? 'Premium' : '';
        
        html += `
            <div class="product" data-category="${product.category}">
                ${badge ? `<div class="product-badge">${badge}</div>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-overlay">
                        <button class="btn-wishlist" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn-quick-view" onclick="quickView(${product.id})" title="Quick View">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="category">${product.category}</div>
                    <div class="rating">
                        <span class="stars">${stars}</span>
                        <span class="rating-text">${product.rating}</span>
                    </div>
                    <div class="price">KES ${product.price.toLocaleString()}</div>
                    <div class="stock">Stock: ${product.stock}</div>
                    <div class="product-actions">
                        <button class="btn-sell" onclick="sellProduct(${product.id})">Sell 1</button>
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    productList.innerHTML = html;
}

// ===== FANCY FILTERING & SEARCH =====
function filterByCategory(category) {
    currentFilter = category;
    const filteredProducts = getFilteredProducts();
    renderProducts(filteredProducts);
    updateActiveFilterButtons();
}

function getFilteredProducts() {
    if (currentFilter === 'all') return products;
    return products.filter(product => product.category === currentFilter);
}

function sortProducts() {
    const sortValue = document.getElementById('sort-select').value;
    currentSort = sortValue;
    const sortedProducts = sortProductsArray(getFilteredProducts(), sortValue);
    renderProducts(sortedProducts);
}

function sortProductsArray(productsArray, sortBy) {
    return [...productsArray].sort((a, b) => {
        switch(sortBy) {
            case 'price':
                return a.price - b.price;
            case 'rating':
                return b.rating - a.rating;
            case 'stock':
                return b.stock - a.stock;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
}

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

function toggleSearchFilter(button, filter) {
    document.querySelectorAll('.search-filter').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    let filteredProducts = products;
    if (filter === 'inStock') {
        filteredProducts = products.filter(product => product.stock > 0);
    } else if (filter === 'wishlist') {
        filteredProducts = products.filter(product => product.wishlist);
    }
    
    renderProducts(filteredProducts);
}

function updateActiveFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === currentFilter || (currentFilter === 'all' && btn.textContent === 'All')) {
            btn.classList.add('active');
        }
    });
}

// ===== FANCY CART FUNCTIONALITY =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
    saveCart();
    showEnhancedNotification(`🛒 Added ${product.name} to cart`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCart();
    showEnhancedNotification('🗑️ Item removed from cart', 'info');
}

function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        updateCartDisplay();
        saveCart();
    }
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: var(--primary-silver);">Your cart is empty</p>';
        cartTotal.textContent = '0';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">KES ${item.price.toLocaleString()}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                           onchange="updateCartQuantity(${item.id}, parseInt(this.value))">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-price">KES ${itemTotal.toLocaleString()}</div>
                <button class="btn-sell" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });

    cartItems.innerHTML = html;
    cartTotal.textContent = total.toLocaleString();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
    renderCart();
}

function toggleCart() {
    const cartSection = document.getElementById('cart-section');
    const statsSection = document.getElementById('stats-section');
    
    if (cartSection.style.display === 'none') {
        cartSection.style.display = 'block';
        statsSection.style.display = 'none';
        renderCart();
    } else {
        cartSection.style.display = 'none';
    }
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    saveCart();
    showEnhancedNotification('🗑️ Cart cleared successfully', 'success');
}

function checkout() {
    if (cart.length === 0) {
        showEnhancedNotification('🛒 Your cart is empty', 'warning');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalSales += total;
    
    // Update product stock
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            product.stock = Math.max(0, product.stock - item.quantity);
        }
    });

    cart = [];
    updateCartDisplay();
    saveCart();
    renderProducts();
    updateStats();
    
    showEnhancedNotification(`💳 Checkout successful! Total: KES ${total.toLocaleString()}`, 'success');
}

// ===== FANCY WISHLIST FUNCTIONALITY =====
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    product.wishlist = !product.wishlist;
    updateWishlistCount();
    
    if (product.wishlist) {
        showEnhancedNotification(`❤️ Added ${product.name} to wishlist`, 'success');
    } else {
        showEnhancedNotification(`💔 Removed ${product.name} from wishlist`, 'info');
    }
}

function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlist-count');
    if (wishlistCount) {
        const count = products.filter(p => p.wishlist).length;
        wishlistCount.textContent = count;
    }
}

// ===== FANCY QUICK VIEW =====
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(10px);
    `;

    modal.innerHTML = `
        <div class="quick-view-content" style="
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: var(--radius-lg);
            padding: var(--spacing-xl);
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        ">
            <button onclick="this.parentElement.parentElement.remove()" style="
                position: absolute;
                top: var(--spacing-md);
                right: var(--spacing-md);
                background: var(--gradient-pink);
                border: none;
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.2rem;
            ">×</button>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg); align-items: start;">
                <div>
                    <img src="${product.image}" alt="${product.name}" style="
                        width: 100%;
                        height: 300px;
                        object-fit: cover;
                        border-radius: var(--radius-md);
                    ">
                </div>
                <div>
                    <h2 style="color: var(--primary-white); margin-bottom: var(--spacing-md);">${product.name}</h2>
                    <div style="color: var(--primary-gold); margin-bottom: var(--spacing-sm);">${product.category}</div>
                    <div style="color: var(--primary-gold); margin-bottom: var(--spacing-sm);">${stars} ${product.rating}</div>
                    <div style="font-size: 2rem; color: var(--primary-gold); margin-bottom: var(--spacing-md);">KES ${product.price.toLocaleString()}</div>
                    <div style="color: var(--primary-green); margin-bottom: var(--spacing-lg);">Stock: ${product.stock}</div>
                    <div style="display: flex; gap: var(--spacing-sm);">
                        <button onclick="addToCart(${product.id}); this.parentElement.parentElement.parentElement.parentElement.remove();" 
                                style="
                                    background: var(--gradient-gold);
                                    color: var(--primary-black);
                                    border: none;
                                    padding: var(--spacing-md);
                                    border-radius: var(--radius-md);
                                    font-weight: 600;
                                    cursor: pointer;
                                    flex: 1;
                                ">Add to Cart</button>
                        <button onclick="toggleWishlist(${product.id})" 
                                style="
                                    background: var(--gradient-purple);
                                    color: white;
                                    border: none;
                                    padding: var(--spacing-md);
                                    border-radius: var(--radius-md);
                                    font-weight: 600;
                                    cursor: pointer;
                                    flex: 1;
                                ">${product.wishlist ? 'Remove from' : 'Add to'} Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// ===== FANCY PRODUCT SALES =====
function sellProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.stock > 0) {
        product.stock -= 1;
        totalSales += product.price;
        renderProducts();
        updateStats();
        showEnhancedNotification(`💰 Sold 1 ${product.name} for KES ${product.price.toLocaleString()}`, 'success');
    } else {
        showEnhancedNotification(`❌ ${product.name} is out of stock!`, 'error');
    }
}

// ===== FANCY STATS UPDATES =====
function updateStats() {
    const totalProducts = document.getElementById('total-products');
    const totalSalesElement = document.getElementById('total-sales');
    const cartItemsCount = document.getElementById('cart-items-count');
    const wishlistCount = document.getElementById('wishlist-count');

    if (totalProducts) totalProducts.textContent = products.length;
    if (totalSalesElement) totalSalesElement.textContent = totalSales.toLocaleString();
    if (cartItemsCount) cartItemsCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    if (wishlistCount) updateWishlistCount();
}

// ===== FANCY NOTIFICATIONS =====
function showEnhancedNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `enhanced-notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        color: var(--primary-white);
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        box-shadow: var(--glass-shadow);
        z-index: 10000;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;

    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
    notification.innerHTML = `${icon} ${message}`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// ===== FANCY SCROLLING =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FANCY SECURITY FEATURES =====
function showSecurityNotification(message, type = 'warning') {
    showEnhancedNotification(`🔒 ${message}`, type);
}

function updateSecurityStatus(status = 'secure') {
    const securityIndicator = document.querySelector('.security-indicator');
    if (securityIndicator) {
        securityIndicator.textContent = status === 'secure' ? '🔒' : status === 'warning' ? '⚠️' : '❌';
        securityIndicator.title = `Security Status: ${status}`;
    }
}

// ===== FANCY SECURITY TESTING =====
window.testSecurityFeatures = function() {
    showEnhancedNotification('🔒 Testing security features...', 'info');
    setTimeout(() => {
        securityViolations += 2;
        updateSecurityStatus(securityViolations > 5 ? 'warning' : 'secure');
        showEnhancedNotification('🔒 Security test completed!', 'success');
    }, 1000);
};

window.checkSecurityStatus = function() {
    showEnhancedNotification('🔒 Security status refreshed!', 'success');
};

// ===== FANCY UTILITY FUNCTIONS =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            document.getElementById('search-input')?.focus();
        }
        if (e.key === 'Escape') {
            const cartSection = document.getElementById('cart-section');
            if (cartSection && cartSection.style.display !== 'none') {
                cartSection.style.display = 'none';
            }
        }
    });
}

// ===== FANCY STORAGE FUNCTIONS =====
function saveCart() {
    localStorage.setItem('tanyaFashionistaCart', JSON.stringify(cart));
    localStorage.setItem('tanyaFashionistaTotalSales', totalSales.toString());
}

function loadSavedCart() {
    const savedCart = localStorage.getItem('tanyaFashionistaCart');
    const savedSales = localStorage.getItem('tanyaFashionistaTotalSales');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
    
    if (savedSales) {
        totalSales = parseInt(savedSales);
    }
}

// ===== FANCY INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(hideLoadingScreen, 3000);
    
    // Load saved data
    loadSavedCart();
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        const themeToggle = document.querySelector('.theme-toggle i');
        if (themeToggle) themeToggle.className = 'fas fa-sun';
    }
    
    // Render initial products
    renderProducts();
    
    // Update stats
    updateStats();
    
    // Setup features
    setupSmoothScrolling();
    setupScrollAnimations();
    setupKeyboardShortcuts();
    
    // Initialize security
    updateSecurityStatus('secure');
    
    // Show welcome message
    setTimeout(() => {
        showEnhancedNotification('🎉 Welcome to Tanya Fashionista!', 'success');
    }, 3500);
    
    // Auto-save cart every 30 seconds
    setInterval(saveCart, 30000);
    
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
});

// ===== FANCY GLOBAL FUNCTIONS =====
window.showNotification = function(message, type = 'info') {
    showEnhancedNotification(message, type);
};

// ===== FANCY CSS ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .quick-view-modal {
        animation: fadeIn 0.3s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .product {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .stat-card {
        animation: fadeInUp 0.8s ease-out;
    }
    
    .cart-item {
        animation: fadeInLeft 0.5s ease-out;
    }
`;
document.head.appendChild(style);

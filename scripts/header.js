const headerHTML = `      
      <div class="left-section">
        <a class="homepage-link">
          <img src="images/icons/amazon-logo-white.png" class="amazon-logo">
        </a>
      </div>

      <div class="middle-section">
        <input placeholder="Search" class="search-bar">
        <a class="serch-link">
          <button class="search-button">
            <img src="images/icons/search-icon.png" class="search-icon">
          </button>
        </a>
      </div>

      <div class="right-section">
        <a class="order-link" href="orders.html">
          <span class="return-text">Returns</span>
          <span class="order-text">& Orders</span>
        </a>
        <a class="cart-link" href="checkout.html">
          <div class="cart">
            <span class="cart-quantity">0</span>
            <img src="images/icons/cart-icon.png" class="cart-icon"> 
          </div>
          <div class="cart-text">Cart</div>         
        </a>
      </div>
`;
document.querySelector('.header').innerHTML = headerHTML;
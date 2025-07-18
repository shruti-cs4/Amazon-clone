import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/productData.js';

let productHTML = '';
products.forEach((product) => {
  const html = `
      <div class="product-container">
        <div class="product-img-container">
          <img class="product-img" src="${product.image}">
        </div>
        <div class="product-name">
          ${product.name}
        </div>
        <div class="product-rating-container">
          <img class="product-rating-img" src="items/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count">
            ${product.rating.count}
          </div>
        </div>
        <div class="product-price">
          $ ${(product.priceCents / 100).toFixed(2)}
        </div>
        <div class="product-quantity-container">
          <select class="quantity-selector">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
            <option value="1">10</option>
          </select>
        </div>
        <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>`;
  productHTML += html;
});

document.querySelector('.js-product-grid').innerHTML = productHTML;

export function updateCartQuantity (){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })
  document.querySelector('.cart-quantity')
    .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
    });
  });
import {cart, updateCartQuantity} from "../data/cart.js";
import {products} from "../data/productData.js";


let cartHTML = '';

const headerHTML = `
    <div class="left-section">
      <a class="homepage-link" href="amazon.html">
      <img src="images/icons/amazon-logo.png" class="amazon-logo">
      </a>
    </div>
    <div class="middle-section">
      <span>Checkout(
      <span class="header-item"> ${updateCartQuantity()} items </span>
      )</span>
    </div>
    <div class="right-section">
      <img src="images/icons/checkout-lock-icon.png">
    </div>
  `;

const orderHTML = `
  <div class="js-order-summary">
    <div class="order-heading">Order summary</div>
    <div class="items">
      <div class="items-text">Items(${updateCartQuantity()}): </div>
      <div class="items-value">$40.99</div>
    </div>
    <div class="shipping-charges">
      <div class="shipping-charges-text">Shipping & Handling: </div>
      <div class="SC-value">$0.00</div>
    </div>
    <div class="total-B-tax">
      <div class="total-B-tax-text">Total Before Tax: 
      </div>
      <div class="TBT-value">$40.99</div> 
    </div>
    <div class="E-tax">
      <div class="E-tax-text">Estimated Tax: </div>
      <div class="ET-value">$3.60</div>
    </div>
    <div class="order-total">
      <div class="order-total-text">Order total: </div>
      <div class="OT-value"> $44.59</div>
      </div>
    <button class="order-button">Place your order</button>
  </div>


`;

cart.forEach((cartItem) => {

  const product = products.find(p => p.id === cartItem.id);
  const productImage = product.image;
  const productName = product.name;
  const productPrice = product.priceCents;

  const html1 = `
  
    <div class="cartItem-container">
      <p class="delivery-date">Delivery date: Tuesday, November 11</p>
      <div class="cartItem-grid">
        <img class="product-image" src="${productImage}">

        <div class="cartItem-Details">
          <div class="cartItem-name">${productName}</div>
          <div class="cartItem-price">$ ${(productPrice/100).toFixed(2)}</div>
          <div class="cartItem-Quantity">
            <span>
              Quantity: <span>${cartItem.quantity}</span>
            </span>
            <span>update</span>
            <span>delete</span>
          </div>
        </div>
        
        <div class="delivery-options">
          <div class="delivery-option-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" class="delivery-option-input" name="${cartItem.id}">
            <div class="delivery-details">
              <div class="delivery-option-date">
                      Monday, November 17
              </div>
              <div class="delivery-option-price">
                FREE Shipping 
              </div>
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio" class="delivery-option-input" name="${cartItem.id}">
            <div class="delivery-details">
              <div class="delivery-option-date">
                      Thursday, November 13
              </div>
              <div class="delivery-option-price">
                $ 4.99 - shipping
              </div>
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio" class="delivery-option-input" name="${cartItem.id}">
            <div class="delivery-details">
              <div class="delivery-option-date">
                      Tuesday, November 11
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  `;
  cartHTML += html1;
});

document.querySelector('.header').innerHTML = headerHTML;
document.querySelector('.sidebar').innerHTML = orderHTML;
document.querySelector('.js-cartItem-grid').innerHTML = cartHTML;

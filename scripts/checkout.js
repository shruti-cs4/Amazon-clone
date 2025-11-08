import {cart, updateCartQuantity} from "../data/cart.js";
import {products} from "../data/productData.js";


let cartHTML = '';


const orderHTML = `
    <div class="order-heading">Order summary</div>
    <div class="Items">
      <div>Items(${updateCartQuantity()}): </div>
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
          <div class="cartItem-price">$ ${productPrice/100}</div>
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
            <input type="radio" checked class="delivery-option-input">
            <div class="delivery-option-date">
                    Monday, November 17
            </div>
            <div class="delivery-option-price">
              FREE Shipping 
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input">
            <div>
              <div class="delivery-option-date">
                      Thursday, November 13
              </div>
              <div class="delivery-option-price">
                $ 4.99 - shipping
              </div>
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input">
            <div>
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


document.querySelector('.js-order-summary').innerHTML = orderHTML;
document.querySelector('.js-cartItem-grid').innerHTML = cartHTML;

import {cart} from "../data/cart.js";
import {products} from "../data/productData.js";

cart.forEach((cartItem) => {

  `
    <div class="cartItem-container">
      <p class="delivery-date">Delivery date:</p>
      <div class="cartItem-grid">
        <img class="product-image" src="">

        <div class="cartItem-Details">
          <div class="cartItem-name">product-name</div>
          <div class="cartItem-price">price</div>
          <div class="cartItem-Quantity">
            <span>
              Quantity: <span>1</span>
            </span>
            <span>update</span>
            <span>delete</span>
          </div>
        </div>
        
        <div class="delivery-options">
          <div class="delivery-option-title">
            choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input">
            <div>
              <div class="delivery-option-date">
                      Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input">
            <div>
              <div class="delivery-option-date">
                      Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input">
            <div>
              <div class="delivery-option-date">
                      Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  `
});

export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart =[{
      id: "a1-b2-c3",
      quantity: 2
    },{
      id: "d1-e2-f3",
      quantity: 3
    }];
}


export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem =cartItem;
    }
  });
  if(matchingItem){
    matchingItem.quantity += 1;
  }else{
    cart.push({
      id: productId,
      quantity: 1
    })
  }

  saveToStorage();

}


export function updateCartQuantity (){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })
  return cartQuantity;
}



export function removeFromCart(productId){
  let newCart = [];

  cart.forEach((cartItem) => {
    if (!(productId === cartItem.id)){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}


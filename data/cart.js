export let cart = [{
  id: "a1-b2-c3",
  quantity: 2
},{
  id: "d1-e2-f3",
  quantity: 3
}];


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
      productId: productId,
      quantity: 1
    })
  }
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
}


// Amazon Shopping  Cart

const user = {
  name: "kim",
  active: true,
  cart: [],
  purchases: [],
};

// Implement A cart feature
// 1. Add items to the cart
// 2. Add 3% tax to item in cart
// 3. Buy item: cart => purchases
// 4. Empty cart

const composeFunc =
  (f, g) =>
  (...args) => {
    console.log('compose fucntion')
    return f(g(...args));
  };


function purchaseItem(...args) {
  return args.reduce(composeFunc);
}

console.log(
  purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToitem,
    addItemToCart
  )(user, { name: "laptop", price: 200 })
);

function addItemToCart(user, item) {
  const updatedCart = user.cart.concat(item);
  console.log('addItemTocart')
  return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToitem(user) {
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  return Object.assign({}, user, { cart: [] });
}

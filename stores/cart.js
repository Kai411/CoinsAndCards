export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  function saveToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(this.items));
  }

  function initializeCart() {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedItems && storedItems.length > 0) {
      cartItems = storedItems;
    }
  }

  function addItem(item) {
    cartItems.push(item);
    saveToLocalStorage();
  }

  return { cart };
});

// .DOMs
let cartPage = document.getElementById("cartTableBody");
let totalCostSpace = document.getElementById("totalCost");
let subtotal = document.getElementById("subtotal");
let shippingcost = document.getElementById("shippingCost");
let bar = document.getElementById("bar");
let closeButton = document.getElementById("closeButtonNav");
let nav = document.getElementById("navbar");

// ..NAV BUTTON MOBILE
if (bar) {
   bar.addEventListener("click", () => {
      nav.classList.add("active");
   });
   closeButton.addEventListener("click", () => {
      nav.classList.remove("active");
   });
}

let allProductLists = productsList; /* this  makes all my products objects into one 
            //? now it's just one */
// .CART TABLE HEADER

document.addEventListener("scroll", () => {
   const tableHeader = document.getElementById("cartTableHeader");
   const tableBody = document.getElementById("cartTableBody");
   const mainHeader = document.getElementById("header");
   const mainHeaderHeight = mainHeader.offsetHeight;

   const scrollY = window.scrollY; // Get current scroll position

   // Calculate target top position based on scroll position and header height
   targetTop = "";
   if (window.scrollY >= tableBody.offsetTop && window.innerWidth > 896) {
      targetTop = `${mainHeaderHeight}px`;
   } else {
      targetTop = "";
   }

   // Apply smooth transition using requestAnimationFrame
   requestAnimationFrame(() => {
      tableHeader.style.top = targetTop;
   });

   // Toggle "scrolled" class based on scroll position
   if (scrollY >= tableBody.offsetTop && window.innerWidth > 896) {
      tableHeader.classList.add("scrolled");
   } else {
      tableHeader.classList.remove("scrolled");
   }
});
// .........CART AMOUNT TOP LEFT
let cart = JSON.parse(localStorage.getItem("Data")) || []; // ? || Is or so if there is localstorage already use it  if not use empty array
let cartInsideItemsAmount = document.getElementById("cartAmount");
let cartInsideItemsAmountMobile = document.getElementById("cartAmountMobile");
let updateCartAmountNum = () => {
   let totalQuantity = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
   cartInsideItemsAmount.innerHTML = totalQuantity;
   cartInsideItemsAmountMobile.innerHTML = totalQuantity;
   /*
    * This part of the code is using the REDUCE function to add up all the elements in the array created by the map function.
    * It starts with an initial value of 0 (that’s what the , 0 is for) and then goes through each element y in the array, adding it to the running total x.  */
};
updateCartAmountNum(); // ! RUN IT AS SOON AS THE PAGE LOAD

//. + and - and update(show the updated nums) and remove
let increaseAmount = (productId, produceSize) => {
   let productInCart = cart.find((product) => product.id === productId && product.size === produceSize);
   if (productInCart) {
      productInCart.item += 1;
      updateAmount(productId,produceSize);
   }
};

let decreaseAmount = (productId, produceSize) => {
   let productInCart = cart.find((product) => product.id === productId && product.size === produceSize);
   if (productInCart && productInCart.item > 0) {
      productInCart.item -= 1;
      updateAmount(productId,produceSize);
   }
   cart = cart.filter((x) => x.item !== 0);
   localStorage.setItem("Data", JSON.stringify(cart));
   generateCartItems();
};
let updateAmount = (productId, productSize) => {
   //? productId and productSize will be the same in the ${id} and ${size} generateCartItems
   let productInCart = cart.find((product) => product.id === productId && product.size === productSize);
   let search = allProductLists.find((Product) => Product.id === productId) || [];
   if (productInCart) {
      let quantityChanger = (document.getElementById(`${productId}-${productSize}`).innerHTML = productInCart.item);
      let priceChanger = (document.getElementById(`productPrice-${productId}-${productSize}`).innerHTML = ` $${(
         search.price * productInCart.item
      ).toFixed(2)}`);
      updateCartAmountNum();
      getTotal();
      localStorage.setItem("Data", JSON.stringify(cart));
   }
};
let getTotal = () => {
   let totalCost = cart
      .map((itemsInsideMyCart) => {
         let { id, item } = itemsInsideMyCart;
         let search = allProductLists.find((Product) => Product.id === id) || [];
         return search.price * item;
      })
      .reduce(
         (a, b) => a + b,
         0
      ); /* //?This method is used to reduce the array to a single value. In this case, it's used to sum up the total costs of all items in the cart. 
    ?The function passed to .reduce() takes two arguments: a (the accumulator, which holds the running total) and b (the current value being processed). It adds b to a and returns the result, which becomes the new value of a for the next iteration. The second argument to .reduce() (0) is the initial value of the accumulator. */
   subtotal.innerHTML = `$${totalCost.toFixed(2)}`;
   if (totalCost === 0) {
      shippingcost.innerHTML = `None`;
   } else if (totalCost >= 30) {
      shippingcost.innerHTML = "Free";
   } else if (totalCost <= 25) {
      shippingcost.innerHTML = "$4.00";
   }
   totalCostSpace.innerHTML = `$${totalCost.toFixed(2)}`;
};
getTotal();

let removeItem = (id,productSize) => {
   cart = cart.filter((selected) => selected.id !== id || selected.size !== productSize); // ? .filter will create a new array containing all elements of the cart array that do not have an id property(!==) that matches the id property of the selectedItem object so it only takes the ids that doesn't match the current one and put it in an array
   localStorage.setItem("Data", JSON.stringify(cart));
   updateCartAmountNum();
   getTotal();
   generateCartItems();
};

// .............CART ITEMS
let generateCartItems = () => {
   if (cart.length !== 0) {
      //? this is when it's not empty
      return (cartPage.innerHTML = cart
         .map((itemsInsideMyCart) => {
            let { id, item, size } = itemsInsideMyCart;
            let search = allProductLists.find((Product) => Product.id === id) || [];
            return `
        <tr>
          <td>
          <a onclick='removeItem("${id}","${size}")'>
              <span
                class="iconify"
                data-icon="ic:baseline-cancel"
                data-inline="false"
                style="color: #ff5555"
              ></span
            ></a>
          </td>
          <td>
            <a href="productp.html?id=${id}"
              ><img
                class="table-pro-img"
                src=${search.img}
                alt=""
            /></a>
          </td>
          <td>${search.name}</td>
          <td>${size}</td>
          <td id='productPrice-${id}-${size}'>$${(search.price * item).toFixed(2)}</td>
          <td >
            <div class="quantity-side">
            <iconify-icon icon="flat-color-icons:plus" onclick='increaseAmount("${id}","${size}")'></iconify-icon>
            <span id='${id}-${size}'>${item}</span>
            <iconify-icon icon="noto-v1:minus" class="icon-minus" onclick='decreaseAmount("${id}","${size}")'></iconify-icon>
            
            </div>
          </td>
        </tr>`;
         })
         .join(""));
   } else {
      cartMainCon.innerHTML = `<div>
    <h2 class="empty-warning">Cart is empty 
    <a href="shop.html">
    <button>Go Shop</button>
    </a></h2>
  </div>`;
      // ? this will change the HTML of the Cart page when it's empty
   }
};
generateCartItems();
// .DARK MODE
let darkmode = document.getElementById("darkMode");
let darkmodeMobile = document.getElementById("darkModeMobile");

let darkModeFun = () => {
   let theme = document.documentElement.getAttribute("data-theme");
   if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
   } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
   }
   // Add transitions after the theme has been changed
   let featureBoxes = document.querySelectorAll(".feature-box");
   featureBoxes.forEach((featureBox) => {
      //? Loop through each feature box
      featureBox.style.transition =
         "color 1s ease-in-out, background-color 0.5s ease-in-out, box-shadow 0.2s";
   });
   document.body.style.transition = "color 1s ease-in-out, background-color 0.5s ease-in-out";
   let productBoxes = document.querySelectorAll(".pro");
   productBoxes.forEach((productBox) => {
      productBox.style.transition = "color 1s ease-in-out, background-color 0.5s ease-in-out";
   });
};

let syncDarkMode = () => {
   darkmode.addEventListener("change", () => {
      darkmodeMobile.checked = darkmode.checked;
      darkModeFun();
   });
   darkmodeMobile.addEventListener("change", () => {
      darkmode.checked = darkmodeMobile.checked;
      darkModeFun();
   });
};
let loadTheme = () => {
   let theme = localStorage.getItem("theme");
   if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      if (theme === "dark") {
         darkmodeMobile.checked = true;
         darkmode.checked = true;
      }
   }
};
window.onload = () => {
   syncDarkMode();
   loadTheme();
};

// .LOGIN STUFF

document.addEventListener("DOMContentLoaded", function () {
   const loginButtons = document.querySelectorAll(".login");
   const loginPopUp = document.getElementById("loginPopUpBox");
   const registerPopUp = document.getElementById("registerPopUpBox");
   const closeButtons = document.querySelectorAll(".all-close-popups");
   const registerSwitch = document.getElementById("registerSwitch");
   const loginSwitch = document.getElementById("loginSwitch");
   let loginOverlay = document.getElementById("overlay");
   let loginAnimationRun = false;

   function showLoginPopup() {
      scrollPosition = window.scrollY;
      document.body.style.overflow = "hidden"; //? stops scrolling
      document.body.style.position = "fixed"; //? stops the position so when i switch to register it stays at the same place
      document.body.style.top = `-${scrollPosition}px`; //? stop it at this certain height
      document.body.style.width = "100%";
      loginPopUp.classList.add("showLoginBox");
      loginPopUp.classList.remove("hideLoginBox");
      if (!loginAnimationRun) {
         loginPopUp.classList.add("animateOnce");
         loginAnimationRun = true;
      }
      loginOverlay.style.display = "block";
   }

   function closePopups() {
      document.body.style.removeProperty("overflow"); // remove the overflow so i can scroll
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("width");

      loginPopUp.classList.remove("showLoginBox");
      registerPopUp.classList.remove("showRegisterBox");
      loginPopUp.classList.add("hideLoginBox");
      registerPopUp.classList.add("hideRegisterBox");
      loginOverlay.style.display = "none";
      // ?stay at the same scroll before you opened login in pop up
      window.scrollTo(0, scrollPosition); //? The first argument (0) specifies the horizontal scroll position, and the second argument (scrollPosition) specifies the vertical scroll position.
   }

   function switchToRegister() {
      loginPopUp.classList.remove("showLoginBox");
      loginPopUp.classList.add("hideLoginBox");
      registerPopUp.classList.add("showRegisterBox");
      registerPopUp.classList.remove("hideRegisterBox");
   }

   function switchToLogin() {
      loginPopUp.classList.add("showLoginBox");
      loginPopUp.classList.remove("hideLoginBox");
      registerPopUp.classList.remove("showRegisterBox");
      registerPopUp.classList.add("hideRegisterBox");
   }

   loginButtons.forEach((button) => {
      button.addEventListener("click", showLoginPopup);
   });

   closeButtons.forEach((button) => {
      button.addEventListener("click", closePopups);
      loginOverlay.addEventListener('click', closePopups) //? or close the popup by clicking the overlay
   });

   if (registerSwitch) {
      registerSwitch.addEventListener("click", switchToRegister);
   }

   if (loginSwitch) {
      loginSwitch.addEventListener("click", switchToLogin);
   }
});

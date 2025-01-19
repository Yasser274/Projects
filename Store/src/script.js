const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeButton = document.getElementById("closeButtonNav");

if (bar) {
   bar.addEventListener("click", () => {
      nav.classList.add("active");
   });
   closeButton.addEventListener("click", () => {
      nav.classList.remove("active");
   });
}

// .DARK MODE
let darkmode = document.getElementById("darkMode");
let darkmodeMobile = document.getElementById("darkModeMobile");

let darkModeFun = () => {
   let theme = document.documentElement.getAttribute("data-theme");
   let newTheme;

   if (theme === "dark") {
      newTheme = "light";
   } else {
      newTheme = "dark";
   }

   // Add transition class before changing theme
   document.body.classList.add("theme-transition");

   document.documentElement.setAttribute("data-theme", newTheme);
   localStorage.setItem("theme", newTheme);

   // Remove transition class after transition is complete
   setTimeout(() => {
      document.body.classList.remove("theme-transition");
   }, 2000); // Adjust this timeout to match your longest transition duration

   document.body.style.transition = "color 1s ease-in-out, background-color 0.5s ease-in-out";
   let featureBoxes = document.querySelectorAll(".feature-box");
   let productBoxes = document.querySelectorAll(".pro");
   let navbarTheme = document.getElementById("header");
   let headerText = document.querySelector(".header-links");
   let stars = document.querySelectorAll(".stars-rating");

   function applyTransition(element) {
      element.style.transition = "color 4s ease-in-out, background-color 0.5s ease-in-out,box-shadow 0.2s";
   }

   //? function to apply transition to every element and it's children
   function applyTransitionAndChildren(elementWithChildren) {
      elementWithChildren.style.transition =
         "color 1s ease-in-out, background-color 0.5s ease-in-out,box-shadow 0.2s";
      // Recursively apply transition to all child elements
      for (let child of elementWithChildren.children) {
         applyTransitionAndChildren(child);
      }
   }
   //* start the transition for every element and its children if it has anything(.forEach)
   featureBoxes.forEach((featureBox) => {
      applyTransitionAndChildren(featureBox);
   });
   productBoxes.forEach((productBox) => {
      applyTransitionAndChildren(productBox);
   });
   applyTransition(navbarTheme);
   applyTransition(headerText);

   //* Change star colors

   stars.forEach((star) => {
      if (theme === "dark") {
         star.style.color = "black";
      } else {
         star.style.color = "white";
      }
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
      } else {
         darkmodeMobile.checked = false;
         darkmode.checked = false;
      }
      //* Change star colors
      let stars = document.querySelectorAll(".stars-rating");
      stars.forEach((star) => {
         if (theme === "dark") {
            star.style.color = "white";
         } else {
            star.style.color = "black";
         }
      });
   }
};
syncDarkMode();
loadTheme();

let changeStarsColorTheme = () => {
   let theme = localStorage.getItem("theme");
   //* Change star colors
   let stars = document.querySelectorAll(".stars-rating");

   stars.forEach((star) => {
      if (theme === "dark") {
         star.style.color = "white";
      } else {
         star.style.color = "black";
      }
   });
};

// .PRODUCTS
let products = document.getElementById("shop1"); // target products-box
let products2 = document.getElementById("shop2Newly"); //? Targets Newly arrived section
let productsShop = document.getElementById("shopPageProductsCon"); //? targets shop page
let maleGenderButton = document.getElementById("maleButton");
let femaleGenderButton = document.getElementById("femaleButton");

//? function to make product cards based on the place you want it to be and the list you want to it pull data from
let makeProducts = (place, theListOfProducts) => {
   return (place.innerHTML = theListOfProducts
      .map((x) => {
         let { id, brand, name, price, img } = x;
         return `
        <div id="product-id-${id}" class="pro">
          <a href="productp.html?id=${id}">
            <img class="product-image" src=${img} />
            <div class="des">
              <span>${brand}</span>
              <h4>${name}</h4> 
              <div class="star stars-box" id="stars-box-${id}">
                <iconify-icon icon="fa-regular:star" style="color: black" class="stars-rating"></iconify-icon>
                <iconify-icon icon="fa-regular:star" style="color: black" class="stars-rating"></iconify-icon>
                <iconify-icon icon="fa-regular:star" style="color: black" class="stars-rating"></iconify-icon>
                <iconify-icon icon="fa-regular:star" style="color: black" class="stars-rating"></iconify-icon>
                <iconify-icon icon="fa-regular:star" style="color: black" class="stars-rating"></iconify-icon>
              </div>
              <h5>$${price.toFixed(2)}</h5>
            </div>
          </a>
        </div>`;
      })
      .join(""));
};
//* Get certain products(certain properties) from the productsList
let filterProducts = (theListOfProducts, chosenIds) => {
   // Array of selected brands
   const selectedIds = chosenIds;

   // Filtering products where the brand is one of the selected brands
   return theListOfProducts.filter((product) => selectedIds.includes(product.id));
};
//* Filter by Gender
let filterProductsByGender = (theListOfProducts, gender) => {
   return theListOfProducts.filter((product) => product.gender === gender); //? look through an array and its object to see if gender property matches the one given if so filter it
};
if (products) {
   //? this checks if  this is in the page i'm currently on it will run this
   let featuredHomeProducts = ["fsfes", "htehet", "egsesgsees", "5h335h", "hreher"];
   let selectedproducts = filterProducts(productsList, featuredHomeProducts);
   makeProducts(products, selectedproducts); // ? CALL THE FUNCTION
}
if (productsShop) {
   makeProducts(productsShop, productsList); //? SHOP PAGE

   maleGenderButton.addEventListener("click", () => {
      maleGenderButton.classList.toggle("active");
      femaleGenderButton.classList.remove("active");

      if (maleGenderButton.classList.contains("active")) {
         let maleProducts = filterProductsByGender(productsList, "Male"); //? to only show male products in shop page
         makeProducts(productsShop, maleProducts);
         currentPage = 1;
         paginateProducts(1, maleProducts); // Update pagination for filtered male products
         createPagination(maleProducts); // Create new pagination
         starRating(maleProducts);
         changeStarsColorTheme();
      } else {
         makeProducts(productsShop, productsList); //? show all products if it isn't active
         currentPage = 1;
         paginateProducts(1, productsList); // Update pagination for all products
         createPagination(productsList); // Create pagination for all products
         starRating(productsList);
         changeStarsColorTheme();
      }
   });

   femaleGenderButton.addEventListener("click", () => {
      femaleGenderButton.classList.toggle("active");
      maleGenderButton.classList.remove("active");

      if (femaleGenderButton.classList.contains("active")) {
         let femaleProducts = filterProductsByGender(productsList, "Female");
         makeProducts(productsShop, femaleProducts);
         currentPage = 1;
         paginateProducts(1, femaleProducts); // Update pagination for filtered female products
         createPagination(femaleProducts); // Create new pagination
         starRating(femaleProducts);
         changeStarsColorTheme();
      } else {
         makeProducts(productsShop, productsList);
         currentPage = 1;
         paginateProducts(1, productsList); // Update pagination for all products
         createPagination(productsList); // Create pagination for all products
         starRating(productsList);
         changeStarsColorTheme();
      }
   });
}
if (products2) {
   let newlyHomeProducts = ["2441h1", "egsesgsees", "eheht3w4"];
   let selectedproducts = filterProducts(productsList, newlyHomeProducts);
   makeProducts(products2, selectedproducts);
}

// .Shop Page split pages

// Pagination variables
let currentPage = 1;
const productsPerPage = 6;

// Function to paginate the products
let paginateProducts = (pageNumber, filteredProducts) => {
   // Get the start and end indices for slicing the array
   const start = (pageNumber - 1) * productsPerPage;
   const end = start + productsPerPage;

   // Slice the product list for the current page
   const paginatedProducts = filteredProducts.slice(start, end);

   // Call the makeProducts function to display the products
   makeProducts(productsShop, paginatedProducts);
   changeStarsColorTheme();
};

let createPagination = (filteredProducts) => {
   const paginationContainer = document.getElementById("pagesNum");

   // Clear any existing pagination
   paginationContainer.innerHTML = "";

   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

   // Add page numbers dynamically based on the total pages
   for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.classList.add("page-numbers");
      pageLink.innerText = i;

      // Check if the page number is the current page and set the active class accordingly
      if (i === currentPage) {
         pageLink.classList.add("active");
      }

      // Add event listener to go to the selected page
      pageLink.addEventListener("click", (event) => {
         event.preventDefault();
         currentPage = i; // Set the current page to the clicked page
         paginateProducts(currentPage, filteredProducts); // Show products for the selected page

         // After products are updated, update pagination with the correct active page
         createPagination(filteredProducts); // Recreate pagination links
      });

      paginationContainer.appendChild(pageLink);
   }

   changeStarsColorTheme(); // Your custom function for stars color theme
};

// Initial page load
if (productsShop) {
   paginateProducts(currentPage, productsList); // Load products for the first page
   createPagination(productsList); // Create page numbers for all products
}

// .FILL IN SINGLE PRODUCT INFO PAGE

function fillInProductPage() {
   //1. Retrieve the id Parameter from the URL
   const urlParams = new URLSearchParams(window.location.search); //? window.location.search retrieves the query string part of the URL.
   //? new URLSearchParams(window.location.search) creates an object to parse the query string.

   const productId = urlParams.get("id"); //? urlParams.get('id') retrieves the value of the id parameter from the query string.

   //? searches the productsList array for an object where the id property matches the productId retrieved from the URL
   const product = productsList.find((p) => p.id === productId);

   if (product) {
      // * DOMs in single product page
      document.getElementById("MainImg").src = product.img;
      document.querySelector(".single-pro-image img").src = product.img;
      document.querySelector(".product-brand").innerText = product.brand;
      document.querySelector(".product-name").innerText = product.name;
      document.querySelector(".product-price").innerText = `$${product.price.toFixed(2)}`;
      document.querySelector(".product-des").innerText = product.description || "No description available";

      let addToCartButton = document.querySelector(".pro-add-button");
      addToCartButton.setAttribute("onclick", `addedItem('${productId}')`); // this is to add onclick function
      addToCartButton.setAttribute('id', `added-to-cart-signal`)
      addToCartButton.setAttribute('data-product-id', productId)
      

      const smallImgGroup = document.querySelector(".small-img-group");
      smallImgGroup.innerHTML = ""; // Clear any existing small image containers

      if (product.smallImages) {
         // * THIS ONE IS FOR THE FIRST SMALL IMG WHICH IS THE THUMBNAIL IMAGE(MAIN IMG)
         const smallImgContainer = document.createElement("div");
         smallImgContainer.className = "small-pro-con";
         smallImgGroup.appendChild(smallImgContainer);

         const smallImg = document.createElement("img");
         smallImg.src = product.img;
         smallImg.className = "small-product-image";
         smallImgContainer.appendChild(smallImg);

         product.smallImages.forEach((imgSrc, index) => {
            const smallImgContainer = document.createElement("div");
            smallImgContainer.className = "small-pro-con";

            const smallImg = document.createElement("img");
            smallImg.src = imgSrc;
            smallImg.className = "small-product-image";

            smallImgContainer.appendChild(smallImg);
            smallImgGroup.appendChild(smallImgContainer);
         });
      } else {
         const smallImgContainer = document.createElement("div");
         smallImgContainer.className = "small-pro-con";

         const smallImg = document.createElement("img");
         smallImg.src = product.img;
         smallImg.className = "small-product-image";

         smallImgContainer.appendChild(smallImg);
         smallImgGroup.appendChild(smallImgContainer);
      }
   }
}

// ! THE x IS AN OBJECT AND BY TYPING . next to it you ACCESS ITS CONTENT(property)

// .STAR RATING
function starRating(products) {
   products.forEach((x) => {
      const stars = document.querySelectorAll(`#stars-box-${x.id} iconify-icon`);
      stars.forEach((star, index1) => {
         star.addEventListener("click", () => {
            stars.forEach((star, index2) => {
               if (index1 >= index2) {
                  star.classList.add("active");
               } else {
                  star.classList.remove("active");
               }
            });
         });
      });
   });
}

// *CALL STAR RATING FOR EACH PAGE
if (products || products2 || productsShop) {
   starRating(productsList);
}

// .ADD TO CART FUNCTION
let cart = JSON.parse(localStorage.getItem("Data")) || []; // ? || Is or so if there is localstorage already use it  if not use empty array

let increaseAmountButton = document.getElementById("IncreaseingAmount");
let decreaseAmountButton = document.getElementById("decreaseingAmount");

let addedItem = async (id) => {
   let amount = exactQuantityInput;
   if (amount <= 0) {
      alert("Please add at least one item.");
      document.getElementById("quantityItem").value = 1;
      return;
   }

   //? When clothingSizes() resolves with a value (i.e., you select a size), the value is assigned to selectedSize. If clothingSizes() rejects (i.e., you don't select a size within the time limit), the catch block is executed.
   // ? Even though the catch block is present, it's only executed if the promise is rejected. Since the promise is resolved with a value (the selected size), the catch block is skipped.dsa
   let selectedSize = await clothingSizes().catch(() => {
      alert("Please select a size");
      document.getElementById("quantityItem").value = 1;
      exactQuantityInput = 1
      return null;
   });

   if (!selectedSize) return; //? if it's null(no size selected) it stops the code right here

   let addedProduct = id;
   let search = cart.find(
      (alreadyProduct) => alreadyProduct.id === addedProduct && alreadyProduct.size === selectedSize
   ); // Check if the item with the same ID and size is already in the cart

   if (search === undefined) {
      // If the item isn't in the cart, add it
      cart.push({
         id: addedProduct,
         item: amount,
         size: selectedSize,
      });
   } else {
      search.item += amount; // If the item is there, increase the quantity
   }
   let addToCartButton = document.querySelector(".pro-add-button");
   
   // ?Google analytics
   addToCartButton.setAttribute("data-product-id", id);
   addToCartButton.setAttribute('data-amount', amount)
   addToCartButton.setAttribute('product-size', selectedSize)
   console.log("Added to cart:", { id, amount, selectedSize }); // Debugging
   
   exactQuantityInput = 1; //? reset the amount value after adding to cart
   document.getElementById("quantityItem").value = 1; //? reset the amount value after adding to cart
   // Debug and remove the 'selected' class from all size buttons
   let sizeButtons = document.querySelectorAll(".size-button");
   if (sizeButtons.length > 0) {
      sizeButtons.forEach((btn) => btn.classList.remove("selected"));
   } else {
      console.warn("No size buttons found");
   }

   updateCartAmountNum();
   localStorage.setItem("Data", JSON.stringify(cart));
};

// .Update the cart items number (left upper corner)

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

// Call the function when the product page loads
window.onload = () => {
   changeStarsColorTheme();
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
      loginOverlay.addEventListener("click", closePopups); //? or close the popup by clicking the overlay
   });

   if (registerSwitch) {
      registerSwitch.addEventListener("click", switchToRegister);
   }

   if (loginSwitch) {
      loginSwitch.addEventListener("click", switchToLogin);
   }
});

// .SINGLE PRODUCT PAGE

let MainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-product-image");

function changeImages(smallImg) {
   // Convert HTMLCollection to an array
   const smallImgArray = Array.from(smallImg);

   smallImgArray[0].classList.add("shown");

   for (let i = 0; i < smallImgArray.length; i++) {
      smallImgArray[i].onclick = function () {
         //? Remove the 'shown' class from all small images
         smallImgArray.forEach((eachImg) => eachImg.classList.remove("shown"));

         //? Swap the sources between the main image and the clicked small image
         MainImg.src = smallImgArray[i].src;
         // ? add the class shown to the clicked img only
         smallImgArray[i].classList.add("shown");
      };
   }
}
//? making it not decrease less than 0 the input number
let quantityInput = document.getElementById("quantityItem");
if (quantityInput) {
   exactQuantityInput = Number(document.getElementById("quantityItem").value);
}
if (MainImg) {
   fillInProductPage(); // this to load info for the single product page
   changeImages(smallImg);
   // Add event listener to check the value on change
   quantityInput.addEventListener("input", () => {
      let value = Number(quantityInput.value);

      // If the value is less than 1, reset it to 1
      if (value < 1) {
         quantityInput.value = 1;
      }
      // Update the exactQuantityInput variable when the user manually changes the value or when changed via the input arrows
      exactQuantityInput = Number(quantityInput.value);
   });

   // *Increase and Decrease Button
   increaseAmountButton.addEventListener("click", () => {
      exactQuantityInput += 1;
      quantityInput.value = exactQuantityInput; // let them both match each other
   });
   decreaseAmountButton.addEventListener("click", () => {
      if (exactQuantityInput > 1) {
         exactQuantityInput -= 1;
      }

      quantityInput.value = exactQuantityInput;
   });
}

// .GET FEATURE CLOTHING

let bigFeatureClothingCon = document.getElementById("product1");
let featureClothingCon = document.createElement("div");
featureClothingCon.classList.add("pro-container");
if (bigFeatureClothingCon) {
   bigFeatureClothingCon.appendChild(featureClothingCon);
}

function fillInFeaturedClothing() {
   // ? we're going add the ids in this set(unique) it only registers unique values no repeats
   const addedProductIds = new Set();
   // Get a random index from the productList array
   for (let i = 0; i < 8; i++) {
      let randomIndex;
      let productRandom;

      // ? do does the first loop regardless of the while condition so it will add the first product index to productRandom
      do {
         randomIndex = Math.floor(Math.random() * productsList.length);
         productRandom = productsList[randomIndex];
      } while (addedProductIds.has(productRandom.id));
      //? The while part checks if we've already picked this product by looking in our Set (addedProductIds).
      //? If we have already picked it, the loop runs again to pick a different random product

      //? Once we find a product we haven't picked before, we add its ID to our Set (addedProductIds) so we remember not to pick it again.
      addedProductIds.add(productRandom.id);

      //? after that create a card for each random product index
      productsList.forEach((product) => {
         // ? if the product id matches the random one which it will and i added it just for me to use productRandom
         if (product.id === productRandom.id) {
            let eachProduct = document.createElement("div");
            eachProduct.classList.add("pro");
            let eachProductMore = document.createElement("div");
            eachProductMore.innerHTML = `
            <a href="productp.html?id=${productRandom.id}">
                     <img class="product-image" src="${productRandom.img}" title="" style="">
                     <div class="des">
                        <span>${productRandom.brand}</span>
                        <h4>${productRandom.name}</h4>
                        <div class="star stars-box" id="stars-box-${productRandom.id}">
                           <iconify-icon icon="fa-regular:star" style="color: white;" class="stars-rating"></iconify-icon>
                           <iconify-icon icon="fa-regular:star" style="color: white;" class="stars-rating"></iconify-icon>
                           <iconify-icon icon="fa-regular:star" style="color: white;" class="stars-rating"></iconify-icon>
                           <iconify-icon icon="fa-regular:star" style="color: white;" class="stars-rating"></iconify-icon>
                           <iconify-icon icon="fa-regular:star" style="color: white;" class="stars-rating"></iconify-icon>
                        </div>
                        <h5>$${productRandom.price}</h5>
                     </div>
                  `;
            eachProduct.appendChild(eachProductMore);
            featureClothingCon.appendChild(eachProduct);
         }
      });
   }
}
if (MainImg) {
   fillInFeaturedClothing();
}

// *CLOTHING SIZES
function clothingSizes() {
   return new Promise((resolve, reject) => {
      // Function to handle size selection
      function handleSizeSelection(button) {
         // Remove 'selected' class from all buttons
         document.querySelectorAll(".size-button").forEach((btn) => btn.classList.remove("selected"));
         // Add 'selected' class to clicked button
         button.classList.add("selected");
         // Get the size from the button and resolve the promise
         let selectedSize = button.getAttribute("data-size");
         resolve(selectedSize);
      }

      // Check if a size is already selected
      let alreadySelectedButton = document.querySelector(".size-button.selected");
      if (alreadySelectedButton) {
         // If a size is already selected, resolve immediately
         resolve(alreadySelectedButton.getAttribute("data-size"));
      } else {
         // If no size is selected, set up listeners for selection
         document.querySelectorAll(".size-button").forEach((button) => {
            button.addEventListener("click", () => handleSizeSelection(button));
         });

         // Reject the promise after 1 second if no size is selected
         setTimeout(() => {
            reject();
         }, 200);
      }
   });
}

//? The .then() method is used with JavaScript promises to handle the result of a promise once it has been resolved or fulfilled

if (MainImg) {
   clothingSizes();
}

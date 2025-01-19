// .........HOME PAGE
let productsList = [
   {
      id: "3149",
      brand: "POLO",
      name: "White T-Shirt",
      price: 45,
      gender: 'Male',
      img: "https://img01.ztat.net/article/spp-media-p1/55f026a63519430db6aa1aeb2d5cedd3/cdc8ab1c98f84d08b6ef1a27be8566f2.jpg?imwidth=762",
      description:
         "Upgrade your basics with this premium white T-shirt. Crafted from soft, breathable cotton, it features a relaxed fit and a minimalist embroidered logo. Perfect for casual or smart casual looks, team it with jeans or tracksuit bottoms for versatile styling. Durable, easy-care and timelessly stylish, this T-shirt is a wardrobe essential.",
      smallImages: [
         "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1298913_alternate10",
         "https://m.media-amazon.com/images/I/6152uBSgFML.jpg",
      ],
   },
   {
      id: "2013",
      brand: "Polo",
      name: "The Classic Polo",
      price: 40,
      gender: 'Male',
      img: "https://www.meltemi.co.uk/content/images/thumbs/0031957_unisex-single-tipped-polo-shirt.jpeg",
      description:
         "Upgrade your wardrobe with our premium white polo shirt, designed for both style and functionality. Crafted from high-quality, breathable fabric, this shirt offers unmatched comfort, making it perfect for casual outings, office wear, or sports activities.",
      smallImages: [
         "https://cdn.dsmcdn.com/mnresize/600/-/ty1440/product/media/images/prod/QC/20240726/11/ad626a88-1e95-328d-b513-618c139776a1/1_org_zoom.jpg",
         `https://cdn.dsmcdn.com/mnresize/600/-/ty1441/product/media/images/prod/QC/20240726/11/6a0df2dc-5485-33e6-9df5-710c5c073413/1_org_zoom.jpg`,
      ],
   },
   {
      id: "fsfes",
      brand: "Nike",
      name: "Grey Shirt",
      price: 21,
      gender: 'Male',
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/yql7ozajhdesi8vklgb3/sportswear-t-shirt-GQFmbc.png",
      description:
         "Step up your casual wardrobe with this grey Nike T-shirt featuring the classic Swoosh logo. Crafted from soft, breathable fabric, it offers a relaxed fit for all-day comfort. Perfect for workouts or a laid-back look, it pairs effortlessly with tracksuit bottoms, shorts or jeans. Stay stylish and comfortable wherever you go!",
      smallImages: ["https://www.jdsports.cy/2694751-product_vertical/nike-m-nsw-tee-icon-futura.jpg"],
   },
   {
      id: "gerergh",
      brand: "POLO",
      name: "The Apex Stripe Shirt",
      price: 40.99,
      gender: 'Male',
      img: "https://m.media-amazon.com/images/I/41o-o2gQaML.jpg",
      description: `This is a men's gray casual shirt with a stylish double black stripe design. The shirt features a classic collar, button-down front, and long sleeves. It is perfect for casual wear or can be dressed up for a more formal look. Pair this shirt with jeans or chinos for a great look.`,
      smallImages: [
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzyMzGqwqi4Hbv1_cVEwdPzk_pveJu450e0A&usqp=CAU",
      ],
   },
   {
      id: "htehet",
      brand: "BOSS",
      name: "The Signature Crew",
      price: 55.4,
      gender: 'Male',
      img: "https://images.hugoboss.com/is/image/boss/hbeu50468347_404_340?wid=1376&fit=crop,1&align=1,1",
      description:
         "Classic crew neck tee in a dark navy. Subtle BOSS logo. Premium cotton blend. Comfortable fit. Ideal for layering or casual wear.",
      smallImages: [
         "https://cdn.aboutstatic.com/file/images/1b9158436673b34cff38253b36d7c202.jpg",
         "https://cdn.aboutstatic.com/file/images/58445e5f6f85f7efd8450ef67476dcc6.jpg?quality=75&height=1280&width=960",
         "https://cdn.aboutstatic.com/file/images/6d9a87f69d8db30decf94b7c78c6b3c3.jpg?quality=75&height=1280&width=960",
      ],
   },
   {
      id: "ewfew",
      brand: "CLARK'S",
      name: "Metallica Shirt",
      price: 30.99,
      gender: 'Male',
      img: "https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-men/default/dw8e580ed5/3610922/3610922-302-2.jpg?sw=640&sh=960&sm=fit",
      description: `Men's grey vintage-wash t-shirt with a classic Metallica graphic. Crew neck, short sleeves. Soft cotton blend. Perfect for music fans.`,
      smallImages: [
         "https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-men/default/dw7ca7baa6/3610922/3610922-302-4.jpg?sw=640&sh=960&sm=fit",
         "https://cottonon.com/on/demandware.static/-/Sites-catalog-master-men/default/dw58abfa21/3610922/3610922-302-1.jpg",
      ],
   },
   {
      id: "t4224",
      brand: "Coastal & Co",
      name: "The Mariner Stripe Shirt",
      price: 22,
      gender: 'Male',
      img: "https://rukminim2.flixcart.com/image/550/650/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=90&crop=false",
      description:
         "Stylish light green and white striped shirt. Classic collar, button-down front, long sleeves. Lightweight and breathable fabric. Versatile for casual or smart-casual looks.",
      smallImages: [
         "https://static.wixstatic.com/media/5fc490_40130735af97423b98a623c4ca0bfe04~mv2.jpg/v1/fill/w_500,h_624,al_c,q_80,enc_auto/5fc490_40130735af97423b98a623c4ca0bfe04~mv2.jpg",
      ],
   },
   {
      id: "eheht3w4",
      brand: "Island Bloom",
      name: "The Paradise Garden Flow Pants",
      price: 15.99,
      gender: 'Female',
      img: "https://i5.walmartimages.com/seo/Special-Introductory-Prices-HIMIWAY-Ladies-Summer-Print-Elastic-Waist-Loose-Casual-Wide-Leg-Pants-Trousers-Black-L_d558ae83-81cf-479d-8871-08cd21d75933.b81fe3e0a07ad07cffee3e3968b08d0e.jpeg",
      description:
         "Embrace effortless elegance with The Midnight Garden Palazzo Pants from Island Bloom. These striking black palazzo pants feature a captivating floral print, with large, soft peach and white blooms at the bottom hem, and scattered leaves and stars across the top. The lightweight, flowy fabric drapes beautifully, providing both comfort and style. With an elastic waistband for a relaxed fit, these pants are perfect for beach days, summer evenings, or any occasion where you want to feel both comfortable and chic. Made from a breathable and soft rayon blend.",
      smallImages: [
         "https://i5.walmartimages.com/asr/524f9741-0755-4260-83c9-00dde8928fd8.324866c2fce270be4848306b82ce3fe1.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
         "https://i5.walmartimages.com/asr/393d2b43-63c9-499a-af33-011e6a39c530.eb305a3120a575b460d2eb4b9806532b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      ],
   },
   {
      id: "gsgsegse",
      brand: "Golden Sands",
      name: "The Coastal Breeze Pants",
      price: 27,
      gender: 'Female',
      img: "https://m.media-amazon.com/images/I/8178lHBIgaL._AC_SY741_.jpg",
      description:
         "Experience the ultimate in comfort and style with The Coastal Breeze Palazzo Pants from Golden Sands. These elegant off-white palazzo pants are crafted from a lightweight, breathable fabric, featuring a flattering high-rise smocked waistband for a comfortable, relaxed fit. The wide-leg design allows for effortless movement, perfect for beach days, travel, or everyday comfort. These pants also include practical side pockets. Made from a soft linen blend.",
      smallImages: [
         "https://m.media-amazon.com/images/I/71hbiLWNLYL._AC_SX569_.jpg",
         "https://m.media-amazon.com/images/I/610240iKFGL._AC_SY741_.jpg",
      ],
   },
   {
      id: "egsesgsees",
      brand: "REEBOK",
      name: "Beige Pants",
      price: 29.99,
      gender: 'Male',
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1686367463-m-pnt-16-drft-0807-6483ecde6923e.jpg?crop=0.822xw:0.658xh;0.149xw,0.338xh&resize=980:*",
      description:
         "Experience effortless style and comfort. These versatile, light beige pants feature a relaxed fit, an elastic waistband with a drawstring for a perfect fit, and a straight-leg design for a classic look. Made from a lightweight, breathable linen blend, these pants are ideal for warm weather, casual outings, or relaxed evenings at home. Includes practical side pockets.",
      smallImages: [
         "https://media.centrepointstores.com/i/centrepoint/2304066-OXFORDTROUS-SPW2327723_03-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$",
         "https://media.centrepointstores.com/i/centrepoint/2304066-OXFORDTROUS-SPW2327723_02-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$",
      ],
   },
   {
      id: "5h335h",
      brand: "Mystic",
      name: "Glowing Flowers",
      price: 38,
      gender: 'Female',
      img: "https://m.media-amazon.com/images/I/71vW6+K8AoS._AC_UF894,1000_QL80_.jpg",
      description:
         "Discover effortless elegance with The Glowing Flowers from Mystic. This stunning maxi dress features a captivating deep floral print with lush foliage against a dark background. The dress has a flattering V-neckline and a cinched drawstring waist, which creates a flowing, comfortable fit. This sleeveless dress is perfect for summer evenings, special occasions, or adding a touch of bohemian chic to your everyday style. Crafted from a lightweight and breathable rayon blend.",
      smallImages: [
         "https://i5.walmartimages.com/asr/92c77bcc-729f-4811-94c0-2181d5d3da1b.623481a9bb4b754538839ed3e60f3ab8.jpeg",
         "https://i5.walmartimages.com/asr/7c1ca461-6bc6-419f-b5ba-2f475eeeba66.bb02fbd15bb54d6648e340a676a50892.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      ],
   },
   {
      id: "2441h1",
      brand: "Shine Bloom",
      name: "The Secret Garden",
      price: 32.2,
      gender: 'Female',
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1683060678-81510R25GPL.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
         "Step into spring with The Secret Garden from Shine Bloom. This delightful knee-length dress features a delicate, all-over floral print in soft sage green and off-white. The dress boasts a flattering V-neckline, a cinched waistline, and charming flutter sleeves, all contributing to a comfortable, playful, and feminine look. Perfect for sunny days, garden parties, and everyday charm, this dress is made from a soft, breathable rayon blend.",
      smallImages: [
         "https://m.media-amazon.com/images/I/81W81RvtoyL._AC_SY741_.jpg",
         "https://m.media-amazon.com/images/I/814GpdaRncL._AC_SY741_.jpg",
      ],
   },
   {
      id: "hreher",
      brand: "Oceania Oasis",
      name: "The Palm Grove Button-Down Shirt",
      price: 35,
      gender: 'Male',
      img: "https://m.media-amazon.com/images/I/81loCYmHvdL._AC_UY350_.jpg",
      description:
         "Transport yourself to a tropical paradise with The Palm Grove Button-Down Shirt from Oceania Oasis. This vibrant shirt features a captivating palm leaf print in shades of blue, green, and black. The shirt is designed with a relaxed fit, a classic camp collar, short sleeves, and a button-down front, ideal for summer days, beach getaways, or adding a touch of vacation style to your everyday look. Made from a lightweight, breathable rayon blend.",
      smallImages: [
         "https://i5.walmartimages.com/asr/a189a1ae-302c-46b0-8e68-3e958453e373.5cb00da69f82761e5e2e20d58f8582fe.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
         "https://m.media-amazon.com/images/I/81jG6x9LyKL.jpg",
      ],
   },
   {
      id: "43t34",
      brand: "Seabreeze",
      name: "The Coastal Stripe Shirt",
      price: 12.99,
      gender: 'Male',
      img: "https://ml.thcdn.com/productimg/960/960/14555698-7485053462632516.jpg",
      description:
         "Embrace laid-back style with The Coastal Stripe Shirt from Seabreeze. This short-sleeve shirt features a classic camp collar and a vertical stripe pattern in shades of light blue, soft red, and beige. Crafted from a breathable cotton blend, this relaxed-fit shirt is perfect for warm weather, casual outings, or adding a touch of retro-inspired charm to your everyday style. It features a button-down front.",
      smallImages: [],
   },
   {
      id: "fgdrgw",
      brand: "H&M",
      name: "White Blouse",
      price: 17,
      gender: 'Female',
      img: "https://media1.popsugar-assets.com/files/thumbor/6nHuUdnZV87xYCkVAGY7aD6TjF4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/15/943/n/1922564/2af0bba7c3e01b5c_netimgE6DpT9/i/HM-Crinkled-Blouse.jpg",
      description:
         "Experience effortless sophistication from H&M. This elegant blouse features a relaxed fit, a subtle V-neckline, and stylish short sleeves with a cuffed detail. The lightweight, semi-sheer fabric drapes beautifully, creating a comfortable and chic look. This versatile blouse is perfect for both casual and smart-casual outfits, as well as layering. Made from a breathable rayon blend.",
      smallImages: [
         "https://shopbluhome.com/cdn/shop/files/Screenshot2024-06-03at10.57.28PM.png?v=1717469856&width=1000",
      ],
   },
   {
      id: "34h345t",
      brand: "Vivid Flora",
      name: "The Azure Bloom Sleeveless Blouse",
      price: 14,
      gender: 'Female',
      img: "https://romans-cdn.rlab.net/images/extralarge/717f91cf-5f4e-4af2-bfe3-13c4f6a38ac1.jpg",
      description:
         "Add a splash of color to your wardrobe with The Azure Bloom Sleeveless Blouse from Vivid Flora. This striking blouse features a vibrant floral print in shades of electric blue, ruby red, and sky blue, on a soft, lightweight fabric. The blouse has a flattering V-neckline, a sleeveless design with a gentle cap sleeve effect, and a practical front pocket. With its relaxed fit, this blouse is perfect for sunny days, casual outings, or adding a bold touch to your everyday style. Crafted from a breathable rayon blend.",
      smallImages: [
         "https://content.roman.co.uk/images/original/d6ed16fc-a4bb-478e-9d19-30a103d5322c.jpg",
         "https://content.roman.co.uk/images/original/7b6a0050-2498-42e9-ab51-47e3ff0fb64c.jpg",
         "https://content.roman.co.uk/images/original/b45680a5-424a-4a4a-a676-befccf140717.jpg",
      ],
   },
];

// *For Google Analytics Tracking products

//* Extract product ID from the URL (example: ?id=fsfes)
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id'); // Get product ID from URL


// * Find product by ID
const foundProduct = productsList.find((item) => item.id === productId)


// * if found (if = true continue) and it will equal true if it's there
if (foundProduct) {
   gtag('event','view_item', {
      items: [{
         item_id: foundProduct.id,
         item_name: foundProduct.name,
         item_brand: foundProduct.brand,
         item_price: foundProduct.price,
      }]
   })
}

// .........HOME PAGE
let productsList = [
   {
      id: "3149",
      brand: "POLO",
      name: "White T-Shirt",
      price: 45,
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
      img: "https://m.media-amazon.com/images/I/81PAnHt5qQL.jpg",
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
      img: "https://images.hugoboss.com/is/image/boss/hbeu50468347_404_340?wid=1376&fit=crop,1&align=1,1",
      description:
         "Classic crew neck tee in a dark navy. Subtle BOSS logo. Premium cotton blend. Comfortable fit. Ideal for layering or casual wear.",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "ewfew",
      brand: "CLARK'S",
      name: "Metallica Shirt",
      price: 30.99,
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
      img: "https://rukminim2.flixcart.com/image/550/650/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=90&crop=false",
      description:
         "Stylish light green and white striped shirt. Classic collar, button-down front, long sleeves. Lightweight and breathable fabric. Versatile for casual or smart-casual looks.",
      smallImages: [
         "https://static.wixstatic.com/media/5fc490_40130735af97423b98a623c4ca0bfe04~mv2.jpg/v1/fill/w_500,h_624,al_c,q_80,enc_auto/5fc490_40130735af97423b98a623c4ca0bfe04~mv2.jpg",
      ],
   },
];

let productsList2 = [
   {
      id: "eheht3w4",
      brand: "Adidas",
      name: "Flowers Pants",
      price: 15.99,
      img: "https://m.media-amazon.com/images/I/71pQ9qVpN4L._AC_UY350_.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "gsgsegse",
      brand: "POLO",
      name: "White Pants",
      price: 27,
      img: "https://m.media-amazon.com/images/I/611yqL1sMZL._AC_UY580_.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "egsesgsees",
      brand: "REEBOK",
      name: "Beige Pants",
      price: 29.99,
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1686367463-m-pnt-16-drft-0807-6483ecde6923e.jpg?crop=0.822xw:0.658xh;0.149xw,0.338xh&resize=980:*",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "5h335h",
      brand: "FMOE",
      name: "Flowers Dress",
      price: 38,
      img: "https://m.media-amazon.com/images/I/71vW6+K8AoS._AC_UF894,1000_QL80_.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "2441h1",
      brand: "TU CLOTHING",
      name: "Green Dress",
      price: 32.2,
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1683060678-81510R25GPL.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "hreher",
      brand: "POLO",
      name: "Hawaiian Shirt",
      price: 35,
      img: "https://m.media-amazon.com/images/I/81loCYmHvdL._AC_UY350_.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "43t34",
      brand: "POLO",
      name: "Striped Shirt",
      price: 12.99,
      img: "https://ml.thcdn.com/productimg/960/960/14555698-7485053462632516.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "fgdrgw",
      brand: "LEVI'S",
      name: "Plain White Blouse",
      price: 17,
      img: "https://media1.popsugar-assets.com/files/thumbor/6nHuUdnZV87xYCkVAGY7aD6TjF4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/15/943/n/1922564/2af0bba7c3e01b5c_netimgE6DpT9/i/HM-Crinkled-Blouse.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "34h345t",
      brand: "H&M",
      name: "Blue Blouse",
      price: 14,
      img: "https://romans-cdn.rlab.net/images/extralarge/717f91cf-5f4e-4af2-bfe3-13c4f6a38ac1.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
];
// .SHOP PAGE
let productListShop = [
   {
      id: "3149",
      brand: "POLO",
      name: "White T-Shirt",
      price: 45,
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
      img: "https://m.media-amazon.com/images/I/81PAnHt5qQL.jpg",
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
      img: "https://images.hugoboss.com/is/image/boss/hbeu50468347_404_340?wid=1376&fit=crop,1&align=1,1",
      description:
         "Classic crew neck tee in a dark navy. Subtle BOSS logo. Premium cotton blend. Comfortable fit. Ideal for layering or casual wear.",
      smallImages: [
         "https://cdn.aboutstatic.com/file/images/6d9a87f69d8db30decf94b7c78c6b3c3.jpg?quality=75",
      ],
   },
   {
      id: "ewfew",
      brand: "CLARK'S",
      name: "Metallica Shirt",
      price: 30.99,
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
      img: "https://rukminim2.flixcart.com/image/550/650/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=90&crop=false",
      description:
         "Stylish light green and white striped shirt. Classic collar, button-down front, long sleeves. Lightweight and breathable fabric. Versatile for casual or smart-casual looks.",
      smallImages: [
         "https://static.wixstatic.com/media/5fc490_40130735af97423b98a623c4ca0bfe04~mv2.jpg/v1/fill/w_500,h_624,al_c,q_80,enc_auto/5fc490_40130735af97423b98a623c4ca0bfe04~mv2.jpg",
      ],
   },
   {
      id: "eheht3w4",
      brand: "Adidas",
      name: "Flowers Pants",
      price: 15.99,
      img: "https://m.media-amazon.com/images/I/71pQ9qVpN4L._AC_UY350_.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "gsgsegse",
      brand: "POLO",
      name: "White Pants",
      price: 27,
      img: "https://m.media-amazon.com/images/I/611yqL1sMZL._AC_UY580_.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "egsesgsees",
      brand: "REEBOK",
      name: "Beige Pants",
      price: 29.99,
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1686367463-m-pnt-16-drft-0807-6483ecde6923e.jpg?crop=0.822xw:0.658xh;0.149xw,0.338xh&resize=980:*",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "5h335h",
      brand: "FMOE",
      name: "Flowers Dress",
      price: 38,
      img: "https://m.media-amazon.com/images/I/71vW6+K8AoS._AC_UF894,1000_QL80_.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "2441h1",
      brand: "TU CLOTHING",
      name: "Green Dress",
      price: 32.2,
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1683060678-81510R25GPL.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description: `Men's grey vintage-wash t-shirt with a classic Metallica graphic. Crew neck, short sleeves. Soft cotton blend. Perfect for music fans.`,
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "hreher",
      brand: "POLO",
      name: "Hawaiian Shirt",
      price: 35,
      img: "https://m.media-amazon.com/images/I/81loCYmHvdL._AC_UY350_.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "43t34",
      brand: "POLO",
      name: "Striped Shirt",
      price: 12.99,
      img: "https://ml.thcdn.com/productimg/960/960/14555698-7485053462632516.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "fgdrgw",
      brand: "LEVI'S",
      name: "Plain White Blouse",
      price: 17,
      img: "https://media1.popsugar-assets.com/files/thumbor/6nHuUdnZV87xYCkVAGY7aD6TjF4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/15/943/n/1922564/2af0bba7c3e01b5c_netimgE6DpT9/i/HM-Crinkled-Blouse.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
   {
      id: "34h345t",
      brand: "H&M",
      name: "Blue Blouse",
      price: 14,
      img: "https://romans-cdn.rlab.net/images/extralarge/717f91cf-5f4e-4af2-bfe3-13c4f6a38ac1.jpg",
      description: "A polo white t-shirt",
      smallImages: [
         "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1311093_alternate10?$plpDeskRF$",
         "https://media.very.co.uk/i/very/4DGRD_SQ1_0000000013_WHITE_MDf?$pdp_300x400_x2$&fmt=jpg",
      ],
   },
];
let allProductLists = [...productListShop, ...productsList, ...productsList2];

const all_products = [
  {
    name: "Persona 3: Reload",
    producerID: "651148b992e0996a8e2b7542",
    maker: "Atlus game",
    imgURL:
      "https://upload.wikimedia.org/wikipedia/en/6/65/Persona_3_Reload_box_art.jpg",
    info: "Name : Persona 3: Re:Load, a rebirth of shadows and destiny awaits.",
    price: 4500,
    category: "RPG",
  },
  {
    name: "Skull The hero slayer",
    producerID: "650d3a0a1a43390435a92f2e",
    maker: "South Paw Games",
    imgURL:
      "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-867590-52.jpg",
    info: "Rogue-lite action platformer: Skull battles foes, seeks vengeance against sorceress.",
    price: 1400,
    category: "Indie",
  },
  {
    name: "Horizon: forbidden west",
    producerID: "650d79943bf5a2b175b5df40",
    maker: "Guerrilla Games",
    imgURL:
      "https://www.mordeo.org/files/uploads/2023/03/Horizon-Call-of-The-Mountain-Game-Poster-4K-Ultra-HD-Mobile-Wallpaper.jpg",
    info: "Post-apocalyptic adventure: Aloy uncovers mysteries, battles robotic beasts to save world.",
    price: 2500,
    category: "Action, Adventure",
  },
  {
    name: "Treasure Quest",
    producerID: "650d34181a43390435a92edf",
    maker: "NNK Studios",
    imgURL: "https://i.ibb.co/KNgNXkk/a1aa6f37-7175-41c7-b91d-f3302943690e.jpg",
    info: "Brave explorer conquers lands, faces foes, and confronts final evil.",
    price: 4000,
    category: "indie",
  },
  {
    name: "Ghost wire: Tokyo",
    producerID: "650d34181a43390435a92ede",
    maker: "Tango Gameworks",
    imgURL:
      "https://wallpapercosmos.com/w/full/3/e/9/115893-1920x2397-samsung-hd-ghostwire-tokyo-background.jpg",
    info: "Mysterious disappearances in Tokyo; unravel supernatural occurrences, combat occult forces.",
    price: 2500,
    category: "Action, Adventure",
  },
  {
    name: "Sifu",
    producerID: "650d3a0a1a43390435a92f2e",
    maker: "Sloclap",
    imgURL:
      "https://i.pinimg.com/564x/f0/27/62/f02762981516e464d94edee806df29c2.jpg",
    info: "Stylish martial arts action, challenging gameplay, skill-based combat, captivating storyline.",
    price: 2700,
    category: "Indie",
  },

  //gadgets
  {
    name: "Dragon Ball FighterZ",
    producerID: "651148b992e0996a8e2b7542",
    maker: "Phone Case",
    imgURL:
      "https://thehatke.com/cdn/shop/products/IMG_8661_697bb344-95fb-4158-a503-966dc55730ed_540x.jpg?v=1647019010",
    info: "Made of premium soft silicone like TPU material, the Smooth silicone layer feels very soft in hand and provides good grip.@Lightweight and slim-fit design.@Keep your phone safe out of Dust and scratches.",
    price: 5,
    category: "Gadgets",
  },
  {
    name: "Gnaneswar",
    producerID: "650d79943bf5a2b175b5df40",
    maker: "Laptop",
    imgURL: "https://m.media-amazon.com/images/I/811aBK9bUFL._SL1500_.jpg",
    info: "Brand HP@Model Name 15s-fq3071TU@Screen Size 39.6 Centimetres@Colour Natural Silver@Hard Disk Size 512 GB@CPU Model Celeron@RAM Memory Installed Size 8 GB",
    price: 45,
    category: "Gadgets",
  },
  {
    name: "Gnaneswar",
    producerID: "650d79943bf5a2b175b5df40",
    maker: "airpods",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPw73Vn4KL3qVfcwkZUq66eeNrQkKyhjoMvJMcU_lBHGBpcIs5TM41BJai2p_Hy1-QUeYQfMzrp28159h1dCzK8of6eeQqQTocVDHW-onS5Je3bCNz8ZG9&usqp=CAE",
    info: "Name : Airpods Pro TWS Bluetooth Headphones & Earphones@Battery Charge Time : 1 Hour@Bluetooth Range : 10m@Bluetooth Version : 5.0@Charging Type : Micro USB@Color : White.",
    price: 8,
    category: "Gadgets",
  },
  //accessories
  {
    name: "Nikhitha",
    producerID: "650d34181a43390435a92ede",
    maker: "EarRings",
    imgURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/c/tr:w-480,/eck19_nyf1_2_09cf26ec.jpg?rnd=20200526195200",
    info: "Care Instructions@Always Store Oomph's Jewellery In A Separate Box And Do Not Mix It With Other Jewellery To Avoid Tangling. Keep It Away From Water, Perfume And Other Chemicals. Clean It With Dry And Soft Cloth.@Pack Contains@1 Pair Of Earrings",
    price: 3,
    category: "Accessories",
  },
  {
    name: "Nikhitha",
    producerID: "650d34181a43390435a92ede",
    maker: "Bracelet",
    imgURL:
      "https://marchjewellery.com/cdn/shop/products/MKBR172SSZN_1_900x.jpg?v=1694802870",
    info: "SKU : MKBR172SSZN@Material : Sterling Silver@Plating : 1-year Plating Warranty@Weight : 1.6 gm@Dimensions : Length - 15.1 cm, Width - 0.1 cm",
    price: 5,
    category: "Accessories",
  },
  {
    name: "Akhilendra",
    producerID: "650d3a0a1a43390435a92f2e",
    maker: "Goggles",
    imgURL:
      "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-green-full-rim-round-vincent-chase-the-metal-edit-vc-s13137-c5-sunglasses_vincent-chase-vc-s13137-c5-c5-sunglasses_g_8680_5july23.jpg",
    info: "grey green color unique style goggles for men with 139 mm frame size",
    price: 5.6,
    category: "Accessories",
  },
  {
    name: "VenkataKousik",
    producerID: "651148b992e0996a8e2b7542",
    maker: "Watch",
    imgURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/a/tr:w-480,/casio-a832_1_9c90d0fd.jpg?rnd=20200526195200",
    info: "Case Thickness@10 mm@Strap Color@Silver@Chronograph@No@Dial Type@Analog@Diameter@44 mm@Shape@Round@Dial Color@Black@Warranty@2 Years",
    price: 10,
    category: "Accessories",
  },
  {
    name: "Akhilendra",
    producerID: "650d3a0a1a43390435a92f2e",
    maker: "Wallet",
    imgURL:
      "https://imagescdn.allensolly.com/img/app/product/7/720224-7958075.jpg?q=75&auto=format&w=342",
    info: "StyleCode: ASWAWRGBK40066@Pattern: Textured@ProductHeight: 9 cm@Occasion: Casual@Color: Black@Subbrand: Allen Solly@ProductType: Wallet@Material: Genuine Leather",
    price: 4.8,
    category: "Accessories",
  },
  //foot wear
  {
    name: "VenkataKousik",
    producerID: "651148b992e0996a8e2b7542",
    maker: "Sneakers",
    imgURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/2/tr:w-480,/d2fc6ceRUSPOL00113833_0.jpg?rnd=20200526195200",
    info: "Sole Material@EVA@Pattern@Textured@Material@Fabric@Occasion@Casual@Toe Shape@Round Toe@Care Instructions@Wipe With Dry Cloth.",
    price: 12,
    category: "Foot Wear",
  },
  {
    name: "Nikhitha",
    producerID: "650d34181a43390435a92ede",
    maker: "Heels",
    imgURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/d/tr:w-480,/7dadc94TC-ST-1335-NUD_5.jpg?rnd=20200526195200",
    info: "Occasion@Casual@Material@Suede@Pattern@Embellished/Sequined@Sole Material@Synthetic@Heel Height@1.5-2 Inch@Toe Shape@Square Toe@Heel Type@Blocks",
    price: 5,
    category: "Foot Wear",
  },
  //clothes
  {
    name: "Akhilendra",
    producerID: "650d3a0a1a43390435a92f2e",
    maker: "Shirt",
    imgURL:
      "https://thebearhouse.com/cdn/shop/products/TBH-KAMET-GY_4_1800x1800.jpg?v=1676965095",
    info: "Sleeve Length:LongSleeves@Collar:Spread Collar@Fit:Regular Fit@PSrint or Pattern Type:Tartan Checks@Occasion:Casual@Hemline:Curved@Placket@]:Button Placket",
    price: 7,
    category: "Clothes",
  },
  {
    name: "Nikhitha",
    producerID: "650d34181a43390435a92ede",
    maker: "Handbag",
    imgURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/m/n/tr:w-480,/mn-19008322001_1_d5b7e108.jpg?rnd=20200526195200",
    info: "Material:Polyurethane@Pattern:Solid/Plain@Warranty:No Warranty:Water Resistant:Not Water Resistant@Dimensions:30 x 37 x 13 cm@Closure:None@Handles:Yes@Compartment:Yes@Pockets:Yes",
    price: 5.3,
    category: "Clothes",
  },
  {
    name: "Gnaneswar",
    producerID: "650d79943bf5a2b175b5df40",
    maker: "T-Shirt",
    imgURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/0/tr:w-480,/305202_5_29546a92.jpg?rnd=20200526195200",
    info: "Pattern:Printed@Material:Cotton@Occasion:Casual@Neckline Type:Round Neck@Fit:Regular@Sleeve Type:Half Sleeves@Care Instructions:Machine Wash@Pack Contains:1 T-shirt",
    price: 4.5,
    category: "Clothes",
  },
  {
    name: "Gnaneswar",
    producerID: "650d79943bf5a2b175b5df40",
    maker: "Hoodie",
    imgURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/a/tr:w-480,/aa00b73ABFRL-VSSTURGFY87341_1.jpg?rnd=20200526195200",
    info: "Occasion@Casual@Pattern@Solid/Plain@Material@Cotton@Neckline Type@Hooded@Sleeve Type@Full Sleeves@Care Instructions@Machine Wash@Pack Contains@1 Hoodie",
    price: 9,
    category: "Clothes",
  },

  {
    name: "Gnaneswar",
    producerID: "650d79943bf5a2b175b5df40",
    maker: "Testo Mixed Pickel",
    imgURL:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/pickle-murabba/a/d/p/1-mixed-pickel-1-plastic-jar-pickle-testo-original-imagqkt2zxmhbdcg.jpeg?q=70",
    info: "Tastes:Tangy, Spicy, Sour, and Salty@Color:Is dark brown, and takes darker shades as the pickle matures.",
    price: 4.5,
    category: "Pickles",
  },
  {
    name: "Venkatakousik",
    producerID: "651148b992e0996a8e2b7542",
    maker: "Mixed Pickel",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTq0ft2JTIhEU8PEYd7JOu0zWC74L-NZEZ5rVnh8NIdPg99PUlUKXRxwLQ48Ur3IVj00qDu8r5a-AF0fRxnrggiQcK0rto2Usy786BI3popaOPeafJhrYo-bQ&usqp=CAE",
    info: "Tastes:Tangy, Spicy, Sour, and Salty@Color:Is dark brown, and takes darker shades as the pickle matures.",
    price: 4.5,
    category: "Pickles",
  },
  //mudcraft
  {
    name: "Akhilendra",
    producerID: "650d3a0a1a43390435a92f2e",
    maker: "Handi with Lid",
    imgURL: "https://m.media-amazon.com/images/I/41n5Mx1uGeL.jpg",
    info: "Material:Earthenware, Clay@Finish :Type Metallic@Brand VINTICA@Colour Brown@Capacity 1000 Milliliters@Product Dimensions 20D x 20W x 16H Centimeters@Is Oven Safe No",
    price: 4.5,
    category: "Mudcraft",
  },
  {
    name: "Gnaneswar",
    producerID: "650d79943bf5a2b175b5df40",
    maker: "Mud Pot",
    imgURL: "https://m.media-amazon.com/images/I/61EqrOHcaBL.SX522.jpg",
    info: "Keeps the water cool: The porous nature of earthenware allows the water to evaporate, which cools the water stored in the pot naturally. This makes the water refreshing and pleasant to drink, especially during hot weather.@Naturally alkaline: Earthen pots are alkaline in nature, which helps to balance the pH level of the water stored in them. This makes the water healthier to drink, as an alkaline environment helps to neutralize the acidity in the body.",
    price: 4.5,
    category: "Mudcraft",
  },
  {
    name: "Nikhitha",
    producerID: "650d34181a43390435a92ede",
    maker: "Handmade clay Water pot",
    imgURL: "https://m.media-amazon.com/images/I/71sgFKauRtL.SX522.jpg",
    info: "Keeps the water cool: The porous nature of earthenware allows the water to evaporate, which cools the water stored in the pot naturally. This makes the water refreshing and pleasant to drink, especially during hot weather.@Naturally alkaline: Earthen pots are alkaline in nature, which helps to balance the pH level of the water stored in them. This makes the water healthier to drink, as an alkaline environment helps to neutralize the acidity in the body.",
    price: 4.5,
    category: "Mudcraft",
  },
  {
    name: "Gnaneswar",
    producerID: "650d79943bf5a2b175b5df40",
    maker: "Handmade Necklace with matching earings",
    imgURL:
      "https://snehcrafts.b-cdn.net/wp-content/uploads/2019/01/IMG_5848-1.jpg",
    info: "Ideal For: Women / Girls@Style: Traditional@Coloou:,green,gold,and maroon@Base Material: Clay@Earring Closure Type: Stud@Chain Closure Type: Roop@Chain Measurement: 25cm@Earring Measurment:-3cm(length)@Sale Packaging: 1 Chain & 1 Pair of Earring@Product Weight: 45 Gram@Skin Friendly: Yes",
    price: 4.5,
    category: "Jewellery",
  },
  {
    name: "Akhilendra",
    producerID: "650d3a0a1a43390435a92f2e",
    maker: "Handmade Necklace set",
    imgURL:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPHWFjcv-0ChLfXvAPTt4Lrkd-jAdUeKMVWi3dj5G48SIPXd1xoN78djCMg91TdLnIzmZNZaaimbx7jKMBSnVTKaJk3OxcnXjCb8fKJQw&usqp=CAE",
    info: "Material Baked Mud/Clay@Colour Rani, Yellow, Maroon & Black@Stone Type No Stone@Size & Fit Necklace length 38 cm, Design length 6 cm, Necklace width 5.2 cm, Earring length 4.5 cm, Earring width 2.2 cm@Weight Necklace weight 28 gm, Earring weight 8 gm (4 gm each )@Model Name Ethnic Terracotta Jewellery Set.",
    price: 4.5,
    category: "Jewellery",
  },
  {
    name: "Venkatakousik",
    producerID: "651148b992e0996a8e2b7542",
    maker: "Handmade Earrings",
    imgURL:
      "https://snehcrafts.b-cdn.net/wp-content/uploads/2019/01/IMG_4005-1.jpg",
    info: "length: 3.5 cm@~Colour: multicolour@~Material: terracotta@~Hand painted using acrylic colors",
    price: 4.5,
    category: "Jewellery",
  },
];

export default all_products;

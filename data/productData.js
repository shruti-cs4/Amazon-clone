const products = [{
  id: "a1-b2-c3",
  image: 'items/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Grey Athletic Cotton Socks-6 Pairs',
  rating: {
    stars: 4.5,
    count: 86
  },
  priceCents: 1090 
}, {
  id: "d1-e2-f3",
  image: 'items/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799
}, {
  id: "g1-h2-i3",
  image: 'items/products/6-piece-white-dinner-plate-set.jpg',
  name: '6 Piece White Dinner Plate Set',
  rating: {
    stars: 4,
    count: 37
  },
  priceCents: 2067
}, {
  id: "j1-k2-l3",
  image: 'items/products/black-2-slot-toaster.jpg',
  name: '2 Slot Toaster - Black',
  rating: {
    stars: 5,
    count: 2197
  },
  priceCents: 1899
}, {
  id: "m1-n2-o3",
  image: 'items/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 4,
    count: 127
  },
  priceCents: 2095
}, {
  id: "p1-q2-r3",
  image: 'items/products/6-piece-non-stick-baking-set.webp',
  name: '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set',
  rating: {
    stars: 4.5,
    count: 175
  },
  priceCents: 3499
}, {
  id: "s1-t2-u3",
  image: "items/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
  name: "Plain Hooded Fleece Sweatshirt",
  rating: {
    stars: 4.5,
    count: 317
  },
  priceCents: 2400
}, {
  id: "v1-w2-x3",
  image: "items/products/luxury-tower-set-6-piece.jpg",
  name: "Luxury Towel Set - Graphite Gray",
  rating: {
    stars: 4.5,
    count: 144
  },
  priceCents: 3599
}, {
  id: "y1-z2",
  image: "items/products/liquid-laundry-detergent-plain.jpg",
  name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
  rating: {
    stars: 4.5,
    count: 305
  },
  priceCents: 2899
}, {
  id: "a2-b3-c4",
  image: "items/products/knit-athletic-sneakers-gray.jpg",
  name: "Waterproof Knit Athletic Sneakers - Gray",
  rating: {
    stars: 4,
    count: 89
  },
  priceCents: 3390
}, {
  id: "d2-e3-f4",
  image: "items/products/women-chiffon-beachwear-coverup-black.jpg",
  name: "Women's Chiffon Beachwear Cover Up - Black",
  rating: {
    stars: 4.5,
    count: 235
  },
  priceCents: 2070
}, {
  id: "g2-h3-i4",
  image: "items/products/round-sunglasses-black.jpg",
  name: "Round Sunglasses",
  rating: {
    stars: 4.5,
    count: 30
  },
  priceCents: 1560
}, {
  id: "j2-k3-l4",
  image: "items/products/women-beach-sandals.jpg",
  name: "Women's Two Strap Buckle Sandals - Tan",
  rating: {
    stars: 4.5,
    count: 562
  },
  priceCents: 2499
}, {
  id: "m2-n3-o4",
  image: "items/products/blackout-curtain-set-beige.webp",
  name: "Blackout Curtains Set 4-Pack - Beige",
  rating: {
    stars: 4.5,
    count: 232
  },
  priceCents: 4599
}, {
  id: "p2-q3-r4",
  image: "items/products/men-slim-fit-summer-shorts-gray.jpg",
  name: "Men's Slim-Fit Summer Shorts",
  rating: {
    stars: 4,
    count: 160
  },
  priceCents: 1699
}, {
  id: "s2-t3-u4",
  image: "items/products/electric-glass-and-steel-hot-water-kettle.webp",
  name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
  rating: {
    stars: 5,
    count: 846
  },
  priceCents: 3074
}, {
  id: "v2-w3-x4",
  image: "items/products/facial-tissue-2-ply-18-boxes.jpg",
  name: "Ultra Soft Tissue 2-Ply - 18 Box",
  rating: {
    stars: 4,
    count: 99
  },
  priceCents: 2374
}, {
  id: "y2-z3",
  image: "items/products/straw-sunhat.webp",
  name: "Straw Lifeguard Sun Hat",
  rating: {
    stars: 4,
    count: 215
  },
  priceCents: 2200
}, {
  id: "a3-b4-c5",
  image: "items/products/sky-flower-stud-earrings.webp",
  name: "Sterling Silver Sky Flower Stud Earrings",
  rating: {
    stars: 4.5,
    count: 52
  },
  priceCents: 1799
}, {
  id: "d3-e4-f5",
  image: "items/products/women-stretch-popover-hoodie-black.jpg",
  name: "Women's Stretch Popover Hoodie",
  rating: {
    stars: 4.5,
    count: 2465
  },
  priceCents: 1374
}, {
  id: "g3-h4-i5",
  image: "items/products/bathroom-rug.jpg",
  name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
  rating: {
    stars: 4.5,
    count: 119
  },
  priceCents: 1250
}, {
  id: "j3-k4-l5",
  image: "items/products/women-knit-ballet-flat-black.jpg",
  name: "Women's Knit Ballet Flat",
  rating: {
    stars: 4,
    count: 326
  },
  priceCents: 2640
}, {
  id: "m3-n4-o5",
  image: "items/products/men-golf-polo-t-shirt-blue.jpg",
  name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
  rating: {
    stars: 4.5,
    count: 2556
  },
  priceCents: 1599
}, {
  id: "p3-q4-r5",
  image: "items/products/trash-can-with-foot-pedal-50-liter.jpg",
  name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
  rating: {
    stars: 4.5,
    count: 2286
  },
  priceCents: 8300
}, {
  id: "s3-t4-u5",
  image: "items/products/duvet-cover-set-blue-twin.jpg",
  name: "Duvet Cover Set with Zipper Closure",
  rating: {
    stars: 4,
    count: 456
  },
  priceCents: 2399
}, {
  id: "v3-w4-x5",
  image: "items/products/women-chunky-beanie-gray.webp",
  name: "Women's Chunky Cable Beanie - Gray",
  rating: {
    stars: 5,
    count: 83
  },
  priceCents: 1250
}, {
  id: "y3-z4",
  image: "items/products/men-chino-pants-beige.jpg",
  name: "Men's Classic-fit Pleated Chino Pants",
  rating: {
    stars: 4.5,
    count: 9017
  },
  priceCents: 2290
}, {
  id: "a4-b5-c6",
  image: "items/products/men-athletic-shoes-green.jpg",
  name: "Men's Athletic Sneaker",
  rating: {
    stars: 4,
    count: 229
  },
  priceCents: 3890
}, {
  id: "d4-e5-f6",
  image: "items/products/men-navigator-sunglasses-brown.jpg",
  name: "Men's Navigator Sunglasses Pilot",
  rating: {
    stars: 3.5,
    count: 42
  },
  priceCents: 1690
}, {
  id: "g4-h5-i6",
  image: "items/products/non-stick-cooking-set-15-pieces.webp",
  name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
  rating: {
    stars: 4.5,
    count: 511
  },
  priceCents: 6797
}, {
  id: "j4-k5-l6",
  image: "items/products/vanity-mirror-silver.jpg",
  name: "Vanity Mirror with Heavy Base - Chrome",
  rating: {
    stars: 4.5,
    count: 130
  },
  priceCents: 1649
}, {
  id: "m4-n5-o6",
  image: "items/products/women-french-terry-fleece-jogger-camo.jpg",
  name: "Women's Fleece Jogger Sweatpant",
  rating: {
    stars: 4.5,
    count: 248
  },
  priceCents: 2400
}, {
  id: "p4-q5-r6",
  image: "items/products/double-elongated-twist-french-wire-earrings.webp",
  name: "Double Oval Twist French Wire Earrings - Gold",
  rating: {
    stars: 4.5,
    count: 117
  },
  priceCents: 2400
}, {
  id: "s4-t5-u6",
  image: "items/products/round-airtight-food-storage-containers.jpg",
  name: "Round Airtight Food Storage Containers - 5 Piece",
  rating: {
    stars: 4,
    count: 126
  },
  priceCents: 2899
}, {
  id: "v4-w5-x6",
  image: "items/products/coffeemaker-with-glass-carafe-black.jpg",
  name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
  rating: {
    stars: 4.5,
    count: 1211
  },
  priceCents: 2250
}, {
  id: "y4-z5",
  image: "items/products/blackout-curtains-black.jpg",
  name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
  rating: {
    stars: 4.5,
    count: 363
  },
  priceCents: 3099
}, {
  id: "a5-b6-c7",
  image: "items/products/cotton-bath-towels-teal.webp",
  name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
  rating: {
    stars: 4.5,
    count: 93
  },
  priceCents: 2110
}, {
  id: "d5-e6-c7",
  image: "items/products/knit-athletic-sneakers-pink.webp",
  name: "Waterproof Knit Athletic Sneakers - Pink",
  rating: {
    stars: 4,
    count: 89
  },
  priceCents: 3390
}, {
  id: "e5-f6-g7",
  image: "items/products/countertop-blender-64-oz.jpg",
  name: "Countertop Blender - 64oz, 1400 Watts",
  rating: {
    stars: 4,
    count: 3
  },
  priceCents: 10747
}, {
  id: "h5-i6-j7",
  image: "items/products/floral-mixing-bowl-set.jpg",
  name: "10-Piece Mixing Bowl Set with Lids - Floral",
  rating: {
    stars: 5,
    count: 679
  },
  priceCents: 3899
}, {
  id:"k5-l6-m7",
  image: "items/products/kitchen-paper-towels-30-pack.jpg",
  name: "2-Ply Kitchen Paper Towels - 30 Pack",
  rating: {
    stars: 4.5,
    count: 1045
  },
  priceCents: 5799
}, {
  id: "n5-o6-p7",
  image: "items/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
  name: "Men's Full-Zip Hooded Fleece Sweatshirt",
  rating: {
    stars: 4.5,
    count: 3157
  },
  priceCents: 2400
}];

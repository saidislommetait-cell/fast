(() => {
  "use strict";

  const STORAGE_KEYS = {
    LANG: "cf_lang_v1",
    THEME: "cf_theme_v1",
    CART: "cf_cart_v1",
    USER: "cf_user_v1",
    DELIVERY: "cf_delivery_v1"
  };

  const FALLBACK_IMAGES = {
    burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    lavash: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    hotdog: "https://images.unsplash.com/photo-1612392062422-ef19b42f74df?auto=format&fit=crop&w=800&q=80",
    sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    chicken: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    nuggets: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    drink: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
    dessert: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80"
  };

  const CATEGORIES = [
    { id: "all", uz: "Barchasi", ru: "Все", en: "All" },
    { id: "burgers", uz: "Burgerlar", ru: "Бургеры", en: "Burgers" },
    { id: "pizza", uz: "Pitsa", ru: "Пицца", en: "Pizza" },
    { id: "lavash", uz: "Lavash", ru: "Лаваш", en: "Lavash" },
    { id: "hotdogs", uz: "Hot-Dog", ru: "Хот-доги", en: "Hot Dogs" },
    { id: "sandwiches", uz: "Sendvichlar", ru: "Сэндвичи", en: "Sandwiches" },
    { id: "chicken", uz: "Qovurilgan tovuq", ru: "Жареная курица", en: "Fried Chicken" },
    { id: "fries", uz: "Kartoshka fri", ru: "Картофель фри", en: "French Fries" },
    { id: "nuggets", uz: "Naggetslar", ru: "Наггетсы", en: "Nuggets" },
    { id: "drinks", uz: "Ichimliklar", ru: "Напитки", en: "Drinks" },
    { id: "desserts", uz: "Shirinliklar", ru: "Десерты", en: "Desserts" }
  ];

  const MENU_ITEMS = [
    // BURGERS (5)
    {
      id: "b1", category: "burgers", price: 42000, oldPrice: 48000, discount: 13, rating: 4.9,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.burger,
      name: { uz: "Crisp Double Cheeseburger", ru: "Крисп Дабл Чизбургер", en: "Crisp Double Cheeseburger" },
      ingredients: { uz: "Ikki qavat mol go‘shti, cheddar, piyoz, maxsus sous", ru: "Двойная говядина, чеддер, лук, фирменный соус", en: "Double beef patty, cheddar, onion, signature sauce" }
    },
    {
      id: "b2", category: "burgers", price: 39000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.burger,
      name: { uz: "Smoky BBQ Bacon Burger", ru: "Смоки BBQ Бэкон Бургер", en: "Smoky BBQ Bacon Burger" },
      ingredients: { uz: "Qovurilgan bekonga boy kotlet, BBQ sous, salat bargi", ru: "Котлета с беконом, соус BBQ, лист салата", en: "Beef patty, crispy bacon, smoky BBQ sauce, lettuce" }
    },
    {
      id: "b3", category: "burgers", price: 36000, oldPrice: 42000, discount: 14, rating: 4.7,
      img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.burger,
      name: { uz: "Spicy Jalapeno Flame Burger", ru: "Острый Халапеньо Бургер", en: "Spicy Jalapeno Flame Burger" },
      ingredients: { uz: "Achchiq xalapenyo, cheddar pishloq, o‘tkir salsa", ru: "Острый халапеньо, сыр чеддер, пряная сальса", en: "Jalapeno peppers, cheddar cheese, spicy salsa" }
    },
    {
      id: "b4", category: "burgers", price: 34000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.burger,
      name: { uz: "Crispy Chicken Crunch Burger", ru: "Хрустящий Чикен Бургер", en: "Crispy Chicken Crunch Burger" },
      ingredients: { uz: "Qarsildoq tovuq filesi, pomidor, krem sous", ru: "Хрустящее куриное филе, томаты, сливочный соус", en: "Crispy chicken fillet, tomato, creamy mayo" }
    },
    {
      id: "b5", category: "burgers", price: 46000, oldPrice: 54000, discount: 15, rating: 5.0,
      img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.burger,
      name: { uz: "Royal Truffle Mushroom Burger", ru: "Роял Трюфель Грибной Бургер", en: "Royal Truffle Mushroom Burger" },
      ingredients: { uz: "Qo‘ziqorinli sote, shveysar pishlog‘i, truffel sousi", ru: "Жареные грибы, швейцарский сыр, трюфельный соус", en: "Sauteed mushrooms, Swiss cheese, truffle aioli" }
    },

    // PIZZA (5)
    {
      id: "p1", category: "pizza", price: 68000, oldPrice: 78000, discount: 13, rating: 4.9,
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.pizza,
      name: { uz: "Pepperoni Inferno Pizza", ru: "Пепперони Инферно Пицца", en: "Pepperoni Inferno Pizza" },
      ingredients: { uz: "Pepperoni kolbasasi, motsarella, tomat sousi, oregano", ru: "Колбаса пепперони, моцарелла, томатный соус, орегано", en: "Pepperoni slices, mozzarella, tomato sauce, oregano" }
    },
    {
      id: "p2", category: "pizza", price: 62000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.pizza,
      name: { uz: "Classic Margherita Pizza", ru: "Классическая Маргарита", en: "Classic Margherita Pizza" },
      ingredients: { uz: "Motsarella pishlog‘i, yangi pomidor, rayhon barglari", ru: "Сыр моцарелла, свежие томаты, базилик", en: "Fresh mozzarella, ripe tomatoes, sweet basil" }
    },
    {
      id: "p3", category: "pizza", price: 76000, oldPrice: 88000, discount: 14, rating: 4.9,
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.pizza,
      name: { uz: "Four Cheese Supreme Pizza", ru: "Четыре Сыра Суприм", en: "Four Cheese Supreme Pizza" },
      ingredients: { uz: "Motsarella, cheddar, gorgonzola, parmesan", ru: "Моцарелла, чеддер, горгонзола, пармезан", en: "Mozzarella, cheddar, gorgonzola, parmesan" }
    },
    {
      id: "p4", category: "pizza", price: 72000, oldPrice: null, discount: 0, rating: 4.7,
      img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.pizza,
      name: { uz: "BBQ Chicken & Onion Pizza", ru: "Пицца BBQ Курица и Лук", en: "BBQ Chicken & Onion Pizza" },
      ingredients: { uz: "Duklangan tovuq, qizil piyoz, motsarella, BBQ sous", ru: "Копченая курица, красный лук, моцарелла, соус BBQ", en: "Smoked chicken, red onion, mozzarella, BBQ glaze" }
    },
    {
      id: "p5", category: "pizza", price: 74000, oldPrice: 82000, discount: 10, rating: 4.8,
      img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4f?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.pizza,
      name: { uz: "Garden Veggie & Olive Pizza", ru: "Овощная Пицца с Оливками", en: "Garden Veggie & Olive Pizza" },
      ingredients: { uz: "Qora zaytun, bulg‘or qalampiri, qo‘ziqorin, motsarella", ru: "Маслины, болгарский перец, грибы, моцарелла", en: "Black olives, bell peppers, mushrooms, mozzarella" }
    },

    // LAVASH (5)
    {
      id: "l1", category: "lavash", price: 35000, oldPrice: 40000, discount: 13, rating: 4.9,
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.lavash,
      name: { uz: "Classic Beef Lavash Roll", ru: "Классический Лаваш с Говядиной", en: "Classic Beef Lavash Roll" },
      ingredients: { uz: "Yumshoq mol go‘shti, chips, pomidor, oq sous, lavash", ru: "Нежная говядина, чипсы, томаты, белый соус, лаваш", en: "Tender beef strips, crispy chips, tomato, white sauce" }
    },
    {
      id: "l2", category: "lavash", price: 38000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.lavash,
      name: { uz: "Cheese Double Lavash", ru: "Двойной Сырный Лаваш", en: "Cheese Double Lavash" },
      ingredients: { uz: "Go‘sht, ikki hissa pishloq, bodring, maxsus sous", ru: "Мясо, двойной сыр, огурцы, фирменный соус", en: "Savory meat, double cheese, pickles, signature sauce" }
    },
    {
      id: "l3", category: "lavash", price: 33000, oldPrice: null, discount: 0, rating: 4.7,
      img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.lavash,
      name: { uz: "Spicy Flame Lavash", ru: "Острый Лаваш Флейм", en: "Spicy Flame Lavash" },
      ingredients: { uz: "Achchiq sous, mol go‘shti, xalapenyo, ko‘katlar", ru: "Острый соус, говядина, халапеньо, зелень", en: "Spicy chili sauce, beef, jalapeno, fresh herbs" }
    },
    {
      id: "l4", category: "lavash", price: 34000, oldPrice: 39000, discount: 13, rating: 4.8,
      img: "https://images.unsplash.com/photo-1648146297631-8b2d3c47f5d2?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.lavash,
      name: { uz: "Crispy Chicken Lavash", ru: "Лаваш с Хрустящей Курицей", en: "Crispy Chicken Lavash" },
      ingredients: { uz: "Qovurilgan tovuq, pomidor, sarimsoqli sous", ru: "Хрустящая курица, томаты, чесночный соус", en: "Crispy chicken, tomatoes, garlic herb sauce" }
    },
    {
      id: "l5", category: "lavash", price: 41000, oldPrice: null, discount: 0, rating: 4.9,
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.lavash,
      name: { uz: "Smoked Grill Lavash XL", ru: "Гриль Лаваш XL", en: "Smoked Grill Lavash XL" },
      ingredients: { uz: "Katta porsiya gril go‘shti, pishloq, kartoshka fri ichida", ru: "Большая порция мясо на гриле, сыр, фри внутри", en: "Extra-large grilled meat, cheese, fries inside" }
    },

    // HOT DOGS (5)
    {
      id: "h1", category: "hotdogs", price: 24000, oldPrice: 28000, discount: 14, rating: 4.8,
      img: "https://images.unsplash.com/photo-1612392062422-ef19b42f74df?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.hotdog,
      name: { uz: "Classic American Hot Dog", ru: "Классический Американский Хот-Дог", en: "Classic American Hot Dog" },
      ingredients: { uz: "Yumshoq bulochka, dudlangan sosiska, xantal, ketchup", ru: "Мягкая булка, копченая сосиска, горчица, кетчуп", en: "Soft bun, smoked sausage, mustard, ketchup" }
    },
    {
      id: "h2", category: "hotdogs", price: 27000, oldPrice: null, discount: 0, rating: 4.9,
      img: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.hotdog,
      name: { uz: "Cheddar & Crispy Onion Hot Dog", ru: "Хот-Дог с Чеддером и Луком", en: "Cheddar & Crispy Onion Hot Dog" },
      ingredients: { uz: "Eritilgan cheddar, qarsildoq piyoz, pishloqli sous", ru: "Плавленый чеддер, хрустящий лук, сырный соус", en: "Melted cheddar, crispy fried onions, cheese sauce" }
    },
    {
      id: "h3", category: "hotdogs", price: 29000, oldPrice: 34000, discount: 15, rating: 4.7,
      img: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.hotdog,
      name: { uz: "Chili Jalapeno Hot Dog", ru: "Острый Чили Хот-Дог", en: "Chili Jalapeno Hot Dog" },
      ingredients: { uz: "Achchiq chili sousi, xalapenyo, dudlangan sosiska", ru: "Острый соус чили, халапеньо, копченая сосиска", en: "Spicy chili sauce, jalapeno slices, smoked sausage" }
    },
    {
      id: "h4", category: "hotdogs", price: 26000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.hotdog,
      name: { uz: "French Style Baguette Hot Dog", ru: "Французский Хот-Дог в Багете", en: "French Style Baguette Hot Dog" },
      ingredients: { uz: "Qarsildoq baget, maxsus sosiska, sarimsoq sousi", ru: "Хрустящий багет, фирменная сосиска, чесночный соус", en: "Crusty baguette, signature sausage, garlic sauce" }
    },
    {
      id: "h5", category: "hotdogs", price: 31000, oldPrice: null, discount: 0, rating: 4.9,
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.hotdog,
      name: { uz: "Double Sausage Mega Dog", ru: "Мега Хот-Дог с Двойной Сосиской", en: "Double Sausage Mega Dog" },
      ingredients: { uz: "Ikki dona sosiska, tuzlangan bodring, pishloq", ru: "Две сосиски, маринованные огурцы, сыр", en: "Double sausage, dill pickles, cheddar cheese" }
    },

    // SANDWICHES (5)
    {
      id: "s1", category: "sandwiches", price: 32000, oldPrice: 36000, discount: 11, rating: 4.8,
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.sandwich,
      name: { uz: "Club House Toast Sandwich", ru: "Клаб Хаус Тост Сэндвич", en: "Club House Toast Sandwich" },
      ingredients: { uz: "Qovurilgan tost non, tovuq, pishloq, pomidor, salat", ru: "Тостовый хлеб, курица, сыр, томаты, салат", en: "Toasted bread, chicken, cheese, tomato, lettuce" }
    },
    {
      id: "s2", category: "sandwiches", price: 35000, oldPrice: null, discount: 0, rating: 4.9,
      img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.sandwich,
      name: { uz: "Grilled Steak Ciabatta", ru: "Стейк Чиабатта на Гриле", en: "Grilled Steak Ciabatta" },
      ingredients: { uz: "Chabatta noni, gril mol go‘shti, rukola, pishloq", ru: "Чиабатта, говядина на гриле, руккола, сыр", en: "Ciabatta bread, grilled beef, arugula, cheese" }
    },
    {
      id: "s3", category: "sandwiches", price: 29000, oldPrice: null, discount: 0, rating: 4.7,
      img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.sandwich,
      name: { uz: "Triple Cheese Melt Sandwich", ru: "Тройной Сырный Мелт", en: "Triple Cheese Melt Sandwich" },
      ingredients: { uz: "Cheddar, motsarella, gouda, saryog‘li tost", ru: "Чеддер, моцарелла, гауда, сливочный тост", en: "Cheddar, mozzarella, gouda, buttered toast" }
    },
    {
      id: "s4", category: "sandwiches", price: 33000, oldPrice: 38000, discount: 13, rating: 4.8,
      img: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.sandwich,
      name: { uz: "Tuna & Avocado Sub", ru: "Саб с Тунцом и Авокадо", en: "Tuna & Avocado Sub" },
      ingredients: { uz: "Tunets balig‘i, yangi avokado, limonli sous", ru: "Тунец, свежее авокадо, лимонный соус", en: "Flaked tuna, fresh avocado, lemon dressing" }
    },
    {
      id: "s5", category: "sandwiches", price: 34000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1481070555826-79f0542d8d84?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.sandwich,
      name: { uz: "Crispy Chicken Caesar Panini", ru: "Панини Цезарь с Курицей", en: "Crispy Chicken Caesar Panini" },
      ingredients: { uz: "Tovuqli file, parmesan, aysberg, sezar sousi", ru: "Куриное филе, пармезан, айсберг, соус цезарь", en: "Chicken fillet, parmesan, iceberg, caesar sauce" }
    },

    // FRIED CHICKEN (5)
    {
      id: "c1", category: "chicken", price: 48000, oldPrice: 55000, discount: 13, rating: 4.9,
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.chicken,
      name: { uz: "Golden Crispy Chicken Bucket (6 pcs)", ru: "Золотой Хрустящий Бакет (6 шт)", en: "Golden Crispy Chicken Bucket (6 pcs)" },
      ingredients: { uz: "6 dona qarsildoq tovuq bo‘lagi, 11 ziravorli qobiq", ru: "6 кусочков хрустящей курицы, панировка из 11 специй", en: "6 crispy chicken pieces, 11-spice golden crust" }
    },
    {
      id: "c2", category: "chicken", price: 38000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.chicken,
      name: { uz: "Hot Wings Flame Basket (8 pcs)", ru: "Острые Крылышки Флейм (8 шт)", en: "Hot Wings Flame Basket (8 pcs)" },
      ingredients: { uz: "8 dona achchiq tovuq qanotchalari, dip sous", ru: "8 острых куриных крылышек, дип-соус", en: "8 spicy chicken wings, signature dip sauce" }
    },
    {
      id: "c3", category: "chicken", price: 36000, oldPrice: 42000, discount: 14, rating: 4.8,
      img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.chicken,
      name: { uz: "Honey Garlic Chicken Strips", ru: "Стрипсы Медово-Чесночные", en: "Honey Garlic Chicken Strips" },
      ingredients: { uz: "Tovuq stripslari, asal va sarimsoq glazure", ru: "Куриные стрипсы, медово-чесночная глазурь", en: "Chicken tender strips, honey garlic glaze" }
    },
    {
      id: "c4", category: "chicken", price: 54000, oldPrice: null, discount: 0, rating: 5.0,
      img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.chicken,
      name: { uz: "Family Feast Chicken Box", ru: "Семейный Бокс с Курицей", en: "Family Feast Chicken Box" },
      ingredients: { uz: "10 dona tovuq bo‘lagi + 2 ta sous", ru: "10 кусочков курицы + 2 соуса", en: "10 fried chicken pieces + 2 dipping sauces" }
    },
    {
      id: "c5", category: "chicken", price: 35000, oldPrice: null, discount: 0, rating: 4.7,
      img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.chicken,
      name: { uz: "Lemon Pepper Drumsticks", ru: "Ножки Лимон-Перец", en: "Lemon Pepper Drumsticks" },
      ingredients: { uz: "Tovuq boldirlari, limon po‘sti va qora murch", ru: "Куриные голени, цедра лимона и черный перец", en: "Crispy drumsticks, lemon zest and cracked pepper" }
    },

    // FRENCH FRIES (5)
    {
      id: "f1", category: "fries", price: 18000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.fries,
      name: { uz: "Classic Golden French Fries", ru: "Классический Картофель Фри", en: "Classic Golden French Fries" },
      ingredients: { uz: "Qarsildoq kartoshka bo‘laklari, dengiz tuzi", ru: "Хрустящий картофель фри, морская соль", en: "Golden crispy fries, fine sea salt" }
    },
    {
      id: "f2", category: "fries", price: 24000, oldPrice: 28000, discount: 14, rating: 4.9,
      img: "https://images.unsplash.com/photo-1630384060421-cb20aed859c8?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.fries,
      name: { uz: "Cheesy Loaded Fries", ru: "Картофель Фри с Сырным Соусом", en: "Cheesy Loaded Fries" },
      ingredients: { uz: "Kartoshka fri, issiq cheddar sousi, ko‘kat", ru: "Картофель фри, горячий соус чеддер, зелень", en: "Crispy fries, warm cheddar sauce, chives" }
    },
    {
      id: "f3", category: "fries", price: 22000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.fries,
      name: { uz: "Spicy Cajun Seasoned Fries", ru: "Пряный Картофель Каджун", en: "Spicy Cajun Seasoned Fries" },
      ingredients: { uz: "Kajun ziravorlari, paprika va achchiq murch", ru: "Специи каджун, паприка и острый перец", en: "Cajun spice blend, smoked paprika, chili" }
    },
    {
      id: "f4", category: "fries", price: 25000, oldPrice: null, discount: 0, rating: 4.9,
      img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.fries,
      name: { uz: "Garlic & Parmesan Fries", ru: "Фри с Чесноком и Пармезаном", en: "Garlic & Parmesan Fries" },
      ingredients: { uz: "Sarimsoq yog‘i, qirg‘ichdan o‘tgan parmesan", ru: "Чесночное масло, тертый пармезан", en: "Garlic herb oil, grated parmesan cheese" }
    },
    {
      id: "f5", category: "fries", price: 21000, oldPrice: null, discount: 0, rating: 4.7,
      img: "https://images.unsplash.com/photo-1639744091981-2f82630564b3?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.fries,
      name: { uz: "Country Potato Wedges", ru: "Картофельные Дольки по-Деревенски", en: "Country Potato Wedges" },
      ingredients: { uz: "Po‘stlog‘i bilan qovurilgan kartoshka bo‘laklari", ru: "Румяные картофельные дольки с кожурой", en: "Seasoned skin-on potato wedges" }
    },

    // NUGGETS (5)
    {
      id: "n1", category: "nuggets", price: 24000, oldPrice: 28000, discount: 14, rating: 4.8,
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.nuggets,
      name: { uz: "Crispy Chicken Nuggets (9 pcs)", ru: "Хрустящие Наггетсы (9 шт)", en: "Crispy Chicken Nuggets (9 pcs)" },
      ingredients: { uz: "9 dona tovuq naggetsi, qarsildoq qobiq", ru: "9 куриных наггетсов в хрустящей корочке", en: "9 tender chicken nuggets, crunchy breading" }
    },
    {
      id: "n2", category: "nuggets", price: 32000, oldPrice: null, discount: 0, rating: 4.9,
      img: "https://images.unsplash.com/photo-1585325701956-60dd9c853162?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.nuggets,
      name: { uz: "Mega Nuggets Box (18 pcs)", ru: "Мега Бокс Наггетсов (18 шт)", en: "Mega Nuggets Box (18 pcs)" },
      ingredients: { uz: "18 dona naggets + 2 ta maxsus sous", ru: "18 наггетсов + 2 фирменных соуса", en: "18 chicken nuggets + 2 dipping sauces" }
    },
    {
      id: "n3", category: "nuggets", price: 26000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.nuggets,
      name: { uz: "Spicy Chili Nuggets (9 pcs)", ru: "Острые Чили Наггетсы (9 шт)", en: "Spicy Chili Nuggets (9 pcs)" },
      ingredients: { uz: "Achchiq ziravorli tovuq naggetslari", ru: "Острые куриные наггетсы со специями", en: "Fiery spiced chicken nuggets" }
    },
    {
      id: "n4", category: "nuggets", price: 27000, oldPrice: null, discount: 0, rating: 4.7,
      img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.nuggets,
      name: { uz: "Cheese Core Nuggets (8 pcs)", ru: "Наггетсы с Сыром Внутри (8 шт)", en: "Cheese Core Nuggets (8 pcs)" },
      ingredients: { uz: "Ichida erigan pishloqli tovuq naggetslari", ru: "Наггетсы с тягучим сыром внутри", en: "Chicken nuggets with melted cheese center" }
    },
    {
      id: "n5", category: "nuggets", price: 25000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.nuggets,
      name: { uz: "Kids Snack Nuggets (6 pcs)", ru: "Детские Наггетсы (6 шт)", en: "Kids Snack Nuggets (6 pcs)" },
      ingredients: { uz: "6 dona yumshoq tovuq naggetsi, kichik porsiya", ru: "6 нежных наггетсов, детская порция", en: "6 mild chicken nuggets, kid-friendly portion" }
    },

    // DRINKS (5)
    {
      id: "d1", category: "drinks", price: 14000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.drink,
      name: { uz: "Citrus Sparkle Soda", ru: "Цитрусовый Лимонад Спаркл", en: "Citrus Sparkle Soda" },
      ingredients: { uz: "Yangi limon, apelsin, muz va gazlangan suv", ru: "Свежий лимон, апельсин, лед и газировка", en: "Fresh lemon, orange, ice, sparkling water" }
    },
    {
      id: "d2", category: "drinks", price: 24000, oldPrice: 28000, discount: 14, rating: 4.9,
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.drink,
      name: { uz: "Choco Fudge Milkshake", ru: "Шоколадный Милкшейк", en: "Choco Fudge Milkshake" },
      ingredients: { uz: "Qaymoqli muzqaymoq, sut, shokolad sousi", ru: "Сливочное мороженое, молоко, шоколадный топпинг", en: "Creamy ice cream, cold milk, chocolate fudge" }
    },
    {
      id: "d3", category: "drinks", price: 18000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.drink,
      name: { uz: "Mint Lime Mojito Cooler", ru: "Мятно-Лаймовый Мохито", en: "Mint Lime Mojito Cooler" },
      ingredients: { uz: "Yalpiz barglari, laym, muz, salqin ichimlik", ru: "Листья мяты, лайм, лед, освежающий напиток", en: "Fresh mint leaves, lime, crushed ice, soda" }
    },
    {
      id: "d4", category: "drinks", price: 22000, oldPrice: null, discount: 0, rating: 4.9,
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.drink,
      name: { uz: "Iced Caramel Latte", ru: "Холодный Карамельный Латте", en: "Iced Caramel Latte" },
      ingredients: { uz: "Espresso, sovuq sut, karamel siropi, muz", ru: "Эспрессо, холодное молоко, карамель, лед", en: "Double espresso, cold milk, caramel syrup, ice" }
    },
    {
      id: "d5", category: "drinks", price: 25000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.drink,
      name: { uz: "Strawberry Berry Shake", ru: "Клубничный Ягодный Шейк", en: "Strawberry Berry Shake" },
      ingredients: { uz: "Qulupnay, rezavor mevalar, vanilli muzqaymoq", ru: "Клубника, лесные ягоды, ванильное мороженое", en: "Strawberries, mixed berries, vanilla ice cream" }
    },

    // DESSERTS (5)
    {
      id: "ds1", category: "desserts", price: 22000, oldPrice: 26000, discount: 15, rating: 4.9,
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.dessert,
      name: { uz: "Glazed Berry Donut", ru: "Глазированный Ягодный Донат", en: "Glazed Berry Donut" },
      ingredients: { uz: "Yumshoq ponchik, shirin glazur va bezak", ru: "Воздушный пончик, сладкая глазурь и посыпка", en: "Soft fried donut, sweet glaze and sprinkles" }
    },
    {
      id: "ds2", category: "desserts", price: 29000, oldPrice: null, discount: 0, rating: 5.0,
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.dessert,
      name: { uz: "Molten Chocolate Lava Cake", ru: "Шоколадный Лава Кейк", en: "Molten Chocolate Lava Cake" },
      ingredients: { uz: "Issiq shokoladli kek, suyuq shokolad markazi", ru: "Теплый шоколадный кекс с жидким центром", en: "Warm chocolate cake with molten fudge center" }
    },
    {
      id: "ds3", category: "desserts", price: 27000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.dessert,
      name: { uz: "Creamy Vanilla Cheesecake", ru: "Сливочный Ванильный Чизкейк", en: "Creamy Vanilla Cheesecake" },
      ingredients: { uz: "Pishloqli krem, pechenye asosi, vanil", ru: "Нежный сырный крем, песочная основа, ваниль", en: "Cream cheese filling, biscuit crust, vanilla" }
    },
    {
      id: "ds4", category: "desserts", price: 24000, oldPrice: null, discount: 0, rating: 4.8,
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.dessert,
      name: { uz: "Caramel Sundae Ice Cream", ru: "Карамельное Мороженое Сандэ", en: "Caramel Sundae Ice Cream" },
      ingredients: { uz: "Muzqaymoq, issiq karamel, maydalangan yong‘oq", ru: "Мороженое, горячая карамель, дробленый орех", en: "Soft ice cream, warm caramel, roasted nuts" }
    },
    {
      id: "ds5", category: "desserts", price: 26000, oldPrice: 30000, discount: 13, rating: 4.9,
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.dessert,
      name: { uz: "Double Choco Brownie", ru: "Двойной Шоколадный Брауни", en: "Double Choco Brownie" },
      ingredients: { uz: "Qora shokolad, kakao, yumshoq brownie", ru: "Темный шоколад, какао, насыщенный брауни", en: "Dark chocolate, rich cocoa, fudgy brownie" }
    }
  ];

  const PROMOTIONS = [
    {
      id: "pr1", badge: "-20% OFF", price: 33600, oldPrice: 42000,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.burger,
      title: { uz: "20% Chegirma: Crisp Double Burger", ru: "Скидка 20%: Крисп Дабл Бургер", en: "20% Off: Crisp Double Burger" },
      desc: { uz: "Hafta o‘rtasi maxsus chegirmasi — sevimli burgeringiz 20% arzonroq.", ru: "Специальная скидка в середине недели — любимый бургер на 20% дешевле.", en: "Midweek special — enjoy our signature double burger at 20% off." }
    },
    {
      id: "pr2", badge: "-30% OFF", price: 47600, oldPrice: 68000,
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.pizza,
      title: { uz: "30% Chegirma: Pepperoni Inferno", ru: "Скидка 30%: Пепперони Инферно", en: "30% Off: Pepperoni Inferno" },
      desc: { uz: "Katta pitsaga 30% chegirma — do‘stlar davrasi uchun ajoyib tanlov.", ru: "Скидка 30% на большую пиццу — отличный выбор для компании друзей.", en: "30% discount on Pepperoni Inferno — great for sharing with friends." }
    },
    {
      id: "pr3", badge: "-50% HAPPY HOUR", price: 12000, oldPrice: 24000,
      img: "https://images.unsplash.com/photo-1612392062422-ef19b42f74df?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.hotdog,
      title: { uz: "50% Chegirma: Happy Hour Hot-Dog", ru: "Скидка 50%: Счастливые Часы Хот-Дог", en: "50% Off: Happy Hour Hot-Dog" },
      desc: { uz: "Har kuni 14:00–16:00 oralig‘ida American Hot Dog yarim narxda!", ru: "Ежедневно с 14:00 до 16:00 Американский Хот-Дог за полцены!", en: "Every day 2 PM–4 PM get Classic American Hot Dog at 50% off!" }
    },
    {
      id: "pr4", badge: "COMBO MENU", price: 59000, oldPrice: 74000,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.burger,
      title: { uz: "Flame Combo: Burger + Fri + Ichimlik", ru: "Флейм Комбо: Бургер + Фри + Напиток", en: "Flame Combo: Burger + Fries + Drink" },
      desc: { uz: "To‘liq to‘yimli kombo: BBQ Burger, qarsildoq kartoshka fri va salqin ichimlik.", ru: "Сытное комбо: BBQ Бургер, хрустящий картофель фри и напиток.", en: "Complete meal: BBQ Bacon Burger, golden fries, and chilled drink." }
    },
    {
      id: "pr5", badge: "1 + 1 AKSIYA", price: 24000, oldPrice: 48000,
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.nuggets,
      title: { uz: "1+1 Aksiya: Naggets (9+9 dona)", ru: "Акция 1+1: Наггетсы (9+9 шт)", en: "1+1 Deal: Nuggets (9+9 pcs)" },
      desc: { uz: "Bitta naggets porsiyasini oling, ikkinchisi bizdan sovg‘a sifatida!", ru: "Берите одну порцию наггетсов и вторую получите в подарок!", en: "Buy one 9-piece nuggets box and get a second one completely free!" }
    },
    {
      id: "pr6", badge: "KUNLIK AKSIYA", price: 42000, oldPrice: 54000,
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      fallback: FALLBACK_IMAGES.chicken,
      title: { uz: "Juma Maxsus: Golden Chicken Box", ru: "Пятничный Спец: Голден Чикен Бокс", en: "Friday Special: Golden Chicken Box" },
      desc: { uz: "Hafta oxiri maxsus narxi — qarsildoq tovuq bo‘laklari va maxsus sous.", ru: "Специальная цена выходного дня — хрустящая курица и соус.", en: "Weekend special price — golden crispy chicken pieces with dip." }
    }
  ];

  const REVIEWS = [
    {
      id: "r1", stars: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      name: { uz: "Madina Karimova", ru: "Мадина Каримова", en: "Madina Karimova" },
      quote: {
        uz: "Double Cheeseburger va Pepperoni pitsa juda mazali chiqdi. Yetkazib berish 25 daqiqada keldi, hammasi issiq!",
        ru: "Дабл Чизбургер и Пепперони были невероятно вкусными. Доставили за 25 минут, всё горячее!",
        en: "The Double Cheeseburger and Pepperoni pizza were amazing. Delivered in 25 minutes piping hot!"
      }
    },
    {
      id: "r2", stars: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      name: { uz: "Javohir Rustamov", ru: "Жавохир Рустамов", en: "Javohir Rustamov" },
      quote: {
        uz: "Aksiyalar va kombo narxlar juda qulay. Lavash va qovurilgan tovuq har doim yangi va qarsildoq.",
        ru: "Отличные акции и цены на комбо. Лаваш и жареная курица всегда свежие и хрустящие.",
        en: "Great promos and combo deals. The lavash rolls and fried chicken are always fresh and crispy."
      }
    },
    {
      id: "r3", stars: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      name: { uz: "Aziza Tursunova", ru: "Азиза Турсунова", en: "Aziza Tursunova" },
      quote: {
        uz: "Sayt interfeysi juda qulay, Dark Mode ko‘zga yoqadi, shirinliklardan esa Lava Cake eng zo‘ri!",
        ru: "Очень удобный сайт, темная тема приятная, а из десертов Лава Кейк просто супер!",
        en: "Smooth website experience, love the Dark Mode, and the Molten Chocolate Lava Cake is a must-try!"
      }
    },
    {
      id: "r4", stars: 4,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      name: { uz: "Sardor Alimov", ru: "Сардор Алимов", en: "Sardor Alimov" },
      quote: {
        uz: "Xaritadan manzilni belgilash juda oson. Kuryer xushmuomala va buyurtma aniq vaqtida yetkazildi.",
        ru: "Очень удобно отмечать адрес на карте. Курьер вежливый, заказ привезли вовремя.",
        en: "Picking a spot on the map was super easy. Polite courier and on-time delivery."
      }
    }
  ];

  const DISTRICTS_BY_CITY = {
    Toshkent: [
      { id: "Yunusobod", uz: "Yunusobod tumani", ru: "Юнусабадский район", en: "Yunusabad District", fee: 15000 },
      { id: "Chilonzor", uz: "Chilonzor tumani", ru: "Чиланзарский район", en: "Chilanzar District", fee: 15000 },
      { id: "Mirzo Ulugbek", uz: "Mirzo Ulug‘bek tumani", ru: "Мирзо-Улугбекский район", en: "Mirzo Ulugbek District", fee: 16000 },
      { id: "Yakkasaroy", uz: "Yakkasaroy tumani", ru: "Яккасарайский район", en: "Yakkasaray District", fee: 14000 }
    ],
    Samarqand: [
      { id: "Samarkand City", uz: "Samarqand shahri", ru: "Город Самарканд", en: "Samarkand City", fee: 18000 },
      { id: "Urgut", uz: "Urgut tumani", ru: "Ургутский район", en: "Urgut District", fee: 24000 }
    ],
    Buxoro: [
      { id: "Bukhara City", uz: "Buxoro shahri", ru: "Город Бухара", en: "Bukhara City", fee: 18000 },
      { id: "Gijduvon", uz: "G‘ijduvon tumani", ru: "Гиждуванский район", en: "Gijduvan District", fee: 25000 }
    ]
  };

  const CITY_COORDS = {
    Toshkent: [41.3111, 69.2797],
    Samarqand: [39.6542, 66.9597],
    Buxoro: [39.7681, 64.4556]
  };

  const TRANSLATIONS = {
    uz: {
      "nav.home": "Bosh sahifa",
      "nav.menu": "Menyu",
      "nav.about": "Biz haqimizda",
      "nav.promotions": "Aksiyalar",
      "nav.delivery": "Yetkazish",
      "nav.contact": "Aloqa",
      "nav.cart": "Savatcha",
      "nav.auth": "Kirish",
      "hero.badge": "🔥 BUGUN MAXSUS 30% CHEGIRMA",
      "hero.title": "OLOVDA PISHGAN HAQIQIY TA'M",
      "hero.subtitle": "100% tabiiy mol go‘shti, yangi pishirilgan brioche bulochkalar, eritilgan cheddar va 35 daqiqada issiq yetkazib berish.",
      "hero.orderNow": "Hoziroq buyurtma berish",
      "hero.exploreMenu": "Menyuni ko‘rish",
      "hero.statDelivery": "O‘rtacha yetkazish",
      "hero.statItems": "Taom va kombo",
      "hero.statRating": "Mijozlar bahosi",
      "hero.discountTag": "-30% COMBO",
      "why.kicker": "AFZALLIKLARIMIZ",
      "why.title": "NIMA UCHUN CRISP & FLAME?",
      "why.fastTitle": "Tez yetkazib berish",
      "why.fastDesc": "Buyurtmangiz pechdan chiqqan zahoti maxsus termosumkada manzilingizga yuboriladi.",
      "why.freshTitle": "Yangi ingredientlar",
      "why.freshDesc": "Har kuni ertalab yangi sabzavotlar, mahalliy fermer go‘shti va tabiiy pishloqlar.",
      "why.qualityTitle": "Eng yuqori sifat",
      "why.qualityDesc": "Xalqaro HACCP standartlari va tajribali oshpazlar nazorati ostida tayyorlanadi.",
      "why.priceTitle": "Hamyonbop narxlar",
      "why.priceDesc": "Premium ta'mni adolatli narxlarda, doimiy aksiyalar va foydali kombolar bilan taqdim etamiz.",
      "menu.kicker": "BIZNING TAOMLAR",
      "menu.title": "TO‘LIQ FAST-FOOD MENYUSI",
      "menu.subtitle": "10 ta kategoriya bo‘yicha 50 ta saralangan taom va ichimlik",
      "menu.searchPlaceholder": "Taom nomini qidiring...",
      "menu.sortLabel": "Saralash:",
      "menu.sortDefault": "Tavsiya etilgan",
      "menu.sortAsc": "Narx: arzonidan qimmatiga",
      "menu.sortDesc": "Narx: qimmatidan arzoniga",
      "menu.sortRating": "Eng yuqori reyting",
      "menu.addToCart": "Savatchaga",
      "menu.noResults": "Qidiruv bo‘yicha taom topilmadi.",
      "promo.kicker": "MAXSUS TAKLIFLAR",
      "promo.title": "CHEGIRMALAR VA AKSIYALAR",
      "promo.subtitle": "20%, 30%, 50% chegirmalar, Combo menyular, 1+1 va kunlik maxsus takliflar",
      "promo.orderNow": "Buyurtma berish",
      "about.since": "Yildan beri xizmatda",
      "about.kicker": "RESTORAN TARIXI",
      "about.title": "BIZ HAQIMIZDA CRISP & FLAME",
      "about.desc1": "Crisp & Flame — tezkor ovqatlanish tezligini restoran darajasidagi sifat bilan birlashtirgan zamonaviy brend. Biz har bir burger, pitsa va lavashni buyurtma tushgandan keyingina yangi mahsulotlardan tayyorlaymiz.",
      "about.desc2": "Professional oshpazlarimiz maxsus ziravorlar aralashmasi, o‘zimiz tayyorlagan souslar va har kuni yangi keltiriladigan go‘sht hamda sabzavotlar bilan ishlaydi.",
      "about.point1": "✓ 100% sifatli va sertifikatlangan mahsulotlar",
      "about.point2": "✓ 35 daqiqagacha tezkor yetkazib berish tizimi",
      "about.point3": "✓ Har kuni yangi uzilgan ko‘kat va sabzavotlar",
      "about.point4": "✓ Tajribali oshpazlar va qat'iy gigiyena nazorati",
      "delivery.kicker": "YETKAZIB BERISH VA MANZIL",
      "delivery.title": "MANZILNI TANLANG YOKI XARITADAN BELGILANG",
      "delivery.subtitle": "Xarita ustiga bosing yoki manzilni qo‘lda kiriting — yetkazib berish narxi avtomatik hisoblanadi",
      "delivery.city": "Shahar",
      "delivery.district": "Tuman",
      "delivery.street": "Ko‘cha va uy raqami",
      "delivery.streetPlaceholder": "Masalan: Amir Temur shoh ko‘chasi, 108-uy",
      "delivery.phone": "Telefon raqami",
      "delivery.method": "Yetkazib berish usuli",
      "delivery.methodCourier": "Kuryer orqali yetkazish",
      "delivery.methodPickup": "Olib ketish (Bepul)",
      "delivery.methodExpress": "Tezkor VIP kuryer",
      "delivery.feeLabel": "Yetkazib berish narxi:",
      "delivery.statusLabel": "Holat:",
      "delivery.statusReady": "Manzil kutilmoqda",
      "delivery.statusConfirmed": "Manzil tasdiqlandi — Tayyorlanmoqda",
      "delivery.confirmBtn": "Manzilni tasdiqlash",
      "delivery.selectedCoords": "Tanlangan nuqta:",
      "reviews.kicker": "MIJOZLAR FIKRI",
      "reviews.title": "MEHMONLARIMIZ NIMA DEYDI?",
      "contact.kicker": "BOG‘LANISH",
      "contact.title": "BIZ BILAN ALOQA",
      "contact.phoneLabel": "Telefon:",
      "contact.emailLabel": "Email:",
      "contact.addressLabel": "Manzil:",
      "contact.addressVal": "Toshkent sh., Yunusobod t., Amir Temur ko‘chasi, 108",
      "contact.hoursLabel": "Ish vaqti:",
      "contact.hoursVal": "Har kuni 09:00 – 02:00",
      "contact.formTitle": "Xabar yuborish",
      "contact.name": "Ismingiz",
      "contact.email": "Email",
      "contact.message": "Xabar",
      "contact.sendBtn": "Xabarni yuborish",
      "footer.desc": "Olovda pishgan haqiqiy fast-food, yangi mahsulotlar va tezkor yetkazib berish xizmati.",
      "footer.linksTitle": "Bo‘limlar",
      "footer.contactTitle": "Bog‘lanish",
      "footer.copyright": "© 2026 Crisp & Flame. Barcha huquqlar himoyalangan.",
      "cart.title": "Savatcha",
      "cart.total": "Jami summa:",
      "cart.clear": "Tozalash",
      "cart.checkout": "Buyurtma berish",
      "cart.empty": "Savatchangiz hozircha bo‘sh.",
      "auth.loginTitle": "Kirish",
      "auth.registerTitle": "Ro‘yxatdan o‘tish",
      "auth.tabLogin": "Kirish",
      "auth.tabRegister": "Ro‘yxatdan o‘tish",
      "auth.demoNote": "Eslatma: bu frontend demo autentifikatsiya; haqiqiy xavfsiz tizim uchun backend server talab qilinadi.",
      "auth.identifier": "Email yoki telefon",
      "auth.password": "Parol",
      "auth.remember": "Remember Me",
      "auth.forgot": "Forgot Password?",
      "auth.loginBtn": "Kirish",
      "auth.firstName": "Ism",
      "auth.lastName": "Familiya",
      "auth.phone": "Telefon raqami",
      "auth.email": "Email",
      "auth.confirmPassword": "Parolni tasdiqlash",
      "auth.registerBtn": "Ro‘yxatdan o‘tish"
    },
    ru: {
      "nav.home": "Главная",
      "nav.menu": "Меню",
      "nav.about": "О нас",
      "nav.promotions": "Акции",
      "nav.delivery": "Доставка",
      "nav.contact": "Контакты",
      "nav.cart": "Корзина",
      "nav.auth": "Войти",
      "hero.badge": "🔥 СЕГОДНЯ СПЕЦИАЛЬНАЯ СКИДКА 30%",
      "hero.title": "НАСТОЯЩИЙ ВКУС НА ОГНЕ",
      "hero.subtitle": "100% натуральная говядина, свежие булочки бриошь, расплавленный чеддер и горячая доставка за 35 минут.",
      "hero.orderNow": "Заказать сейчас",
      "hero.exploreMenu": "Смотреть меню",
      "hero.statDelivery": "Средняя доставка",
      "hero.statItems": "Блюд и комбо",
      "hero.statRating": "Оценка гостей",
      "hero.discountTag": "-30% КОМБО",
      "why.kicker": "НАШИ ПРЕИМУЩЕСТВА",
      "why.title": "ПОЧЕМУ CRISP & FLAME?",
      "why.fastTitle": "Быстрая доставка",
      "why.fastDesc": "Заказ отправляется в термосумке сразу после приготовления, чтобы приехать горячим.",
      "why.freshTitle": "Свежие ингредиенты",
      "why.freshDesc": "Ежедневно свежие овощи, фермерское мясо и натуральные сыры.",
      "why.qualityTitle": "Высокое качество",
      "why.qualityDesc": "Готовим по стандартам HACCP под контролем опытных шеф-поваров.",
      "why.priceTitle": "Доступные цены",
      "why.priceDesc": "Премиальный вкус по честным ценам, регулярные акции и выгодные комбо.",
      "menu.kicker": "НАШЕ МЕНЮ",
      "menu.title": "ПОЛНОЕ ФАСТ-ФУД МЕНЮ",
      "menu.subtitle": "50 отборных блюд и напитков в 10 категориях",
      "menu.searchPlaceholder": "Поиск по названию блюда...",
      "menu.sortLabel": "Сортировка:",
      "menu.sortDefault": "Рекомендуемые",
      "menu.sortAsc": "Цена: по возрастанию",
      "menu.sortDesc": "Цена: по убыванию",
      "menu.sortRating": "Высокий рейтинг",
      "menu.addToCart": "В корзину",
      "menu.noResults": "По вашему запросу ничего не найдено.",
      "promo.kicker": "СПЕЦПРЕДЛОЖЕНИЯ",
      "promo.title": "СКИДКИ И АКЦИИ",
      "promo.subtitle": "Скидки 20%, 30%, 50%, комбо-наборы, акции 1+1 и ежедневные предложения",
      "promo.orderNow": "Заказать",
      "about.since": "Работаем с года",
      "about.kicker": "ИСТОРИЯ РЕСТОРАНА",
      "about.title": "О РЕСТОРАНЕ CRISP & FLAME",
      "about.desc1": "Crisp & Flame — современный бренд, объединивший скорость фаст-фуда и качество ресторана. Каждый бургер, пицца и лаваш готовятся из свежих продуктов после вашего заказа.",
      "about.desc2": "Наши повара используют фирменные специи, авторские соусы и ежедневно обновляемые ингредиенты.",
      "about.point1": "✓ 100% сертифицированные продукты",
      "about.point2": "✓ Быстрая доставка до 35 минут",
      "about.point3": "✓ Ежедневно свежая зелень и овощи",
      "about.point4": "✓ Опытные повара и строгая гигиена",
      "delivery.kicker": "ДОСТАВКА И АДРЕС",
      "delivery.title": "ВЫБЕРИТЕ АДРЕС ИЛИ ОТМЕТЬТЕ НА КАРТЕ",
      "delivery.subtitle": "Нажмите на карту или введите адрес вручную — стоимость доставки рассчитается автоматически",
      "delivery.city": "Город",
      "delivery.district": "Район",
      "delivery.street": "Улица и номер дома",
      "delivery.streetPlaceholder": "Например: проспект Амира Темура, 108",
      "delivery.phone": "Номер телефона",
      "delivery.method": "Способ доставки",
      "delivery.methodCourier": "Доставка курьером",
      "delivery.methodPickup": "Самовывоз (Бесплатно)",
      "delivery.methodExpress": "Экспресс VIP курьер",
      "delivery.feeLabel": "Стоимость доставки:",
      "delivery.statusLabel": "Статус:",
      "delivery.statusReady": "Ожидает адрес",
      "delivery.statusConfirmed": "Адрес подтвержден — Готовится",
      "delivery.confirmBtn": "Подтвердить адрес",
      "delivery.selectedCoords": "Выбранная точка:",
      "reviews.kicker": "ОТЗЫВЫ ГОСТЕЙ",
      "reviews.title": "ЧТО ГОВОРЯТ НАШИ КЛИЕНТЫ?",
      "contact.kicker": "СВЯЗЬ",
      "contact.title": "КОНТАКТЫ",
      "contact.phoneLabel": "Телефон:",
      "contact.emailLabel": "Email:",
      "contact.addressLabel": "Адрес:",
      "contact.addressVal": "г. Ташкент, Юнусабадский р-н, ул. Амира Темура, 108",
      "contact.hoursLabel": "Режим работы:",
      "contact.hoursVal": "Ежедневно 09:00 – 02:00",
      "contact.formTitle": "Отправить сообщение",
      "contact.name": "Ваше имя",
      "contact.email": "Email",
      "contact.message": "Сообщение",
      "contact.sendBtn": "Отправить",
      "footer.desc": "Настоящий фаст-фуд на огне, свежие ингредиенты и быстрая доставка.",
      "footer.linksTitle": "Разделы",
      "footer.contactTitle": "Контакты",
      "footer.copyright": "© 2026 Crisp & Flame. Все права защищены.",
      "cart.title": "Корзина",
      "cart.total": "Итого:",
      "cart.clear": "Очистить",
      "cart.checkout": "Оформить заказ",
      "cart.empty": "Ваша корзина пока пуста.",
      "auth.loginTitle": "Вход",
      "auth.registerTitle": "Регистрация",
      "auth.tabLogin": "Вход",
      "auth.tabRegister": "Регистрация",
      "auth.demoNote": "Примечание: это frontend-демо аутентификации; для реальной безопасности нужен backend-сервер.",
      "auth.identifier": "Email или телефон",
      "auth.password": "Пароль",
      "auth.remember": "Запомнить меня",
      "auth.forgot": "Забыли пароль?",
      "auth.loginBtn": "Войти",
      "auth.firstName": "Имя",
      "auth.lastName": "Фамилия",
      "auth.phone": "Номер телефона",
      "auth.email": "Email",
      "auth.confirmPassword": "Подтвердите пароль",
      "auth.registerBtn": "Зарегистрироваться"
    },
    en: {
      "nav.home": "Home",
      "nav.menu": "Menu",
      "nav.about": "About",
      "nav.promotions": "Promotions",
      "nav.delivery": "Delivery",
      "nav.contact": "Contact",
      "nav.cart": "Cart",
      "nav.auth": "Login",
      "hero.badge": "🔥 SPECIAL 30% DISCOUNT TODAY",
      "hero.title": "FLAME-GRILLED REAL FLAVOR",
      "hero.subtitle": "100% pure beef patties, freshly baked brioche buns, melted cheddar, and hot delivery within 35 minutes.",
      "hero.orderNow": "Order Now",
      "hero.exploreMenu": "Explore Menu",
      "hero.statDelivery": "Avg. Delivery",
      "hero.statItems": "Menu & Combos",
      "hero.statRating": "Guest Rating",
      "hero.discountTag": "-30% COMBO",
      "why.kicker": "WHY CHOOSE US",
      "why.title": "WHY CRISP & FLAME?",
      "why.fastTitle": "Fast Delivery",
      "why.fastDesc": "Dispatched in insulated bags straight off the grill so it arrives hot and crisp.",
      "why.freshTitle": "Fresh Ingredients",
      "why.freshDesc": "Daily crisp vegetables, prime beef cuts, and real aged cheeses.",
      "why.qualityTitle": "Best Quality",
      "why.qualityDesc": "Prepared under HACCP food safety standards by experienced grill chefs.",
      "why.priceTitle": "Affordable Prices",
      "why.priceDesc": "Restaurant-grade taste at fair prices with daily deals and value combos.",
      "menu.kicker": "OUR MENU",
      "menu.title": "COMPLETE FAST-FOOD MENU",
      "menu.subtitle": "50 handcrafted items across 10 delicious categories",
      "menu.searchPlaceholder": "Search dish name...",
      "menu.sortLabel": "Sort by:",
      "menu.sortDefault": "Recommended",
      "menu.sortAsc": "Price: Low to High",
      "menu.sortDesc": "Price: High to Low",
      "menu.sortRating": "Highest Rated",
      "menu.addToCart": "Add to Cart",
      "menu.noResults": "No menu items match your filter.",
      "promo.kicker": "SPECIAL DEALS",
      "promo.title": "PROMOTIONS & DISCOUNTS",
      "promo.subtitle": "20%, 30%, 50% discounts, Combo menus, 1+1 offers, and daily specials",
      "promo.orderNow": "Order Now",
      "about.since": "Serving since",
      "about.kicker": "OUR STORY",
      "about.title": "ABOUT CRISP & FLAME",
      "about.desc1": "Crisp & Flame combines fast-casual speed with true kitchen craft. Every burger, pizza, and lavash is made fresh after you place your order.",
      "about.desc2": "Our culinary team pairs custom spice blends and house sauces with daily-sourced produce and quality meats.",
      "about.point1": "✓ 100% quality-checked ingredients",
      "about.point2": "✓ Fast delivery in up to 35 minutes",
      "about.point3": "✓ Daily fresh greens and vegetables",
      "about.point4": "✓ Skilled chefs and strict hygiene",
      "delivery.kicker": "DELIVERY & LOCATION",
      "delivery.title": "ENTER ADDRESS OR PICK ON THE MAP",
      "delivery.subtitle": "Click anywhere on the map or type your address — delivery fee updates automatically",
      "delivery.city": "City",
      "delivery.district": "District",
      "delivery.street": "Street and House Number",
      "delivery.streetPlaceholder": "e.g. 108 Amir Temur Avenue",
      "delivery.phone": "Phone Number",
      "delivery.method": "Delivery Method",
      "delivery.methodCourier": "Standard Courier",
      "delivery.methodPickup": "Self Pickup (Free)",
      "delivery.methodExpress": "Express VIP Courier",
      "delivery.feeLabel": "Delivery Fee:",
      "delivery.statusLabel": "Order Status:",
      "delivery.statusReady": "Awaiting Address",
      "delivery.statusConfirmed": "Address Confirmed — Preparing",
      "delivery.confirmBtn": "Confirm Address",
      "delivery.selectedCoords": "Selected Pin:",
      "reviews.kicker": "CUSTOMER REVIEWS",
      "reviews.title": "WHAT OUR GUESTS SAY",
      "contact.kicker": "GET IN TOUCH",
      "contact.title": "CONTACT US",
      "contact.phoneLabel": "Phone:",
      "contact.emailLabel": "Email:",
      "contact.addressLabel": "Address:",
      "contact.addressVal": "108 Amir Temur Ave, Yunusabad, Tashkent",
      "contact.hoursLabel": "Working Hours:",
      "contact.hoursVal": "Daily 09:00 – 02:00",
      "contact.formTitle": "Send a Message",
      "contact.name": "Your Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.sendBtn": "Send Message",
      "footer.desc": "Flame-grilled fast food, fresh ingredients, and reliable delivery.",
      "footer.linksTitle": "Sections",
      "footer.contactTitle": "Contact",
      "footer.copyright": "© 2026 Crisp & Flame. All rights reserved.",
      "cart.title": "Shopping Cart",
      "cart.total": "Total:",
      "cart.clear": "Clear",
      "cart.checkout": "Place Order",
      "cart.empty": "Your cart is currently empty.",
      "auth.loginTitle": "Login",
      "auth.registerTitle": "Register",
      "auth.tabLogin": "Login",
      "auth.tabRegister": "Register",
      "auth.demoNote": "Note: This is a frontend demo authentication; real secure auth requires a backend server.",
      "auth.identifier": "Email or Phone",
      "auth.password": "Password",
      "auth.remember": "Remember Me",
      "auth.forgot": "Forgot Password?",
      "auth.loginBtn": "Login",
      "auth.firstName": "First Name",
      "auth.lastName": "Last Name",
      "auth.phone": "Phone Number",
      "auth.email": "Email",
      "auth.confirmPassword": "Confirm Password",
      "auth.registerBtn": "Create Account"
    }
  };

  let state = {
    lang: localStorage.getItem(STORAGE_KEYS.LANG) || "uz",
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || "light",
    category: "all",
    search: "",
    sort: "default",
    cart: loadCart(),
    reviewIndex: 0,
    coords: [41.3111, 69.2797]
  };

  let deliveryMap = null;
  let deliveryMarker = null;
  let contactMap = null;

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CART);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveCart() {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
  }

  function formatUZS(amount) {
    return `${Number(amount || 0).toLocaleString("en-US").replace(/,/g, " ")} UZS`;
  }

  function t(key) {
    return (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || TRANSLATIONS.uz[key] || key;
  }

  function showToast(message, isError = false) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast${isError ? " error" : ""}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  function attachImageFallbacks() {
    document.querySelectorAll("img[data-fallback]").forEach((img) => {
      img.addEventListener("error", () => {
        const key = img.getAttribute("data-fallback");
        const fb = FALLBACK_IMAGES[key] || FALLBACK_IMAGES.burger;
        if (img.src !== fb) img.src = fb;
      }, { once: true });
    });
  }

  // THEME
  function applyTheme(theme) {
    state.theme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
    const icon = document.getElementById("themeIcon");
    if (icon) {
      icon.textContent = state.theme === "dark" ? "☀️" : "🌙";
    }
  }

  // LANGUAGE
  function applyLanguage(lang) {
    state.lang = TRANSLATIONS[lang] ? lang : "uz";
    document.documentElement.lang = state.lang;
    localStorage.setItem(STORAGE_KEYS.LANG, state.lang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.placeholder = t(key);
    });

    renderCategoryTabs();
    renderMenu();
    renderPromotions();
    populateDistricts(false);
    updateDeliveryFee();
    renderReviews();
    renderCart();
    updateAuthButtonLabel();
  }

  // NAVBAR & HAMBURGER
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburgerBtn");
    const navLinks = document.getElementById("navLinks");

    window.addEventListener("scroll", () => {
      if (!navbar) return;
      navbar.classList.toggle("scrolled", window.scrollY > 18);
    }, { passive: true });

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamburger.setAttribute("aria-expanded", String(isOpen));
      });

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
          hamburger.setAttribute("aria-expanded", "false");
        });
      });
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        applyTheme(state.theme === "dark" ? "light" : "dark");
      });
    }
  }

  // MENU
  function renderCategoryTabs() {
    const container = document.getElementById("categoryTabs");
    if (!container) return;
    container.innerHTML = CATEGORIES.map((cat) => `
      <button
        type="button"
        class="cat-btn${state.category === cat.id ? " active" : ""}"
        data-category="${cat.id}"
        role="tab"
        aria-selected="${state.category === cat.id}"
      >${cat[state.lang] || cat.uz}</button>
    `).join("");

    container.querySelectorAll(".cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.category;
        renderCategoryTabs();
        renderMenu();
      });
    });
  }

  function getFilteredSortedMenu() {
    const q = state.search.trim().toLowerCase();
    let list = MENU_ITEMS.filter((item) => {
      const matchesCat = state.category === "all" || item.category === state.category;
      const itemName = (item.name[state.lang] || item.name.uz).toLowerCase();
      const itemIng = (item.ingredients[state.lang] || item.ingredients.uz).toLowerCase();
      const matchesQuery = !q || itemName.includes(q) || itemIng.includes(q);
      return matchesCat && matchesQuery;
    });

    if (state.sort === "price-asc") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (state.sort === "price-desc") {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (state.sort === "rating-desc") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }

  function renderMenu() {
    const grid = document.getElementById("menuGrid");
    if (!grid) return;
    const items = getFilteredSortedMenu();

    if (!items.length) {
      grid.innerHTML = `<p class="cart-empty" style="grid-column: 1 / -1;">${t("menu.noResults")}</p>`;
      return;
    }

    grid.innerHTML = items.map((item) => `
      <article class="food-card" data-id="${item.id}">
        <div class="food-img-wrap">
          <img src="${item.img}" alt="${item.name[state.lang] || item.name.uz}" class="food-img" data-fallback="${item.category === "hotdogs" ? "hotdog" : item.category === "sandwiches" ? "sandwich" : item.category === "drinks" ? "drink" : item.category === "desserts" ? "dessert" : item.category}" />
          ${item.discount > 0 ? `<span class="discount-badge">-${item.discount}%</span>` : ""}
          <span class="rating-badge">★ ${item.rating.toFixed(1)}</span>
        </div>
        <div class="food-body">
          <h3 class="food-title">${item.name[state.lang] || item.name.uz}</h3>
          <p class="food-ingredients">${item.ingredients[state.lang] || item.ingredients.uz}</p>
          <div class="food-price-row">
            <span class="food-price">${formatUZS(item.price)}</span>
            ${item.oldPrice ? `<span class="food-old-price">${formatUZS(item.oldPrice)}</span>` : ""}
          </div>
          <div class="food-actions">
            <div class="qty-control">
              <button type="button" class="qty-btn card-qty-minus" aria-label="Decrease quantity">−</button>
              <span class="qty-val card-qty-val">1</span>
              <button type="button" class="qty-btn card-qty-plus" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="btn btn-primary add-cart-btn">${t("menu.addToCart")}</button>
          </div>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".food-card").forEach((card) => {
      const id = card.dataset.id;
      const qtySpan = card.querySelector(".card-qty-val");
      const minusBtn = card.querySelector(".card-qty-minus");
      const plusBtn = card.querySelector(".card-qty-plus");
      const addBtn = card.querySelector(".add-cart-btn");

      minusBtn.addEventListener("click", () => {
        const cur = Number(qtySpan.textContent) || 1;
        if (cur > 1) qtySpan.textContent = String(cur - 1);
      });

      plusBtn.addEventListener("click", () => {
        const cur = Number(qtySpan.textContent) || 1;
        qtySpan.textContent = String(cur + 1);
      });

      addBtn.addEventListener("click", () => {
        const qty = Number(qtySpan.textContent) || 1;
        const product = MENU_ITEMS.find((m) => m.id === id);
        if (product) {
          addToCart({
            id: product.id,
            title: product.name,
            price: product.price,
            img: product.img,
            fallback: product.category
          }, qty);
          qtySpan.textContent = "1";
        }
      });
    });

    attachImageFallbacks();
  }

  function initMenuControls() {
    const searchInput = document.getElementById("menuSearch");
    const sortSelect = document.getElementById("menuSort");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.search = e.target.value;
        renderMenu();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        state.sort = e.target.value;
        renderMenu();
      });
    }
  }

  // PROMOTIONS
  function renderPromotions() {
    const grid = document.getElementById("promotionsGrid");
    if (!grid) return;

    grid.innerHTML = PROMOTIONS.map((promo) => `
      <article class="promo-card">
        <div class="promo-img-wrap">
          <img src="${promo.img}" alt="${promo.title[state.lang] || promo.title.uz}" class="promo-img" data-fallback="burger" />
          <span class="promo-tag">${promo.badge}</span>
        </div>
        <div class="promo-body">
          <h3 class="promo-title">${promo.title[state.lang] || promo.title.uz}</h3>
          <p class="promo-desc">${promo.desc[state.lang] || promo.desc.uz}</p>
          <div class="promo-prices">
            <span class="promo-new">${formatUZS(promo.price)}</span>
            <span class="promo-old">${formatUZS(promo.oldPrice)}</span>
          </div>
          <button type="button" class="btn btn-primary full-width promo-order-btn" data-promo-id="${promo.id}">
            ${t("promo.orderNow")}
          </button>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".promo-order-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const promo = PROMOTIONS.find((p) => p.id === btn.dataset.promoId);
        if (promo) {
          addToCart({
            id: promo.id,
            title: promo.title,
            price: promo.price,
            img: promo.img,
            fallback: "burger"
          }, 1);
          openCart();
        }
      });
    });

    attachImageFallbacks();
  }

  // SHOPPING CART
  function addToCart(product, qty = 1) {
    const existing = state.cart.find((c) => c.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.img,
        fallback: product.fallback || "burger",
        qty
      });
    }
    saveCart();
    renderCart();
    const label = product.title[state.lang] || product.title.uz;
    showToast(`${label} (${qty}) — ${t("menu.addToCart")}`);
  }

  function updateCartQty(id, delta) {
    const item = state.cart.find((c) => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter((c) => c.id !== id);
    }
    saveCart();
    renderCart();
  }

  function removeCartItem(id) {
    state.cart = state.cart.filter((c) => c.id !== id);
    saveCart();
    renderCart();
  }

  function renderCart() {
    const countEl = document.getElementById("cartCount");
    const itemsEl = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");

    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    if (countEl) countEl.textContent = String(totalCount);
    if (totalEl) totalEl.textContent = formatUZS(totalPrice);
    if (!itemsEl) return;

    if (!state.cart.length) {
      itemsEl.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
      return;
    }

    itemsEl.innerHTML = state.cart.map((item) => {
      const titleText = typeof item.title === "object" ? (item.title[state.lang] || item.title.uz) : item.title;
      return `
        <div class="cart-item">
          <img src="${item.img}" alt="${titleText}" class="cart-item-img" data-fallback="${item.fallback || "burger"}" />
          <div class="cart-item-info">
            <div class="cart-item-title">${titleText}</div>
            <div class="cart-item-price">${formatUZS(item.price * item.qty)}</div>
          </div>
          <div class="cart-item-controls">
            <button type="button" class="qty-btn cart-dec" data-id="${item.id}" aria-label="Decrease">−</button>
            <span class="qty-val">${item.qty}</span>
            <button type="button" class="qty-btn cart-inc" data-id="${item.id}" aria-label="Increase">+</button>
            <button type="button" class="remove-item-btn" data-id="${item.id}" aria-label="Remove">🗑</button>
          </div>
        </div>
      `;
    }).join("");

    itemsEl.querySelectorAll(".cart-dec").forEach((btn) => {
      btn.addEventListener("click", () => updateCartQty(btn.dataset.id, -1));
    });
    itemsEl.querySelectorAll(".cart-inc").forEach((btn) => {
      btn.addEventListener("click", () => updateCartQty(btn.dataset.id, 1));
    });
    itemsEl.querySelectorAll(".remove-item-btn").forEach((btn) => {
      btn.addEventListener("click", () => removeCartItem(btn.dataset.id));
    });

    attachImageFallbacks();
  }

  function openCart() {
    document.getElementById("cartDrawer")?.classList.add("open");
    document.getElementById("cartBackdrop")?.classList.add("open");
  }

  function closeCart() {
    document.getElementById("cartDrawer")?.classList.remove("open");
    document.getElementById("cartBackdrop")?.classList.remove("open");
  }

  function initCartControls() {
    document.getElementById("openCartBtn")?.addEventListener("click", openCart);
    document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
    document.getElementById("cartBackdrop")?.addEventListener("click", closeCart);

    document.getElementById("clearCartBtn")?.addEventListener("click", () => {
      state.cart = [];
      saveCart();
      renderCart();
      showToast("Savatcha tozalandi");
    });

    document.getElementById("checkoutBtn")?.addEventListener("click", () => {
      if (!state.cart.length) {
        showToast(t("cart.empty"), true);
        return;
      }
      const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      state.cart = [];
      saveCart();
      renderCart();
      closeCart();
      const statusEl = document.getElementById("deliveryStatusText");
      if (statusEl) {
        statusEl.textContent = t("delivery.statusConfirmed");
      }
      showToast(`Buyurtma qabul qilindi (${formatUZS(total)})!`);
    });
  }

  // DELIVERY & LEAFLET MAPS
  function populateDistricts(resetCityView = true) {
    const citySelect = document.getElementById("deliveryCity");
    const districtSelect = document.getElementById("deliveryDistrict");
    if (!citySelect || !districtSelect) return;

    const city = citySelect.value || "Toshkent";
    const list = DISTRICTS_BY_CITY[city] || DISTRICTS_BY_CITY.Toshkent;
    const prevVal = districtSelect.value;

    districtSelect.innerHTML = list.map((d) => `
      <option value="${d.id}" data-fee="${d.fee}">${d[state.lang] || d.uz}</option>
    `).join("");

    if (list.some((d) => d.id === prevVal)) {
      districtSelect.value = prevVal;
    }

    if (resetCityView && CITY_COORDS[city]) {
      setMapLocation(CITY_COORDS[city][0], CITY_COORDS[city][1], city);
    }
    updateDeliveryFee();
  }

  function updateDeliveryFee() {
    const districtSelect = document.getElementById("deliveryDistrict");
    const methodSelect = document.getElementById("deliveryMethod");
    const feeEl = document.getElementById("deliveryFeeText");
    if (!districtSelect || !methodSelect || !feeEl) return;

    const method = methodSelect.value;
    if (method === "pickup") {
      feeEl.textContent = formatUZS(0);
      return;
    }

    const opt = districtSelect.options[districtSelect.selectedIndex];
    let baseFee = opt ? Number(opt.dataset.fee || 15000) : 15000;
    if (method === "express") baseFee += 12000;
    feeEl.textContent = formatUZS(baseFee);
  }

  function setMapLocation(lat, lng, cityLabel) {
    state.coords = [Number(lat.toFixed(4)), Number(lng.toFixed(4))];
    const coordsEl = document.getElementById("selectedCoords");
    const city = cityLabel || document.getElementById("deliveryCity")?.value || "Toshkent";
    if (coordsEl) {
      coordsEl.textContent = `${state.coords[0]}, ${state.coords[1]} (${city})`;
    }
    if (deliveryMap && deliveryMarker) {
      deliveryMarker.setLatLng(state.coords);
      deliveryMap.setView(state.coords, 12);
    }
  }

  function initMaps() {
    if (typeof L === "undefined") return;

    const delivContainer = document.getElementById("deliveryMap");
    if (delivContainer && !deliveryMap) {
      deliveryMap = L.map("deliveryMap", { scrollWheelZoom: false }).setView(state.coords, 12);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap"
      }).addTo(deliveryMap);

      deliveryMarker = L.marker(state.coords, { draggable: true }).addTo(deliveryMap);

      deliveryMap.on("click", (e) => {
        setMapLocation(e.latlng.lat, e.latlng.lng);
      });

      deliveryMarker.on("dragend", () => {
        const pos = deliveryMarker.getLatLng();
        setMapLocation(pos.lat, pos.lng);
      });
    }

    const contactContainer = document.getElementById("contactMap");
    if (contactContainer && !contactMap) {
      const restCoords = [41.3275, 69.2817];
      contactMap = L.map("contactMap", { scrollWheelZoom: false }).setView(restCoords, 14);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap"
      }).addTo(contactMap);
      L.marker(restCoords).addTo(contactMap).bindPopup("Crisp & Flame").openPopup();
    }
  }

  function initDeliveryForm() {
    const citySelect = document.getElementById("deliveryCity");
    const districtSelect = document.getElementById("deliveryDistrict");
    const methodSelect = document.getElementById("deliveryMethod");
    const form = document.getElementById("deliveryForm");

    citySelect?.addEventListener("change", () => populateDistricts(true));
    districtSelect?.addEventListener("change", updateDeliveryFee);
    methodSelect?.addEventListener("change", updateDeliveryFee);

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const streetInput = document.getElementById("deliveryStreet");
      const phoneInput = document.getElementById("deliveryPhone");
      const errStreet = document.getElementById("errDeliveryStreet");
      const errPhone = document.getElementById("errDeliveryPhone");
      let valid = true;

      if (errStreet) errStreet.textContent = "";
      if (errPhone) errPhone.textContent = "";

      if (!streetInput || streetInput.value.trim().length < 4) {
        if (errStreet) errStreet.textContent = "Ko‘cha va uy raqamini kiriting";
        valid = false;
      }

      const phoneDigits = (phoneInput?.value || "").replace(/\D/g, "");
      if (phoneDigits.length < 9) {
        if (errPhone) errPhone.textContent = "To‘g‘ri telefon raqamini kiriting";
        valid = false;
      }

      if (!valid) {
        showToast("Iltimos, manzil ma'lumotlarini tekshiring", true);
        return;
      }

      const payload = {
        city: citySelect?.value,
        district: districtSelect?.value,
        street: streetInput.value.trim(),
        phone: phoneInput.value.trim(),
        method: methodSelect?.value,
        coords: state.coords
      };
      localStorage.setItem(STORAGE_KEYS.DELIVERY, JSON.stringify(payload));
      const statusEl = document.getElementById("deliveryStatusText");
      if (statusEl) statusEl.textContent = t("delivery.statusConfirmed");
      showToast("Yetkazib berish manzili saqlandi!");
    });
  }

  // REVIEWS SLIDER
  function renderReviews() {
    const track = document.getElementById("reviewTrack");
    const dots = document.getElementById("reviewDots");
    if (!track || !dots) return;

    const rev = REVIEWS[state.reviewIndex] || REVIEWS[0];
    const starsStr = "★".repeat(rev.stars) + "☆".repeat(5 - rev.stars);

    track.innerHTML = `
      <article class="review-card">
        <div class="review-top">
          <div class="reviewer-meta">
            <img src="${rev.avatar}" alt="${rev.name[state.lang] || rev.name.uz}" class="reviewer-avatar" data-fallback="burger" />
            <div>
              <div class="reviewer-name">${rev.name[state.lang] || rev.name.uz}</div>
            </div>
          </div>
          <div class="review-stars" aria-label="${rev.stars} out of 5 stars">${starsStr}</div>
        </div>
        <p class="review-quote">“${rev.quote[state.lang] || rev.quote.uz}”</p>
      </article>
    `;

    dots.innerHTML = REVIEWS.map((_, idx) => `
      <button
        type="button"
        class="review-dot${idx === state.reviewIndex ? " active" : ""}"
        aria-label="Review ${idx + 1}"
        data-idx="${idx}"
      ></button>
    `).join("");

    dots.querySelectorAll(".review-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        state.reviewIndex = Number(dot.dataset.idx);
        renderReviews();
      });
    });

    attachImageFallbacks();
  }

  function initReviewSlider() {
    document.getElementById("prevReviewBtn")?.addEventListener("click", () => {
      state.reviewIndex = (state.reviewIndex - 1 + REVIEWS.length) % REVIEWS.length;
      renderReviews();
    });

    document.getElementById("nextReviewBtn")?.addEventListener("click", () => {
      state.reviewIndex = (state.reviewIndex + 1) % REVIEWS.length;
      renderReviews();
    });
  }

  // CONTACT FORM
  function initContactForm() {
    const form = document.getElementById("contactForm");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameEl = document.getElementById("contactName");
      const emailEl = document.getElementById("contactEmail");
      const msgEl = document.getElementById("contactMessage");
      const errName = document.getElementById("errContactName");
      const errEmail = document.getElementById("errContactEmail");
      const errMsg = document.getElementById("errContactMessage");
      let valid = true;

      [errName, errEmail, errMsg].forEach((el) => { if (el) el.textContent = ""; });

      if (!nameEl || nameEl.value.trim().length < 2) {
        if (errName) errName.textContent = "Ismingizni kiriting";
        valid = false;
      }
      if (!emailEl || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
        if (errEmail) errEmail.textContent = "Yaroqli email kiriting";
        valid = false;
      }
      if (!msgEl || msgEl.value.trim().length < 5) {
        if (errMsg) errMsg.textContent = "Xabar matnini kiriting";
        valid = false;
      }

      if (!valid) {
        showToast("Formadagi xatoliklarni to‘g‘rilang", true);
        return;
      }

      form.reset();
      showToast("Xabaringiz yuborildi! Tez orada javob beramiz.");
    });
  }

  // LOGIN / REGISTER MODAL
  function updateAuthButtonLabel() {
    const btn = document.getElementById("openAuthBtn");
    if (!btn) return;
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER) || "null");
      if (saved && saved.firstName) {
        btn.textContent = saved.firstName;
        return;
      }
    } catch { /* ignore */ }
    btn.textContent = t("nav.auth");
  }

  function switchAuthTab(mode) {
    const isRegister = mode === "register";
    const tabLogin = document.getElementById("tabLogin");
    const tabRegister = document.getElementById("tabRegister");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const titleEl = document.getElementById("authModalTitle");

    tabLogin?.classList.toggle("active", !isRegister);
    tabRegister?.classList.toggle("active", isRegister);
    loginForm?.classList.toggle("hidden", isRegister);
    registerForm?.classList.toggle("hidden", !isRegister);
    if (titleEl) {
      titleEl.textContent = isRegister ? t("auth.registerTitle") : t("auth.loginTitle");
    }
  }

  function openAuthModal(mode = "login") {
    switchAuthTab(mode);
    document.getElementById("authModal")?.classList.add("open");
  }

  function closeAuthModal() {
    document.getElementById("authModal")?.classList.remove("open");
  }

  function initAuthModal() {
    document.getElementById("openAuthBtn")?.addEventListener("click", () => openAuthModal("login"));
    document.getElementById("closeAuthBtn")?.addEventListener("click", closeAuthModal);
    document.getElementById("authModal")?.addEventListener("click", (e) => {
      if (e.target.id === "authModal") closeAuthModal();
    });

    document.getElementById("tabLogin")?.addEventListener("click", () => switchAuthTab("login"));
    document.getElementById("tabRegister")?.addEventListener("click", () => switchAuthTab("register"));

    document.getElementById("forgotPasswordBtn")?.addEventListener("click", () => {
      showToast("Parolni tiklash havolasi (demo) yuborildi.");
    });

    document.getElementById("loginForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const idEl = document.getElementById("loginIdentifier");
      const passEl = document.getElementById("loginPassword");
      const errId = document.getElementById("errLoginId");
      const errPass = document.getElementById("errLoginPass");
      let valid = true;

      if (errId) errId.textContent = "";
      if (errPass) errPass.textContent = "";

      if (!idEl || idEl.value.trim().length < 3) {
        if (errId) errId.textContent = "Email yoki telefon raqamini kiriting";
        valid = false;
      }
      if (!passEl || passEl.value.length < 6) {
        if (errPass) errPass.textContent = "Parol kamida 6 belgidan iborat bo‘lsin";
        valid = false;
      }

      if (!valid) {
        showToast("Kirish ma'lumotlari noto‘g‘ri", true);
        return;
      }

      const demoUser = { firstName: idEl.value.trim().split("@")[0] || "User" };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(demoUser));
      updateAuthButtonLabel();
      closeAuthModal();
      showToast(`Xush kelibsiz, ${demoUser.firstName}!`);
    });

    document.getElementById("registerForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const firstEl = document.getElementById("regFirstName");
      const lastEl = document.getElementById("regLastName");
      const phoneEl = document.getElementById("regPhone");
      const emailEl = document.getElementById("regEmail");
      const passEl = document.getElementById("regPassword");
      const confEl = document.getElementById("regConfirmPassword");

      const errs = {
        first: document.getElementById("errRegFirst"),
        last: document.getElementById("errRegLast"),
        phone: document.getElementById("errRegPhone"),
        email: document.getElementById("errRegEmail"),
        pass: document.getElementById("errRegPass"),
        conf: document.getElementById("errRegConfirm")
      };

      Object.values(errs).forEach((el) => { if (el) el.textContent = ""; });
      let valid = true;

      if (!firstEl || firstEl.value.trim().length < 2) {
        if (errs.first) errs.first.textContent = "Ismni kiriting";
        valid = false;
      }
      if (!lastEl || lastEl.value.trim().length < 2) {
        if (errs.last) errs.last.textContent = "Familiyani kiriting";
        valid = false;
      }
      if (!phoneEl || phoneEl.value.replace(/\D/g, "").length < 9) {
        if (errs.phone) errs.phone.textContent = "Telefon raqamini kiriting";
        valid = false;
      }
      if (!emailEl || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
        if (errs.email) errs.email.textContent = "Yaroqli email kiriting";
        valid = false;
      }
      if (!passEl || passEl.value.length < 6) {
        if (errs.pass) errs.pass.textContent = "Parol kamida 6 belgi bo‘lsin";
        valid = false;
      }
      if (!confEl || confEl.value !== passEl?.value) {
        if (errs.conf) errs.conf.textContent = "Parollar mos kelmadi";
        valid = false;
      }

      if (!valid) {
        showToast("Ro‘yxatdan o‘tish formasi xatolik bilan to‘ldirildi", true);
        return;
      }

      const newUser = {
        firstName: firstEl.value.trim(),
        lastName: lastEl.value.trim(),
        email: emailEl.value.trim()
      };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
      updateAuthButtonLabel();
      closeAuthModal();
      e.target.reset();
      showToast(`Muvaffaqiyatli ro‘yxatdan o‘tdingiz, ${newUser.firstName}!`);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(state.theme);
    initNavbar();
    initMenuControls();
    initCartControls();
    initDeliveryForm();
    initReviewSlider();
    initContactForm();
    initAuthModal();
    applyLanguage(state.lang);
    attachImageFallbacks();
    initMaps();
  });
})();
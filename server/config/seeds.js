const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  // change category names for backend (Marques)
  const categories = await Category.insertMany([
    { name: 'Birthday' },
    { name: 'Congratulations' },
    { name: 'Easter' },
    { name: 'Gift Baskets' },
    { name: 'Just Because' },
    { name: 'Love and Romance' },
    { name: "Mother's Day" },
    { name: 'Sympathy' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();


  // once flower pics are seeded we can name them here with decription
  const products = await Product.insertMany([
    {
      name: 'Bright Birthday Bomb',
      description: 'Arrangement of gerber daisies, green poms, roses, and statice in a HAPPY BIRTHDAY vase.',
      image: './Birthday/BrightBdayBomb.jpg',
      category: categories[0]._id,
      price: 39.99
    },
    {
      name: 'Garden Birthday Bomb',
      description:'Violet and kalanchoe plants in a wooden pot.',
      image: './Birthday/GardenBdayBomb.jpg',
      category: categories[0]._id,
      price: 29.99
    },
    {
      name: 'Light Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of lilies, carnations, daisies, and roses in a clear glass vase.',
      image: './Birthday/LightBdayBomb.jpg',
      price: 36.99
    },
    {
      name: 'Marmalade Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of roses, monte casino, poms, alstroemeria, daisies, and solidago in a clear glass vase.',      
      image: './Birthday/MarmaladeBdayBomb.jpg',
      price: 25.99,
      
    },
    {
      name: 'Radiance Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of roses, carnations, poms, ivy, and snap dragons in a wooden basket.',
      image: './Birthday/RadianceBdayBomb.jpg',
      price: 42.99
    },
    {
      name: 'Rainbow Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of rainbow colored roses in a clear glass vase.',
      image: './Birthday/RainbowBdayBomb.jpg',
      price: 32.99
    },
    {
      name: 'Rose Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of roses, carnations, and alstroemeria in a clear glass vase.',
      image: './Birthday/RoseBdayBomb.jpg',
      price: 39.99,
    },
    {
      name: 'Smile Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of roses and alstroemeria in a clear glass vase.',
      image: './Birthday/SmileBdayBomb.jpg',
      price: 39.99
    },
    {
      name: 'Sorbet Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of roses, carnations, daisies, and a variety of poms in a white wooden box.',
      image: './Birthday/SorbetBdayBomb.jpg',
      price: 35.99
    },
    {
      name: 'Spirit Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of roses, lilies, poms, carnations, and snap dragons in a wooden basket.',
      image: './Birthday/SpiritBdayBomb.jpg',
      price: 42.99
    },
    {
      name: 'Sweet Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of roses, carnations, poms, and alstroemeria in a clear glass vase.',
      image: './Birthday/SweetBdayBomb.jpg',
      price: 29.99
    },
    {
      name: 'Wild Spirit Birthday Bomb',
      category: categories[0]._id,
      description:'Arrangement of stargazer lilies, roses, poms, snap dragons, and eucalyptus in a white wooden box.',
      image: './Birthday/WildSpiritBdayBomb.jpg',
      price: 37.99
    },
    {
      name: 'Blue Carribean',
      category: categories[1]._id,
      description:'Arrangement of lilies, gerber daisies, mini roses, and asters in a blue glass vase.',
      image: './Congratulations/BlueCaribbean.jpg',
      price: 42.99
    },
    {
      name: 'Celebrate',
      category: categories[1]._id,
      description:'Arrangement of roses, carnations, eucalyptus, and purple stock in a clear glass vase.',
      image: './Congratulations/Celebrate.jpg',
      price: 43.99
    },
    {
      name: 'Country Basket',
      category: categories[1]._id,
      description:'Arrangement of gerber daisies, mini roses, carnations. snap dragons, and a variety of asters in a whicker basket.',
      image: './Congratulations/CountryBasket.jpg',
      price: 43.99
    },
    {
      name: 'Daisy Delight',
      category: categories[1]._id,
      description:'Arrangement of a variety of daisies and solidago in a clear glass vase.',
      image: './Congratulations/DasiyDelight.jpg',
      price: 31.99
    },
    {
      name: 'Enchantment',
      category: categories[1]._id,
      description:'Arrangement of sunflowers, roses, alstroemeria, poms, and statice in a clear glass vase.',
      image: './Congratulations/Enchantment.jpg',
      price: 32.99
    },
    {
      name: 'Field Jar',
      category: categories[1]._id,
      description:'Arrangement of sunflowers, roses, poms, alstroemeria, and asters in a clear glass jar.',
      image: './Congratulations/FieldJar.jpg',
      price: 35.99
    },
    {
      name: 'Moonstruck',
      category: categories[1]._id,
      description:'Arrangement of white roses, alstroemeria, euclyptus, and solidago in a gold moon shaped pot.',
      image: './Congratulations/Moonstruck.jpg',
      price: 52.99
    },
    {
      name: 'Pink Congrats',
      category: categories[1]._id,
      description:'Arrangement of roses, asters, gerber daisies, and alstroemeria in a pink glass vase with a CONGRATULATIONS balloon.',
      image: './Congratulations/PinkCongrats.jpg',
      price: 35.99
    },
    {
      name: 'Rosy Congrats',
      category: categories[1]._id,
      description:'Arrangement of red and pink roses, lilies, and primrose in a clear glass vase with a CONGRATULATIONS balloon.',
      image: './Congratulations/RosyCongrats.jpg',
      price: 35.99,
    },
    {
      name: 'Sunny Mix',
      category: categories[1]._id,
      description:'Arrangement of sunflowers and alstroemeria in a green box.',
      image: './Congratulations/SunnyMix.jpg',
      price: 38.99
    },
    {
      name: 'Walking Sunshine',
      category: categories[1]._id,
      description:'Arrangement of roses and alstroemeria in a clear glass vase.',
      image: './Congratulations/WalkingSunshine.jpg',
      price: 36.99
    },
    {
      name: 'Wild Field',
      category: categories[1]._id,
      description:'Arrangement of carnations, daisies, iris, and statice in a clear glass vase.',
      image: './Congratulations/WildField.jpg',
      price: 29.99
    },
    {
      name: 'Cool Spring',
      category: categories[2]._id,
      description:'Arrangement of asters, carnations, snap dragons, and hydrangea in a clear glass vase.',
      image: './Easter/CoolSpring.jpg',
      price: 31.99
    },
    {
      name: 'Daffodil Bulb',
      category: categories[2]._id,
      description:'Daffodil plant in a wicker basket.',
      image: './Easter/DaffodilBulb.jpg',
      price: 29.99
    },
    {
      name: 'Hyacinth Garden',
      category: categories[2]._id,
      description:'Hyacinth plant in a wicker basket.',
      image: './Easter/HyacinthGarden.jpg',
      price: 45.99
    },
    {
      name: 'Iris Stargazer',
      category: categories[2]._id,
      description:'Arrangement of a variety of lilies and iris in a clear glass vase.',
      image: './Easter/IrisStargazer.jpg',
      price: 39.99
    },
    {
      name: 'Orchid',
      category: categories[2]._id,
      description:'Arrangement of yellow orchid stems in a clear glass vase.',
      image: './Easter/Orchid.jpg',
      price: 59.99
    },
    {
      name: 'Spring Field',
      category: categories[2]._id,
      description:'Arrangement of lilies, alstroemeria, poms, daisies, and statice in a clear glass vase.',
      image: './Easter/SpringField.jpg',
      price: 35.99
    },
    {
      name: 'Sunflower',
      category: categories[2]._id,
      description:'Arrangement of sunflowers in a clear glass vase.',
      image: './Easter/Sunflower.jpg',
      price: 39.99
    },
    {
      name: 'Sunflower Meadow',
      category: categories[2]._id,
      description:'Arrangement of sunflowers and a variety asters in a clear glass vase.',
      image: './Easter/SunflowerMedow.jpg',
      price: 31.99
    },
    {
      name: 'Sunny Spring',
      category: categories[2]._id,
      description:'Arrangement of mini roses, alstroemeria, sunflowers, and auriculas in a clear glass vase.',
      image: './Easter/SunnySpring.jpg',
      price: 35.99
    },
    {
      name: 'Warm Tulip',
      category: categories[2]._id,
      description:'A variety of tulips in a clear glass vase.',
      image: './Easter/Tulip.jpg',
      price: 36.99
    },
    {
      name: 'Cool Tulip',
      category: categories[2]._id,
      description:'A variety of tulips in a clear glass vase.',
      image: './Easter/Tulip2.jpg',
      price: 36.99
    },
    {
      name: 'Warm Spring',
      category: categories[2]._id,
      description:'Arrangement of roses, lilies, alstroemeria, and asters in a clear glass vase with a gold base.',
      image: './Easter/WarmSpring.jpg',
      price: 43.99
    },
    {
      name: 'Crunch Time Basket',
      category: categories[3]._id,
      description:'Chocolate dipped nuts, chocolate dipped oreos, chocolate dipped pretzels, and dessert popcorn in a wooden crate.',
      image: './GiftBaskets/CrunchTimeBasket.jpg',
      price: 67.99
    },
    {
      name: 'Everything & More Basket',
      category: categories[3]._id,
      description:'English tea, cranberry and sesame cookies, honey crunch mix, chocolate truffles, crackers, lemon cakes, garlic and herb dip mix, french butter cookies, sticky toffee, madeleines, honey mustard dip, olives, cheese wedges, salami, and more in a canvas tote.',
      image: './GiftBaskets/EverythingnMoreBasket.jpg',
      price: 134.99
    },
    {
      name: 'Favorite Candy Basket',
      category: categories[3]._id,
      description:"Skittles, M&M's, Starburst, Hershey's chocolate bars, Reese's, Butterfinger, Milkyway, Snickers, and chocolate covered raisins in a wicker basket.",
      image: './GiftBaskets/FavoriteCandyBasket.jpg',
      price: 49.99
    },
    {
      name: 'Feel Better Basket',
      category: categories[3]._id,
      description:'Honey crunch mix, chocolate truffles, walnut cookies, brownies, kettle popcorn, chocolate wafer bites, green tea, chicken and rice soup mix, limon celli cookies, Ghirardelli chocolate squares, dominoes, and puzzle books in a Get Well Soon basket.',
      image: './GiftBaskets/FeelBetterBasket.jpg',
      price: 89.99
    },
    {
      name: 'Floral Spa Basket',
      category: categories[3]._id,
      description:'Shower gel, body scrub, body mist, body lotion, bath salts, loofah, nail brush, foot file, pumice stone, massager, bath sponge, bath scrubber, bath flower, and decorative butterfly in a floral printed box.',
      image: './GiftBaskets/FloralSpaBasket.jpg',
      price: 86.99
    },
    {
      name: 'Fruit Basket',
      category: categories[3]._id,
      description:'An assortment of seasonal fruit in a wicker basket.',
      image: './GiftBaskets/FruitBasket.jpg',
      price: 63.99
    },
    {
      name: 'Fruit & Chocolate Basket',
      category: categories[3]._id,
      description:'Apples, pears, oranges, chocolate covered almonds, chocolate nonparels, and chocolate almond bark in a gift box.',
      image: './GiftBaskets/FruitnChocoBasket.jpg',
      price: 79.99
    },
    {
      name: 'Gourmet Basket',
      category: categories[3]._id,
      description:'A variety of fruit, cheese, crackers, and tea in a wicker basket.',
      image: './GiftBaskets/GourmetBasket.jpg',
      price: 111.99
    },
    {
      name: 'Lavender Spa Basket',
      category: categories[3]._id,
      description:'Hand soap, hand lotion, bar soap, body butter, mimosa candle, lavender sachet, loofah, slippers, and a bath bomb in a wooden gift crate.',
      image: './GiftBaskets/LavenderSpaBasket.jpg',
      price: 104.99
    },
    {
      name: 'Man Can Basket',
      category: categories[3]._id,
      description:'Bar soap, shaving gel, rum oil, hand butter, and exfoliating mit in a Man Can paint can.',
      image: './GiftBaskets/ManCanBasket.jpg',
      price: 84.99
    },
    {
      name: 'Party Jewel Basket',
      category: categories[3]._id,
      description:'Gem stone pendant, bubble bears, soy candle, and a thermal cup in an elegant gift box.',
      image: './GiftBaskets/PartyJewelBasket.jpg',
      price: 109.99
    },
    {
      name: 'Spa For Men Basket',
      category: categories[3]._id,
      description:'Back scrubber, hand massager, body scrub, muscle rub, shaving jelly, and a facial cleansing bar in a gift basket.',
      image: './GiftBaskets/SpaForMenBasket.jpg',
      price: 124.99
    },
    {
      name: 'Bonsai',
      category: categories[4]._id,
      description: 'Potted bonsai tree in a ceramic pot.',
      image: './JustBecause/Bonsai.jpg',
      price: 35.99
    },
    {
      name: 'Champagne Rose',
      category: categories[4]._id,
      description:'Arrangement of champagne roses in a clear glass vase.',
      image: './JustBecause/ChampagneRose.jpg',
      price: 49.99
    },
    {
      name: 'Dream Pink Garden',
      category: categories[4]._id,
      description:'Pink begonia plant in a wooden pot.',
      image: './JustBecause/DreamPinkGarden.jpg',
      price: 29.99
    },
    {
      name: 'Gardenia Garden',
      category: categories[4]._id,
      description:'Gardenia plant in a burlap bag.',
      image: './JustBecause/GardeniaGarden.jpg',
      price: 20.99
    },
    {
      name: 'Happy Days',
      category: categories[4]._id,
      description:'Arrangement of yellow roses and white daisies in a yellow ceramic happy face mug.',
      image: './JustBecause/HappyDays.jpg',
      price: 44.99
    },
    {
      name: 'Hyacinth Garden',
      category: categories[4]._id,
      description:'Pink hyacinth plant in a woven pot.',
      image: './JustBecause/HyacinthGarden.jpg',
      price: 34.99
    },
    {
      name: 'Joyfull Joy',
      category: categories[4]._id,
      description:'Arrangement of carnations, daisies, monte casino, and poms in a clear glass vase decorated with rainbow ribbons.',
      image: './JustBecause/JoyfulJoy.jpg',
      price: 35.99
    },
    {
      name: 'Mamacita',
      category: categories[4]._id,
      description:'Arrangement of calla lilies, asters, and eucalyptus in a clear glass vase.',
      image: './JustBecause/Mamacita.jpg',
      price: 42.99
    },
    {
      name: 'Sunrise Tulip Garden',
      category: categories[4]._id,
      description:'Sunrise tulip plant in a wicker pot.',
      image: './JustBecause/SunriseTulipGarden.jpg',
      price: 39.99
    },
    {
      name: 'Sunshine Joy',
      category: categories[4]._id,
      description:'Kalanchoe plant with succulents in a wooden planter.',
      image: './JustBecause/SunshineJoy.jpg',
      price: 25.99
    },
    {
      name: 'Tulip and Iris',
      category: categories[4]._id,
      description:'Arrangement of tulips and iris in a clear glass vase.',
      image: './JustBecause/TulipnIris.jpg',
      price: 39.99
    },
    {
      name: 'Zen Garden',
      category: categories[4]._id,
      description:'Variety of succulents in a hexigonal wooden planter.',
      image: './JustBecause/ZenGarden.jpg',
      price: 19.99
    },
    {
      name: 'Clear Skies',
      category: categories[5]._id,
      description:'Arrangement of roses, lilies, carnations, and statice in a blue glass vase.',
      image: './LoveAndRomance/ClearSkies.jpg',
      price: 45.99
    },
    {
      name: 'Endless Love',
      category: categories[5]._id,
      description:'Arrangement of roses and greenery in a wooden box.',
      image: './LoveAndRomance/EndlessLove.jpg',
      price: 43.99
    },
    {
      name: 'Hearts Desire',
      category: categories[5]._id,
      description:'Arrangement of roses, stargazer lilies, and hydrengas in a clear glass vase.',
      image: './LoveAndRomance/HeartsDesire.jpg',
      price: 45.99
    },
    {
      name: 'Love and Devotion',
      category: categories[5]._id,
      description:'Arrangement of roses in a clear glass vase.',
      image: './LoveAndRomance/LoveandDevotion.jpg',
      price: 59.99
    },
    {
      name: 'Love Blooms',
      category: categories[5]._id,
      description:'Arrangement of roses, poms, hydrangeas, alstroemeria, and carnations in a clear glass vase.',
      image: './LoveAndRomance/LoveBlooms.jpg',
      price: 35.99
    },
    {
      name: 'My Angel',
      category: categories[5]._id,
      description:'Arrangement of lilies, carnations, and hydrangeas in a clear glass vase.',
      image: './LoveAndRomance/MyAngel.jpg',
      price: 32.99
    },
    {
      name: 'Pink Meadow',
      category: categories[5]._id,
      description:'Arrangement of roses, lilies, alstroemeria, asters, and snap dragons in a clear glass vase.',
      image: './LoveAndRomance/PinkMeadow.jpg',
      price: 32.99
    },
    {
      name: 'Precious Love',
      category: categories[5]._id,
      description:'Arrangement of roses, gerber daisies, sunrise tulips, and hydrangeas in a clear glass vase.',
      image: './LoveAndRomance/PreciousLove.jpg',
      price: 38.99
    },
    {
      name: 'Rainbow Romance',
      category: categories[5]._id,
      description:'A variety of different colored alstroemeria in a clear glass vase.',
      image: './LoveAndRomance/RainbowRomance.jpg',
      price: 24.99
    },
    {
      name: 'Regal Romance',
      category: categories[5]._id,
      description:'Arrangement of roses, alstroemeria, stargazer lilies, and statice in a clear glass vase.',
      image: './LoveAndRomance/RegalRomance.jpg',
      price: 36.99
    },
    {
      name: 'Scarlett',
      category: categories[5]._id,
      description:'Arrangement of roses and meadowsweet in a square clear glass vase.',
      image: './LoveAndRomance/Scarlett.jpg',
      price: 39.99
    },
    {
      name: 'Whimsy',
      category: categories[5]._id,
      description:'Arrangement of roses, hydrangeas, chamomile, and greenery in a clear glass vase.',
      image: './LoveAndRomance/Whimsy.jpg',
      price: 36.99
    },
    {
      name: 'Beautiful Treasure',
      category: categories[6]._id,
      description:'Arrangement of roese , lilies, hydrangea, alstroemeria, and snap dragons in a clear vase',
      image: './MothersDay/BeautifulTreasure.jpg',
      price: 44.99
    },
    {
      name: 'Blue Raspberry',
      category: categories[6]._id,
      description:'Arrangement of roses, lilies, hydrangea, snap dragons, and statice in a blue vase',
      image: './MothersDay/BlueRaspberry.jpg',
      price: 49.99
    },
    {
      name: 'Blue Skies',
      category: categories[6]._id,
      description:'Arrangement of roses, lilies and asters in a clear vase',
      image: './MothersDay/BlueSkies.jpg',
      price: 44.99
    },
    {
      name: 'Flower Garden',
      category: categories[6]._id,
      description:'Arrangement of sunflowers, lilies, roses, asters, alstroemeria, and poms in clear vase',
      image: './MothersDay/FlowerGarden.jpg',
      price: 48.99
    },
    {
      name: 'Just For You',
      category: categories[6]._id,
      description:'Arrangement of roses and pink liles in a clear vase',
      image: './MothersDay/JustForYou.jpg',
      price: 52.99
    },
    {
      name: 'Lush Lavender',
      category: categories[6]._id,
      description:'Arrangement of roses, alstroemeria, statice, mums, and poms in a clear vase',
      image: './MothersDay/LushLavender.jpg',
      price: 45.99
    },
    // get new img for Lux Lavender
    {
      name: 'Lux Lavender',
      category: categories[6]._id,
      description:
        '',
      image: './MothersDay/LuxLavender.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Pink and Pretty',
      category: categories[6]._id,
      description:'Arrangement of roses and alstroemeria in pink vase',
      image: './MothersDay/PinknPretty.jpg',
      price: 45.99
    },
    {
      name: 'Serenity',
      category: categories[6]._id,
      description:'Arrangement of roses, lilies, alstroemeria, and a variety of daisies in a clear vase',
      image: './MothersDay/Serenity.jpg',
      price: 48.99
    },
    {
      name: 'Spring Equinox',
      category: categories[6]._id,
      description:'Arrangement of roses, lilies, tulips, hydrangea, and delphinium in a clear vase',
      image: './MothersDay/SpringEquinox.jpg',
      price: 49.99
    },
    {
      name: 'Stunning Lily',
      category: categories[6]._id,
      description:'A variety of lilies in a clear pink vase',
      image: './MothersDay/StunningLily.jpg',
      price: 50.99
    },
    {
      name: 'WineCountry',
      category: categories[6]._id,
      description:'Arrangement of roses, poms, carnations, alstroemeria, and succulents in a clear vase',
      image: './MothersDay/WineCountry.jpg',
      price: 48.99
    },
    {
      name: 'Cherished',
      category: categories[7]._id,
      description:'Arrangement of carnation, roses, and alstroemeria in a clear vase',
      image: './Sympathy/Cherished.jpg',
      price: 35.99
    },
    {
      name: 'Clear Skies',
      category: categories[7]._id,
      description:'Arrangement of roses, poms, and delphinium in a clear vase',
      image: './Sympathy/ClearSkies.jpg',
      price: 35.99
    },
    {
      name: 'Comfort Plant',
      category: categories[7]._id,
      description:'Calla lily plants in a pot',
      image: './Sympathy/ComfortPlant.jpg',
      price: 29.99
    },
    {
      name: 'Condolences',
      category: categories[7]._id,
      description:'Arrangement of roses and daisies in a wicker basket',
      image: './Sympathy/Condolences.jpg',
      price: 32.99
    },
    {
      name: 'Elegance',
      category: categories[7]._id,
      description:'Arrangement of lilies and delphinium in a clear vase',
      image: './Sympathy/Elegance.jpg',
      price: 39.99
    },
    {
      name: 'Eternal Day',
      category: categories[7]._id,
      description:'Arrangement of roses, carnations, and delphinium in a standing grave vase',
      image: './Sympathy/EternalDay.jpg',
      price: 63.99
    },
    {
      name: 'Eternity',
      category: categories[7]._id,
      description:'Arrangement of roses, daisies, and alstroemeria in a wicker basket',
      image: './Sympathy/Eternity.jpg',
      price: 35.99
    },
    {
      name: 'Heaven',
      category: categories[7]._id,
      description:'Arrangement of lilies, roses, hydrangea, mums, and delhpinium in a standing vase',
      image: './Sympathy/Heaven.jpg',
      price: 55.99
    },
    {
      name: 'Horizons',
      category: categories[7]._id,
      description:'Arrangement of roses, delphinium, poms, statice, and greenery in a standing vase',
      image: './Sympathy/Horizons.jpg',
      price: 55.99
    },
    {
      name: 'Living Spirit',
      category: categories[7]._id,
      description:'Arrangement of alstroemeria, calla lily, and greenery in a wicker basket',
      image: './Sympathy/LivingSpirit.jpg',
      price: 32.99
    },
    {
      name: 'Peaceful Garden',
      category: categories[7]._id,
      description:'Kalanchoe and calla lily plants in a wooden planter',
      image: './Sympathy/PeacefulGarden.jpg',
      price: 25.99
    },
    {
      name: 'Prayers Spray',
      category: categories[7]._id,
      description:'Standing spray of lilies, roses, alstroemeria, delphinium, and greenery',
      image: './Sympathy/PrayersSpray.jpg',
      price: 129.99
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

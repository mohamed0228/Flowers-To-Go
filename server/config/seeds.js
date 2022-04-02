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
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        // TODO  when imgs are seeded and added we can change the name here
      image: './Birthday/BrightBdayBomb.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Garden Birthday Bomb',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: './Birthday/GardenBdayBomb.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Light Birthday Bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/LightBdayBomb.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Marmalade Birthday Bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/MarmaladeBdayBomb.jpg',
      price: 7.99,
      quantity: 50
    },
    {
      name: 'Radiance Birthday Bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/RadianceBdayBomb.jpg',
      price: 7.99,
      quantity: 10
    },
    {
      name: 'Rainbow Birthday bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/RainbowBdayBomb.jpg',
      price: 7.99,
      quantity: 5
    },
    {
      name: 'Rose Birthday Bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/RoseBdayBomb.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Smile Birthday Bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/RoseBdayBomb.jpg',
      price: 7.99,
      quantity: 30
    },
    {
      name: 'Sorbet Birthday Bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/SorbetBdayBomb.jpg',
      price: 7.99,
      quantity: 30
    },
    {
      name: 'Spirit Birthday Bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/SpiritBdayBomb.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Sweet Birthday Bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/SweetBdayBomb.jpg',
      price: 7.99,
      quantity: 110
    },
    {
      name: 'Wild Spirit Birthday Bomb',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: './Birthday/WildSpiritBdayBomb.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Blue Carribean',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/BlueCaribbean.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Celebrate',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: './Congratulations/Celebrate.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Country Basket',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/Celebrate.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Daisy Delight',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/DasiyDelight.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Enchantment',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/Enchantment.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Field Jar',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/FieldJar.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Moonstruck',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/Moonstruck.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Pink Congrats',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/PinkCongrats.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Rosy Congrats',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/RosyCongrats.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Sunny Mix',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/SunnyMix.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Walking Sunshine',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/WalkingSunshine.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Wild Field',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: './Congratulations/WildField.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Cool Spring',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Birthday/CoolSpring.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Daffodil Bulb',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: './Easter/DaffodilBulb.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Hyacinth Garden',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/HyacinthGarden.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Iris Stargazer',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/IrisStargazer.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Orchid',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/Orchid.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Spring Field',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/SpringField.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Sunflower',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/Sunflower.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Sunflower Medow',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/SunflowerMedow.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Sunny Spring',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/SunnySpring.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tulip',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/Tulip.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      // rename this one
      name: 'Tulip2',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/Tulip2.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Warm Spring',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: './Easter/WarmSpring.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Crunch Time Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/CrunchTimeBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Everything & More Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/EverythingnMoreBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Favorite Candy Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/FavoriteCandyBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Feel Better Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/FeelBetterBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Floral Spa Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/FloralSpaBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Fruit Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/FruitBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Fruit & Chocolate Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/FruitnChocoBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Gourmet Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/GourmetBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Lavender Spa Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/LavenderSpaBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Man Can Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/ManCanBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Party Jewel Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/PartyJewelBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spa For Men Basket',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: './GiftBaskets/PartyJewelBasket.jpg',
      price: 9.99,
      quantity: 100
    },
    // MOHAMMED START HERE
    {
      name: 'Bonsai',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: './JustBecause/Bonsai.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Champagne Rose',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: './JustBecause/ChampagneRose.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Dream Pink Garden',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: './JustBecause/DreamPinkGarden.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Gardenia Garden',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './JustBecause/GardeniaGarden.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Happy Days',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './JustBecause/HappyDays.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Hyacinth Garden',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './JustBecause/HyacinthGarden.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'JoyfullJoy',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './JustBecause/JoyfulJoy.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Mamacita',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './JustBecause/Mamacita.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Sunrise Tulip Garden',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './JustBecause/SunriseTulipGarden.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Sunshine Joy',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './JustBecause/SunshineJoy.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Tulipn Iris',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './JustBecause/TulipnIris.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Zen Garden',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './JustBecause/ZenGarden.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Clear Skies',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/ClearSkies.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'End less Love',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/EndlessLove.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Hearts Desire',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/HeartsDesire.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Love and Devotion',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/LoveandDevotion.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Love Blooms',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/LoveBlooms.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'My Angel',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/MyAngel.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Pink Meadow',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/PinkMeadow.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Precious Love',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/PreciousLove.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Rainbow Romance',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/RainbowRomance.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Regal Romance',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/RegalRomance.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Scarlett',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/Scarlett.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Whimsy',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './LoveAndRomance/Whimsy.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Beautiful Treasure',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/BeautifulTreasure.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Blue Raspberry',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/BlueRaspberry.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Blue Skies',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/BlueSkies.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Flower Garden',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/FlowerGarden.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Just For You',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/JustForYou.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Lush Lavender',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/LushLavender.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Lux Lavender',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/LuxLavender.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Pinkn Pretty',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/PinknPretty.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Serenity',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/Serenity.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Spring Equinox',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/SpringEquinox.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Stunning Lily',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/StunningLily.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'WineCountry',
      category: categories[6]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './MothersDay/WineCountry.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Cherished',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/Cherished.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Clear Skies',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/ClearSkies.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Comfort Plant',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/ComfortPlant.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Condolences',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/Condolences.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Elegance',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/Elegance.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Eternal Day',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/EternalDay.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Eternity',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/Eternity.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Heaven',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/Heaven.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Horizons',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/Horizons.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Living Spirit',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/LivingSpirit.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Peaceful Garden',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/PeacefulGarden.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Prayers Spray',
      category: categories[7]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: './Sympathy/PrayersSpray.jpg',
      price: 9.99,
      quantity: 600
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

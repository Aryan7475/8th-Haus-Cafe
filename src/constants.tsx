import type { MenuCategory, Review } from './types';

export const CAFE_INFO = {
  name: "8th Haus Cafe",
  address: "656 S Brookhurst St, Anaheim, CA 92804",
  phone: "+1 (714) 774-8013",
  hours: "Daily: 8:00 AM - 3:00 PM",
  description: "A cozy neighborhood spot serving elevated comfort food, specialty coffee, and good vibes. Known for our Ube Pancakes, Bulgogi Benedict, and creative drinks.",
  mapUrl: "https://maps.google.com/maps?q=656+S+Brookhurst+St,+Anaheim,+CA+92804&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'brunch',
    title: 'Brunch',
    items: [
      {
        name: "Bulgogi Benedict",
        description: "Poached eggs, kimchi, gochujang hollandaise, asian pear, black sesame.",
        price: "$17.00",
        popular: true,
        image: "https://picsum.photos/id/835/400/300"
      },
      {
        name: "Ube Waffle",
        description: "Ube sauce, fresh fruit, macadamia, coconut sauce.",
        price: "$13.00",
        popular: true,
        image: "https://picsum.photos/id/102/400/300"
      },
      {
        name: "Chilaquiles",
        description: "Salsa verde, scrambled eggs, avocado, queso fresco, crema, onions. Add chorizo +$4.",
        price: "$13.00",
        image: "https://picsum.photos/id/493/400/300"
      },
      {
        name: "Smoked Salmon Benedict",
        description: "Cream cheese, mustard vinaigrette, dill, capers, cucumbers, red onions, poached eggs, hollandaise, beet hummus.",
        price: "$18.00",
        image: "https://picsum.photos/id/1080/400/300"
      },
      {
        name: "Cinnamon Swirl Pancakes",
        description: "Cream cheese drizzle, cereal crumbles, bananas, Caramel.",
        price: "$13.00",
        image: "https://picsum.photos/id/425/400/300"
      },
      {
        name: "Socal Benedict",
        description: "Bacon, avocado, baguette, poached eggs, tomatoes, hollandaise, cheese crisp, fig balsamic.",
        price: "$15.00",
        image: "https://picsum.photos/id/856/400/300"
      },
      {
        name: "Short Rib Benedict",
        description: "Braised short rib, poached eggs, and house-made hollandaise on a toasted English muffin.",
        price: "$19.00",
        image: "https://picsum.photos/id/292/400/300"
      },
      {
        name: "Matcha Pancakes",
        description: "Creme custard, raspberry compote, honeycomb candy, granola, fresh fruit.",
        price: "$13.00",
        image: "https://picsum.photos/id/55/400/300"
      },
      {
        name: "Spicy Pork Quesadilla",
        description: "Spicy pork bulgogi, kimchi, cheddar, scallions, aji sauce, chipotle sauce.",
        price: "$17.00",
        image: "https://picsum.photos/id/486/400/300"
      },
      {
        name: "Mango Habanero Burger",
        description: "Mango habanero salsa, american cheese, arugula, bacon, mayo, potatoes.",
        price: "$15.00",
        image: "https://picsum.photos/id/163/400/300"
      },
      {
        name: "Shrimp and Grits",
        description: "Cajun shrimp, cheesy grits, bacon bits, fried egg, scallions.",
        price: "$16.00",
        image: "https://picsum.photos/id/22/400/300"
      },
      {
        name: "Breakfast Sandwich",
        description: "Sausage patty, hashbrown, scrambled eggs, jalapeno bacon jam, cheddar cheese, haus sauce, potatoes.",
        price: "$13.00",
        image: "https://picsum.photos/id/73/400/300"
      },
      {
        name: "Tiramisu French Toast",
        description: "Mascarpone, fresh fruit, shaved chocolate, cocoa powder.",
        price: "$14.00",
        image: "https://picsum.photos/id/305/400/300"
      }
    ]
  },
  {
    id: 'coffee_lattes',
    title: 'Coffee & Lattes',
    items: [
      {
        name: "Cookie Butter Latte",
        description: "Biscoff, coffee, milk, whipped cream (Iced).",
        price: "$6.00",
        popular: true,
        image: "https://picsum.photos/id/429/400/300"
      },
      {
        name: "Ube Latte",
        description: "Ube, coffee, milk, whipped cream (Iced).",
        price: "$6.00",
        image: "https://picsum.photos/id/63/400/300"
      },
      {
        name: "Horchata Latte",
        description: "Horchata, coffee, whipped cream (Iced).",
        price: "$6.00",
        image: "https://picsum.photos/id/75/400/300"
      },
      {
        name: "Vietnamese Egg Coffee",
        description: "Coffee, custard (Iced).",
        price: "$6.00",
        image: "https://picsum.photos/id/1060/400/300"
      },
      {
        name: "Matcha Strawberry",
        description: "Matcha, milk, strawberry, whipped cream (Iced).",
        price: "$6.00",
        image: "https://picsum.photos/id/514/400/300"
      },
      {
        name: "Matcha Ube",
        description: "Matcha, milk, ube, whipped cream (Iced).",
        price: "$6.00",
        image: "https://picsum.photos/id/999/400/300"
      },
      {
        name: "Hot Tea",
        description: "Earl Grey, Chamomile, Chai Spice, Peppermint, Green Tea, Jasmine Blossom, etc.",
        price: "$3.00",
        image: "https://picsum.photos/id/225/400/300"
      }
    ]
  },
  {
    id: 'drinks',
    title: 'Bubbly & Refreshing',
    items: [
      {
        name: "Haus Mimosa",
        description: "Orange juice, passionfruit, grenadine.",
        price: "$7.00",
        image: "https://picsum.photos/id/430/400/300"
      },
      {
        name: "Dole Whip Mimosa",
        description: "Pineapple, Coconut.",
        price: "$8.00",
        popular: true,
        image: "https://picsum.photos/id/82/400/300"
      },
      {
        name: "Galaxy Mimosa",
        description: "Lavender.",
        price: "$8.00",
        image: "https://picsum.photos/id/292/400/300"
      },
      {
        name: "Mango Chamoy Mimosa",
        description: "Mango puree, chamoy, tajin.",
        price: "$8.00",
        image: "https://picsum.photos/id/326/400/300"
      },
      {
        name: "Specialty Lemonades",
        description: "Choice of: Passionfruit, Lavender, Strawberry, Cucumber Mint, or Guava.",
        price: "$4.00",
        image: "https://picsum.photos/id/100/400/300"
      },
      {
        name: "Lychee Green Tea",
        description: "Refreshing green tea with lychee.",
        price: "$4.00",
        image: "https://picsum.photos/id/365/400/300"
      }
    ]
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      {
        name: "Bacon",
        description: "Crispy bacon strips.",
        price: "$4.00",
        image: ""
      },
      {
        name: "Hashbrown Patty",
        description: "Golden fried hashbrown.",
        price: "$1.00",
        image: ""
      },
      {
        name: "Avocado",
        description: "Fresh sliced avocado.",
        price: "$3.00",
        image: ""
      },
      {
        name: "Sausage",
        description: "",
        price: "$3.00",
        image: ""
      },
      {
        name: "Potatoes",
        description: "House seasoned potatoes.",
        price: "$4.00",
        image: ""
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Michelle M",
    rating: 5,
    text: "Had a fantastic brunch here! The service was friendly and attentive, and everything came out quickly. The food was fresh and flavorful, but the standout was the bulgogi eggs benedict. Highly recommend this spot.",
    date: "2 months ago",
    avatar: "https://ui-avatars.com/api/?name=Michelle+M&background=d4af37&color=fff"
  },
  {
    id: 2,
    author: "Joshua Van Natta",
    rating: 5,
    text: "This place is super friendly and the food is beautiful and good. We enjoyed both the sweet and savory options. I liked the regular coffee- simple but well made. The drinks and the food all felt very special.",
    date: "2 months ago",
    avatar: "https://ui-avatars.com/api/?name=Joshua+V&background=1a1a1a&color=fff"
  },
  {
    id: 3,
    author: "Ronnie Wilson",
    rating: 5,
    text: "This is a cute & quaint little place that serves amazing food and drinks with super hospitable hosts. I had the biscoff coffee and breakfast sandwich. Knowledgeable staff.",
    date: "2 months ago",
    avatar: "https://ui-avatars.com/api/?name=Ronnie+W&background=d4af37&color=fff"
  },
  {
    id: 4,
    author: "John Abrams",
    rating: 5,
    text: "What a gem! An amazing blend of local aesthetics, cafe sensibilities, and fine dining fare. The staff is friendly and helpful, the food is top notch, the coffee is downright awesome.",
    date: "4 months ago",
    avatar: "https://ui-avatars.com/api/?name=John+A&background=1a1a1a&color=fff"
  },
  {
    id: 5,
    author: "Fernando FERNO",
    rating: 5,
    text: "The restaurant offers a pleasant dining experience with a focus on high-quality cuisine. The chilaquiles, enhanced by a flavorful salsa, were served in a generous portion and were thoroughly enjoyed.",
    date: "5 months ago",
    avatar: "https://ui-avatars.com/api/?name=Fernando+F&background=d4af37&color=fff"
  },
  {
    id: 6,
    author: "Joanne Truong",
    rating: 5,
    text: "Cute local cafe. Food was amazing and beautifully plated. The price was reasonable. Nutella waffles came with ice cream that the waitress was kind enough to save for later. Food was unique.",
    date: "5 months ago",
    avatar: "https://ui-avatars.com/api/?name=Joanne+T&background=1a1a1a&color=fff"
  }
];

export const GALLERY_IMAGES = [
  "https://picsum.photos/id/305/600/600",
  "https://picsum.photos/id/365/600/800",
  "https://picsum.photos/id/429/600/600",
  "https://picsum.photos/id/292/600/600",
  "https://picsum.photos/id/835/600/800",
  "https://picsum.photos/id/225/600/600",
];
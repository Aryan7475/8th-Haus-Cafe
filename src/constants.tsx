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
        image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Ube Waffle",
        description: "Ube sauce, fresh fruit, macadamia, coconut sauce.",
        price: "$13.00",
        popular: true,
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Chilaquiles",
        description: "Salsa verde, scrambled eggs, avocado, queso fresco, crema, onions. Add chorizo +$4.",
        price: "$13.00",
        image: "https://images.unsplash.com/photo-1626071466175-72134e245a85?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Smoked Salmon Benedict",
        description: "Cream cheese, mustard vinaigrette, dill, capers, cucumbers, red onions, poached eggs, hollandaise, beet hummus.",
        price: "$18.00",
        image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Cinnamon Swirl Pancakes",
        description: "Cream cheese drizzle, cereal crumbles, bananas, Caramel.",
        price: "$13.00",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Socal Benedict",
        description: "Bacon, avocado, baguette, poached eggs, tomatoes, hollandaise, cheese crisp, fig balsamic.",
        price: "$15.00",
        image: "https://images.unsplash.com/photo-1599120464673-c6c703b07044?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Short Rib Benedict",
        description: "Braised short rib, poached eggs, and house-made hollandaise on a toasted English muffin.",
        price: "$19.00",
        image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Matcha Pancakes",
        description: "Creme custard, raspberry compote, honeycomb candy, granola, fresh fruit.",
        price: "$13.00",
        image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Spicy Pork Quesadilla",
        description: "Spicy pork bulgogi, kimchi, cheddar, scallions, aji sauce, chipotle sauce.",
        price: "$17.00",
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Mango Habanero Burger",
        description: "Mango habanero salsa, american cheese, arugula, bacon, mayo, potatoes.",
        price: "$15.00",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Shrimp and Grits",
        description: "Cajun shrimp, cheesy grits, bacon bits, fried egg, scallions.",
        price: "$16.00",
        image: "https://images.unsplash.com/photo-1559183533-076b90720b72?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Breakfast Sandwich",
        description: "Sausage patty, hashbrown, scrambled eggs, jalapeno bacon jam, cheddar cheese, haus sauce, potatoes.",
        price: "$13.00",
        image: "https://images.unsplash.com/photo-1525351462161-f2bc83d6c4d4?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Tiramisu French Toast",
        description: "Mascarpone, fresh fruit, shaved chocolate, cocoa powder.",
        price: "$14.00",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&q=80"
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
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Ube Latte",
        description: "Ube, coffee, milk, whipped cream (Iced).",
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Horchata Latte",
        description: "Horchata, coffee, whipped cream (Iced).",
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1461023058943-7169255af493?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Vietnamese Egg Coffee",
        description: "Coffee, custard (Iced).",
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Matcha Strawberry",
        description: "Matcha, milk, strawberry, whipped cream (Iced).",
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Matcha Ube",
        description: "Matcha, milk, ube, whipped cream (Iced).",
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Hot Tea",
        description: "Earl Grey, Chamomile, Chai Spice, Peppermint, Green Tea, Jasmine Blossom, etc.",
        price: "$3.00",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=400&q=80"
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
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Dole Whip Mimosa",
        description: "Pineapple, Coconut.",
        price: "$8.00",
        popular: true,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Galaxy Mimosa",
        description: "Lavender.",
        price: "$8.00",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Mango Chamoy Mimosa",
        description: "Mango puree, chamoy, tajin.",
        price: "$8.00",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Specialty Lemonades",
        description: "Choice of: Passionfruit, Lavender, Strawberry, Cucumber Mint, or Guava.",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Lychee Green Tea",
        description: "Refreshing green tea with lychee.",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=400&q=80"
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
        image: "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Hashbrown Patty",
        description: "Golden fried hashbrown.",
        price: "$1.00",
        image: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Avocado",
        description: "Fresh sliced avocado.",
        price: "$3.00",
        image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Sausage",
        description: "",
        price: "$3.00",
        image: "https://images.unsplash.com/photo-1595486259685-616ae9d01243?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Potatoes",
        description: "House seasoned potatoes.",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80"
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
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&h=600&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&h=800&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&h=600&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&h=600&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&h=800&q=80",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&h=600&q=80",
];
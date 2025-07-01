export const mockRestaurants = [
  {
    id: '1',
    name: 'Tandoori Treats',
    rating: 4.5,
    cuisines: [
      {
        id: 'c1',
        name: 'North Indian',
        items: [
          { id: 'f1', name: 'Paneer Tikka', rating: 4.7, price: 220 },
          { id: 'f2', name: 'Butter Chicken', rating: 4.8, price: 270 },
          { id: 'f3', name: 'Dal Makhani', rating: 4.6, price: 180 },
        ],
      },
      {
        id: 'c2',
        name: 'South Indian',
        items: [
          { id: 'f11', name: 'Dosa', rating: 4.7, price: 220 },
          { id: 'f22', name: 'Idli', rating: 4.8, price: 270 },
          { id: 'f33', name: 'Utpam', rating: 4.6, price: 180 },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Pizza Palace',
    rating: 4.3,
    cuisines: [
      {
        id: 'c2',
        name: 'Italian',
        items: [
          { id: 'f4', name: 'Margherita Pizza', rating: 4.5, price: 300 },
          { id: 'f5', name: 'Garlic Bread', rating: 4.4, price: 120 },
          { id: 'f6', name: 'Pasta Alfredo', rating: 4.6, price: 250 },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Sushi Station',
    rating: 4.6,
    cuisines: [
      {
        id: 'c3',
        name: 'Japanese',
        items: [
          { id: 'f7', name: 'Salmon Nigiri', rating: 4.7, price: 320 },
          { id: 'f8', name: 'California Roll', rating: 4.5, price: 280 },
          { id: 'f9', name: 'Miso Soup', rating: 4.3, price: 90 },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Wrap & Roll',
    rating: 4.2,
    cuisines: [
      {
        id: 'c4',
        name: 'Street Food',
        items: [
          { id: 'f10', name: 'Chicken Shawarma', rating: 4.6, price: 160 },
          { id: 'f11', name: 'Veg Wrap', rating: 4.2, price: 120 },
        ],
      },
    ],
  },
  {
    id: '5',
    name: 'Biryani Bliss',
    rating: 4.7,
    cuisines: [
      {
        id: 'c5',
        name: 'Hyderabadi',
        items: [
          { id: 'f12', name: 'Mutton Biryani', rating: 4.9, price: 340 },
          { id: 'f13', name: 'Veg Biryani', rating: 4.4, price: 200 },
          { id: 'f14', name: 'Raita', rating: 4.3, price: 60 },
        ],
      },
    ],
  },
];

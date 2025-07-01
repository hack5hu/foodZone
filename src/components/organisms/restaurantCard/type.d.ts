export interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  quantity?: number; // Optional if needed
}

export interface Cuisine {
  id: string;
  name: string;
  items: FoodItem[];
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  cuisines: Cuisine[];
}

export interface RestaurantCardProps {
  item: Restaurant;
  handleAddToCart: (item: FoodItem) => void;
  cartItem: FoodItem[]; 
}

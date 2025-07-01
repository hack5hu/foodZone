export interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  quantity?: number;
}

export interface Cuisine {
  id: string;
  name: string;
  items: FoodItem[];
}

export interface CuisineBlockProps {
  cuisine: Cuisine;
  handleAddToCart: (item: FoodItem) => void;
  cartItem: FoodItem[];
}

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  quantity?: number;
}

export interface FoodItemRowProps {
  item: FoodItem;
  quantity?: number;
  onIncrement: (item: FoodItem) => void;
  onDecrement: (item: FoodItem) => void;
}

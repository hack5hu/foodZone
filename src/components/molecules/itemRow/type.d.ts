export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Props {
  item: OrderItem;
}

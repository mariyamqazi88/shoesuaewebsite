export type ShoeCategory = 'All' | 'Sneaker' | 'Oxford' | 'Boot' | 'Loafers' | 'Running';

export interface Product {
  id: string;
  name: string;
  category: ShoeCategory;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  additionalImages?: string[];
  tag?: string;
  sizes: number[];
  colors: { name: string; hex: string }[];
  description: string;
  features: string[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  id: string; // unique cart item key: product.id + '-' + size + '-' + color
  product: Product;
  quantity: number;
  selectedSize: number;
  selectedColor: string;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  emirate: string;
  dropoffWindow: 'Morning (9 AM - 1 PM)' | 'Afternoon (1 PM - 6 PM)' | 'Evening (6 PM - 10 PM)';
  paymentMethod: 'cash_on_delivery' | 'card' | 'apple_pay';
  orderNotes?: string;
}

export interface OrderDetails {
  orderId: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  taxAmount: number;
  totalAmount: number;
  customer: CheckoutFormData;
}

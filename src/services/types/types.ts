export interface BurgerState {
  hasBaseSelected: boolean;
  middleElement: MiddleElement[];
  baseElement: BaseElement | null;
}
export type NavigateFunction = (path: string) => void;
export interface BaseElement {
  ingredient: Ingredient;
}
export interface Ingredient {
  name: string;
  price: number;
  image: string;
  _id: string;
  type: string;
  calories: number;
  image_large: string;
  proteins: number;
  carbohydrates: number;
  fat: number;
  image_mobile: string;
}
export interface ingredientView {
  name: string | null;
  price: number | null;
  image: string | null;
  _id: string | null;
  type: string | null;
  calories: number | null;
  image_large: string | null;
  proteins: number | null;
  carbohydrates: number | null;
  fat: number | null;
  image_mobile: string | null;
}
export interface MiddleElement {
  ingredient: Ingredient;
  uuid: string;
}
export type AuthState = {
  token: string | null;
  name: string;
  email: string;
  recovery: boolean;
};
export type CountState = {
  ingredients: { [key: string]: number };
  bun: string | null;
};

export type IngredientsListState = {
  ingredients: string[];
  bun: Ingredient | null;
};
export type IngredientsState = {
  ingredients: {
    data: Ingredient[];
    success: boolean;
  };
  isLoading: boolean;
  error: Error | null;
};
export interface ModalState {
  isOpen: boolean;
  modalType: string | null;
  isLoading: boolean;
}
export type OrderState = {
  orderName: string;
  orderNumber: number | null;
  orderFailed: boolean;
  isLoading: boolean;
};
export interface Order {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}
export interface OrderView {
  ingredients: string[];
  _id: string | null;
  status: string | null;
  number: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  name: string | null;
}

export interface FeedState {
  orders: Order[];
  total: number;
  totalToday: number;
  error: string | null;
  isWebSocketInitialized: boolean;
  connection: boolean;
}
export type WSMiddlewareConfig = {
  initActionType: string;
  closeActionType: string;
  onMessageActionType: string;
  onErrorActionType: string;
}
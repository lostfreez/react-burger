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
}
export interface MiddleElement {
  ingredient: Ingredient;
  uuid: string;
}
export type AuthState = {
  token: string | null;
  name: string | null;
  email: string | null;
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
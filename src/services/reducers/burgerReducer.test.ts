import reducer, {
  setBaseSelected,
  setBaseElement,
  setMiddleElements,
  clearBurger,
} from "../../services/reducers/burgerReducer";
import { BaseElement, MiddleElement } from "../../services/types/types";

import { initialState } from "./burgerReducer";

const BASE_ELEMENT: BaseElement = {
  ingredient: {
    name: "Test Ingredient",
    price: 100,
    image: "test-image-url",
    _id: "test-id",
    type: "test-type",
    calories: 200,
    image_large: "test-image-large-url",
    proteins: 10,
    carbohydrates: 20,
    fat: 5,
    image_mobile: "test-image-mobile-url",
  },
};

const MIDDLE_ELEMENTS: MiddleElement[] = [
  {
    ingredient: {
      name: "Test Middle Ingredient 1",
      price: 50,
      image: "test-image-url-1",
      _id: "test-id-1",
      type: "test-type-1",
      calories: 100,
      image_large: "test-image-large-url-1",
      proteins: 5,
      carbohydrates: 10,
      fat: 2.5,
      image_mobile: "test-image-mobile-url-1",
    },
    uuid: "uuid-1",
  },
  {
    ingredient: {
      name: "Test Middle Ingredient 2",
      price: 60,
      image: "test-image-url-2",
      _id: "test-id-2",
      type: "test-type-2",
      calories: 110,
      image_large: "test-image-large-url-2",
      proteins: 6,
      carbohydrates: 11,
      fat: 3,
      image_mobile: "test-image-mobile-url-2",
    },
    uuid: "uuid-2",
  },
];

describe("burgerSlice", () => {
  it("setBaseSelected : correct", () => {
    const newState = reducer(initialState, setBaseSelected(true));
    expect(newState.hasBaseSelected).toEqual(true);
  });

  it("setBaseElement : correct", () => {
    const newState = reducer(initialState, setBaseElement(BASE_ELEMENT));
    expect(newState.baseElement).toEqual(BASE_ELEMENT);
  });

  it("should handle setMiddleElements", () => {
    const newState = reducer(initialState, setMiddleElements(MIDDLE_ELEMENTS));
    expect(newState.middleElement).toEqual(MIDDLE_ELEMENTS);
  });

  it("clearBurger -> reset : correct", () => {
    const filledState = {
      ...initialState,
      hasBaseSelected: true,
      baseElement: BASE_ELEMENT,
      middleElement: MIDDLE_ELEMENTS,
    };

    const newState = reducer(filledState, clearBurger());
    expect(newState).toEqual(initialState);
  });
});

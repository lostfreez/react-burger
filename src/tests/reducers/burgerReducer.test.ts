import reducer, {
  setBaseSelected,
  setBaseElement,
  setMiddleElements,
  clearBurger,
} from "../../services/reducers/burgerReducer";
import {
  BurgerState,
  BaseElement,
  MiddleElement,
} from "../../services/types/types";

describe("burgerSlice", () => {
  let initialState: BurgerState;
  beforeEach(() => {
    initialState = {
      hasBaseSelected: false,
      baseElement: null,
      middleElement: [],
    };
  });
  it("setBaseSelected : correct", () => {
    const newState = reducer(initialState, setBaseSelected(true));
    expect(newState.hasBaseSelected).toEqual(true);
  });

  it("setBaseElement : correct", () => {
    const base: BaseElement = {
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
    const newState = reducer(initialState, setBaseElement(base));
    expect(newState.baseElement).toEqual(base);
  });

  it("should handle setMiddleElements", () => {
    const middleElements: MiddleElement[] = [
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
    const newState = reducer(initialState, setMiddleElements(middleElements));
    expect(newState.middleElement).toEqual(middleElements);
  });

  it("clearBurger -> reset : correct", () => {
    const filledState = {
      hasBaseSelected: true,
      baseElement: {
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
      },
      middleElement: [
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
      ],
    };

    const newState = reducer(filledState, clearBurger());
    expect(newState).toEqual(initialState);
  });
});

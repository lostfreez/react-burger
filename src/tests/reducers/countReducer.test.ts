// Импортируем наш редьюсер и экшены.
import reducer, { incrementCount, incrementBun, decrementCount, clearCount } from "../../services/reducers/countReducer";
import { CountState } from "../../services/types/types";


describe('count reducer', () => {


  let initialState: CountState;

  
  beforeEach(() => {
    initialState = { 
      ingredients: {},
      bun: null,
    };
  });

  
  it('incrementCount + 1 + 1 = 2 : correct', () => {
    const newState = reducer(initialState, incrementCount('ingredient1'));
    expect(newState.ingredients['ingredient1']).toEqual(1);
    const incrementedState = reducer(newState, incrementCount('ingredient1'));
    expect(incrementedState.ingredients['ingredient1']).toEqual(2);
  });

  it('set bun : correct', () => {
    const newState = reducer(initialState, incrementBun('bun1'));
    expect(newState.bun).toEqual('bun1'); 
    expect(newState.ingredients['bun1']).toEqual(1);
  });

  it('set bun, if bun = bun : correct', () => {
    const stateWithBun = {
      ...initialState,
      bun: 'bun1',
      ingredients: {
        bun1: 1
      }
    };

    const newState = reducer(stateWithBun, incrementBun('bun2'));
    expect(newState.bun).toEqual('bun2'); 
    expect(newState.ingredients['bun1']).toBeUndefined(); 
    expect(newState.ingredients['bun2']).toEqual(1); 
  });

  it('decrementCount 2 - 1 = 1 : correct', () => {
    const stateWithIngredient = {
      ...initialState,
      ingredients: {
        ingredient1: 2
      }
    };
    const newState = reducer(stateWithIngredient, decrementCount('ingredient1'));
    expect(newState.ingredients['ingredient1']).toEqual(1);
  });

  
  it('clearCount state(NoEmpty) -> clear : correct', () => {
    const stateWithIngredient = {
      ...initialState,
      ingredients: {
        ingredient1: 2
      },
      bun: 'bun1'
    };
    const newState = reducer(stateWithIngredient, clearCount());
    expect(newState).toEqual(initialState);
  });
});

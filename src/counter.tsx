import React, { useReducer } from 'react';
import reducer from './reducer';
export default function Counter() {
  const intialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <div>{state.count}</div>
      <br />
      <button
        onClick={() => {
          dispatch({ type: 'Increment' });
        }}
      >
        Increment
      </button>
      <button>Decrement</button>
    </div>
  );
}

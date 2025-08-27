import { useReducer } from 'react'

export default function Increase() {
    const reducer = (state:number, action: "INCREASE" ): number => {
        switch(action){
            case "INCREASE":
                return state + 1;  
            default :
                return state;
        }
    };
    const [count,dispatch] = useReducer(reducer,1);
  return (
      <div>
      <h2>Giá trị hiện tại: {count}</h2>
      <button onClick={() => dispatch("INCREASE")}>Increase</button>
    </div>
  )
}

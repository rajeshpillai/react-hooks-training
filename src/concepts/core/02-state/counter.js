import React, {useState} from  'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
        <div className="d-flex justify-content-between bg-light w-25">
            <button className="btn bg-light btn-lg"
                onClick={()=>setCounter(counter - 1)}>-
            </button>
            <h2>{counter}</h2>
            <button className="btn btn-light btn-lg" 
                onClick={()=>setCounter(counter + 1)}>+
            </button>
        </div>
    </div>
  );
}

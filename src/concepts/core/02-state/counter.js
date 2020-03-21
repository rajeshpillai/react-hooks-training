import React, {useState} from  'react';

export default function Counter(props) {
  const {value} = props;
  const [counter, setCounter] = useState(value || 0);
  return (
    <div className="container">
        <div className="d-flex justify-content-between w-25">
            <button className="btn btn-lg"
                onClick={()=>setCounter(counter - 1)}>-
            </button>
            <h2 className="m-2">{counter}</h2>
            <button className="btn btn-lg" 
                onClick={()=>setCounter(counter + 1)}>+
            </button>
        </div>
    </div>
  );
}

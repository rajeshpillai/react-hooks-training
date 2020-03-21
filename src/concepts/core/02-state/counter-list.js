import React, {useState} from  'react';
import Counter from './counter';

export default function CounterList() {
  const [items, setItems] = useState([
    {id: 1, title: "Learn React",qty: 0},
    {id: 2, title: "Learn Node", qty: 2},
    {id: 3, title: "Learn Express", qty: 0},
    {id: 4, title: "Learn JavaScript", qty: 0},
  ]);

  const products = items.map((item) => {
      return <div class="card m-2" style={{width:"12rem"}}>
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <Counter value = {item.qty} />
        </div>
      </div>
  });

  return (
    <div>
      { products}
    </div>
  )
}

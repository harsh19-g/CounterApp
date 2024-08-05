import { useState } from "react";

export const Challenge = () => {
    const [count, setCount] = useState(0);
    // const [decre,setDecre] = useState(incre);
    const [step,setStep] = useState(1);

    const handleCountStep = (value)=>{
        // event.preventDefault();
        setStep(Number(value));
    }

    const handleReset = ()=>{
        setCount(0);
        setStep(0);
    }
    return (
      <section>
        <h1>UseState Challenge</h1>
        <div>
          <p>Count : <span>{count}</span></p>
          <label>Step : <input type="number" value={step} onChange={(event) => handleCountStep(event.target.value)}/></label>
        </div>
        <section>
        <button onClick={()=>setCount(count+step)} disabled={count>=100}>Increment</button>
        <button onClick={()=>setCount(count-step)} disabled={count <= 0}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </section>
      </section>
    );
  };
  
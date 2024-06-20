import { useState } from 'react'
import Button from './components/Button'


function App() {
  
  const [val,setVal] = useState(0);

  const handleOnchange = (e)=>{
    setVal(e.target.value);
  }
  
  const calculate = (str)=>{
    let ans = 0;
    if (!/^[0-9+\-*/().\s]*$/.test(str)){
      setVal('');
      alert('Enter a valid input');
    }else{
      ans = eval(str);
    }

    return ans;
  }

  const handleSubmit = (e) =>{
    if(e.target.innerHTML!=='=' && e.target.innerHTML!=='C')
     setVal((prev)=>prev!==0? prev+e.target.innerHTML:e.target.innerHTML);
    else if(e.target.innerHTML==='C')
      setVal(0);
    else{
      let result = calculate(val);
      setVal(result);
    }
  }

  const buttonValue = [1,2,3,'+',4,5,6,'-',7,8,9,'*','C',0,'=','/']

  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='translate-y-1/4 bg-bg-main'>
        <div className='m-2 text-center rounded-lg text-white font-semibold text-3xl bg-btn-color'><p>Calculator</p></div>
        <div className='m-2 text-center'>
          <input type="text" 
            className='h-20 w-full bg-white text-btn-color text-end rounded-md'
            onChange={handleOnchange}
            value={val}
            />
        </div>
        <div className="grid grid-cols-4">
          {buttonValue.map((item)=>(<Button key={item} content={item} handleSubmit={handleSubmit}/>))}
        </div>
      </div>
    </div>
    
  )
}

export default App

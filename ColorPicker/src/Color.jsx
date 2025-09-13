import React,{useState} from 'react'
function Color(){
    const[color, setColor]= useState("#f4e6e6ff");

    function takeColor(e){
        setColor(e.target.value);
    }



    return(<>
    
   <div className='color-container'>
        <h1>Color Pallete</h1>
     <div className='color-box' style={{backgroundColor:color}}>
       </div>
       <div className='color-content'>
      <p>Color Pick :{color}</p>
      <label >Pick a Color</label>
      <input type="color" value={color} onChange={takeColor} />
    </div>
</div>

    
    </>);

}
export default Color
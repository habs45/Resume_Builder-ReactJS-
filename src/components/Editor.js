import React,{useState,useRef} from 'react'
// import Data from './Data'
import './Editor.css'
import { User_Info_State } from './StateProvider';
import Resume from './Resume';
import  ReactToPrint  from 'react-to-print' 
import {AiOutlineDownload} from 'react-icons/ai'


function Editor() {
  const componentRef=useRef();
 
const {state,dispatch}=User_Info_State();

  const[activeSection,setActiveSection]=useState('BasicInfo');
    
  return (
    <div className='editor'>
<div className='section_title'>
{
state.map((item)=>{
return (

    <div key={Math.random().toString()}>
        <button className={activeSection==item.title ? 'active_btn btn ' : 'section_btn btn' }
        onClick={()=>{setActiveSection(item.title)}}
        >{item.title}</button>
    </div>
)


})

}
</div>
<div className='container'>
  
<form>
<div className='section_form'>

  {
    state.find(item=>item.title==activeSection).fields.map((currFields)=>{
return (
 <div key={currFields.field_id} className='each_field'>
  <div className='input_title'>
  {currFields.field_name}
  </div>
  <input 
  type='text'
  placeholder={`Enter Your ${currFields.field_name}`}
  onChange={(e)=> {
    dispatch({
      type:'SET_STATE',
      payload: { title : activeSection  ,state_name: currFields.field_id,state_value:e.target.value},

  })
  }}
  value={currFields.value}
  
  ></input>
  </div>



)


    })


  }
    
</div>
<div className='save_btn'>
{/* <button onClick={(e)=>e.preventDefault()}>
  Next
  </button>   */}
  </div>
</form>
</div>
{/* <ReactToPrint
    trigger={()=><button className='download_btn'>
    Download
</button>}
content={()=>componentRef.current}
/> */}
<div className='download_div'>
<ReactToPrint
trigger={()=>{
  return (<button  className='download_btn'>
    Download<AiOutlineDownload style={{fontSize:27}}/></button>
  )
}}
content={()=>componentRef.current}
/>
</div>

{/* <button  className='download_btn'
onClick={handlePrint}>
  Download<AiOutlineDownload style={{fontSize:27}}/></button>
</div> */}

<Resume ref={componentRef}/>

    </div>
  )
}

export default Editor
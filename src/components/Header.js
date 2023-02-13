import React,{useRef} from 'react'
import './Header.css'
import { User_Info_State } from './StateProvider'
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

function Header() {
  const {state,dispatch}=User_Info_State();

  const handle_make_resume=()=>{
    console.log(state);
  }
  const componentRef = useRef();
  return (
    <div className='header_container'>
<div className='header_container_left'>
   Resume Builder
</div>
<div className='header_container_right'>
{/* <div className='header_container_left_color color_choice_1'></div>
  <div className='header_container_left_color color_choice_2'></div>
  <div className='header_container_left_color color_choice_3'></div>
  <div className='header_container_left_color color_choice_4'></div>
  <div className='header_container_left_color color_choice_5'></div> */}
  <div>
   
   


</div>
</div>

    </div>
  )
}

export default Header
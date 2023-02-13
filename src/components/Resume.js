import React, { forwardRef } from 'react'
import './Resume.css'
import { User_Info_State } from './StateProvider'
import {AiFillMail,AiFillGithub,AiFillPhone} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


export default React.forwardRef((props ,ref) => {
    const {state,dispatch}=User_Info_State();
  return (
    <div ref={ref} className='resume_container'>
        <h1 style={{letterSpacing:1}}>{state[0].fields[0].value}</h1>
        <h3 style={{color:'rgb(110, 110, 248)',fontWeight:400,letterSpacing:1}}>{state[0].fields[1].value}</h3>
    <div className='resume_fields'>
    
    <div className=' field_title BasicInfo'>
        <div className='basicinfo_fields'><AiFillLinkedin style={{fontSize:24,marginRight:5}}/>{state[0].fields[2].value}</div>
        <div className='basicinfo_fields'><AiFillGithub style={{fontSize:24,marginRight:5}}/>{state[0].fields[3].value}</div>
        <div className='basicinfo_fields'><AiFillMail style={{fontSize:24,marginRight:5}}/>{state[0].fields[4].value}</div>
        <div className='basicinfo_fields'><AiFillPhone style={{fontSize:24,marginRight:5}}/>{state[0].fields[5].value}</div>

        
    </div>
    <div className=' field_title Education'>
        <h3>Education</h3>
        <div className='each_education'>
            <div className='education'>{state[1].fields[0].value} (X)</div>
            <div className='education'>{state[1].fields[2].value}</div>
            <div className='education'>{state[1].fields[3].value}</div>
            <div className='education'>{state[1].fields[1].value}</div>
        </div> 
        <div className='each_education'>
            <div className='education'>{state[1].fields[4].value} (XII)</div>
            <div className='education'>{state[1].fields[6].value}</div>
            <div className='education'>{state[1].fields[7].value}</div>
            <div className='education'>{state[1].fields[5].value}</div>
        </div> 
        <div className='each_education'>
            <div className='education'>{state[1].fields[8].value} (Highest Degree)</div>
            <div className='education'>{state[1].fields[10].value}</div>
            <div className='education'>{state[1].fields[11].value}</div>
            <div className='education'>{state[1].fields[9].value}</div>
        </div> 

    </div>
    <div className=' field_title Skills'>
        <h3>Skills</h3>
        <div className='each_skills'>

            <div>
            <div className='skills_field'><b>{state[2].fields[0].field_name}</b>  : {state[2].fields[0].value}</div>
            <div className='skills_field'>
                <b>{state[2].fields[1].field_name} :  </b>
                
                 {state[2].fields[1].value}
                 

            </div>
            </div>
            <div>

            </div>


        </div>
        
    </div>
    <div className=' field_title Projects'>
        <h3>Projects</h3>
        { state[3].fields[0].value !='' ? 
        <div className='each_project'>
         <div className='project_title'>
             <b>{state[3].fields[0].value}</b>
         </div>
         <div className='project_descrp'>
         • {state[3].fields[1].value}
         </div>
        </div> : <></>
}


{      state[3].fields[2].value!='' ? 
        <div className='each_project'>
         <div className='project_title'>
             <b>{state[3].fields[2].value}</b>
         </div>
         <div className='project_descrp'>
         • {state[3].fields[3].value}
         </div>
        </div> : <></>

}
{   state[3].fields[4].value!='' ? 
        <div className='each_project'>
         <div className='project_title'>
             <b>{state[3].fields[4].value}</b>
         </div>
         <div className='project_descrp'>
         • {state[3].fields[5].value}
         </div>
        </div> : <></>
}
        
    </div>

    <div className=' field_title WorkExperience'>
        <h3>Experience</h3>
        {state[4].fields[0].value!=''?
        <div className='each_experience'>
           <div className='company_name'>
           <b>{state[4].fields[0].value}</b>
           </div>
           <div className='company_descr'>
           • {state[4].fields[1].value}
           </div>
           </div>
            :<></>
        }


        { state[4].fields[2].value!='' ? 
        <div className='each_experience'>
           <div className='company_name'>
           <b>{state[4].fields[2].value}</b>
           </div>
           <div className='company_descr'>
           • {state[4].fields[3].value}
           </div>
          </div> : <></>

        }
        
    </div>
    <div className=' field_title Achievements'>
        <h3>Achievements</h3>
        { state[5].fields[0].value!='' ? 
        <div className='each_achievements'>
        • {state[5].fields[0].value}
             
        </div>:<></>
}
        { state[5].fields[1].value!='' ?
        <div className='each_achievements'>
        • {state[5].fields[1].value}
             
        </div>:<></>
}
     { state[5].fields[2].value!='' ? 
        <div className='each_achievements'>
        • {state[5].fields[2].value}
             
        </div>:<></>
}
        
    </div>
    {/* <div className=' field_title PORs'>
        <h5>PORs</h5>
        
    </div> */}
        
    </div>

    </div>
  )
})
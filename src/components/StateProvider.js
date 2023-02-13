import { useContext,useReducer,createContext } from "react";

import {reducer} from './reducer'

const UserInfo =createContext();
const InitialState = [

    {
        title: 'BasicInfo' ,
        fields: [
            { field_name:'Name',
              field_id:'id1', 
              value: "",
             },
            { field_name:'Profile', 
              field_id:'id2',
              value: "",
            },
            {
              field_name: 'Linkedin Profile',
              fied_id:'id3',
              value: "",

            },
            {
                field_name:'Github Profile',
                field_id:'id4',
                value: "",
            },
            {
                 field_name:'Email',
                 field_id:'id5',
                 value: "",
                 
            },
            {
                field_name:'Phone No.',
                field_id:'id6',
                value: "",
            }    
        ]
        }
     ,
    {
        title:'Education',
        fields:[ 
            {
                field_name:'X Board Name' ,
              field_id:'id7', 
              value: "",
            },
            { field_name:'X Passing Year',
            field_id:'id8', 
            value: "",
           }
           ,
           {
            field_name:'X School',
            field_id:'id9', 
            value: "",
           },
           {
            field_name:'X Percentage',
            field_id:'id35', 
            value: "",
           },
           {
            field_name:'XII Board Name',
            field_id:'id10', 
            value: "",
           },
           {
            field_name:'XII Passing Year',
            field_id:'id11', 
            value: "",
           }
           ,
           {
            field_name:'XII School',
            field_id:'id12', 
            value: "",
           },
           {
            field_name:'XII Percentage',
            field_id:'id36', 
            value: "",
           },
           {
            field_name:'Highest Degree',
            field_id:'id13', 
            value: "",
           },
           {
            field_name:'Degree Passing Year',
            field_id:'id14', 
            value: "",
           },
           {
            field_name:'Institute of Highest degree',
            field_id:'id15', 
            value: "",
           },
           {
            field_name:'Degree Percentage',
            field_id:'id37', 
            value: "",
           },
        ]        
    },
    {
        title:'Skills',
        fields:[
            {
                field_name:'Languages',
            field_id:'id16', 
            value: "",
            },
            {
                field_name:'Technologies',
            field_id:'id17', 
            value: "",
            }
    
               ]
    },
    {
        title: 'Projects' ,
        fields: [
            { field_name:'Project 1 Title',
              field_id:'id18', 
              value: "",
             },
            { field_name:'Project 1 Description', 
              field_id:'id19',
              value: "",
            },
            {
              field_name: 'Project 2 Title',
              field_id:'id20',
              value: "",

            },
            {
                field_name:'Project 2 Description',
                field_id:'id21',
                value: "",
            },
            {
                 field_name:'Project 3 Title',
                 field_id:'id22',
                 value: "",
                 
            },
            {
                field_name:'Project 3 Description',
                field_id:'id23',
                value: "",
            }    
        ]
        }
     ,
     {
        title:'WorkExperience',
        fields:[
            {
                field_name:'Company Name 1',
            field_id:'id24', 
            value: "",
            },
            {
                field_name:'Work Done in Company 1',
            field_id:'id25', 
            value: "",
            },
            {
                field_name:'Company Name 2',
            field_id:'id26', 
            value: "",
            },
            {
                field_name:'Work Done in Company 2',
            field_id:'id27', 
            value: "",
            }
    
               ]
    },
    {
        title:'Achievements',
        fields:[
            {
                field_name:'Achievement 1',
            field_id:'id28', 
            value: "",
            },
            {
                field_name:'Achievement 2',
            field_id:'id29', 
            value: "",
            },
            {
                field_name:'Achievement 3',
            field_id:'id30', 
            value: "",
            }
           
    
               ]
    },
    // {
    //     title:'POR',
    //     fields:[
    //         {
    //             field_name:'POR 1 Title',
    //         field_id:'id31', 
    //         value: "",
    //         },
    //         {
    //             field_name:'POR 1 Description',
    //         field_id:'id32', 
    //         value: "",
    //         },
    //         {
    //             field_name:'POR 2 Title',
    //         field_id:'id33', 
    //         value: "",
    //         },
    //         {
    //             field_name:'POR 2 Description',
    //         field_id:'id34', 
    //         value: "",
    //         }
           
    
    //            ]
    // },

];


const Context=({children})=>{

    const[state,dispatch] = useReducer(reducer,InitialState);

return (

<UserInfo.Provider value={{state,dispatch}}>

    {children}
</UserInfo.Provider>

)


};

export const User_Info_State=()=>{
    return useContext(UserInfo);
}

export default Context;
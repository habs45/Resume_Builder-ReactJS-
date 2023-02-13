export const reducer=(state,action)=>{

switch(action.type){

     case 'SET_STATE': {

          console.log(action.payload.state_value);
 const new_state=state.map((rootObj)=>{

     return {...rootObj, fields: rootObj.fields.map(f => f.field_id === action.payload.state_name ? ({
          ...f, 
          value: action.payload.state_value
     }) : f)}

 })
          //     console.logk(state.find( item =>item.title==action.payload.title).fields.find(item=>item.field_id==action.payload.state_name).value);
          // return [...state, state.find( item =>item.title==action.payload.title).fields.find(item=>item.field_id==action.payload.state_name).value:action.payload.state_value ]
         return new_state;
     }

default:
     return state;


}




}
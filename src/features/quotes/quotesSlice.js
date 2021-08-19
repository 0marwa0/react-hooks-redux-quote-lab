// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];
 export const addQuote=(quote)=>{
  return{type:"quotes/add",payload:quote}
}
export const removeQuote =(quoteId)=>{
  return{type:"quotes/remove",payload:quoteId}
}
 export const downvoteQuote=(id)=>{
  return{type:"quotes/downvote",payload:id}
}
 export const upvoteQuote=(id)=>{
  return{type:"quotes/upvote",payload:id}
}
export default function quotesReducer(state = initialState, action) {

switch (action.type) {
  case "quotes/add":
    return [...state,action.payload]
   case "quotes/remove":
     let updated=state.filter(item=>item.id!==action.payload)
    return updated
    case "quotes/upvote":
      
    return state.map((item)=>{
      if(item.id===action.payload){
        return {...item,votes:item.votes+1}
      }
      else  {return item}
     
    })
     case "quotes/downvote":
     return state.map((item)=>{
      if(item.id===action.payload&& item.votes>0){
        return {...item,votes:item.votes-1}
      }
      else  {return item}
     
    })
 
  default:
    break;}





  return state;
}

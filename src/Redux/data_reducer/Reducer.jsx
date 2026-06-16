const InitialState = {
  isLoading:true,
  isError:null,
  Item:[]
}

const reducer = (currentState = InitialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case "Get_Request":
     return{
      ...currentState,
     }
    case "Get_Success":
      return{
       ...currentState,
       isLoading:false,
       Item:[...currentState.Item, payload]
      }
      case "Get_Failure":
        return{
         ...currentState,
         isLoading:false,
         isError:null,
         Item:[]
        }
    default:
      return currentState;
  }
}

export default reducer;
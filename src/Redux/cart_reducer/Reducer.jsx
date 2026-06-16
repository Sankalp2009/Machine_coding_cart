const InitialState = {
  cart_data:[]
}

const reducer = (currentState = InitialState, action) => {
  const {type} = action;
  switch (type) {
    case "Add_cart":
      return{
        
      }
  
    default:
      return currentState;
  }
}

export default reducer;
export const initialState = [
{
    id: 1
}
];


export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "CHANGEID": {

        return state = action.id 
        
        //         const newState = [...state];
        // return newState;
      }
    
    default:
      return state;
    }
}
    ;
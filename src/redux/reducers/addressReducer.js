import * as types from "../actions/actionTypes";

export default function addressReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_ADDRESS:
      return [...state, { ...action.address }];
    case types.EDIT_ADDRESS:
      
      //return [...state, { ...action.address }];
          
      // var found = state.findIndex(function(element) {
      //   return element.id == action.address.id;
      // });

      // console.log(found);

      // if(found >= 0)
      // {
      //   state[found] = action.address;
      // }

      // return state;


      return state.map((address) => {
        if (address.id == action.address.id) {
          return action.address;
        }
        return address;
      })

    case types.DELETE_ADDRESS:
      return state.filter(({ id }) => id !== action.addressId);
    case types.DELETE_ALL_ADDRESSES:
      return [];
    default:
      return state;
  }
}

const initialState = {
   members: [
     { name: 'Jojo Zhang', dragonStatus: true },
     { name: 'Brandon Harris', dragonStatus: false },
     { name: 'Josh J', dragonStatus: true }
   ]
 };

 export const dragonListReducer = ( state = initialState, action ) => {

   switch (action.type) {

      case "ADD_MEMBER":
         // members are an object - you need to format first before add
         const newMember = {name: action.payload, dragonStatus: false}
         return {...state,
                  members: [...state.members, newMember]
                };
                
      default: 
         return state;
   }
 }
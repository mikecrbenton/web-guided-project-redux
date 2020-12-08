export const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
      ]
};


export const dragonReducer = (state = initialState, action) => {
    switch(action.type) {
        case("ADD_MEMBER"):
            return({
                ...state,
                members: [...state.members, newMember]
            });
        default:
            return(state);
    }
}
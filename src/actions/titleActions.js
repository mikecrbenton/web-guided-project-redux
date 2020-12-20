

export const toggleEditing = () => {
   return{ type: 'TOGGLE_EDITING'}
}

export const updateTitle = (newTitle) => {
   return { type: 'UPDATE_TITLE', payload: newTitle}
}

// WITH REDUX. ON THE COMPONENT SIDE WE'LL WRAP THESE IN A DISPATCH FUNCTION
// AND CALL THAT WRAPPED VERSION BY THE SAME NAME, TO ABSTRACT AWAY ALL
// OF THE REDUCER TYPE STUFF
// NOW YOU CAN JUST SAY props.someThing()
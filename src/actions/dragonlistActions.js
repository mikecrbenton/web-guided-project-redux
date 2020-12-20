

export const addMember = newMember => {
   console.log('add member action creator');
   return {type: "ADD_MEMBER", payload: newMember }
}
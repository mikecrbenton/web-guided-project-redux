//action constants
export const ADD_MEMBER = "ADD_MEMBER";

//action creator functions
//  return action objects
export const addMember = name => {
    return({type: "ADD_A_MEMBER", payload:name});
}
import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux'
import {updateTitle, toggleEditing} from '../actions/titleActions'
//import { initialState, titleReducer } from '../reducers/titleReducer';


const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState(); // LOCALLY MANAGED
  //const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
   <div>

     {!props.editing ? (
       <h1 onClick={ () => props.toggleEditing() }>
         {props.title}{' '}
         <i  className="far fa-edit"  />
       </h1>

     ) : (

       <div>
         <input
           className="title-input"
           type="text"
           name="newTitleText"
           value={newTitleText}
           onChange={handleChanges}
         />
         <button
           onClick={() =>
             props.updateTitle(newTitleText)
           }
         >
           Update title
         </button>
       </div>
     )}

   </div>
 );
};

// Step 3: connect the component to the Redux store

// This is how we read state values from the store
const mapStateToProps = (state) => {
 return {
   editing: state.title.editing,
   title: state.title.title
 }
}

// This is how we update state in the store (with reducer actions) -- long form version:
const mapDispatchToProps = (dispatch) => {
 return {
   updateTitle: (newTitle) => dispatch(updateTitle(newTitle)),
   toggleEditing: () => dispatch(toggleEditing())
 }
}

// Short form version: mapDispatchToProps = {updateTitle, toggleEditing}

export default connect(mapStateToProps, mapDispatchToProps)(Title);

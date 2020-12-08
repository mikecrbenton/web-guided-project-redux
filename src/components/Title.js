import React, { useState, useReducer } from 'react';
import { toggleEditing, updateTitle} from './../actions/titleActions';
import { connect } from  'react-redux';

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState();

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  console.log(props);

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{' '}
          <i
            className="far fa-edit"
            onClick={() => props.toggleEditing()}
          />
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

const mapStateToProps = state => {
  return {
    title: state.title,
    editing: state.editing
  }
}

export default connect(mapStateToProps, { dispatchedToggleEdit: toggleEditing, dispatchedUpdateTitle: updateTitle })(Title); //function currying
//Inside of Connect
//1. calling store.getState();
//2. Passing state into mapStateToProps
//3. Taking the object returned form mapStateToProps and connecting it to the component's props.
//4. Get an object containing actionCreators.
//5. Add actionCreators to props.
//6. Automatically call dispatch(actionCreator) when calling props.actionCreator.
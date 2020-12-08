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
            onClick={() => dispatch(toggleEditing())}
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
              dispatch(updateTitle(newTitleText))
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

export default connect(mapStateToProps)(Title); //function currying
//Inside of connect
//1. calling store.getState();
//2. passing state into mapStateToProps
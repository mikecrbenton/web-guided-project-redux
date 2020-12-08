import React from 'react';
import { connect } from 'react-redux';

import { addMember } from './../actions/dragonActions';

class DragonList extends React.Component {
  state = {
    newMember: ''
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  handleClick = e => {
    console.log(this.state.newMember);
    this.props.addMember(this.state.newMember);
  }

  render() {
    const { members } = this.props;

    return (
      <React.Fragment>
        <div className="friends-list">
          {members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    members: state.members
  }
}

export default connect(mapStateToProps, { addMember })(DragonList);
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Dialog from 'react-toolbox/lib/dialog';
import { find } from 'lodash';

import Loading from 'components/Loading';
import Dropdown from 'elements/atm.Dropdown';
import Button from 'elements/atm.Button';
import IconMenu, { MenuItem } from 'elements/atm.IconMenu';

import {
  addUserToGroup,
  removeUserFromGroup,
} from 'containers/App/actions';

import Wrapper from './Wrapper';

export class UserCard extends Component {
  static propTypes = {
    processing: PropTypes.bool,
    userId: PropTypes.string,
    groupId: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    accessLevels: PropTypes.array,
    addUserToGroupRequest: PropTypes.func,
    removeUserFromGroupRequest: PropTypes.func,
  }

  constructor(props) {
    super(props);

    const defaultOption = find(props.accessLevels, { value: props.groupId });
    this.state = {
      accessLevel: defaultOption,
      removeModalVisible: false,
    };
  }

  onAccessLevelChange = (option) => {
    if (this.state.accessLevel.value === option.value) {
      return;
    }

    const { userId, addUserToGroupRequest } = this.props;
    this.setState({ accessLevel: option });

    addUserToGroupRequest({
      user_id: userId,
      group_id: option.value,
    });
  }

  handleRemove = () => {
    const { userId, groupId, removeUserFromGroupRequest } = this.props;
    removeUserFromGroupRequest({
      user_id: userId,
      group_id: groupId,
    });
    this.toggleRemoveModal();
  }

  toggleRemoveModal = () => {
    this.setState({
      removeModalVisible: !this.state.removeModalVisible,
    });
  }

  render() {
    const { processing, accessLevels, name, email, thumbnail } = this.props;
    const { accessLevel, removeModalVisible } = this.state;

    return (
      <Wrapper>
        <div className="avatar" style={{ background: `url(${thumbnail})` }} />
        <div className="detail-pane">
          <div className="name">{name}</div>
          <div className="email">{email}</div>
          <div className="dropdown-wrapper">
            <Dropdown
              value={accessLevel}
              options={accessLevels}
              placeholder=""
              small
              onChange={this.onAccessLevelChange}
            />
          </div>
          <div className="menu-wrapper">
            <IconMenu icon="more_horizontal" position="topLeft" menuRipple>
              <MenuItem className="remove-member" caption="Remove Member" onClick={this.toggleRemoveModal} />
            </IconMenu>
          </div>
        </div>
        <Dialog
          active={removeModalVisible}
          actions={this.removeUserActions}
          onEscKeyDown={this.toggleRemoveModal}
          onOverlayClick={this.toggleRemoveModal}
          type="small"
          title={`Removing ${name}`}
        >
          <p>
            Are you sure that you want to delete this user?
          </p>
          <div style={{ position: 'absolute', top: '30px', right: '25px', cursor: 'pointer' }} onClick={this.toggleModal}>&#10005;</div>
          <div style={{ float: 'right' }}>
            <span style={{ cursor: 'pointer', marginRight: '35px' }} onClick={this.toggleRemoveModal}>
              No, Cancel
            </span>
            <Button label="Yes, Delete" primary onClick={this.handleRemove} />
          </div>
        </Dialog>
        { processing && <Loading /> }
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({
  addUserToGroupRequest: (payload) => dispatch(addUserToGroup(payload)),
  removeUserFromGroupRequest: (payload) => dispatch(removeUserFromGroup(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);

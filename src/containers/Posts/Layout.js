import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { getClassesByPage } from 'utils/permissionClass';
import {
  fetchPostSetsBySTRequest,
  fetchPostSetsRequest,
} from 'containers/App/actions';

import {
  makeSelectPostSets,
  makeSelectPostSet,
} from 'containers/App/selectors';
import Loading from 'components/Loading';

import ErrorWrapper from './ErrorWrapper';
import Wrapper from './Wrapper';
import PostSetBox from './PostSetBox';

class PostsLayout extends Component {
  static propTypes = {
    postSets: ImmutablePropTypes.map,
    fetchPostSets: PropTypes.func,
    fetchPostSetsByST: PropTypes.func,
    // postSet: ImmutablePropTypes.map,
    accountId: PropTypes.string,
    userAccount: PropTypes.object,
  }

  state = {
    error: '',
    shareDialogVisible: false,
  }

  componentWillMount() {
    this.props.fetchPostSets();
  }

  render() {
    const {
      postSets,
      accountId,
      fetchPostSets,
      fetchPostSetsByST,
      userAccount,
    } = this.props;
    const {
      error,
    } = this.state;

    if (error) {
      return (
        <Wrapper>
          <ErrorWrapper>
            { error }
          </ErrorWrapper>
        </Wrapper>
      );
    }

    if (postSets.get('isFetching')) {
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      );
    }

    const { permissions } = userAccount.user_access;
    const permissionClasses = getClassesByPage(permissions, 'posts');

    return (
      <Wrapper>
        <PostSetBox
          postSets={postSets}
          accountId={accountId}
          fetchPostSets={fetchPostSets}
          fetchPostSetsByST={fetchPostSetsByST}
          permissionClasses={permissionClasses}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  postSets: makeSelectPostSets(),
  postSet: makeSelectPostSet(),
});

const mapDispatchToProps = (dispatch) => (
  {
    fetchPostSetsByST: (accountId, payload) => dispatch(fetchPostSetsBySTRequest(accountId, payload)),
    fetchPostSets: (accountId, payload) => dispatch(fetchPostSetsRequest(accountId, payload)),
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(PostsLayout);

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Wrapper from './Wrapper';
import Title from './Title';
import Subtitle from './Subtitle';

function handleTitleKeyDown(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    e.target.blur();
  }
}

function GeneralInfo({ user, postSet, postTitle, handleTitleChange, handleTitleBlur }) {
  // console.log('user', user);
  // console.log('postSet', postSet);
  if (!postSet.post_set_id) return null;
  const userName = postSet.user_id === user.user_id ? user.display_name : postSet.user.display_name;
  const creationTime = moment.unix(postSet.creation_time).format('M/DD/YYYY hh:mma');
  return (
    <Wrapper>
      <Title
        contentEditable
        onInput={handleTitleChange}
        onBlur={handleTitleBlur}
        onKeyDown={handleTitleKeyDown}
      >
        {postTitle}
      </Title>
      <br />
      <Subtitle>{`Created by ${userName} \u00a0\u00a0 | \u00a0\u00a0 ${creationTime}`}</Subtitle>
    </Wrapper>
  );
}

GeneralInfo.propTypes = {
  user: PropTypes.shape(),
  postSet: PropTypes.object,
  postTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
  handleTitleBlur: PropTypes.func,
};

export default GeneralInfo;

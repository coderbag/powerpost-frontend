import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';

import MediaItemThumb from 'components/MediaItemThumb';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 15px 20px;
  background-color: ${(props) => props.active ? '#F0F3F4' : 'white'};
  border: 1px solid #E7ECEE;
  border-top: none;
  border-left: none;
  cursor: pointer;

  &:hover {
    opacity: ${(props) => props.active ? '1' : '0.6'};
  }

  .right-box {
    flex: 1;
    width: 0;
    margin-left: 12px;
    .horizontal-flex {
      display: flex;
      margin-top: 1px;
    }
    .stream-name {
      color: #616669;
      font-size: 12px;
      font-weight: 900;
      line-height: 15px;
      height: 15px;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 5px;
    }
    .date {
      color: #888888;
      font-size: 12px;
      font-weight: 600;
      line-height: 13px;
    }
    .title {
      color: #616669;
      font-size: 13px;
      font-weight: 900;
      line-height: 15px;
      height: 15px;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 5px;
    }
    .message {
      display: -webkit-box;
      margin-top: 9px;
      color: #8C9496;
      font-size: 12px;
      line-height: 14px;
      height: 28px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;

const PostSetItem = ({
  active,
  mediaItems,
  title,
  message,
  date,
  type,
  onClick,
}) => (
  <Wrapper active={active} onClick={onClick}>
    <MediaItemThumb
      size={62}
      type={type}
      mediaItems={mediaItems}
    />
    <div className="right-box">
      <div className="horizontal-flex">
        <div className="title">{title || 'Untitled Post'}</div>
        <div className="date">{date}</div>
      </div>
      <div className="message">{message}</div>
    </div>
  </Wrapper>
);

PostSetItem.propTypes = {
  active: PropTypes.bool,
  mediaItems: ImmutablePropTypes.list,
  title: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

PostSetItem.defaultProps = {
  active: false,
};

export default PostSetItem;

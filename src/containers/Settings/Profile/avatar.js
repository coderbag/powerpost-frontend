import styled from 'styled-components';

const Avatar = styled.div`
  display: inline-block;
  margin: 0 10px;
  h6 {
    margin: 10px 0 6px;
    font-weight: bold;
  }
  .avatar {
    display: table;
    position: relative;
    padding: 0;
    outline: none;
    border: none;
    border-radius: 4px;

    img {
      left: 0px;
      width: 180px;
      height: 180px;
      border-radius: 4px;
    }
    .avatar-txt {
      position: absolute;
      width: 180px;
      height: 180px;
      top: 0;
      left: 0;
      border-radius: 4px;
      border: 1px solid #C8CED0;
      opacity: 0;
      background-color: rgba(0,0,0, .5);
      transition: opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      text-align: center;

      i, p {
        padding: 10px;
        color: white;
        display: inline-block;
        font-weight: 900;
      }

      i {
        margin-top: 70px;
        vertical-align: super;
        font-size: 20px;
        font-family: FontAwesome;
      }

      &:hover {
        opacity: 1;
        border: 1px solid #e81c64;
        cursor: pointer;
      }
    }
  }
`;

export default Avatar;

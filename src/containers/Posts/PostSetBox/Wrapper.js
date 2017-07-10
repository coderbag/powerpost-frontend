import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  .posts-heading {
    position: relative;
    z-index: 100000;
    border-bottom: 1px solid #DBDFE0;
    height: 60px;
    padding-right: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .filter-wrapper {
      display: flex;
      .sort_input {
        margin-left: 20px;
        height: 34px;
        &>div>div:first-child {
          height: 34px;
          line-height: 34px;
          width: 170px;
          padding-top: 0;
          padding-bottom: 0;
          &>div>span {
            line-height: 30px;
            display: block;
          }
        }
      }
      .search-input {
        position: relative;
        margin-left: 20px;
        height: 34px;
        input {
          height: 34px;
          width: 248px;
          border: 1px solid #C8CED0;
          border-radius: 4px;
          padding: 0 15px 0 40px;
          line-height: 34px;
          outline: none;
          transition: border-color 0.5s;
          font-size: 12px;
          &:focus {
            border-color: #E81C64;
          }
        }
        i {
          position: absolute;
          left: 15px;
          width: 20px;
          height: 16px;
          top: 9px;
          color: #ACB5B8;
        }
      }
    }

    .status-selector {
      display: flex;
      height: 100%;
    }
  }

  .posts-content {
    display: flex;
    flex: 1;
    .post-list-container {
      width: 40%;
      max-width: 300px;
      height: 100%;
      float: left;
      display: flex;
      flex-direction: column;
    }
    .post-editor-container {
      flex: 1;
      position: relative;
    }
  }
`;

export default Wrapper;

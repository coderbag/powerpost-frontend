import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  
  .left-column {
    width: 350px;
  }

  .right-column {
    margin-left: 46px;
  }

  .section-title {
    color: #616669;
    font-family: Lato;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 13px;
    &.modify-content {
      margin-top: 10px;
    }
    &.schedule {
      margin-top: 10px;
    }
  }

  .date-pickers {
    .time-picker {
      margin-top: 13px;
      width: 100px;
    }
  }

  .post-upon-ready-placeholder {
    color: #616669;
  }

  .post-preview-title {
    margin-top: 40px;
  }

  .post-preview-note {
    font-size: 12px;
    font-style: italic;
    margin-top: 10px;
    /*text-align: center;*/
    &.pinterest {
      margin-top: -10px;
    }
  }

  .channel-summary {
    margin-bottom: 15px;

    i {
      font-size: 32px;
      border-radius: 2px;
      vertical-align: middle;
      margin-right: 16px;
    }
    .facebook-icon-color {
      color: #4867AA;
    }
    .linkedin-icon-color {
      color: #0177B5;
    }
    .pinterest-icon-color {
      color: #D50C22;
    }
    .twitter-icon-color {
      color: #1DA1F2;
    }
    .wordpress-icon-color {
      color: #464646;
    }
    .google-icon-color {
      color: #d34836;
    }

    .summary-right {
      display: inline-block;
      vertical-align: middle;
    }
    .channel-name {
      color: #39579A;
      font-family: Lato;
      font-size: 11px;
      font-weight: bold;
      line-height: 13px;
      display: block;
      margin-bottom: -2px;
    }
    .timestamp {
      color: #8C9496;
      font-family: Lato;
      font-size: 10px;
      line-height: 12px;
    }
  }

  button {
    margin-top: 13px;
    margin-left: -6px;
    height: 32px;
    color: #8C9496 !important;
    font-family: Lato;
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    border: none;
  }
`;

export default Wrapper;

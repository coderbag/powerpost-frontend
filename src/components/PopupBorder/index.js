import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';
import { noop } from 'lodash';

const Wrapper = styled.div`
  background: white;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 4px;
  z-index: 10;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  /*-webkit-filter: drop-shadow(0 1px 2px rgba(60, 92, 129, 0.42));
  filter        : drop-shadow(0 1px 2px rgba(60, 92, 129, 0.42));
  -ms-filter    : "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=1, Color='#383C5C81')";*/

  &:after {
    content: '';
    display: block;  
    position: absolute;
    left: ${(props) => props.arrowLeft ? `${props.arrowLeft}px` : 'initial'};
    right: ${(props) => props.arrowRight ? `${props.arrowRight}px` : 'initial'};
    top: ${(props) => props.top}px;
    width: 14px;
    height: 14px;
    background: #f4f6f7;
    border-top: 1px solid ${(props) => props.borderColor};
    border-left: 1px solid ${(props) => props.borderColor};
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transform: rotate(45deg);
  }
`;

class Popup extends Component {
  static propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
    arrowLeft: PropTypes.number,
    arrowRight: PropTypes.number,
    borderColor: PropTypes.string,
    children: PropTypes.node,
    onOutsideClick: PropTypes.func,
  }

  static defaultProps = {
    left: 0,
    top: -20,
    borderColor: 'black',
    onOutsideClick: noop,
  }

  handleClickOutside = (e) => {
    this.props.onOutsideClick(e);
  }

  render() {
    const { left, top, arrowLeft, arrowRight, borderColor } = this.props;

    return (
      <Wrapper left={left} top={top} arrowLeft={arrowLeft} arrowRight={arrowRight} borderColor={borderColor}>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default enhanceWithClickOutside(Popup);

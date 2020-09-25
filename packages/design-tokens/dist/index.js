import React from 'react';
import styled, { css } from 'styled-components';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const Button = props => {
  return /*#__PURE__*/React.createElement(BaseButton, props, props.children);
}; // Link Button

const ButtonLink = props => {
  return /*#__PURE__*/React.createElement(LinkBtn, _extends({}, props, {
    href: props.url,
    as: "a"
  }), props.children);
};
const BaseButton = styled.button`
    appearance: none;
    font-family: inherit;
    display: inline-block;
    min-width: 100px;
    border: 0;
    color: #fff;
    padding: 12px 7px;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease-out;
    background: #4676d7;
    margin: ${props => props.margin ? props.margin : '0px 0px'};  
    &:hover{
        background: #1d49aa;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 4px #cbd6ee;
    }
    &:active, &:visited {
        outline: none;
        box-shadow: 0 0 0 4px #cbd6ee;
    }
    ${props => props.primary && css`      
      color: red;
    `}; 
    ${props => props.secondary && css`      
      color: green;
    `}; 
    ${props => props.inverted && css`      
      color: #4676d7;
      background:#cbd6ee;
      padding: 12px 7px;
      &:hover{
          color:#fff;
      }   
    `};    
`;
const LinkBtn = styled(BaseButton)`
  text-align:center;
`;

export { Button, ButtonLink };

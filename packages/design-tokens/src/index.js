import React from 'react';
import styled, { css } from 'styled-components'

// Simple Button
export const Button = (props) => {
  return (
    <BaseButton {...props}>{props.children}</BaseButton>    
    );
}
// Link Button
export const ButtonLink = (props) => {
    return (      
      <LinkBtn {...props} href={props.url} as="a">{props.children}</LinkBtn>
      );
  } 
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
    ${props =>
    props.primary &&
    css`      
      color: red;
    `}; 
    ${props =>
    props.secondary &&
    css`      
      color: green;
    `}; 
    ${props =>
    props.inverted &&
    css`      
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
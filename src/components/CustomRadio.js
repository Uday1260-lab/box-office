import React, { memo } from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 23px;
  user-select: none;
  font-weight: 500;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid #FF1700};
    border-radius: 50%;
  }
  input:checked ~ span {
    background-color: #fff;
    
    border-radius: 50%;
    border: 2px solid #FF1700;
  }
  span:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FF1700;
  }
`;

const CustomRadio = ({ label, ...restProps }) => {
  return (
    <RadioWrapper htmlFor={restProps.id}>
      {label}
      <input {...restProps} type="radio" />
      <span />
    </RadioWrapper>
  );
};

export default memo(CustomRadio);
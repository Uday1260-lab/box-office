import styled from "styled-components";
export const SearchInput = styled.input`
display: block;
font-family: 'Roboto', sans-serif;
width: 200px;
margin: auto;
outline: none;
padding: 13px 15px;
border: 1px solid #FF7F3F;
box-shadow: 0px 0px 10px 0px #FF7F3F;
font-size: 17px;
border-radius: 12px;
background-color:#E7FBBE;
color:#B91646;

&::placeholder {
  font-weight: 300;
  color: #FFAB76;
}
`;

export const RadioInputsWrapper = styled.div`
display: flex;
justify-content: center;
margin: 20px 0;
div {
  color:#F58634;
  margin: 0 15px;
}
`;

export const SearchButtonWrapper = styled.div`
text-align: center;
margin-bottom: 35px;

button {
  color: #fff;
  margin: auto;
  padding: 10px 50px;
  font-size: 15px;
  border: none;
  background-color:#FF8303;
  outline: none;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
}
`;
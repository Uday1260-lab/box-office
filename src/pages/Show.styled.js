import styled from "styled-components";
export const ShowPageWrapper = styled.div`
padding: 40px;
margin:50px;
font-family: 'Charm', cursive;
font-size:25px;

@media only screen and (min-width: 516px) {
  padding: 0 40px;
}

@media only screen and (min-width: 768px) {
  padding: 0 60px;
}

@media only screen and (min-width: 992px) {
  padding: 0 80px;
}
`;

export const InfoBlock = styled.div`
margin-bottom: 40px;
h2 {
  margin: 0;
  margin-bottom: 30px;
  font-size: 22px;
}
`;
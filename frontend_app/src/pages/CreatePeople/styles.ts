import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    margin-top:30px;
    font-size: 48px;
    color: #3a3a3a;
`;

export const Pag = styled.div`
    a {
      background: #fff;
      border-radius: 5px;
      text-decoration: none;
      color: #3a3a3a;
      padding: 24px;

      & + a {
      margin-left: 20px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  
  text-align: center;
  flex-direction: column;
  align-items:center;
  display:flex;

  input {
    flex: 1;
    height: 20px;
    width: 310px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 15px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }

    & + input {
      margin-top: 16px;
    }
  }

  button {
    margin-top: 16px;
    width: 310px;
    height: 40px;
    background: #434767;
    border-radius: 5px 5px 5px 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#434767')};
    }
  }
  
  
`;


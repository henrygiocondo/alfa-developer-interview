import styled , { css }  from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

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

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 900px;
  display: flex;
  input {
    flex: 1;
    height: 55px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError
      && css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  select {
    margin-right:10px;
    width: 150px;
    padding: 17px;
    border: 2px solid #fff;
    border-radius: 5px 5px 5px 5px;
    color: #a8a8b3;
  }

  button {
    width: 210px;
    height: 55px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const People = styled.div`
  margin-top: 80px;
  max-width: 900px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px);
    }
    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
`;

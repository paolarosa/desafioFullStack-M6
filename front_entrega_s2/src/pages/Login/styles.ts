import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormLogin = styled.div`
  width: 100vw;
  height: 800px;
  font-family: "Inter";
  background-color: var(--color-gray-850);

  .divContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    color: white;
    font-size: 16px;
    text-align: center;
    margin: 30px 0 10px 0;
  }

  form {
    width: 95%;
    height: 420px;
    background: var(--color-gray-700);
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
  label {
    color: var(--color-gray-100);
    font-size: 10px;
    margin: 30px 0 8px 0;
  }
  input {
    background: var(--color-gray-800);
    border: 0.973988px solid var(--color-gray-800);
    border-radius: 3.19812px;
    width: 100%;
    height: 38px;
    padding-left: 10px;
    font-size: 12px;
    color: var(--color-gray-600);
    font-family: "Inter";
  }
  input:hover {
    border: 2px solid white;
  }
  .buttonSubmit {
    border-radius: 3.19812px;
    width: 100%;
    height: 38px;
    padding-left: 10px;
    font-size: 14px;
    background-color: var(--color-blue-700);
    color: white;
    margin: 20px 0 30px 0;
  }

  h4 {
    color: var(--color-gray-600);
    font-size: 12px;
    text-align: center;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .divContainer {
      width: 400px;
    }
    form {
      height: 470px;
      padding: 0 15px;
    }
    input {
      height: 48px;
    }
    .buttonRegister {
      height: 48px;
    }
    .buttonSubmit {
      height: 48px;
    }
    p {
      padding-top: 8px;
      font-size: 10px;
    }
  }
`;

export const LinkRegister = styled(Link)`
  border-radius: 3.19812px;
  width: 100%;
  height: 45px;
  padding-left: 10px;
  background-color: var(--color-gray-600);
  margin-top: 15px;
  color: white;
  text-align: center;
  padding-top: 14px;
  font-size: 14px;
  text-decoration: none;
`;

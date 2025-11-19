import styled from 'styled-components';
import { Form } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px;
  border: 2px solid pink;
`;

export const FormTitle = styled.h1`
  align-self: center;
  font-size: 2rem;
  margin: 0;
`;

export const FormSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 80%;
  align-self: center;
`;

export const FormStyled = styled(Form)`
	display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: center;
  gap: 25px;
  padding: 15px;
  background: lightblue;
`;
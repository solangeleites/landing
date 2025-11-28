import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputLabel = styled.label`
  display: flex;
  font-size: 16px;

`;
export const InputStyles = styled.input`
  border: 1px solid;
  border-color: ${({ error }) => (error ? 'error' : 'black')};
  border-radius: 5px;
  padding: 10px;
  width: 350px;
  background: transparent;
  outline: none;
`;

export const ErrorStyled = styled.span`
	padding-left: 5px;
	color: crimson;
`;

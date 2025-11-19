import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { InputContainer, InputLabel, InputStyles, ErrorStyled } from './InputStyled'


const Input = ({name, label, type, isError}) => {
  return (
    <>

  <InputContainer>
  <InputLabel htmlFor={label}>{label}</InputLabel>

    <Field
    name={name}
    type={type}
    error={isError}
    id={label}
    as={InputStyles}
    />  
  <ErrorMessage name={name} component={ErrorStyled} />
  </InputContainer>
    
    </>
  )
}

export default Input
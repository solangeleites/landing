import React from 'react';
import { formInitialValues } from '../componentes/formik/InitialValues';
import { validationSchema } from '../componentes/formik/ValidationSchema';



import {
  FormContainer,
  FormStyled,
  FormSubtitle,
  FormTitle,
} from './ContactStyled';
import { Formik } from 'formik';
import Input from '../componentes/UI/input/Input';
import Submit from '../componentes/UI/submit/Submit';
const Contact = () => {
  return (
    <>
      <FormContainer>
        <FormTitle>Contacto</FormTitle>
        <FormSubtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          quaerat.{' '}
        </FormSubtitle>

        <Formik
          initialValues={formInitialValues}
          validationSchema={validationSchema}
          onSubmit={(values, {resetForm}) =>{
            console.log(values);
            resetForm();
          }}
          >

        <FormStyled>
          <Input
            name='name'
            label="Nombre"
            type='text'
          />
          <Input
            name='surname'
            label="Apellido"
            type='text'
          />
          <Input
          name='email'
          label="Email"
          type='email'
          />
          <Input
          name='message'
          label="Mensaje"
          type='text'
          as='textarea'
          />

          <Submit />
        </FormStyled>

        </Formik>
      </FormContainer>
    </>
  );
};

export default Contact;

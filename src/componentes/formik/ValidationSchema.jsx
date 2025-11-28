import * as Yup from "yup";

export const validationSchema = Yup.object({
	name: Yup.string().trim().max(10, "Te pasaste").required("Campo requerido"),
	phone: Yup.number()
		.required("Campo requerido")
		.integer("Debes ingresar un número entero"),
	email: Yup.string()
		.email("Debes ingresar un email válido")
		.required("Campo requerido"),
});
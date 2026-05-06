import * as yup from 'yup'
import { EMAIL_REG, PASSWORD_REG } from 'src/configs/regex'
import { ValidationMessageEnum } from 'src/configs/messages'

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required(ValidationMessageEnum['AUTH-0001'])
    .matches(EMAIL_REG, ValidationMessageEnum['AUTH-0002']),
  password: yup
    .string()
    .required(ValidationMessageEnum['AUTH-0001'])
    .matches(PASSWORD_REG, ValidationMessageEnum['AUTH-0003']),
  confirmPassword: yup
    .string()
    .required(ValidationMessageEnum['AUTH-0001'])
    .oneOf([yup.ref('password')], ValidationMessageEnum['AUTH-0004'])
})

export type TRegisterSchema = yup.InferType<typeof registerSchema>

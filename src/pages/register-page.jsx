/* eslint-disable react/no-unescaped-entities */
import RegisterForm from "../components/fragments/register-form"
import AuthLayout from "../components/layout/auth-layout"

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <RegisterForm></RegisterForm>
    </AuthLayout>
  )
}

export default RegisterPage
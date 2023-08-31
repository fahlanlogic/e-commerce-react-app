/* eslint-disable react/no-unescaped-entities */
import LoginForm from "../components/fragments/login-form"
import AuthLayout from "../components/layout/auth-layout"

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <LoginForm></LoginForm>
    </AuthLayout>
  )
}

export default LoginPage
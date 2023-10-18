import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/layouts/AuthLayouts";

const LoginPage = (props) => {
  return (
    <AuthLayout tittle="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;

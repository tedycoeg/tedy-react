
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayouts";

const RegisterPage = (props) => {
  return (
    <AuthLayout tittle="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;

import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/button";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <InputForm
          tittle="Fullname"
          type="email"
          placeholder="Insert your name"
          name="text"
        />
        <InputForm
          tittle="Email"
          type="email"
          placeholder="Example@gmail.com"
          name="email"
        />
        <InputForm
          tittle="Password"
          type="password"
          placeholder="*****"
          name="password"
        />
        <InputForm
          tittle="Confirm Password"
          type="password"
          placeholder="*****"
          name="ConfirmPassword"
        />
        <Button variant="bg-primary text-white w-100 my-3 border-radius">
          Register
        </Button>
      </form>
    </>
  );
};

export default FormRegister;

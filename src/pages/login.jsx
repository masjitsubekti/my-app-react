import AuthLayout from "../layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};
export default LoginPage;

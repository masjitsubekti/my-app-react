import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault(); //agar tidak melakukan refresh terus 
    localStorage.setItem('email', event.target.email.value); //untuk menyimpan value form ke local storage setelah di submit
    localStorage.setItem('password', event.target.password.value);
    window.location.href = '/products'

    // console.log(event.target.email.value); //ambil dari name didalam form
    // console.log(event.target.password.value);
    // console.log('login');
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  );
};
export default FormLogin;

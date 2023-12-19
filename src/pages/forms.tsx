import { useForm } from "react-hook-form";

// Less code (check)
// Better validation (check)
// Better Errors (set, clear, display Error)
// Have control over inputs
// Don't deal with events (check)
// Easier Inputs (check)
interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  // 1. 모든 것은 useForm 훅에서 나온다!
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onBlur",
  });
  const onValid = (data: LoginForm) => {
    console.log("I'm valid baby");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      {/* 2. input들을 모두 state에 '등록'하기 위해서는, register 함수를 사용한다 */}
      {/* 2. watch함수를 사용하기 위해서는 input 태그에서 register 함수를 사용한다. */}
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", {
          required: "Password is required",
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}

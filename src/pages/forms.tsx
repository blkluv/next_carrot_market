import { useForm } from "react-hook-form";

// Less code
// Better validation
// Better Errors (set, clear, display Error)
// Have control over inputs
// Don't deal with events
// Easier Inputs

export default function Forms() {
  // 1. 모든 것은 useForm 훅에서 나온다!
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <form>
      {/* 2. input들을 모두 state에 '등록'하기 위해서는, register 함수를 사용한다 */}
      {/* 2. watch함수를 사용하기 위해서는 input 태그에서 register 함수를 사용한다. */}
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}

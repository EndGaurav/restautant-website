import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputTypes, userLoginSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";



const Login = () => {
  const [input, setInput] = useState<LoginInputTypes>({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState<Partial<LoginInputTypes>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  const loginSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputTypes>);
      return;
    }
    console.log(input);
    setInput({
      email: "",
      password: ""
    })
  }
  const isLoading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md md:border mx-4  border-gray-200 rounded-lg">
        <div className="mb-4">
          <h1 className="font-bold text-2xl text-center">RandomEats</h1>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Mail className="absolute inset-y-2 left-2 text-gray-400 pointer-events-none" size={20} />
            <Input
              type="email"
              placeholder="Email"
              className="pl-8 focus-visible:ring-1"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
            {errors && <span className="text-sm text-red-500">{errors.email}</span>}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-400 pointer-events-none" size={20} />
            <Input
              type="password"
              placeholder="Password"
              className="pl-8 focus-visible:ring-1"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
            {errors && <span className="text-sm text-red-500">{errors.password}</span>}
          </div>
        </div>

        <div className="mb-10">
          {
            isLoading ?
              (<Button disabled className="w-full bg-orange hover:bg-hoverOrange"><Loader2 className="animate-spin w-4 h-4 mr-2" />Please wait</Button>)
              :
              (<Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Login</Button>)
          }
          <div className="text-center text-blue-500 mt-4">
            <Link to={"/forgot-password"}>Forgotten Password?</Link>
          </div>
        </div>
        <Separator />
        <p className="text-center mt-2">Don't have an account ? <Link to="/signup" className="text-blue-500 underline">Signup</Link></p>
      </form>
    </div>
  )
}

export default Login;
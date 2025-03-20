import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Contact, Loader2, LockKeyhole, Mail, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

type SignupInputTypes = {
  email: string,
  password: string,
  contact: string,
  fullname: string
}

const Signup = () => {
  const [input, setInput] = useState<SignupInputTypes>({
    email: "",
    password: "",
    contact: "",
    fullname: ""
  })

  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInput({...input, [name]: value});
  }

  const loginSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    setInput({
      email: "",
      password: "",
      contact: "",
      fullname: ""
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
            <User className="absolute inset-y-2 left-2 text-gray-400 pointer-events-none" size={20} />
            <Input 
            type="text" 
            placeholder="Fullname" 
            className="pl-8 focus-visible:ring-1" 
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Contact className="absolute inset-y-2 left-2 text-gray-400 pointer-events-none" size={20} />
            <Input 
            type="text" 
            placeholder="Contact" 
            className="pl-8 focus-visible:ring-1" 
            name="contact"
            value={input.contact}
            onChange={changeEventHandler}
            />
          </div>
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
          </div>
        </div>

        <div className="mb-10">
          {
            isLoading ? 
            (<Button disabled className="w-full bg-orange hover:bg-hoverOrange"><Loader2 className="animate-spin w-4 h-4 mr-2" />Please wait</Button>)
            :
            (<Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Signup</Button>)
          }
        </div>
        <Separator />
        <p className="text-center mt-2">Already have an account ? <Link to="/login" className="text-blue-500 underline">Login</Link></p>
      </form>
    </div>
  )
}

export default Signup;
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"


const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("")
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded ">
        <div className="text-center">
      <h1 className="font-extrabold text-2xl mb-2 select-none">Forgot Password</h1>
      <p className="text-sm text-gray-600 select-none ">Please enter your email to reset your password</p>
        </div>
        <div className="relative">
            <Mail className="absolute inset-y-2 left-3 text-gray-400 pointer-events-none" size={20} />
            <Input
              type="email"
              placeholder="Email"
              className="pl-8 focus-visible:ring-1 mx-2"
              value={email}
              onChange={(E) => setEmail(E.target.value)}
            />
          </div>
          {
              loading ? (
                <Button disabled className="bg-orange hover:bg-hoverOrange select-none mx-2"><Loader2 className="animate-spin w-4 h-4" />Please wait</Button>
              ) : (<Button className="bg-orange hover:bg-hoverOrange select-none">Send Reset Link</Button>)
          }
          <span className="text-center">Back to <Link to={"/login"} className="text-blue-500 underline ">Login</Link></span>
      </form>
    </div>
  )
}

export default ForgotPassword
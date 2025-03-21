import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react";
import { KeyboardEvent, useRef, useState } from "react"


const VerifyEmail = () => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRef = useRef<any>([]);
    const loading = true;
    const handleChange = (index: number, value: string) => {
        if (value.includes(" ")) {
            alert("Invalid input");
            return;
        }
        if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }

        if (value !== "" && index < 5) {
            inputRef.current[index + 1].focus();
        }
    }

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRef.current[index - 1].focus();
        }
    }
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
                <div className="text-center">
                    <h1 className="font-extrabold text-2xl">Verify your email</h1>
                    <p className="text-sm text-gray-600">Enter the 6 digit code sent to your email address</p>
                </div>
                <form >
                    <div className="flex justify-between">
                        {
                            otp.map((letter: string, index: number) => (
                                <Input
                                    type="text"
                                    maxLength={1}
                                    key={index}
                                    value={letter}
                                    ref={(element) => (inputRef.current[index] = element)}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ))
                        }
                    </div>
                    {
                        loading ? (
                            <Button disabled className="mt-6 w-full bg-orange hover:bg-hoverOrange select-none mx-2"><Loader2 className="animate-spin w-4 h-4" />Please wait</Button>
                        ) : (<Button className="mt-6 w-full bg-orange hover:bg-hoverOrange select-none">Verify</Button>)
                    }
                </form>

            </div>
        </div>
    )
}

export default VerifyEmail
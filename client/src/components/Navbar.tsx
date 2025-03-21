import { Link } from "react-router-dom"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { HandPlatter, Loader2, Menu, Moon, PackageCheck, ShoppingCart, Sun, User, Utensils } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";


const Navbar = () => {
    const admin = true;
    const isLoading = false;
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14">
                <Link to={"/"}>
                    <h1 className="font-bold md:font-extrabold text-2xl">RandomEats</h1>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-6">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/profile"}>Profile</Link>
                        <Link to={"/order/status"}>Order</Link>
                    </div>
                    {
                        admin && (
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger>Dashboard</MenubarTrigger>
                                    <MenubarContent>
                                        <Link to={"/admin/restaurant"}>
                                            <MenubarItem>Restaurant</MenubarItem>
                                        </Link>
                                        <Link to={"/admin/menu"}>
                                            <MenubarItem>Menu</MenubarItem>
                                        </Link>
                                        <Link to={"/admin/orders"}>
                                            <MenubarItem>Order</MenubarItem>
                                        </Link>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        )
                    }

                    <div className="flex items-center gap-4">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Light</DropdownMenuItem>
                                    <DropdownMenuItem>Dark</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Link to={"/cart"} className="relative cursor-pointer">
                            <ShoppingCart />
                            <Button className="absolute -inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red-500" size={'icon'}>4</Button>
                        </Link>
                        <div>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            {
                                isLoading ?
                                    (<Button disabled className="w-full bg-orange hover:bg-hoverOrange"><Loader2 className="animate-spin w-4 h-4 mr-2" />Please wait</Button>)
                                    :
                                    (<Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Logout</Button>)
                            }
                        </div>
                    </div>
                </div>
                <div className="md:hidden lg:hidden">
                    {/* mobile */}
                    <MobileNavbar />
                </div>
            </div>
        </div>
    )
}

export default Navbar

const MobileNavbar = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size={'icon'} className="rounded-full bg-gray-200 text-black">
                        <Menu size={'18'} />
                    </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col">
                    <SheetHeader className="flex flex-row items-center justify-between my-6">
                        <SheetTitle>RandomEats</SheetTitle>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Light</DropdownMenuItem>
                                <DropdownMenuItem>Dark</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SheetHeader>
                    <Separator className="my-2" />
                    <SheetDescription className="flex-1">
                        <Link to={"/profile"} className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                            <User />
                            <span>Profile</span>
                        </Link>
                        <Link to={"/profile"} className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                            <HandPlatter />
                            <span>Order</span>
                        </Link>
                        <Link to={"/profile"} className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                            <ShoppingCart />
                            <span>Cart (0)</span>
                        </Link>
                        <Link to={"/profile"} className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                            <Menu />
                            <span>Menu</span>
                        </Link>
                        <Link to={"/profile"} className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                            <Utensils />
                            <span>Restaurant</span>
                        </Link>
                        <Link to={"/profile"} className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                            <PackageCheck />
                            <span>Restaurant Orders</span>
                        </Link>

                    </SheetDescription>
                    <SheetFooter className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1 className="font-bold">Username</h1>
                        </div>
                        <SheetClose asChild>
                            <Button type="submit" className="bg-orange hover:bg-hoverOrange">Logout</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}
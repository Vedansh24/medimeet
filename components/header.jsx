import  React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 
    support-[backdrop-filter]:bg-background/60">
        <nav className="container mx-5 py-4 h-16 flex items-center justify-between">
            <Link href= "/">
            <Image 
            src="/logo-single.png" 
            alt="MediMeet Logo" 
            width={200} 
            height={60}
            className= "h-10 w-auto object-contain" 
            />
            </Link> 

            <div className= "flex item-center space-x-2">
                <SignedOut>
              <SignInButton>
                <Button variant="secondary">Sign In</Button>

              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
        </nav>
    </header>
       
       
)};

export default Header;
    
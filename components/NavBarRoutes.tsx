"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavBarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");
    return (
        <div className="flex ml-auto gap-x-2">
            {isTeacherPage || isPlayerPage ? (
                <Link href="/">
                    <Button size="sm" variant="ghost">
                        <LogOut className="w-4 h-4 mr-2"/>
                        Exit
                    </Button>
                </Link>
            ) : (
                <Link href="/teacher/courses">
                    <Button size="sm" variant="ghost">Teacher Mode</Button>
                </Link>
            )}
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}

export default NavBarRoutes;
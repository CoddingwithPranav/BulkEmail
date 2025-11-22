"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useLogout } from "@/hooks/queries/auth.query";
import { useAuthStore } from "@/lib/store";
import { Separator } from "@radix-ui/react-separator";
import { ChevronDown, LogOut, Settings, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SidebarTrigger } from "../ui/sidebar";
import { Skeleton } from "../ui/skeleton";
import { NotificationDropdown } from "./NotificationDropdown";
import { ThemeToggle } from "./ThemeToggle";
import { AvatarImage } from "@radix-ui/react-avatar";

interface User {
  userFullName: string;
  role: string;
}

const LogoutAlert = () => {
  const router = useRouter();
  const { mutateAsync: logout, isPending } = useLogout();
  const onLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start px-2 py-2 text-xs text-red-600 gap-2"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="p-2 text-xs bg-brand gap-2 cursor-pointer hover:bg-brand/80 dark:text-white"
            onClick={onLogout}
          >
            <LogOut className="h-4 w-4" />
            {isPending ? "Signing out..." : "Sign out"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const AdminHeader = () => {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  const getAvatarInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
    return initials;
  };
   
  const onProfileClick = () => {
    router.push("/dashboard/profile");
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 px-4 justify-between border-b">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4 w-px bg-border/50" />
      </div>

      <div className="flex items-center gap-2">
        <NotificationDropdown />

        <div className="h-6 w-px bg-border hidden sm:block" />

        <ThemeToggle />

        <div className="h-6 w-px bg-border hidden sm:block" />

        {/* User profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 px-2 h-8">
              <Avatar >
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>
                  {getAvatarInitials(user?.userFullName ?? "")}
                </AvatarFallback>
              </Avatar>
              <div className="text-left hidden sm:flex sm:flex-col sm:space-y-0.5">
                <span className="text-xs font-medium">
                  {user ? user.userFullName : <Skeleton className="h-4 w-25" />}
                </span>
                <span className="text-xs text-muted-foreground block">
                  {user ? (
                    user.role?.toLocaleUpperCase()
                  ) : (
                    <Skeleton className="h-4 w-20" />
                  )}
                </span>
              </div>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem className="gap-2 text-xs py-2" onClick={onProfileClick}>
              <UserCircle className="h-3 w-3" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 text-xs py-2">
              <Settings className="h-3 w-3" />
              Account
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <LogoutAlert />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

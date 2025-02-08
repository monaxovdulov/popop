import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Store,
  ListTodo,
  Gamepad2,
  Users,
  User
} from "lucide-react";

export function Nav() {
  const location = useLocation();
  
  const navItems = [
    { path: "/shop", icon: Store, label: "Shop" },
    { path: "/tasks", icon: ListTodo, label: "Tasks" },
    { path: "/", icon: Gamepad2, label: "Game" },
    { path: "/friends", icon: Users, label: "Friends" },
    { path: "/profile", icon: User, label: "Profile" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-background z-50">
      <nav className="w-full max-w-md bg-card border-t border-border flex justify-around items-center h-14 pb-[var(--tg-viewport-safe-area-inset-bottom)]">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-0.5 active:opacity-60",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xxs font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

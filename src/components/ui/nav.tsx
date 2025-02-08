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
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50">
      <nav className="w-full max-w-md flex justify-around items-center h-[72px] pb-[var(--tg-viewport-safe-area-inset-bottom)] px-4">
        <div className="w-full bg-black/40 backdrop-blur-md rounded-full flex justify-around items-center h-14">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            
            return (
              <Link
                key={path}
                to={path}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 px-2 py-1 rounded-full transition-colors",
                  isActive ? "text-white" : "text-white/60 hover:text-white/80"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

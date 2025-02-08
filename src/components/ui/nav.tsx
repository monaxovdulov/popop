import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow flex justify-around p-4 z-50">
      <Link to="/shop">Shop</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/">Game</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

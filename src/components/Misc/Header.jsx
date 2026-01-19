import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { user, logoutHandler } = useContext(AuthContext);
  const userName = user.name ?? user.email;

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-semibold text-gray-300">
        Hello 👋,
        <br />
        <span className="text-4xl text-white font-bold">{userName }</span>
      </h1>

      <button
        onClick={logoutHandler}
        className="bg-red-700 px-5 py-3 rounded text-lg font-semibold cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

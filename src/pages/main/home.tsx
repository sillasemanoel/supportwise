// Dependencies
import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
// Styles
import { HomeStyle } from "./style";

interface User {
  name: string;
  email: string;
  imagem: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    const userLocalStorage: User = JSON.parse(
      localStorage.getItem("user") || "null"
    ) as User;
    const userSessionStorage: User = JSON.parse(
      sessionStorage.getItem("user") || "null"
    ) as User;

    const user = userLocalStorage || userSessionStorage;

    if (user) {
      setUser(user);
    } else {
      window.location.href = "/login";
    }
  }, []);

  if (!user) {
    return null;
  }

  return (
    <HomeStyle>
      <div className="profile">
        <img src={user.imagem} alt="Imagem do usuário" />
        <p>{user.name}</p>
        <button onClick={handleLogout}>
          <CiLogout />
        </button>
      </div>
    </HomeStyle>
  );
}

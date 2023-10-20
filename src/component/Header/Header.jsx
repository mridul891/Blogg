import { nanoid } from "@reduxjs/toolkit";
import { Container, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useId } from "react";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/Login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/Signup",
      active: !authStatus,
    },
    {
      name: "AllPosts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "AddPost",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className=" py-3 shadow bg-gray-500">
      <Container>
        <nav>
          <div>
            <Link to="\">logo</Link>
          </div>
          <ul className="">
            {navItems.map((item) =>
              item.active ? (
                <li key={useId}>
                  <button onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cartIcon from "../Assets/png/cart.png";
import user1 from "../Assets/png/user1.png";

/* eslint-disable react/prop-types */
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivepage] = useState("");

  useEffect(() => {
    setActivepage(location.pathname);
  }, [location]);

  const handleClick = useCallback(
    (active) => {
      setActivepage(active);
      navigate(active);
    },
    [navigate]
  );

  return (
    <>
      <div className="w-full h-[72px] px-8 inline-flex items-center justify-between bg-white border-b border-[#ECECEC]">
        <ul className="inline-flex gap-x-6">
          <Li
            isActive={activePage === "/"}
            text="Home"
            onClick={() => handleClick("/")}
          />
          <Li
            isActive={activePage === "/books" || activePage.includes("/books/")}
            text="Books"
            onClick={() => handleClick("/books")}
          />
          <Li
            isActive={activePage === "/authors"}
            text="Authors"
            onClick={() => handleClick("/authors")}
          />
          <Li
            isActive={activePage === "/cart"}
            text="Cart"
            onClick={() => handleClick("/cart")}
          />
        </ul>
        <div className="flex items-center gap-x-8">
          <img
            src={cartIcon}
            alt="notification.svg"
            className="w-7 h-7 cursor-pointer"
            onClick={() => handleClick("/cart")}
          />
          <img src={user1} alt="user.svg" />
        </div>
      </div>
    </>
  );
};

export default NavBar;

const Li = ({ isActive, text, onClick }) => {
  return (
    <>
      <li
        className={`${
          isActive ? "text-special" : "text-primary"
        } font-bold text-base cursor-pointer`}
        onClick={onClick}
      >
        {text}
      </li>
    </>
  );
};

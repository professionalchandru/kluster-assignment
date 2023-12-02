import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cartIcon from "../Assets/png/cart.png";
import user1 from "../Assets/png/user1.png";
import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivepage] = useState("");

  const noOfItems = useSelector((state) => state.app.cart.noOfItems);

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
            isActive={
              activePage === "/authors" || activePage.includes("/authors/")
            }
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
          <div className="inline-flex gapx-1 items-center">
            <img
              src={cartIcon}
              alt="cart-icon.svg"
              className="w-7 h-7 cursor-pointer"
              onClick={() => handleClick("/cart")}
            />
            <div className="px-2 py-1 text-[10px] bg-special font-bold text-white rounded-full">
              {noOfItems}
            </div>
          </div>
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

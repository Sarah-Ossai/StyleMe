import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Cart from "../components/Cart";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Swal from "sweetalert2";
import { useRef } from "react";
import Wish from "../components/Wish";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../../Assets/Styles/style.scss";
const Header = ({
  wish,
  cartItems,
  setCartItems,
  setCartItem,
  cartItem,
  wishItem,
  prevCartItems = [], // initialize prevCartItems as an empty array if it is undefined/null
  setWishItem,
  setWishItems,
  wishItems,
onAddToCartFromWish
}) => {

  
  const handleAddToCart = (product) => {
    setCartCount((prevCount) => prevCount + 1);

    setCartItem((prevCartItems) => [...prevCartItems, product]);

    const itemIndex = cartItem.findIndex((item) => item.id === product[0]);
    if (itemIndex === -1) {
      setCartItem([
        ...cartItem,
        {
          id: product[0],
          img: product[1],
          title: product[2],
          price: product[3],
          quantity: 1,
        },
      ]);
    } else {
      const updatedCartItems = [...cartItem];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItem(updatedCartItems);
    }
  };
  const handleAddToCartFromWishlist = (item) => {
    const itemIndex = wishItems.findIndex((wItem) => wItem.id === item.id);
    if (itemIndex === -1) {
      setCartItem((prevCartItems) => [
        ...prevCartItems,
        {
          id: item[0],
          img: item[1],
          title: item[2],
          price: item[3],
          quantity: 1,
        },
      ]);
    } else {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItem(updatedCartItems);
    }
    setCartCount((prevCount) => prevCount + 1);

  };

  const handleDeleteItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    const updatedWishItems = wishItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    setWishItems(updatedWishItems);
    setCartCount(updatedCartItems.length);
  };
  
  
  
  
  const handleAddToWish = (product) => {
    setWishItem((prevWishItems) => [...prevWishItems, product]);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleWishClick = () => {
    setShowWish(!showWish);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  const closeWish = () => {
    setShowWish(false);
  };
  const [navbar, setNavbar] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const handleClearWish = () => {
    setWishItem([]);
  };

  return (
    <header>
      <nav className="flex flex-col md:flex-row  md:space-y-0 justify-between md:gap-5 py-5 px-0 md:px-24 bg-white fixed top-0  w-full z-10 shadow-lg">
        <div className="flex justify-between px-7 md:px-0">
          <NavLink to="/">
            <p className="text-3xl font-medium">
              Style<b className="text-red-600 font-bold">Me</b>
            </p>
          </NavLink>
          <div className="md:hidden">
            <button
              className="p-2 rounded-md outline-none focus:border-white focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 text-white h-7"
                  viewBox="0 0 20 20"
                  fill="red"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 text-white h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="bg-gray-300 w-[230px] p-2 flex rounded-lg mx-7 md:mx-0">
          <input
            type="search"
            name="search"
            className="bg-transparent outline-none"
            placeholder="Search anything..."
          />
          <SearchIcon className="text-gray-500" />
        </div>
        <div
          className={`navMenu flex md:flex md:bg-transparent h-screen mt-5 md:mt-0 bg-gray-600 py-5 md:py-0 px-10 md:h-full h-screen font-medium  text-white md:text-gray-900  flex-col md:flex-row gap-5 md:gap-20 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-5 pt-24 md:pt-0 md:gap-10 md:place-items-center text-xl md:text-lg">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <li className="cursor-pointer hover:text-red-600 ">Home</li>
            </NavLink>
            <Link to="#about" smooth>
              <li className="cursor-pointer hover:text-red-600 ">About</li>
            </Link>

            <Link to="#blog" smooth>
              <li className="cursor-pointer hover:text-red-600 ">Blog</li>
            </Link>

            <Link to="#products" smooth>
              <li className="cursor-pointer hover:text-red-600 ">Products</li>
            </Link>
          </ul>
          <br className="md:hidden" />
          <div className="flex flex-col md:flex-row gap-5 md:place-items-center  text-xl md:text-lg">
            <Badge badgeContent={wishItems.length} color="error">
              <div className="flex gap-2">
                <FavoriteBorderIcon
                  className="cursor-pointer hover:text-red-600 relative"
                  onClick={handleWishClick}     
                  setWishItem={setWishItem}
                  setWishItems={setWishItems}
                />{" "}
                <span className="md:hidden">Wishlist</span>
              </div>
            </Badge>
            {showWish && (
              <div className="menuSlide">
                <Wish
                setCartItem={setCartItem}
                wishItem={wishItem}
                  wishItems={wishItems}
                  onAddToWish={handleAddToWish}
                  onAddToCartFromWish={handleAddToCartFromWishlist}
                  handleWishUpdate={handleDeleteItem}
                  setWishItem={setWishItem}
                  setWishItems={setWishItems}
                  className="menuSlide"
                />{" "}
                <CloseIcon
                  onClick={closeWish}
                  className="cursor-pointer absolute z-40 bg-black text-white text-xl top-5 right-5"
                />
              </div>
            )}
            <Badge badgeContent={cartItems.length} color="error">
              <div className="flex gap-2">
                <ShoppingCartIcon
                  className="cursor-pointer hover:text-red-600 relative"
                  onClick={handleCartClick}
                  cartCount={cartCount}
                  setCartItems={setCartItems}
                  setCartItem={setCartItem}
                />{" "}
                <span className="md:hidden">Cart</span>
              </div>
            </Badge>
            {showCart && (
              <div className="menuSlide">
                <Cart
                cartCount={cartCount}
                  cartItems={cartItems}
                  onAddToCart={handleAddToCart}
                  setCartItem={setCartItem}
                  setCartItems={setCartItems}
                  onAddToCartFromWish={handleAddToCartFromWishlist}
                  handleCartUpdate={handleDeleteItem}
                  className=".menuSlide"
                />{" "}
                <CloseIcon
                  onClick={closeCart}
                  className="cursor-pointer absolute z-40 bg-black text-white text-xl top-5 right-5"
                />
              </div>
            )}

            <div className="w-1 bg-red-600">
              <Button
                id="basic-button"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <AccountCircleIcon
                  className="cursor-pointer hover:text-red-600 text-white  text-left md:text-gray-800 pl-1"
                  fontSize="large"
                />{" "}
                <span className="md:hidden text-white "> Account</span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleClose}>Shopping Cart</MenuItem>
                <MenuItem onClick={handleClose}>Checkout</MenuItem>
                <MenuItem onClick={handleClose}>Wishlist</MenuItem>
                <MenuItem onClick={handleClose}>Order Tracking</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import Hero from "../../Components/components/Hero/Hero";
import Header from "../../Components/Header/Header";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../../Assets/Styles/style.scss";
import AllProducts from "../../Components/components/Product/AllProducts";
import BestSellers from "../../Components/components/Product/BestSellers";
import Featured from "../../Components/components/Product/Featured";
import Blog1 from "../../Assets/Images/blog1.jpeg";
import Blog2 from "../../Assets/Images/blog2.jpeg";
import Blog3 from "../../Assets/Images/blog3.jpeg";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";
import { useRef } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Homepage = () => {
  const inputRef = useRef(null);
  const showAlert = () => {
    if (inputRef.current.value !== "") {
      new Swal({
        title: "Thank You For Subscribing!",
        icon: "success",
      });
    }
  };
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);

  const handleAddToCart = (product) => {
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
    setCartCount(cartCount + 1);
  };


  const [wishCount, setWishCount] = useState(0);
  const [wishItem, setWishItem] = useState([]);
  const handleAddToWish = (product) => {
    const itemIndex = wishItem.findIndex((item) => item.id === product[0]);
    if (itemIndex === -1) {
      setWishItem([
        ...wishItem,
        {
          id: product[0],
          img: product[1],
          title: product[2],
          price: product[3],
          quantity: 1,
        },
      ]);
    } else {
      const updatedWishItems = [...wishItem];
      updatedWishItems[itemIndex].quantity += 1;
      setWishItem(updatedWishItems);
    }

    setWishCount(wishCount + 1);
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <React.Fragment>
        <Header
          cartCount={cartCount}
          cartItems={cartItem}
          wish={wishCount}
          wishItems={wishItem}
          setCartItems={setCartItems}
          setCartItem={setCartItem}
          setWishItem={setWishItem}
          setWishItems={setWishItems}
        />
        <Hero />
      </React.Fragment>
      <section
        id="products"
        className="px-7 md:px-24 flex flex-col gap-5 text-center py-10 md:py-20 place-items-center bg-gray-100"
      >
        <h1 className="text-2xl md:text-3xl font-medium">NEW ARRIVAL</h1>
        <p className="text-gray-500">
          Lorem og elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim.
        </p>

        <Box
          sx={{ width: "100%" }}
          className="flex flex-col space-y-10 justify-center py-5 md:py-10 place-items-center align-center"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="muted"
            indicatorColor="muted"
          >
            <Tab value={0} label="ALL" />
            <Tab value={1} label="BESTSELLERS" />
            <Tab value={2} label="FEATURED" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <AllProducts
              onAddToCart={handleAddToCart}
              onAddToWish={handleAddToWish}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <BestSellers
              onAddToCart={handleAddToCart}
              onAddToWish={handleAddToWish}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Featured
              onAddToCart={handleAddToCart}
              onAddToWish={handleAddToWish}
            />
          </TabPanel>
        </Box>
      </section>

      <section className="px-7 md:px-24 flex flex-col space-y-5 text-center py-20">
        <i className="text-xl md:text-4xl text-red-600 font-bold">
          FREE SHIPPING <span className="text-black">ALL ORDERS OVER $150</span>
        </i>
        <div className="flex justify-center place-items-center gap-4">
          <hr className="border border-gray-300 w-1/6 hidden md:flex" />
          <p>We will ship your item within 3 days</p>
          <hr className="border border-gray-300 w-1/6 hidden md:flex" />
        </div>
      </section>

      <section
        id="blog"
        className="px-7 md:px-24 flex flex-wrap gap-10 text-center py-10 md:py-20 justify-center place-items-center bg-gray-100"
      >
        <div className="bg-white w-[350px] h-[450px] cursor-pointer transition duration-200 hover:ease-in-out hover:scale-105 relative">
          <div className="absolute w-[90px] bg-red-500 text-white">
            <p>March 13</p>
          </div>
          <img src={Blog1} alt="blog" className="w-[350px] bg-gray-500" />
          <div className="px-5 py-5 flex flex-col gap-4">
            <p className="font-bold">Chic in the City</p>
            <p className="text-sm text-gray-500">
              This blog covers all the latest fashion trends, beauty tips, and
              style inspiration for the modern urban woman. From street style to
              high fashion, "Chic in the City" has you covered.
            </p>
          </div>
        </div>
        <div className="bg-white w-[350px] h-[450px] cursor-pointer transition duration-200 hover:ease-in-out hover:scale-105 relative">
          <div className="absolute w-[90px] bg-black text-white">
            <p>April 2</p>
          </div>
          <img src={Blog2} alt="blog" className="w-[350px] bg-gray-500" />
          <div className="px-5 py-5 flex flex-col gap-4">
            <p className="font-bold">Style on a Budget</p>
            <p className="text-sm text-gray-500">
              Are you looking to stay on-trend without breaking the bank? "Style
              on a Budget" offers tips and tricks for affordable fashion finds,
              DIY projects, and thrifting adventures. Get the most bang for your
              buck with this budget-friendly blog.
            </p>
          </div>
        </div>
        <div className="bg-white w-[350px] h-[450px] cursor-pointer transition duration-200 hover:ease-in-out hover:scale-105">
          <div className="absolute w-[90px] bg-red-500 text-white">
            <p>May 5</p>
          </div>
          <img src={Blog3} alt="blog" className="w-[350px] bg-gray-500" />
          <div className="px-5 py-5 flex flex-col gap-4">
            <p className="font-bold">Sustainable Style</p>
            <p className="text-sm text-gray-500">
              This blog is all about ethical and eco-friendly fashion. Learn
              about sustainable fabrics, fair trade brands, and how to create a
              wardrobe that's both stylish and sustainable. Join the movement
              for a more conscious approach to fashion with "Sustainable Style".
            </p>
          </div>
        </div>
      </section>

      <section className="px-7 md:px-24 flex flex-col gap-7  text-center py-10 md:py-20 place-items-center">
        <p className="text-2xl md:text-4xl font-medium">
          Subscribe To Our Newsletter
        </p>
        <p className="text-gray-500">
          Lorem og elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim.
        </p>
        <form className="flex w-full justify-center">
          <div className=" border border-gray-300 w-3/6 px-3 pt-1 md:pt-2 bg-gray-200">
            <input
              type="email"
              placeholder="Enter E-mail Address..."
              name="email"
              className="outline-none w-full bg-transparent text-sm md:text-md focus:none"
              required
              ref={inputRef}
            />
          </div>
          <button
            className="bg-red-600 text-white px-3 py-2 md:py-3 text-sm"
            onClick={showAlert}
          >
            SUBSCRIBE NOW
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;

import React, { useState } from "react";
import { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { BounceLoader } from "react-spinners";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "../../../Assets/Styles/style.scss"
const LazyImage = lazy(() => import("../LazyImage/LazyImage"));




const products = [
  {
    id: 1,
    title: "Coat",
    price: 899,
    img: "https://i.ibb.co/Kb7Wn37/browncoat.jpg",
    value: 4,
    description:
      "Stay warm and stylish with our classic Brown Coat. Made from high-quality material, this coat will keep you cozy and comfortable during the colder months. Its timeless design and versatile color make it a great addition to any wardrobe.",
  },

  {
    id: 2,
    title: "Gown",
    price: 698,
    img: "https://i.ibb.co/2j6trMT/redgown.jpg",
    value: 4,
    description:
      "Make a statement at your next event with our stunning Red Gown. This elegant dress features a flowing silhouette and a vibrant red hue that will turn heads. With its comfortable fit and flattering design, you'll feel confident and beautiful all night long.",
  },
  {
    id: 3,
    title: "Jacket",
    price: 400,
    img: "https://i.ibb.co/Gd0VXX0/jacket.jpg",
    value: 3,
    description:
      "Stay on-trend with our stylish Jacket. Made from lightweight and breathable fabric, this jacket is perfect for layering and adding some edge to your outfit. Its unique design and attention to detail make it a must-have for any fashion-forward individual.",
  },
  {
    id: 4,
    title: "Long Cartigen",
    price: 230,
    img: "https://i.ibb.co/JmhH1WJ/cartigen.jpg",
    value: 5,
    description:
      "Keep warm and cozy with our Long Cartigen. This comfortable and practical jacket is perfect for those colder days when you want to stay comfortable and stylish. Its durable material and classic design make it a great investment piece for your wardrobe.",
  },
  {
    id: 5,
    title: "Top",
    price: 350,
    img: "https://i.ibb.co/0ZyL7f9/top.jpg",
    value: 4,
    description:
      "Elevate your everyday look with our chic Top. This versatile piece can be dressed up or down, making it a great addition to your wardrobe. Its soft and comfortable material and flattering fit make it a go-to for any occasion.",
  },
  {
    id: 6,
    title: "Sleeves",
    price: 250,
    img: "https://i.ibb.co/xSr9Q3B/grey.jpg",
    value: 4,
    description:
      "Stay cozy and stylish with our Gray Sleeves. Made with the softest and highest quality material, these sleeves are perfect for layering on chilly days or for adding a touch of elegance to any outfit. With a versatile gray color, these sleeves are a must-have addition to your wardrobe.",
  },
  {
    id: 7,
    title: "Cargo Pants",
    price: 950,
    img: "https://i.ibb.co/3ND6wLY/Cargo.jpg",
    value: 5,
    description:
      "Our Cargo Pants are perfect for the modern adventurer. Whether you're hiking through the mountains or exploring the city, these pants provide the perfect combination of comfort and style. With plenty of pockets for storing your essentials and a durable construction, these pants are built to last. ",
  },
  {
    id: 8,
    title: "Jean",
    price: 700,
    img: "https://i.ibb.co/87S3gjF/blue.jpg",
    value: 4,
    description:
      "Get ready to turn heads with our Blue Jean. Made with premium denim, these jeans are the perfect mix of style and comfort. The classic blue color pairs well with any outfit and the flattering fit will make you feel confident and stylish all day long.",
  },
  {
    id: 9,
    title: "Flair skirt",
    price: 350,
    img: "https://i.ibb.co/mzCvDdY/flair.jpg",
    value: 3,
    description:
      "Make a statement with our Flair Skirt. This skirt features a fun and flirty design that is sure to turn heads. The high-quality fabric ensures a comfortable fit and the elegant design is perfect for any occasion. Dress it up with heels or dress it down with sneakers for a more casual look.",
  },
  {
    id: 10,
    title: "Long Gown",
    price: 950,
    img: "https://i.ibb.co/9NNZ2X2/gown.jpg",
    value: 4,
    description:
      "Our Blue Gown is the epitome of elegance. With a stunning blue color and a flattering design, this gown is perfect for any formal occasion. The high-quality fabric and expert craftsmanship ensure a comfortable fit and a look that will last.",
  },
  {
    id: 11,
    title: "Two Piece",
    price: 350,
    img: "https://i.ibb.co/GM2pKH3/twopiece.jpg",
    value: 5,
    description:
      "Make a statement with our Two Piece set. This versatile set can be dressed up or down depending on the occasion. The high-quality fabric ensures a comfortable fit and the stylish design is perfect for any fashion-forward individual.",
  },
  {
    id: 12,
    title: "Green Piece",
    price: 550,
    img: "https://i.ibb.co/pLkHdFn/greenpiece.jpg",
    value: 4,
    description:
      "Add a pop of color to your wardrobe with our Green Piece. This top features a beautiful green color and a flattering design that is perfect for any occasion. The high-quality fabric ensures a comfortable fit and the versatile design can be paired with a variety of bottoms for a complete look.    ",
  },
];

       
const AllProducts = (props) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [value, setValue] = useState(1);
  const [cartItem, setCartItem] = useState([]);

  const handleAddToCart = (product) => {
    const itemIndex = cartItem.findIndex((item) => item.id === product.id);
    if (itemIndex === -1) {
      setCartItem([...cartItem, { id: product.id, img: product.img, title: product.title, price: product.price, quantity: 1 }]);
    } else {
      const updatedCartItems = [...cartItem];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItem(updatedCartItems);
    }
    setCartCount(cartCount + 1);
    props.onAddToCart([product.id, product.img, product.title, product.price])
        setValue(1);
  };
  
  const [wishCount, setWishCount] = useState(0);
  const [wishItem, setWishItem] = useState([]);
  const handleAddToWish = (product) => {

    const itemIndex = wishItem.findIndex((item) => item.id === product.id);
    if (itemIndex === -1) {
      setWishItem([...wishItem, { id: product.id, img: product.img, title: product.title, price: product.price, quantity: 1 }]);
    } else {
      const updatedWishItems = [...wishItem];
      updatedWishItems[itemIndex].quantity += 1;
      setWishItem(updatedWishItems);
    }
    
    setWishCount(wishCount + 1);
    props.onAddToWish([product.id, product.img, product.title, product.price])
    setValue(1)
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setValue(1);
  };
  const handleValue = (event) => {
    setValue(Number(event.target.value));
  };
  

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {products.map((product) => (
        <div
          key={product.title}
          className=" bg-white relative shadow-lg "
          onMouseEnter={() => setHoveredProduct(product)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <Suspense
            fallback={
              <div className="w-[300px] h-[350px] flex justify-center items-center bg-gray-100">
                <BounceLoader color="gray" size={100} />
              </div>
            }
          >
            <LazyImage
              src={product.img}
              alt="style"
              className="w-[300px] h-[350px] object-cover bg-gray-500"
            />
          </Suspense>

          <div className="flex flex-col space-y-3 py-4">
            <h2 className="font-bold text-lg text-gray-700">{product.title}</h2>
            <p className="font-bold text-red-600">${product.price}</p>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={product.value} readOnly />
            </Box>
            {hoveredProduct === product && (
              <div className="flex flex-col gap-2 justify-center items-center bg-black bg-opacity-50 h-full w-full absolute -top-3 left-0">
                <button
                  className="py-2 px-4 bg-red-600 text-white rounded flex gap-3"
                  onClick={() => handleAddToCart(product)}                  >
                  
                  Add to Cart
                  <ShoppingCartCheckoutIcon />
                </button>
                <i
                  className="text-white cursor-pointer hover:text-red-600"
                  onClick={() => handleAddToWish(product)}
                >
                  Add to wishlist{" "}
                  <span>
                    <FavoriteBorderIcon className="text-red-600" />
                  </span>
                </i>
                <VisibilityIcon
                  onClick={handleOpen}
                  className="text-white hover:text-red-600"
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    className="relative"
                    sx={{
                      maxHeight: "100vh",

                      overflowY: "scroll",
                      "&::-webkit-scrollbar": {
                        width: "0.4em",
                      },
                      "&::-webkit-scrollbar-track": {
                        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0,0,0,.1)",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    <div className="relative bg-white md:mt-20 p-10 mx-auto md:w-1/2">
                      <button
                        className="absolute bg-black p-1 top-2 left-2"
                        onClick={handleClose}
                      >
                        <CloseIcon className="text-white" />
                      </button>
                      <div className="  flex flex-col gap-5 md:flex-row ">
                        <div className="flex-1">
                          <Suspense
                            fallback={
                              <div className="w-[300px] h-[350px] flex justify-center items-center bg-gray-100">
                                <BounceLoader color="gray" size={100} />
                              </div>
                            }
                          >
                            <LazyImage
                              src={product.img}
                              alt="style"
                              className="w-[300px] h-[350px] object-cover bg-gray-500"
                            />
                          </Suspense>
                        </div>
                        <div className="flex flex-col gap-5 flex-1">
                          <Box
                            sx={{
                              "& > legend": { mt: 2 },
                            }}
                          >
                            <Rating
                              name="read-only"
                              value={product.value}
                              readOnly
                            />
                          </Box>
                          <div className="flex flex-col space-y-5">
                            <p className="text-3xl font-bold ">
                              {product.title}
                            </p>
                            <p className="font-medium text-gray-500 leading-loose">
                              {product.description}
                            </p>
                            <p className="text-2xl font-medium">
                              PRICE: ${product.price}
                            </p>
                            <div className="flex space-x-2 place-items-center">
                              <p className="font-bold">Size:</p>
                              <button className="border border-gray-400 w-[40px] h-[40px] text-center grid place-items-center font-bold hover:text-red-600   focus:outline-none focus:ring focus:ring-gray-500 focus:text-red-600   cursor-pointer">
                                S
                              </button>
                              <button className="border border-gray-400 w-[40px] h-[40px] text-center grid place-items-center font-bold hover:text-red-600   focus:outline-none focus:ring focus:ring-gray-500 focus:text-red-600   cursor-pointer">
                                M
                              </button>
                              <button className="border border-gray-400 w-[40px] h-[40px] text-center grid place-items-center font-bold hover:text-red-600   focus:outline-none focus:ring focus:ring-gray-500 focus:text-red-600   cursor-pointer">
                                L
                              </button>
                              <button className="border border-gray-400 w-[40px] h-[40px] text-center grid place-items-center font-bold hover:text-red-600   focus:outline-none focus:ring focus:ring-gray-500 focus:text-red-600   cursor-pointer">
                                XL
                              </button>
                            </div>
                            <div className="flex gap-2">
                              <p className="font-bold">Quantity:</p>
                              <input
                                type="number"
                                className="border border-gray-400 pl-2 w-[50px] outline-gray-600"
                                min={1}
                                value={value}
                                onChange={handleValue}
                              />
                            </div>
                            <div className="flex gap-4 flex-col md:flex-row">
                              <div>
                                <button
                                  className="py-2 px-4 bg-red-600 text-white rounded flex gap-3"
                                  onClick={() => handleAddToCart(product)}                  >
                                  
                                  Add to Cart
                                  <ShoppingCartCheckoutIcon />
                                </button>
                              </div>
                              <div>
                                <button
                                  className="py-2 px-4 bg-gray-600 text-white rounded flex gap-3"
                                  onClick={() => handleAddToWish(product)}
                                >
                                  Add to Wishlist
                                  <FavoriteBorderIcon />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            )}{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;

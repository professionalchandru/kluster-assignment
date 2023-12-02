/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  addBookToCart,
  removeBookFromCart,
} from "../../Redux/Actions/AppActions";
import BookCardTemplate from "../../Components/BookCardTemplate";

/* eslint-disable react/prop-types */
const CartList = ({ cart, addBookToCart, removeBookFromCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (book) => {
    if (book?.isSelected) {
      removeBookFromCart(book);
    } else {
      addBookToCart(book);
    }
  };

  // const handleClickBook = (work) => {
  //   const splitedKey = work?.key.split("/works/")[1];
  //   navigate("/books/" + splitedKey, {
  //     state: {
  //       authors: work.author_names,
  //     },
  //   });
  // };

  return (
    <>
      <div className="py-10 space-y-6">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl font-semibold text-primary">Checkout Cart</h2>
          <div className="flex flex-row space-x-5 items-center">
            <p className="text-base  text-primary font-medium">
              Total Items:{" "}
              <span className="text-special font-bold">{cart?.noOfItems}</span>
            </p>
            <p className="text-base  text-primary font-medium">
              Total Price:{" "}
              <span className="text-special font-bold">
                {cart?.totalAmount}
              </span>
            </p>
          </div>
        </div>

        {cart?.booksArray?.length ? (
          <BookCardTemplate
            books={cart?.booksArray}
            handleAddToCart={handleAddToCart}
          />
        ) : (
          <div className="w-full  h-96 text-center m-auto flex items-center justify-center  text-xl text-errorText font-bold ">
            No books found...! Please add some books to checkout{" "}
            <span
              className="text-special cursor-pointer"
              onClick={() => navigate("/books")}
            >
              {" "}
              &nbsp; Go to books
            </span>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.app.cart,
  };
};
const mapDispatchToProps = {
  addBookToCart: (book) => addBookToCart(book),
  removeBookFromCart: (book) => removeBookFromCart(book),
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);

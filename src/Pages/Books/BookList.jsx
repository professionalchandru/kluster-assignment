/* eslint-disable react-refresh/only-export-components */
import { Fragment } from "react";
import BookCard from "../../Components/BookCard";
import { AuthorsList } from "../../Utils/Constants";
import { connect } from "react-redux";
import {
  addBookToCart,
  removeBookFromCart,
} from "../../Redux/Actions/AppActions";
import BookCardTemplate from "../../Components/BookCardTemplate";
import { Randoms } from "../../Utils/Random";

/* eslint-disable react/prop-types */
const BookList = ({
  books,
  selectedAuthor,
  setSelectedAuthor,
  isSortedList,
  handleClearSort,
  addBookToCart,
  removeBookFromCart,
}) => {
  const handleAuthorChange = (e) => {
    if (e.target.value === "") {
      handleClearSort();
    } else {
      setSelectedAuthor(e.target.value);
    }
  };

  const handleAddToCart = (book) => {
    if (book?.isSelected) {
      const confirmation = confirm(
        "Do you want to remove this item from cart?"
      );
      if (confirmation) {
        removeBookFromCart(book);
      }
    } else {
      addBookToCart(book);
    }
  };

  return (
    <>
      <div className="py-10 space-y-6">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl font-semibold text-primary">
            Available Books
          </h2>
          <div className="flex flex-row space-x-5 items-center">
            <p className="text-base  text-primary">Sort By Author</p>
            <select
              name="authorList"
              id="authorList"
              className="text-secondary font-semibold focus:outline-none"
              value={selectedAuthor}
              onChange={handleAuthorChange}
            >
              <option value="">Select Author</option>
              {AuthorsList.map((person) => {
                return (
                  <option value={person.author_keys} key={person.author_keys}>
                    {person.author_names}
                  </option>
                );
              })}
            </select>
            <p
              className="text-base  text-errorText cursor-pointer"
              onClick={handleClearSort}
            >
              Clear
            </p>
          </div>
        </div>

        {isSortedList ? (
          <div className="flex flex-row flex-wrap gap-10 justify-start">
            {books?.map((book) => {
              return (
                <Fragment key={book?.title}>
                  <BookCard>
                    <BookCard.Cover
                      src={
                        "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=740&t=st=1701515092~exp=1701515692~hmac=4157ebe8be90e6eb46c925174433d503085448836ce61bfcdd1ae8dfb8700250"
                      }
                      alt="Book-Cover-Dummy"
                      classNames="pt-2 w-56 h-44"
                    />
                    <BookCard.BookDetailsContainer>
                      <BookCard.Title text={book?.title} />
                      <BookCard.Price text={Randoms.Price()} />
                    </BookCard.BookDetailsContainer>
                  </BookCard>
                </Fragment>
              );
            })}
          </div>
        ) : (
          <BookCardTemplate books={books} handleAddToCart={handleAddToCart} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    booksList: state.app.booksList,
  };
};
const mapDispatchToProps = {
  addBookToCart: (book) => addBookToCart(book),
  removeBookFromCart: (book) => removeBookFromCart(book),
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

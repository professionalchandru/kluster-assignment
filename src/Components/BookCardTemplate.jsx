import { Fragment } from "react";
import BookCard from "./BookCard";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookCardTemplate = ({ books, handleAddToCart }) => {
  const navigate = useNavigate();

  const handleClickBook = (work) => {
    const splitedKey = work?.key.split("/works/")[1];
    navigate("/books/" + splitedKey, {
      state: {
        authors: work.author_names,
      },
    });
  };

  return (
    <>
      <div className="flex flex-row flex-wrap gap-10 justify-start">
        {books?.map((book) => {
          let work = book.work;
          return (
            <Fragment key={work?.cover_id + "adfa"}>
              <BookCard>
                <BookCard.Cover
                  src={
                    work?.cover_edition_key
                      ? `https://covers.openlibrary.org/b/olid/${work?.cover_edition_key}-M.jpg`
                      : ""
                  }
                  alt="Book-Cover"
                  classNames="pt-2 w-56 h-44"
                  onClick={() => handleClickBook(work)}
                />
                <BookCard.BookDetailsContainer>
                  <BookCard.Title text={work?.title} />
                  <BookCard.Author text={work?.author_names[0]} />
                  <BookCard.Price text={book?.price} />
                  <BookCard.AddToCart
                    isSelected={book?.isSelected}
                    onClick={() => handleAddToCart(book)}
                  />
                </BookCard.BookDetailsContainer>
              </BookCard>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default BookCardTemplate;

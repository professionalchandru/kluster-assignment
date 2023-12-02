import { Fragment } from "react";
import BookCard from "../../Components/BookCard";
import { Randoms } from "../../Utils/Random";
import { Authors } from "../../Utils/Constants";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookList = ({
  books,
  selectedAuthor,
  setSelectedAuthor,
  isSortedList,
  handleClearSort,
}) => {
  const navigate = useNavigate();

  const handleAuthorChange = (e) => {
    if (e.target.value === "") {
      handleClearSort();
    } else {
      setSelectedAuthor(e.target.value);
    }
  };

  const handleClickBook = (work) => {
    const splitedKey = work?.key.split("/works/")[1];
    navigate(splitedKey, {
      state: {
        authors: work.author_names,
      },
    });
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
              {Authors.map((person) => {
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
          <div className="flex flex-row flex-wrap gap-10 justify-start">
            {books?.map((book) => {
              let work = book.work;
              return (
                <Fragment key={work?.cover_id + Randoms.Price()}>
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
                      <BookCard.AddToCart isSelected={book?.isSelected} />
                    </BookCard.BookDetailsContainer>
                  </BookCard>
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default BookList;

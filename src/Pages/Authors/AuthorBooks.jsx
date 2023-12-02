import { useLocation } from "react-router-dom";
import { AuthorsList } from "../../Utils/Constants";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, GoBack } from "../Books/BookDetails";
import PageContainer from "../../Components/PageContainer";
import BookCard from "../../Components/BookCard";
import { Randoms } from "../../Utils/Random";

const AuthorBooks = () => {
  const location = useLocation();
  const authorId = location.pathname.split("/authors/")[1];
  const url = AuthorsList.find(
    (item) => item.id === Number(authorId)
  )?.booksUrl;
  const [errorFound, SetErrorFound] = useState(false);
  const [booksArray, setBooksArray] = useState([]);

  console.log(url);
  useEffect(() => {
    if (url) {
      getAuthorBooks();
    } else {
      SetErrorFound(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const getAuthorBooks = async () => {
    try {
      const { data } = await axios.get(url);
      console.log("datga", data);
      setBooksArray(data);
    } catch (err) {
      console.log("Get Autthor Books Error", err);
    }
  };

  return (
    <>
      <PageContainer>
        <GoBack />
        <div className="py-10 space-y-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-semibold text-primary">
              Books By Authors
            </h2>
          </div>
          {errorFound ? (
            <ErrorMessage
              message={
                "Something went wrong... Please check the URL and ensure valid author id."
              }
            />
          ) : (
            <div className="flex flex-row flex-wrap gap-10 justify-start">
              {booksArray?.map((book) => {
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
          )}
        </div>
      </PageContainer>
    </>
  );
};

export default AuthorBooks;

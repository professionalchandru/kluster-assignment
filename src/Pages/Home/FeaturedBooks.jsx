import { Fragment } from "react";
import BookCard from "../../Components/BookCard";
import { Randoms } from "../../Utils/Random";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const FeaturedBooks = ({ books }) => {
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
      <div className="py-10 space-y-6">
        <h2 className="text-xl font-semibold text-primary">Featured Books</h2>

        <div className="flex flex-row flex-wrap gap-10 justify-start">
          {books?.map((book) => {
            let work = book.work;
            return (
              <Fragment key={work.cover_id}>
                <BookCard>
                  <BookCard.Cover
                    src={
                      work.cover_edition_key
                        ? `https://covers.openlibrary.org/b/olid/${work.cover_edition_key}-M.jpg`
                        : ""
                    }
                    alt="Book-Cover"
                    classNames="pt-2 w-56 h-44"
                    onClick={() => handleClickBook(work)}
                  />
                  <BookCard.BookDetailsContainer>
                    <BookCard.Title text={work.title} />
                    <BookCard.Author text={work.author_names[0]} />
                    {/* <BookCard.Description
                      text={"Published " + work.first_publish_year}
                    /> */}
                    <BookCard.Description text={Randoms.Description()} />
                    <BookCard.Price text={Randoms.Price()} />
                    {/* <BookCard.AddToCart /> */}
                  </BookCard.BookDetailsContainer>
                </BookCard>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturedBooks;

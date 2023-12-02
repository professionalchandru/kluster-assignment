import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageContainer from "../../Components/PageContainer";
import { BookTitle } from "../../Components/BookCard";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const workKey = location.pathname.split("/books/")[1];
  const [bookDetails, setBookDetails] = useState({});
  const authorName = location.state?.authors[0] || "Author Not Found";

  useEffect(() => {
    getBookDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBookDetails = async () => {
    let result = await axios.get(
      `https://openlibrary.org/works/${workKey}.json`
    );
    console.log("r", result.data);
    setBookDetails(result.data);
  };

  return (
    <>
      <PageContainer>
        <button
          className="text-errorText cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <div className="py-10 space-y-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-semibold text-primary">Book Details</h2>
          </div>
        </div>
        <div className="w-full h-full flex flex-row items-start justify-start gap-x-10">
          <div className="">
            <img
              src={`https://covers.openlibrary.org/b/id/${
                bookDetails?.covers && bookDetails?.covers[0]
              }-M.jpg`}
              alt="Book-Cover"
              className="w-[300px] h-96"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <BookTitle text={bookDetails?.title} title={"Book Name: "} />
            <BookTitle text={authorName} title={"Author: "} />
            <BookTitle
              text={
                (bookDetails?.subjects && bookDetails?.subjects[0]) ||
                "No Genere Found"
              }
              title={"Genere: "}
            />
            <BookTitle
              text={"No description provided from api"}
              title={"Description: "}
            />
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default BookDetails;

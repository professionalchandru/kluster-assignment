/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import PageContainer from "../../Components/PageContainer";
import BookList from "./BookList";
import { getBooksList } from "../../Redux/Actions/AppActions";
import { useEffect, useState } from "react";
import {
  Author_Amir_Books,
  Author_Benjamin_Books,
  Author_Jhonny_Books,
  Author_Lori_Books,
  Author_Shel_Books,
} from "../../Utils/Urls";
import axios from "axios";

const Books = ({ getBooksList, booksList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const bookPerPage = 12;
  const [currentBookArray, setCurrentBookArray] = useState([]);
  const [sortedBooksArray, setSortedBooksArray] = useState([]);
  const totalBooks = booksList?.length;
  const totalPage = totalBooks / bookPerPage;
  const [firstRender, setFirstRender] = useState(true);

  const [selectedAuthor, setSelectedAuthor] = useState("");

  useEffect(() => {
    getBooksList();
  }, [getBooksList]);

  useEffect(() => {
    if (booksList?.length > 0 && firstRender) {
      setFirstRender(false);
      handlePaginate(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booksList]);

  useEffect(() => {
    if (selectedAuthor !== "") {
      handleSortByAuthor(selectedAuthor);
    }
  }, [selectedAuthor]);

  const handlePaginate = (currentPage) => {
    const data = booksList?.slice(
      (currentPage - 1) * bookPerPage,
      currentPage * bookPerPage
    );
    setCurrentBookArray((oldData) => [...oldData, ...data]);
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
    handlePaginate(currentPage + 1);
  };

  const handleClearSort = () => {
    setSortedBooksArray([]);
    setSelectedAuthor("");
  };

  const handleSortByAuthor = async (selectedAuthor) => {
    switch (selectedAuthor) {
      case "/authors/OL548174A": {
        const result = await axios.get(Author_Shel_Books);
        setSortedBooksArray(result.data);
        break;
      }

      case "/authors/OL26170A": {
        const result = await axios.get(Author_Benjamin_Books);
        setSortedBooksArray(result.data);
        break;
      }

      case "/authors/OL2702107A": {
        const result = await axios.get(Author_Lori_Books);
        setSortedBooksArray(result.data);
        break;
      }

      case "/authors/OL7202090A": {
        const result = await axios.get(Author_Amir_Books);
        setSortedBooksArray(result.data);
        break;
      }

      case "/authors/OL13280806A": {
        const result = await axios.get(Author_Jhonny_Books);
        setSortedBooksArray(result.data);
        break;
      }
      default:
        setSortedBooksArray([]);
        return;
    }
  };

  return (
    <>
      <PageContainer>
        <BookList
          books={sortedBooksArray?.length ? sortedBooksArray : currentBookArray}
          setSelectedAuthor={setSelectedAuthor}
          selectedAuthor={selectedAuthor}
          isSortedList={sortedBooksArray?.length > 0 ? true : false}
          handleClearSort={handleClearSort}
        />

        {currentPage > 0 &&
        currentPage < totalPage &&
        !selectedAuthor.length ? (
          <p
            className="text-center text-primary font-medium hover:text-errorText cursor-pointer underline"
            onClick={() => handleLoadMore()}
          >
            Load More ...
          </p>
        ) : null}
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    booksList: state.app.booksList,
  };
};
const mapDispatchToProps = {
  getBooksList: () => getBooksList(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);

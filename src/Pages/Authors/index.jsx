/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import PageContainer from "../../Components/PageContainer";
import {
  changeBooksArrayUpdated,
  getBooksList,
} from "../../Redux/Actions/AppActions";
import { useEffect, useState } from "react";

const Authors = ({ changeBooksArrayUpdated, booksArrayUpdated }) => {
  const [currentBookArray, setCurrentBookArray] = useState([]);

  useEffect(() => {
    if (booksArrayUpdated) {
      changeBooksArrayUpdated(false);
      setCurrentBookArray(currentBookArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booksArrayUpdated]);
  return (
    <>
      <PageContainer>
        {/* <BookList
          books={sortedBooksArray?.length ? sortedBooksArray : currentBookArray}
          setSelectedAuthor={setSelectedAuthor}
          setCurrentBookArray={setCurrentBookArray}
          selectedAuthor={selectedAuthor}
          isSortedList={sortedBooksArray?.length > 0 ? true : false}
          handleClearSort={handleClearSort}
        /> */}
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    booksList: state.app.booksList,
    booksArrayUpdated: state.app.booksArrayUpdated,
    initialBookList: state.app.initialBookList,
  };
};
const mapDispatchToProps = {
  getBooksList: () => getBooksList(),
  changeBooksArrayUpdated: (value) => changeBooksArrayUpdated(value),
};

export default connect(mapStateToProps, mapDispatchToProps)(Authors);

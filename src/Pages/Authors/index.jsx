/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import PageContainer from "../../Components/PageContainer";
import {
  changeBooksArrayUpdated,
  getBooksList,
} from "../../Redux/Actions/AppActions";
import { Fragment } from "react";
import { AuthorsList } from "../../Utils/Constants";
import { useNavigate } from "react-router-dom";

const Authors = () => {
  const navigate = useNavigate();
  const handleAuthorClick = (author) => {
    navigate("/authors/" + author.id);
  };

  return (
    <>
      <PageContainer>
        <div className="py-10 space-y-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-semibold text-primary">Authors</h2>
          </div>
        </div>

        <div className="px-10 flex flex-row flex-wrap gap-10 justify-evenly">
          {AuthorsList?.map((author) => {
            return (
              <Fragment key={author.author_keys}>
                <div
                  className="w-60 h-80 bg-white shadow-lg rounded-lg border border-borderPrimary cursor-pointer"
                  onClick={() => handleAuthorClick(author)}
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={author.photo}
                      alt={author.author_names}
                      className="pt-2 w-56 h-56"
                    />
                  </div>
                  <p className="px-4 pt-6 text-xl font-semibold text-special text-center ">
                    {author.author_names}
                  </p>
                </div>
              </Fragment>
            );
          })}
        </div>
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

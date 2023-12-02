/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import PageContainer from "../../Components/PageContainer";
import { changeBooksArrayUpdated } from "../../Redux/Actions/AppActions";
import { useEffect, useState } from "react";
import CartList from "./CartList";

const Cart = ({ changeBooksArrayUpdated, booksArrayUpdated }) => {
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
        <CartList />
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    booksArrayUpdated: state.app.booksArrayUpdated,
  };
};
const mapDispatchToProps = {
  changeBooksArrayUpdated: (value) => changeBooksArrayUpdated(value),
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

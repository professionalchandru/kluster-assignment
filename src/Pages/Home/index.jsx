/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import PageContainer from "../../Components/PageContainer";
import { getFeaturedBooks } from "../../Redux/Actions/AppActions";
import FeaturedBooks from "./FeaturedBooks";
import WelcomeBanner from "./WelcomeBanner";
import { useEffect } from "react";

const Home = ({ getFeaturedBooks, featuredBooks }) => {
  useEffect(() => {
    getFeaturedBooks();
  }, []);
  return (
    <>
      <PageContainer>
        <WelcomeBanner />

        <FeaturedBooks books={featuredBooks} />
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    featuredBooks: state.app.featuredBooks,
  };
};
const mapDispatchToProps = {
  getFeaturedBooks: () => getFeaturedBooks(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

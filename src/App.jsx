import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Books from "./Pages/Books";
import Authors from "./Pages/Authors";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import BooksLayout from "./Layouts/BooksLayout";
import BookDetails from "./Pages/Books/BookDetails";
import AuthorBooks from "./Pages/Authors/AuthorBooks";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/books" element={<BooksLayout />}>
              <Route index element={<Books />} />
              <Route path=":coverid" element={<BookDetails />} />
            </Route>
            <Route path="/authors" element={<BooksLayout />}>
              <Route index element={<Authors />} />
              <Route path=":authorName" element={<AuthorBooks />} />
            </Route>
            <Route path="/authors" element={<Authors />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

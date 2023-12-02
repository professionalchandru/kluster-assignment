import axios from "axios"
import { BooksURL, FeaturedBooksURL } from "../../Utils/Urls";
import { Randoms } from "../../Utils/Random";

export const getFeaturedBooks = () => async (dispatch, getData) => {
  try {
    let result;
    const oldData = getData().app.featuredBooks;
    if (oldData.length) {
      return
    } else {
      result = await axios.get(FeaturedBooksURL);
      dispatch({ type: 'getFeaturedBooks', payload: result.data })
    }
  } catch (error) {
    console.log('getFeaturedBooks Error', error)
  }
}

export const getBooksList = () => async (dispatch, getData) => {
  try {
    let result;
    const oldData = getData().app.booksList;
    if (oldData.length) {
      return
    } else {
      result = await axios.get(BooksURL);
      result.data.forEach((data) => {
        data['isSelected'] = false;
        data['price'] = 100;
      })

      const initialBookList = result.data.slice(0, 12);

      dispatch({ type: 'getBooksList', payload: result.data })
      dispatch({ type: 'initialBookList', payload: initialBookList })
    }
  } catch (error) {
    console.log('getBooksList Error', error)
  }
}

export const addBookToCart = (newBook) => (dispatch, getData) => {
  try {
    const oldCartData = getData().app.cart;
    const oldBookList = getData().app.booksList;

    const thisBook = oldBookList.find((item) => item?.work?.cover_id === newBook?.work?.cover_id);
    thisBook['isSelected'] = true;

    oldCartData.totalAmount = parseInt(oldCartData.totalAmount) + parseInt(newBook?.price)
    oldCartData.noOfItems = parseInt(oldCartData.noOfItems) + 1;
    oldCartData.booksArray.push(newBook)
    newBook['isSelected'] = true;
    dispatch({ type: 'addBookToCart', payload: { ...oldCartData } })
    dispatch({ type: 'changeBooksArrayUpdated', payload: true })
  } catch (error) {
    console.log('addBookToCart Error', error)
  }
}

export const removeBookFromCart = (bookToRemove) => (dispatch, getData) => {
  try {
    const oldCartData = getData().app.cart;
    const oldBookList = getData().app.booksList;

    const thisBook = oldBookList.find((item) => item?.work?.cover_id === bookToRemove?.work?.cover_id);
    thisBook['isSelected'] = false;

    oldCartData.totalAmount = parseInt(oldCartData.totalAmount) - parseInt(bookToRemove?.price)
    oldCartData.noOfItems = parseInt(oldCartData.noOfItems) - 1;
    oldCartData.booksArray.push(bookToRemove)
    bookToRemove['isSelected'] = false;
    dispatch({ type: 'addBookToCart', payload: { ...oldCartData } })
    dispatch({ type: 'changeBooksArrayUpdated', payload: true })
  } catch (error) {
    console.log('addBookToCart Error', error)
  }
}

export const changeBooksArrayUpdated = (value) => (dispatch, getData) => {
  try {
    dispatch({ type: 'changeBooksArrayUpdated', payload: value })
  } catch (error) {
    console.log('changeBooksArrayUpdated Error', error)
  }
}


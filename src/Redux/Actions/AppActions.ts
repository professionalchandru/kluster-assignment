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
        data['price'] = Randoms.Price()
      })
      dispatch({ type: 'getBooksList', payload: result.data })
    }
  } catch (error) {
    console.log('getBooksList Error', error)
  }
}
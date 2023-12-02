import axios from "axios"
import { FeaturedBooksURL } from "../../Utils/Urls";

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
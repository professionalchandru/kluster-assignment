const AppState = {
  featuredBooks: [],
  booksList: [],
  initialBookList: [],
  cart: {
    totalAmount: 0,
    noOfItems: 0,
    booksArray: []
  },
  booksArrayUpdated: false,
}

export const AppReducer = (state = AppState, action) => {
  switch (action.type) {
    case 'getFeaturedBooks':
      return { ...state, featuredBooks: action.payload }
    case 'getBooksList':
      return { ...state, booksList: action.payload }
    case 'initialBookList':
      return { ...state, initialBookList: action.payload }
    case 'addBookToCart':
      return { ...state, cart: action.payload }
    case 'removeBookFromCart':
      return { ...state, cart: action.payload }
    case 'changeBooksArrayUpdated':
      return { ...state, booksArrayUpdated: action.payload }
    default:
      return state
  }
}
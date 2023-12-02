const AppState = {
  featuredBooks: [],
  booksList: [],
}

export const AppReducer = (state = AppState, action) => {
  switch (action.type) {
    case 'getFeaturedBooks':
      return { ...state, featuredBooks: action.payload }
    case 'getBooksList':
      return { ...state, booksList: action.payload }
    default:
      return state
  }
}
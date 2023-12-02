const AppState = {
  featuredBooks: [],
}

export const AppReducer = (state = AppState, action) => {
  switch (action.type) {
    case 'getFeaturedBooks':
      return { ...state, featuredBooks: action.payload }
    default:
      return state
  }
}
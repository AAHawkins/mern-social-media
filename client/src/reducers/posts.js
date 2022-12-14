const reducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [action.payload, ...posts];

    default:
      return posts;
  }
};

export default reducer;

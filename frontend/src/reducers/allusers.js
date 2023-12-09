const AlluserReducer = (user = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    case "UPDATE_CURRENT_USER":
      return states.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    case "DELETE_USER":
      return users.filter((user) => user._id !== action.payload);
    default:
      return user;
  }
};
export default AlluserReducer;

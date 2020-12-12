import jsonPlaceholder from "../apis/jsonPlaceholder";

//Action creaters

export const fetchPosts = () => async (dispatch) => {
  const resp = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: resp });
};

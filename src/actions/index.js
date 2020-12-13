import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

//Action creaters

export const fetchPosts = () => async (dispatch) => {
  const resp = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: resp.data });
};

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const resp = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: resp.data });
});

import * as type from "../types";
export default function getUsers(data) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: data,
  };
}

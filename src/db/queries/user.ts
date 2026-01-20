import { USERS_SEED } from "../mock";

let users = [...USERS_SEED];

export const getUser = async () => {
  const user = users.find((user) => user.id === "usr_b7c4e91d2a6f");

  if (!user) throw new Error("User not found");
  return user;
};

export const resetUser = async () => (users = [...USERS_SEED]);

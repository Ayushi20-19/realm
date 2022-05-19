import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balaka",
    username: "adarshbalaka",
    password: "adarshBalaka123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jhon",
    lastName: "Graham",
    username: "jhongraham",
    password: "jhongraham123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Clementine",
    lastName: "Bauch",
    username: "clementinebauch",
    password: "clementinebauch123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ervin",
    lastName: "Howel",
    username: "ervinhowel",
    password: "ervinhowel123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Kristan",
    lastName: "Howel",
    username: "kristanhowel",
    password: "kristanhowel123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jhon",
    lastName: "Howel",
    username: "jhonhowel",
    password: "jhonhowel123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

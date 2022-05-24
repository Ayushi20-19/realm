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
    bio: "A web developer",
    link: "https://adarshbalika.netlify.app/",
    profileBanner:
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHR3aXR0ZXIlMjBiZyUyMGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balaka",
    bio: "Like Coding as its fun",
    link: "https://adarshbalika.netlify.app/",
    profileBanner:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHR3aXR0ZXIlMjBiZyUyMGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400",
    profilePic:
      "https://images.unsplash.com/photo-1650110002977-3ee8cc5eac91?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWNzJTIwbWVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400",
    username: "adarshbalaka",
    password: "adarshBalaka123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jhon",
    lastName: "Graham",
    bio: "Hey thanks for checking my profile",
    link: "https://adarshbalika.netlify.app/",
    profileBanner:
      "https://images.unsplash.com/photo-1470138831303-3e77dd49163e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400",
    profilePic:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWNzJTIwbWVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400",
    username: "jhongraham",
    password: "jhongraham123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Clementine",
    lastName: "Bauch",
    bio: "Everthing need practice",
    link: "https://adarshbalika.netlify.app/",
    profileBanner:
      "https://images.unsplash.com/photo-1520869422133-f2ac1279d8b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400",
    profilePic:
      "https://images.unsplash.com/photo-1652794120690-a10454dca928?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400",
    username: "clementinebauch",
    password: "clementinebauch123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ervin",
    lastName: "Howel",
    bio: "Like follow, Comment",
    link: "https://adarshbalika.netlify.app/",
    profileBanner:
      "https://images.unsplash.com/photo-1517879288527-682ff596b022?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRvZyUyMGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400",
    profilePic:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3MlMjBtZW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400",
    username: "ervinhowel",
    password: "ervinhowel123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Kristian",
    lastName: "Howel",
    bio: "Check out my work here",
    link: "https://adarshbalika.netlify.app/",
    profileBanner:
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlciUyMGJnJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400",
    profilePic:
      "https://images.unsplash.com/photo-1652886034693-d69e78d10c03?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
    username: "kristanhowel",
    password: "kristanhowel123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jhon",
    lastName: "Howel",
    bio: "Singer, coder, traveling",
    link: "https://adarshbalika.netlify.app/",
    profileBanner:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHdpdHRlciUyMGJnJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400",
    profilePic:
      "https://images.unsplash.com/photo-1653303515724-93d9186151ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
    username: "jhonhowel",
    password: "jhonhowel123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

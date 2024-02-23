import type { UserType } from "../../misc/types";

const dummyUsers: Array<UserType> = [
  {
    id: 1,
    email: "john@mail.com",
    password: "changeme",
    name: "Jhon",
    role: "customer",
    avatar: "https://i.imgur.com/LDOO4Qs.jpg",
    token: null,
    refreshToken: null,
    creationAt: "2024-02-20T00:57:02.000Z",
    updatedAt: "2024-02-20T00:57:02.000Z",
  },
  {
    id: 2,
    email: "maria@mail.com",
    password: "12345",
    name: "Maria",
    role: "customer",
    avatar: "https://i.imgur.com/DTfowdu.jpg",
    token: null,
    refreshToken: null,
    creationAt: "2024-02-20T00:57:02.000Z",
    updatedAt: "2024-02-20T00:57:02.000Z",
  },
  {
    id: 3,
    email: "admin@mail.com",
    password: "admin123",
    name: "Admin",
    role: "admin",
    avatar: "https://i.imgur.com/yhW6Yw1.jpg",
    token: null,
    refreshToken: null,
    creationAt: "2024-02-20T00:57:02.000Z",
    updatedAt: "2024-02-20T00:57:02.000Z",
  },
  {
    id: 4,
    email: "Ivan@gmail.com",
    password: "12345",
    name: "Ivan",
    role: "customer",
    avatar:
      "https://cdn.drukarnia.com.ua/646fb93cc149c83ef7526472/mages/SaTxvatar.jpeg",
    token: null,
    refreshToken: null,
    creationAt: "2024-02-20T01:19:49.000Z",
    updatedAt: "2024-02-20T02:10:06.000Z",
  },
];

export { dummyUsers };

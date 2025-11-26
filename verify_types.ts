import { PrismaClient, Users, Products, ProductImages } from "@prisma/client";

const user: Users = {
  id: "1",
  name: "Test",
  email: "test@test.com",
  tel: "123",
  password: "123",
  avatar: null,
  created_at: new Date(),
  updated_at: new Date(),
};

console.log("Types imported successfully");

import { object, string, ref } from "yup";

export const registerSchema = object({
  firstName: string()
    .min(2, "Name must be at least 2 character")
    .max(32, "maximum length is 32 character")
    .required("first name required"),
  lastName: string()
    .min(2, "Last name must be at least 2 character")
    .max(32, "maximum lenght is 32 character")
    .required("last name required"),
  username: string()
    .min(4, "username must be at least 4 character")
    .max(24, "maximum length is 24 character")
    .required("username required"),
  password: string()
    .min(6, "password must be at least 6 character")
    .max(32, "maximum length is 32")
    .required("password required"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "confirm password must match password"
  ),
});

export const loginSchema = object({
  username: string()
    .min(4, "username is minimum 4 character")
    .required("username required"),
  password: string()
    .min(6, "password is minimum 6 character")
    .required("password required"),
});

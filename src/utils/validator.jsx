import { object, string, ref, number } from "yup";

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

export const recipeSchema = object({
  name: string().required("name required"),
  description: string().notRequired(),
  category: string().required("category required"),
  instruction: string().required("instruction required"),
  image: string(),
  serving: number().transform((value) => (isNaN(value) ? undefined : value)).nullable().positive()
});

export const reviewSchema = object({
  title: string().required("title required"),
  body: string().required("review body required"),
  image: string()
});

export const ingredientSchema = object({
  name: string().required("name required"),
  image: string(),
  protein: number().transform((value) => (isNaN(value) ? undefined : value)).nullable().positive(),
  carbohydrate: number().transform((value) => (isNaN(value) ? undefined : value)).nullable().positive(),
  fat: number().transform((value) => (isNaN(value) ? undefined : value)).nullable().positive() 
});

export const equipmentSchema = object({
  name: string().required("name required"),
  image: string(),
});

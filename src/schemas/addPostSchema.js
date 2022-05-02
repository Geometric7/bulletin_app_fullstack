import * as yup from 'yup';

export const addPostFormSchema = yup
  .object()
  .shape({
    title: yup
      .string()
      .min(5, 'Title cannot be shorter than 5 characters')
      .max(30, 'Title cannot be longer than 30 characters'),
    location: yup
      .string()
      .min(5, 'Location cannot be shorter than 5 characters')
      .max(30, 'Location cannot be longer than 30 characters'),

    price: yup
      .number()
      .typeError('Price must be a number')
      .min(0, 'The price cannot be negative')
      .required(),
    summary: yup
      .string()
      .min(5, 'Summary cannot be shorter than 5 characters')
      .max(500, 'Summary cannot be longer than 500 characters'),
    content: yup
      .string()
      .min(5, 'Content cannot be shorter than 5 characters')
      .max(1500, 'Content cannot be longer than 1500 characters'),
  })
  .required();

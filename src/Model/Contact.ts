
import * as z from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
phone: z
  .string()
  .refine((val) => {
    if (!val || val.trim() === "" || val === "+") return false; // فاضي أو بس +
    return /\d/.test(val);
  }, {
    message: "Number is required",
  }),
  email: z.string().email('Email is required'),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

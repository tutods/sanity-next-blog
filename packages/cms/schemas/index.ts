import { postSchema } from "./documents/post";
import { authorSchema } from "./documents/author";
import { quoteSchema } from "./objects/quote";

export const schemaTypes = [postSchema, authorSchema, quoteSchema];

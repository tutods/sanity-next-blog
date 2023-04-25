import { DEFAULT_PAGINATION_OFFSET } from "@constants";

export const getPagination = (page = 1, offset = DEFAULT_PAGINATION_OFFSET) => {
  return {
    start: (page - 1) * offset,
    end: page * offset,
  };
};

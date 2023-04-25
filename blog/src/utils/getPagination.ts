const DEFAULT_OFFSET = 2;

export const getPagination = (page = 1, offset = DEFAULT_OFFSET) => {
  return {
    start: (page - 1) * offset,
    end: page * offset,
  };
};

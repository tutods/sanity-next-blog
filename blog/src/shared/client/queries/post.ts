export const blogPostsPathsQuery = `
    *[_type == "post"] {
      locale,
      'slug': slug.current
    }
  `;

export const blogPostsQuery = `
  *[_type == "post" && locale == $locale] | order(_createdAt desc) {
    title,
    'slug': slug.current,
    headline,
    cover,
    'author': author->,
    locale,
    _updatedAt,
    _createdAt
  }
`;

export const blogPostQuery = `
  *[_type == "post" && slug.current == $slug] {
    title,
    headline,
    cover,
    content, 
    locale,
    'author': author->,
    _updatedAt,
    _createdAt
  }
`;

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            date
            id
            slug
            title
            content
            featuredImage {
            node {
              mediaItemUrl
            }
          }
          }
        }
      }
    }
    `
  );

  return data?.posts;
}

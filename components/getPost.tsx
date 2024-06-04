export async function getPosts({ id }: { id: number }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return res.json();
}

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.username}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const posts = await res.json();
        return {
          props: {
            posts,
          },
        };
      } catch (error) {
        console.log('HAI, CEK ULANG YUK, CODE NYA ADA YANG SALAH!!')
      }
}


export default Blog;

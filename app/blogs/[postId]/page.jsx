// export default function Page({ params }) {
//   console.log(params);
//   return <div>My Post: {params.slug}</div>;
// }

// Return a list of `params` to populate the [slug] dynamic segment
//--------- This code runs at build time--------

// export async function generateStaticParams() {
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//     (res) => res.json()
//   );

//   return posts.map((post) => ({
//     postId: post.postId,
//   }));
// }

async function GetPost({ params }) {
  // console.log(params);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();
  // console.log(post);
  return (
    <main>
      <ul>
        <div className="text-5xl text-purple-800 font-bold mr-10 mt-10 bg-white rounded-full p-5 text-center">
          {post.id}
        </div>
        <li className="text-red-500 text-4xl font-bold ml-10 mt-10">
          {post.title}
        </li>
        <li className="text-3xl bg-green-200 text-black font-bold rounded-lg ml-10 mr-10 p-10 mt-10">
          {post.body}
        </li>
      </ul>
    </main>
  );
}
export default GetPost;

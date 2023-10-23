async function GetPost({ params }) {
  // console.log(params);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();
  // console.log(post);
  return (
    <main className="ml-28 mt-24 mr-28">
      <ul className="bg-gray-300 rounded-lg">
        <div className="border-2 rounded-lg">
          <li className="text-purple-500 text-4xl font-bold ml-10 mt-10">
            <span className="text-5xl text-purple-800 font-bold p-8">
              {post.id}
            </span>
            {post.title}
          </li>
        </div>
        <li className="text-3xl text-purple-800 font-bold rounded-lg ml-10 mr-10 p-10 mt-10">
          {post.body}
        </li>
      </ul>
    </main>
  );
}
export default GetPost;

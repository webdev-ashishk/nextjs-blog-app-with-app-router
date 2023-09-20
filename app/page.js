import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        href="/blogs"
        className="text-purple-500 text-8xl font-bold cursor-pointer hover:text-indigo-600"
      >
        Blog
      </Link>
    </div>
  );
}

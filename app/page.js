import One from "@/components/one";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid place-content-center h-screen">
        <h1 className="text-5xl font-bold">Welcome to Awesome Place !</h1>
        <One></One>
      </div>
    </>
  );
}

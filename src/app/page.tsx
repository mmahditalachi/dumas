import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col space-y-3 justify-center font-bold text-xl h-screen max-w-sm mx-auto">
      <Link
        href="/login"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        جا پارک دارم
      </Link>
      <Link
        href="/login"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        جا پارک می خوام
      </Link>
    </main>
  );
}

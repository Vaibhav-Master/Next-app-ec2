"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  const addClickHandler = () => {
    route.push("/user/add-user");
  };
  const viewClickHandler = () => {
    route.push("/user");
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-[46px]">Hey there, Now you are in my application.</p>
        <ul className="list-inside  list-none text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Here you can add{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              User details
            </code>
            .
          </li>
          <li>You can see the details whenever you want.</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            onClick={addClickHandler}
            className="rounded-full border font-bold border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Add Details
          </button>
          <button
            onClick={viewClickHandler}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            View user details
          </button>
        </div>
      </main>
    </div>
  );
}

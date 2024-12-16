"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Define types for form data and user
interface User {
  id?: number;
  first_name: string;
  last_name: string;
  address?: string;
  phone?: string;
  email: string;
}

export default function Home() {
  const route = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users"); // Replace with your backend URL
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="w-full hfull flex flex-col justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded"
        type="button"
        onClick={() => route.replace("/")}
      >
        Back
      </button>
      <p className="text-[40px] font-extrabold my-12"> Users deatils</p>
      <div className="relative max-w-[90%] overflow-x-auto shadow-md sm:rounded-lg">
        {users.length > 0 ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Firstname
                </th>
                <th scope="col" className="px-6 py-3">
                  Lastname
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.first_name}
                  </th>
                  <td className="px-6 py-4">{user.last_name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.address}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Users not found</p>
        )}
      </div>
    </div>

    // <div className="w-full hfull flex flex-col justify-center items-center">
    //   <p className="text-[40px] font-extrabold"> Users deatils</p>

    //   <div className="relative overflow-x-auto">
    //     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    //       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //         <tr>
    //           <th scope="col" className="px-6 py-3">
    //             Firstname
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Lastname
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Address
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Email
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Phone
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //
    //           <tr
    //             key={index}
    //             className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    //           >
    //             <td>{user.firstName}</td>
    //             <td>{user.lastName}</td>
    //             <td>{user.address}</td>
    //             <td>{user.phone}</td>
    //             <td>{user.email}</td>
    //           </tr>
    //         ))}
    //         <tr>
    //           <td>firstName</td>
    //           <td>lastName</td>
    //           <td>address</td>
    //           <td>phone</td>
    //           <td>email</td>
    //         </tr>{" "}
    //         <tr>
    //           <td>firstName</td>
    //           <td>lastName</td>
    //           <td>address</td>
    //           <td>phone</td>
    //           <td>email</td>
    //         </tr>{" "}
    //         <tr>
    //           <td>firstName</td>
    //           <td>lastName</td>
    //           <td>address</td>
    //           <td>phone</td>
    //           <td>email</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>

    //   <table
    //     className="table-auto border-separate border-spacing-1 border-spacing-x-10 border border-slate-500"
    //     autoCapitalize="true"
    //   >
    //     <thead></thead>
    //     <tbody></tbody>
    //   </table>
    // </div>
  );
}

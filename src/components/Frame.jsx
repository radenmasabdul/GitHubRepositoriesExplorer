import React, { useState } from "react";
import axios from "axios";

const Frame = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState([]);

  const searchUser = (e) => {
    e.preventDefault();
    setSearch(user);
    axios
      .get(`https://api.github.com/search/users`, {
        params: {
          q: user,
          in: "login",
        },
      })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={searchUser}>
          <div>
            <input
              type="text"
              name="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Username"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>

          <p>Showing user for "{search}"</p>
        </form>
      </div>
    </>
  );
};

export default Frame;

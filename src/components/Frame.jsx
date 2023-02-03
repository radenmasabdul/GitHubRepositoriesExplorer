import React, { useState } from "react";
import axios from "axios";

const Frame = () => {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState([]);
  const [username, setUserName] = useState([]);
  const [repo, setRepo] = useState([]);
  const [repotitle, setRepoTitle] = useState([]);

  const searchUser = async (e) => {
    e.preventDefault();
    setSearch(user);
    await axios
      .get(`https://api.github.com/search/users`, {
        params: {
          q: user,
          in: "login",
        },
      })
      .then((response) => {
        // console.log(response);
        // console.log(response.data.items);
        setUserName(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRepo = async (userRepo) => {
    await axios
      .get(`https://api.github.com/users/${userRepo}/repos?per_page=3&page=3`)
      .then((response) => {
        // console.log(response.data);
        setRepoTitle(response.data);
      })
      .catch((error) => {
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

          {username.map((user) => (
            <div
              onClick={() => getRepo(user.login)}
              value={repo}
              key={user.id}
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                <p key={user.id}>{user.login}</p>
              </div>

              <div className="collapse-content">
                {repotitle.map((repos) => (
                  <div
                    key={repos.id}
                    className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow my-5 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
                  >
                    {repos.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default Frame;

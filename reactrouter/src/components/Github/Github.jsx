import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/ve-saurabh")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

  return (
    <>
      <div className="text-2xl text-center bg-gray-600 flex flex-col items-center justify-center">
        <div className="text-xl text-center">Github Followers: {data.followers}</div>
        <div className="text-xl text-center">Github UserName: {data.name}</div>
        <div className="text-xl text-center">Github Created AT: {data.created_at}</div>
        <img src={data.avatar_url} alt="git_picture" width={300} />
      </div>
    </>
  );
}

export default Github;

export const githubLoaderInfo = async ()=> {
    const response = await fetch("https://api.github.com/users/ve-saurabh")
    return response.json()
}

import React from "react";
import Post from "./Post";
import { Outlet, useLoaderData } from "react-router-dom";

export default function PostList() {
  const posts = useLoaderData();

  // const [posts, sePosts] = useState([
  //   {
  //     id: 1,
  //     title: "first post",
  //     summary: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     id: 2,
  //     title: "second post",
  //     summary: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     id: 3,
  //     title: "third post",
  //     summary: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {posts.length > 0 ? (
          posts.map((post) => (
            //     <div key={post.id} >
            //     <p>{post.title}</p>
            //     <p>{post.summary}</p>

            // </div>
            <Post key={post.id} post={post} />
          ))
        ) : (
          <p style={{ margin: "0 auto", fontSize: "1.5rem", color: "#fff" }}>
            please add a new post
          </p>
        )}
      </div>

      <Outlet />
    </>
  );
}

export async function postLoader() {
  const data = await fetch("http://localhost:8000/posts/");

  if (!data.ok) throw Error("cannot fetch data");

  return data.json();
}

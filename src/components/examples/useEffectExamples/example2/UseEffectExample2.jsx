import React, { useEffect, useState } from "react";
import PostsList from "./PostsList";

function UseEffectExample2() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPosts(data);
      })
      .catch(function (error) {
        console.log("error", error);
        setError(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}

export default UseEffectExample2;

import React from "react";
import { useEffect, useState } from "react";

const Student = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/info");
        const data = await response.json();
        setPosts(data.result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.map((item) => (
        <div className="header-text" key={item.id}>
          <h1>{item.fullName}</h1>
          <h1>{item.email}</h1>
        </div>
      ))}
    </div>
  );
};

export default Student;

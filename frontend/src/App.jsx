import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/posts/")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        My Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={`http://127.0.0.1:8000${post.image}`}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">
                {post.title}
              </h2>

              <p className="text-zinc-400 mt-2">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
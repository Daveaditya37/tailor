"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import "../globals.css";
import { addPost, deletePost } from "../../Redux/blogSlice";
import { useState } from "react";
import Navbar from "../navbar";
import Footer from '../footer'

export default function BlogPage() {
  const posts = useSelector((state) => state.blog.posts);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleAddPost = () => {
    if (title && content && image) {
      dispatch(addPost({ title, content, image }));
      setTitle("");
      setContent("");
      setImage("");
    }
  };

  return (
    <div className="blog-app">
      <div>
        <Navbar />
      </div>
      <div className="service5">
        <div className="circle">
          <img src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp" />
        </div>
        <div className="home4">
          <img
            src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png"
            alt="Vehicle"
          />

          <div id="home5">
            <p>Blogs</p>
          </div>
        </div>
      </div>

      <div className="bloghead">
        <h1>My Blog</h1>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>

      {/* Display Posts */}
      <div className="container8">
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              {post.image && (
                <Image
                  id="post3"
                  src={post.image}
                  alt="Post Image"
                  width={600}
                  height={400}
                />
              )}
              <Link href={`/Blog/${post.id}`} legacyBehavior>
                <a>
                  <h2 className="title">{post.title}</h2>
                </a>
              </Link>
              <p id="post-p">{post.content.substring(0, 200)}...</p>{" "}
              {/* Show preview content */}
              <button
                className="bbtn"
                onClick={() => dispatch(deletePost(post.id))}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="category1">
          <div className="category">
            <h2>Category</h2>
            <hr />
            <h3>Restaurant food(37)</h3>
            <hr />
            <h3>Travell News(10)</h3>
            <hr />
            <h3>Modern technology(03)</h3>
            <hr />
            <h3>Product(11)</h3>
            <hr />
            <h3>Inspiration(27)</h3>
            <hr />
            <h3>Health care(17)</h3>
          </div>

          <div className="category3">
            <h2>Recent Post</h2>
            <hr />
            <div className="recent">
              <div className="recent-img">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_1.png" />
              </div>
              <div className="recent-name">
                <li>
                  <Link href="">From life was you fish...</Link>
                </li>
                <p>January 12,2019</p>
              </div>
            </div>

            <div className="recent">
              <div className="recent-img">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_2.png" />
              </div>
              <div className="recent-name">
                <li>
                  <Link href="">From life was you fish...</Link>
                </li>
                <p>02 Hours ago</p>
              </div>
            </div>

            <div className="recent">
              <div className="recent-img">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_3.png" />
              </div>
              <div className="recent-name">
                <li>
                  <Link href="">From life was you fish...</Link>
                </li>
                <p>03 Hours ago</p>
              </div>
            </div>

            <div className="recent">
              <div className="recent-img">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_4.png" />
              </div>
              <div className="recent-name">
                <li>
                  <Link href="">From life was you fish...</Link>
                </li>
                <p>01 Hours ago</p>
              </div>
            </div>

            <div className="tag-container">
              <h2>Tag Clouds</h2>
              <hr />
              <div className="tags">
                <span className="tag">project</span>
                <span className="tag">love</span>
                <span className="tag">technology</span>
                <span className="tag">travel</span>
                <span className="tag">restaurant</span>
                <span className="tag">life style</span>
                <span className="tag">design</span>
                <span className="tag">illustration</span>
              </div>
            </div>

            <div className="tag-container2">
              <h2>Instagram Feeds</h2>
              <hr />
              <div className="tags2">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_5.png" />
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_6.png" />
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_7.png" />
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_8.png" />
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_9.png" />
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_10.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

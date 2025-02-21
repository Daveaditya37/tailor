"use client";
import { useParams } from "next/navigation"; // Correct way for App Router
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Navbar from '../../navbar';
import '../../globals.css';
export default function BlogDetails() {
  const { id } = useParams(); // Get blog ID from URL
  const post = useSelector((state) => 
    state.blog.posts.find((p) => p.id === Number(id))
  );

  if (!post) {
    return <h2>Blog not found</h2>;
  }

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
              <p>Blog Details</p>
            </div>
          </div>
        </div> 


<div className="container8">
        <div className="posts">
        
        <div className="post">
      {post.image && <Image id="post3" src={post.image} alt="Blog Image" width={600} height={400} />}
      <h2>{post.title}</h2>
      <p id="post-p">{post.content}</p>

      {/* Corrected Back Link */}
      <Link href="/Blog">
        <p id="post-p2" className="back">← Back to Blogs</p>
      </Link>
        </div>
        </div>
        
        <div className="category1">
          <div className="category">
            <h2>Category</h2>
            <hr />
            <h3>Restaurant food(37)</h3>
            <hr />
            <h3>Restaurant food(37)</h3>
            <hr />
            <h3>Restaurant food(37)</h3>
            <hr />
            <h3>Restaurant food(37)</h3>
            <hr />
            <h3>Restaurant food(37)</h3>
            <hr />
            <h3>Restaurant food(37)</h3>
          </div>

          <div className="category3">
            <h2>Recent Post</h2>
            <hr/>
            <div className="recent">
              <div className="recent-img">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_1.png" />
              </div>
              <div className="recent-name">
              <li><Link href="">From life was you fish...</Link></li>
                <p>January 12,2019</p>
              </div>
            </div>

            <div className="recent">
              <div className="recent-img">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_2.png" />
              </div>
              <div className="recent-name">
              <li><Link href="">From life was you fish...</Link></li>
                <p>02 Hours ago</p>
              </div>
            </div>

            <div className="recent">
              <div className="recent-img">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_3.png" />
              </div>
              <div className="recent-name">
              <li><Link href="">From life was you fish...</Link></li>
                <p>03 Hours ago</p>
              </div>
            </div>

            <div className="recent">
              <div className="recent-img">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/post/post_4.png" />
              </div>
              <div className="recent-name">
                <li><Link href="">From life was you fish...</Link></li>
                <p>01 Hours ago</p>
              </div>
            </div>

            

            

          </div>
          <div className="tag-container">
        <h2>Tag Clouds</h2><hr/>
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
        <h2>Instagram Feeds</h2><hr/>
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
  );
}

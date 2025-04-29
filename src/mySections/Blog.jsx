import React, { useState } from 'react';
import { useEffect } from 'react';
import freeCodeCamp from '../assets/images/freecodecamp.png';
import powerBi from '../assets/images/powerbi.png';
import meta from '../assets/images/Meta.png';
import available from '../assets/images/available.jpeg'


const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [activePost, setActivePost] = useState(null);
  const [blogPost, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1iRdeuiL8--Sd4KPFXhCR3yzbii8aE-Um_tZz9WyiSJ8/gviz/tq?tqx=out:json');
        const text = await response.text();
        const jsonData = JSON.parse(text.substr(47).slice(0, -2)); // clean up Google's weird response
        const rows = jsonData.table.rows;

        const blogPostsData = rows.map(row => ({
          title: row.c[0]?.v,
          date: row.c[1]?.v,
          content: row.c[2]?.v,
          imgURL: row.c[3]?.v,
          content2: row.c[4]?.v,
          imgURL2: row.c[5]?.v,
          content3: row.c[6]?.v,
          imgURL3: row.c[7]?.v,
        }));

        setBlogPosts(blogPostsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div id='certificates' data-aos="fade-up" data-aos-duration="1500" className='min-h-screen/2 max-lg:h-auto border-zinc-400 rounded-3xl max-lg:mx-10 flex flex-col items-center justify-center gap-7 mx-24 my-36'>
      <h1 className='text-3xl max-md:text-2xl font-md text-center'>Behind the code...</h1>

      {/* Apply background blur effect if modal is open */}
      <div className={`h-1/3 w-full overflow-x-auto overflow-y-hidden p-10 ${showModal ? 'blur-background' : ''}`}>
        <div className='flex flex-row gap-20 justify-center items-center w-fit'>
          {blogPost.map((post, index) => (
            <div key={index} className="relative flex flex-col my-6 border-zinc-700 hover:bg-zinc-800 shadow-sm border rounded-2xl w-96 max-md:w-56 max-md:h-86">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img src={post.imgURL} alt="card-image" />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-200 text-xl font-semibold">
                  {post.title || "Title"} <p className='text-slate-500 font-semibold italic text-sm'> ~ {post.date ? post.date : "timeless"}  ~ </p>
                </h6>
                <p className="text-slate-400 leading-normal font-light max-md:text-sm">
                  {post.content ? (post.content.length > 100 ? post.content.substring(0, 100) + "..." : post.content) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."}
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  onClick={() => { setActivePost(post); setShowModal(true); }}
                  className="rounded-md bg-slate-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-40">
          <div className="bg-zinc-900 p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className='flex flex-row items-center gap-3'>
              <img src={available} alt="" className='rounded-full items-center w-12' />
              <div>
                <h2 className="text-xl font-bold text-white">{activePost.title || activePost.name}</h2>
                <h6 className='text-gray-500 font-semibold italic mb-4 text-sm'> ~ {activePost.date}</h6>
              </div>
            </div>
            <br /><br />
            <p className="text-gray-300 mb-4">{activePost.content || "No content available."}</p>
            <img src={activePost.imgURL} alt="" className='w-96 h-44 m-auto rounded-3xl' />
            <p className="text-gray-300 mb-4">{activePost.content2 || ""}</p>
            <img src={activePost.imgURL2 ? activePost.imgURL2 : ""} alt="" className={activePost.imgURL2 ? ' h-44 m-auto rounded-3xl w-96' : 'hidden'} />
            <p className="text-gray-300 mb-4">{activePost.content3 || ""}</p>
            <img src={activePost.imgURL3 ? activePost.imgURL3 : ""} alt="" className={activePost.imgURL3 ? 'w-96 h-44 m-auto rounded-3xl' : 'hidden'} />
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Blog;

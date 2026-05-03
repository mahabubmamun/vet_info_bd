// import React from 'react';

// const BlogSection = ({ blogs }) => {
//   return (
//     <div className="section">
//       <div className="section-header">
//         <h2 className="section-title">সাম্প্রতিক ব্লগ</h2>
//         <a className="see-all">সব দেখুন <i className="fa-solid fa-arrow-right"></i></a>
//       </div>
//       <div className="cards-grid">
//         {blogs.map((blog, index) => (
//           <div key={index} className="blog-card">
//             <div className="blog-img">
//               <span>{blog.emoji}</span>
//               <span className="category-tag">{blog.category}</span>
//             </div>
//             <div className="blog-body">
//               <div className="blog-title">{blog.title}</div>
//               <div className="blog-excerpt">{blog.excerpt}</div>
//               <div className="blog-footer">
//                 <div className="avatar">{blog.initials}</div>
//                 <div>{blog.author}</div>
//                 <div style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--muted)' }}>
//                   {blog.date} • {blog.read}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;

import React from 'react';

const BlogSection = ({ blogs }) => {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">সাম্প্রতিক ব্লগ</h2>

        <a href="#" className="see-all">
          সব দেখুন <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div className="cards-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-img">
              <span>{blog.emoji}</span>
              <span className="category-tag">{blog.category}</span>
            </div>

            <div className="blog-body">
              <div className="blog-title">{blog.title}</div>
              <div className="blog-excerpt">{blog.excerpt}</div>

              <div className="blog-footer">
                <div className="avatar">{blog.initials}</div>
                <div>{blog.author}</div>

                <div
                  style={{
                    marginLeft: 'auto',
                    fontSize: '0.7rem',
                    color: 'var(--muted)',
                  }}
                >
                  {blog.date} • {blog.read}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
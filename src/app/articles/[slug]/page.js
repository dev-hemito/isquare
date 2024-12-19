import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

// This would be your actual data fetching in a real app
const getBlogData = (slug) => {
  return {
    title: "The Future of Remote Work in 2024",
    author: "Jorely mathew",
    authorRole: "Senior Technology Analyst",
    authorImage: "/jorely.png",
    publishDate: "2024-03-15",
    readTime: "8 min read",
    category: "blogs",
    mainImage: "/blogdemo.jpg",
    content: `
      The landscape of remote work continues to evolve rapidly as we move through 2024. Organizations worldwide are reimagining their workplace strategies, embracing new technologies, and adapting to changing employee expectations.

      ## Key Trends Shaping Remote Work

      The shift towards remote work has been one of the most significant changes in how we work in recent history. Here are the key trends we're seeing:

      ### 1. Hybrid Work Models
      Companies are increasingly adopting hybrid work models that combine remote and office work. This approach offers flexibility while maintaining some in-person collaboration opportunities.

      ### 2. Digital Infrastructure Investment
      Organizations are heavily investing in digital infrastructure to support remote teams. This includes:
      - Advanced collaboration tools
      - Cloud-based systems
      - Cybersecurity measures
      - Virtual private networks (VPNs)

      ### 3. Focus on Mental Health
      Remote work has highlighted the importance of mental health support. Companies are implementing:
      - Regular virtual check-ins
      - Mental health days
      - Online wellness programs
      - Virtual team-building activities

      ## Challenges and Solutions

      While remote work offers many benefits, it also presents unique challenges:

      1. **Communication Barriers**
         Maintaining clear communication across time zones and virtual spaces requires intentional effort and the right tools.

      2. **Work-Life Balance**
         The blurred lines between work and personal life need careful management through clear policies and boundaries.

      3. **Team Cohesion**
         Building and maintaining team culture remotely requires innovative approaches to collaboration and connection.

      ## Looking Ahead

      As we look to the future, several key developments are likely to shape remote work:

      - **AI Integration**: Artificial intelligence will play a larger role in facilitating remote work, from automated scheduling to smart collaboration tools.
      
      - **Virtual Reality**: VR meetings and workspaces may become more common, offering new ways to collaborate virtually.
      
      - **Remote Work Infrastructure**: Cities and countries will continue developing infrastructure specifically designed to support remote workers.

      ## Conclusion

      The future of remote work is not just about technology – it's about creating sustainable, productive, and engaging work environments that benefit both employees and organizations. Success in this new era requires adaptability, intentional communication, and a commitment to continuous improvement.
    `,
    tags: ["Remote Work", "Future of Work", "Technology", "Management"],
    relatedPosts: [
      {
        id: 2,
        title: "Building High-Performance Remote Teams",
        image: "/blogdemo.jpg",
        author: "Michael Brown"
      },
      {
        id: 3,
        title: "Digital Transformation Success Stories",
        image: "/blogdemo.jpg",
        author: "Emily Chen"
      }
    ]
  };
};

const BlogDetailPage = ({ params }) => {
  // In a real app, you'd use the params.slug to fetch the specific blog
  const blog = getBlogData(params?.slug);

  return (
    <>
   <Navbar/>
    <article className="max-w-4xl mx-auto px-4 mt-24 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            {blog.category === 'blogs' ? 'Blog' : 'Management Tip'}
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500">{blog.readTime}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {blog.title}
        </h1>

        {/* Author info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-medium text-gray-900">{blog.author}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{blog.authorRole}</span>
              <span>•</span>
              <time>{new Date(blog.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</time>
            </div>
          </div>
        </div>

        {/* Main image */}
        <img
          src={blog.mainImage}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-xl"
        />
      </header>

      {/* Main content */}
      <div className="prose prose-lg max-w-none">
        {blog.content.split('\n').map((paragraph, index) => {
          if (paragraph.startsWith('##')) {
            return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
          }
          if (paragraph.startsWith('###')) {
            return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
          }
          if (paragraph.startsWith('-')) {
            return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>;
          }
          if (paragraph.startsWith('1.')) {
            return <div key={index} className="ml-4 mt-2">{paragraph}</div>;
          }
          if (paragraph.trim() === '') return null;
          return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
        })}
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t">
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related posts */}
      <section className="mt-12 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blog.relatedPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg group-hover:text-yellow-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm">By {post.author}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
    
    <Footer/>
    </>
  );
};

export default BlogDetailPage;
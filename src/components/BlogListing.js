'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const BlogListing = () => {
  // Demo blog data
  const blogs = [
    {
      id: 1,
      title: "The Future of Remote Work in 2024",
      author: "Sarah Mitchell",
      description: "Exploring the evolving landscape of remote work and its impact on organizational culture.",
      date: "2024-03-15",
      category: "blogs",
      image: "/blogdemo.jpg"
    },
    {
      id: 2,
      title: "10 Essential Leadership Skills for Modern Managers",
      author: "James Wilson",
      description: "Key leadership qualities that define successful managers in today's dynamic workplace.",
      date: "2024-03-12",
      category: "management-tips",
      image: "/blogdemo.jpg"
    },
    {
      id: 3,
      title: "Digital Transformation Success Stories",
      author: "Emily Chen",
      description: "Case studies of companies that successfully navigated their digital transformation journey.",
      date: "2024-03-10",
      category: "blogs",
      image: "/blogdemo.jpg"
    },
    {
      id: 4,
      title: "Building High-Performance Teams",
      author: "Michael Brown",
      description: "Strategies for developing and maintaining high-performing teams in your organization.",
      date: "2024-03-08",
      category: "management-tips",
      image: "/blogdemo.jpg"
    },
    {
      id: 5,
      title: "Sustainable Business Practices",
      author: "Lisa Thompson",
      description: "How companies are incorporating sustainability into their business models.",
      date: "2024-03-05",
      category: "blogs",
      image: "/blogdemo.jpg"
    },
    {
      id: 6,
      title: "Effective Time Management Techniques",
      author: "David Kumar",
      description: "Proven methods to enhance productivity through better time management.",
      date: "2024-03-03",
      category: "management-tips",
      image: "/blogdemo.jpg"
    },
    {
      id: 7,
      title: "AI in Business Operations",
      author: "Rachel Zhou",
      description: "Understanding the role of AI in modern business operations and decision-making.",
      date: "2024-02-28",
      category: "blogs",
      image: "/blogdemo.jpg"
    },
    {
      id: 8,
      title: "Creating a Positive Work Culture",
      author: "Tom Anderson",
      description: "Steps to foster an engaging and positive workplace environment.",
      date: "2024-02-25",
      category: "management-tips",
      image: "/blogdemo.jpg"
    },
    {
      id: 9,
      title: "The Rise of Green Technology",
      author: "Maya Patel",
      description: "Exploring emerging trends in sustainable technology and their business impact.",
      date: "2024-02-22",
      category: "blogs",
      image: "/blogdemo.jpg"
    },
    {
      id: 10,
      title: "Effective Team Communication",
      author: "Chris Martinez",
      description: "Best practices for maintaining clear communication within teams.",
      date: "2024-02-20",
      category: "management-tips",
      image: "/blogdemo.jpg"
    },
    {
      id: 11,
      title: "Innovation in Crisis",
      author: "Alexandra Lee",
      description: "How companies innovate and adapt during challenging times.",
      date: "2024-02-18",
      category: "blogs",
      image: "/blogdemo.jpg"
    },
    {
      id: 12,
      title: "Managing Remote Teams",
      author: "Daniel Smith",
      description: "Essential strategies for effective remote team management.",
      date: "2024-02-15",
      category: "management-tips",
      image: "/blogdemo.jpg"
    },
    {
      id: 13,
      title: "Blockchain in Business",
      author: "Victor Wong",
      description: "Understanding blockchain technology's impact on modern business.",
      date: "2024-02-12",
      category: "blogs",
      image: "/blogdemo.jpg"
    },
    {
      id: 14,
      title: "Conflict Resolution Strategies",
      author: "Sophie Turner",
      description: "Effective approaches to managing workplace conflicts.",
      date: "2024-02-10",
      category: "management-tips",
      image: "/blogdemo.jpg"
    },
    {
      id: 15,
      title: "The Future of E-commerce",
      author: "Ryan Johnson",
      description: "Emerging trends shaping the future of online retail.",
      date: "2024-02-08",
      category: "blogs",
      image: "/blogdemo.jpg"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const blogsPerPage = 9;

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Calculate total pages
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-32">
      {/* Category Filter */}
      <div className="mb-8">
        <select 
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="all">All Posts</option>
          <option value="blogs">Blogs</option>
          <option value="management-tips">Management Tips</option>
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => (
          <a href={`articles/${blog.id}`} key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" >
            <Image 
              src={blog.image} 
              alt={blog.title}
              height={400}
              width={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  blog.category === 'blogs' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {blog.category === 'blogs' ? 'Blog' : 'Management Tip'}
                </span>
                <time className="text-sm text-gray-500">{formatDate(blog.date)}</time>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>By {blog.author}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-lg ${
                currentPage === index + 1
                  ? 'bg-yellow-500 text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogListing;
import axios from 'axios'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useSearchParams } from 'react-router-dom'

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [blogPosts, setBlogPosts] = useState([])
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [active, setActive] = useState('')

  const handleBlogTitleFilter = (blogTitle) => {
    setActive(blogTitle)
    setSearchParams({ search: blogTitle === 'all' ? "" : blogTitle })
  }

  console.log(active)
  // cache function request 
  const fetchPosts = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const { data } = await axios.get("https://amany091.github.io/backend/db.json", {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      setBlogPosts(data.posts)
    } catch (error) {
      setError(error)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  // cache result between re-render
  const filterBlog = useMemo(() => {
    let search = searchParams.get('search') || ''
    if (!search) return blogPosts
    setActive(search)
    return blogPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
  }, [searchParams, blogPosts])

  return (
    <section className='my-3'>
      <div className="container">
        <h1 className=' text-3xl' >Blog</h1>
        <div className="search_blog my-3 flex justify-center ">
          <input
            type="text"
            name="blog"
            id="blog"
            placeholder='search'
            value={searchParams.get('search') || ''}
            className='mb-2 p-1 md:w-1/4 w-full text-black bg-neutral-50 rounded-sm'
            onChange={(e) => setSearchParams(e.target.value ? { search: e.target.value } : {})}
          />
        </div>
        <div className="blog_titles flex gap-2 justify-center my-2">
          {['all', 'react', 'tailwind', 'next'].map((blog) => (
            <button
              key={blog}
              onClick={() => handleBlogTitleFilter(blog)}
              className={active === blog || blog.includes(searchParams.get("search" || '') || blog === 'all')  ? 'text-red-300' : ''}
            >
              {blog}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 ">
          {isLoading && <div className='text-center w-full mx-auto' >Loading...</div>}
          {error && <div className='text-center w-full mx-auto' >Error: {error.message}</div>}
          {!error && (
            filterBlog.map((blog) => (
              <Link to={`${blog.slug}`} key={blog.id}>
                <div className="blog_card bg-gray-900 p-2 flex justify-center flex-col items-center relative  ">
                  <p className='bg-gray-400 text-center rounded-lg text-xs p-1 absolute top-0.5 left-0.5' >{blog.tag}</p>
                  <div className="blog_card_img w-12 my-2 ">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <h2>{blog.title}</h2>
  
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogPage

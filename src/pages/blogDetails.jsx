import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetails = () => {
    const { slug } = useParams();
    const [blog, setBlog] = React.useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const fetchBlogDetails = useCallback(async () => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`https://amany091.github.io/backend/db.json?slug=${slug}`)
            setBlog(data.posts.find((post)=> post.slug === slug))
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    },[slug])

    useEffect(() => {
        fetchBlogDetails()
    }, [])
    
    return (
        <section className='bg-teal-950 p-3 my-2'>
            <div className="container">
                {isLoading && <div className='text-center' >Loading...</div>}
                <div className=" w-1/2 mx-auto flex flex-col" style={{alignItems:'center'}}>
                    <div className="blog_image w-40 rounded p-2  ">
                        <img src={blog.image} alt={blog.title} />
                    </div>
                    <h2 className=''>{blog.title}</h2>
                    <div className=''>
                        {blog.content && <div className='text-gray-500 text-center' style={{width:'70vw'}} dangerouslySetInnerHTML={{__html:blog.content}} ></div>}
                    </div>
                </div>
            </div>
            <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold p-2 rounded mx-auto block my-4"
                onClick={() => navigate('/blog')} >back to blog</button>
        </section>
    )
}

export default BlogDetails

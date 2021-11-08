import React, { useState, useEffect } from 'react'
import { getPosts } from '../../Utility/Post_Logic/Posts'

const PostIndex = () => {
  const [data, setData] = useState([])
  const getPost = async() => {
    await getPosts().then((res) => {
      setData(res)
    })
  }
  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      <ul>
        {data.length !== 0 ? (
          <>
            {data.map((res,i) => {
              return (
                <div key={i}>
                  <li>{res.id}</li>
                  <li>{res.title}</li>
                  <li>{res.body}</li>
                </div>
              )
            })}
          </>
        ) : (
          <>
            <p>Error!!!</p>
          </>
        )}
      </ul>
    </div>
  )
}

export default PostIndex

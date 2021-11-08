import React, { useState, useEffect } from 'react'
import { getComments } from '../../Utility/Comment_Logic/Comments'

const CommentIndex = () => {
  const [data, setData] = useState([])
  const getComment = async() => {
    await getComments().then((res) => {
      setData(res)
    })
  }
  useEffect(() => {
    getComment()
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
                  <li>{res.name}</li>
                  <li>{res.email}</li>
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

export default CommentIndex

import { ClassNames } from '@emotion/react';
import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from '../components/Modal';
import Post from '../components/Post';
import { getPostInfo } from '../apiReqs';

export default function SinglePost({ user }) {

  const { postId } = useParams();
  const [post, setPost] = useState({});


  const getPostInfo = async () => {
    const url = `http://127.0.0.1:5000/api/posts/${postId}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    if (data.status === 'ok') {
      setPost(data.post) // this is where it sets the data of the post to state

    }
  };

  useEffect(() => {
    getPostInfo()
  }, [])

  const deletePost = async () => {
    const url = `http://127.0.0.1:5000/api/posts/${postId}/delete`;
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${user.apitoken}`
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)
    if (data.status === 'ok') {
        // redirect
    }
}

  return (
    <div className='singlePost'>
      {/* Single Post page{postId} */}

      <Post postInfo={post} />

      {(user.username === post.author && user.username)
        ?
        <>
          <Link to={`/posts/update/${postId}`} className='btn btn-primary'>Update</Link>
          <Modal
            triggerButtonText='Delete'
            modalTitle='This action cannot be undone'
            modalBody='blah blah blah'
            color='danger'
            action = {deletePost}
            actionText = 'Delete forever'
          />


        </>
        :
        <></>}

    </div>
  )
}

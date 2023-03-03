import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function UpdatePost({ user }) {
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
    

    const updateAPost = async (e) =>{
        e.preventDefault();

        const title = e.target.title.value
        const caption = e.target.caption.value
        const imgUrl = e.target.imgUrl.value
        const url = `http://127.0.0.1:5000/api/posts/update/${postId}`
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.apitoken}`
            },
            body: JSON.stringify({
                title: title,
                caption: caption,
                img_url: imgUrl
            })
        };
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok'){
            //redirect somewhere
        }
        

    };

  return (
    <div className='container updatePostCard'>
            
        <form className='updatePostCard' onSubmit={updateAPost}>
            <input name="title" placeholder='Title' defaultValue={post.title} />
            <input name="caption" placeholder='Caption' defaultValue={post.caption}/>
            <input name="imgUrl" placeholder='ImgUrl'defaultValue={post.img_url }/>
            <button type='submit'>Update</button>        
        </form>
    </div>

  )
}

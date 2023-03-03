import React from 'react'

export default function CreatePost({ user }) {

    const createAPost = async (e) =>{
        e.preventDefault();

        const title = e.target.title.value
        const caption = e.target.caption.value
        const imgUrl = e.target.imgUrl.value
        const url = `http://127.0.0.1:5000/api/posts/create`
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
    <div className=''>
            
        <form className='container formCard' onSubmit={createAPost}>
            <input className='col-4 align-self-center' name="title" placeholder='Title' />
            <input className='col-4 align-self-center' name="caption" placeholder='Caption'/>
            <input className='col-4 align-self-center' name="imgUrl" placeholder='ImgUrl'/>
            <button className='col-4 align-self-center' type='submit'>Create Post</button>        
        </form>
    </div>

  )
}

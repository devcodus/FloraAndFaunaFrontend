// export const getPostInfo = async (postId) => {
//     const url = `http://127.0.0.1:5000/api/posts/${postId}`;

//     const res = await fetch(url);
//     const data = await res.json();

//     console.log(data)
//     if (data.status === 'ok') {
//       setPost(data.post) // this is where it sets the data of the post to state

//     }
//   };
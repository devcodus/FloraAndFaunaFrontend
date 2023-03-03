import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  

  const handleLike = (e) => {
    e.stopPropagation()
    if (liked){
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setLiked(!liked)
  }

  return (
    <>
    
      {liked ? <FavoriteOutlinedIcon onClick={(e)=>{handleLike(e)}}/> : <FavoriteBorderOutlinedIcon onClick={handleLike}/> }
    {count === 1 ? <span className='likeSpan'>{count} like</span> : <span className='likeSpan'>{count} likes</span> }
    </>
  );
}

export default LikeButton;
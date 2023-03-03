import React, { Component } from 'react'
import '../main.css';
import LikeButton from './LikeButton';
import catdog_tree from '../static/catdog_tree.jpeg'


export default class Post extends Component {
    render() {
        return this.props.postInfo.img_url
        ?
        (
            <div className="mainCard card" style={{ backgroundColor: 'white'}}>
                {/* {this.props.postId} */}
                <div>
                    <a href="/feed" className='postHeader'><img className='postHeader' id='profile_pic_default' src={catdog_tree} alt="logo"/></a>
                    <span className='postHeader' id='headerName'>{this.props.postInfo.author}</span>
                </div>
                <img src={this.props.postInfo.img_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    {/* <h5 className="card-title">{this.props.postInfo.title}</h5> */}
                    <LikeButton/>
                    <h5 className="card-title card-text">{ this.props.postInfo.title }</h5>
                    <p className="card-caption card-text">{this.props.postInfo.caption}</p>
                   </div>
            </div>
        )
        :
        <span></span>
        // <h3>Loading...</h3>
    }
}

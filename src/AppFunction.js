import React, { Component, useState, useEffect } from 'react'
import Nav from './components/Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Feed from './views/Feed'
import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'
import SinglePost from './views/SinglePost'
import CreatePost from './views/CreatePost'
import UpdatePostClass from './views/UpdatePostClass'



export default function App() {
    const [test, setTest] = useState(0)
    const [age, setAge] = useState(9000)
    const [myList, setMyList] = useState([])
    const [user, setUser] = useState({});


    const logMeIn = (user) => {
        setUser(user)
    }
    const logMeOut = () => {
        setUser({})
    }

 
    const happyBirthday = () => {
        console.log('this button was clicked')
        // this.state.age += 1 //
        setAge(age + 1)
    }


    return (

        <BrowserRouter>

            <div>

                <Nav user ={user} logMeOut={logMeOut}/>

                <Routes>
                    <Route path="/" element={<Home test={test} x='5000' age={age} happyBirthday={happyBirthday} />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/login" element={<Login logMeIn = {logMeIn}/>} />

                    <Route path="/posts/:postId" element={<SinglePost user={user} />} />
                    <Route path="/posts/update/:postId" element={<UpdatePostClass user={user} />} />
                    <Route path="/posts/create" element={<CreatePost user={user} />} />
                </Routes>

            </div> 

        </BrowserRouter>
    )

}

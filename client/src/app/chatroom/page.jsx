"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { io } from "socket.io-client"
import Navbar from '@/components/Navbar'
import { Button, Container, TextField, Stack } from "@mui/material"


const page = () => {
  const socket = useMemo(() => io("http://localhost:4000"), []);
  const [message, setMessage] = useState('');
  const [socketID, setsocketID] = useState('');
  // const [roomName, setRoomName] = useState('');
  const [allmessages, setAllMessages] = useState([])

  useEffect(() => {
    socket.on("connect", () => {
      setsocketID(socket.id);
      console.log("connected:" + socket.id);
    })
    socket.on("receive-message", (msg) => {
      console.log(msg);
      setAllMessages(prev => [...prev, msg]);
    })

    return () => {
      socket.disconnect();
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message });
    setAllMessages(prev => [...prev, message])
    setMessage("")
  }


  return (
    <>
      <div className='bg-black h-screen'>
        <Navbar />
        <main className=''>
          <div className='border text-white border-white px-2 p-4'>
            <h3>User:{socketID}</h3>
          </div>
          <div className='text-white rounded'>
            <div className="m-4 bg-slate-700 p-2 rounded">
              <h5>Messages</h5>
              {allmessages.map((msg, i) => (
                <p key={i} className="text-green-300">👉 {msg}</p>
              ))}
            </div>
            <form onSubmit={handleSubmit} className='m-2 border border-white p-2 '>
              <TextField value={message} onChange={e => setMessage(e.target.value)} id="outlined" label="message" variant='outlined'
                className='bg-white rounded w-80' />
              <button className="m-2 bg-green-500 px-4 py-2 align-center rounded" type='submit'>send</button>
            </form>
          </div>
        </main>
      </div>

    </>
  )
}

export default page

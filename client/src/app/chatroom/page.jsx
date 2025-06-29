import React, { useEffect, useMemo, useState } from 'react'
import { io } from "socket.io-client"
import { Button, Container, TextField, Typography, Stack } from "@mui/material"


const page = () => {
  const socket = useMemo(() => io("http://localhost:4000"), []);
  const [message, setMessage] = useState('');
  const [socketID, setsocketID] = useState('');
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    socket.on("connect", () => {
      setsocketID(socket.id);
      console.log("connected:" + socket.id);
    })
    return () => {
      socket.disconnect();
    }
  }, [])

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4" component="div" gutterBottom>
          Hello everyone {socketID}</Typography>
      </Container>
    </>
  )
}

export default page

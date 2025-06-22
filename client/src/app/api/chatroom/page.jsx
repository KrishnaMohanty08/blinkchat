import React,{useEffect,useMemo,useState} from 'react'
import {io} from "socket.io-client"
import {Button, Container, TextField,Typography,Stack} from "@mui/material"


const page = () => {

    const socket=useMemo(()=>io("http://localhost:4000"),[])
  return (
    <>
      
    </>
  )
}

export default page

"use client"
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";


export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="flex justify-center z-3 m-5 shadow-xl">
      <div  className="contactme flex-col justify-center bg-slate-300 p-4 rounded" id="contactme">
        <h2 className="text-3xl m-5 flex justify-center hover:underline hover:cursor-pointer">
          CONTACT US
        </h2>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          sx={{ "& .MuiTextField-root": { m: 1 } }}
          noValidate
          autoComplete="off"
          className="flex flex-col items-center"
        >
          <TextField {...register("name",{required:true})} label="Name"  sx={{ width: "300px", mb: 2 }}>
          </TextField>
          <TextField {...register("email",{required:true})} label="Email"  sx={{ width: "300px", mb: 2 }}>
          </TextField>
          <TextField multiline
            rows={4} {...register("message",{required:true})} label="message"  sx={{ width: "300px", mb: 2 }}>
          </TextField>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>

        {submitted && (
          <Alert
            
            severity="success"
            sx={{ mt: 2 }}
          >
            Your message has been submitted successfully!
          </Alert>
        )}
      </div>
    </div>
  );
}

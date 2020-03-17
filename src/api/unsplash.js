import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID lIHiT_VP2ZWUaaontqeZLVEuX0iVdBCGLuwKfMaB5v0"
  }
});
class unsplash extends React.Component {}

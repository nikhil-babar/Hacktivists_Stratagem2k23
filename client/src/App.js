import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { storage } from "./firebase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Login />} />
      </Routes>
    </Router>
  );
}

const Login = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded!");
      getDownloadURL(imageRef).then((url) => {
        console.log(url);
      });
    });
  };

  return (
    <div className="login-outer">
      <Form className="login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicid">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicfile">
          <Form.Control
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={uploadImage}>
          Upload
        </Button>
      </Form>
    </div>
  );
};
export default App;

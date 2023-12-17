import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Form, useNavigate, redirect } from "react-router-dom";
import PostStyles from './Newpost.module.css'


export default function NewPost() {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false); or (-1)
  const handleClose = () => navigate("..");
  // const handleShow = () => setShow(true);

  return (
    // <div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
      <Modal.Body>
        <Form action="/create-post" method="POST">
          <label htmlFor="title"> Title</label> <br />
          <input type="text" name="title" id="title" className={PostStyles.input} required /> <br />
          <label htmlFor="summary">Summary</label> <br />
          <textarea row={5} name="summary" id="summary" className={PostStyles.input} required />
         
          <div className={PostStyles.btns}>
            <button type="button" onClick={handleClose} className={PostStyles.cancel_btn}>Close</button>
            <button className={PostStyles.add_btn}>Add Post</button>
          </div>
         
        </Form>
      </Modal.Body>
    
    </Modal>
  );
}

// export const newpostAction = async ({request}) => {
export async function newpostAction({ request }) {
  const formData = await request.formData();

  const title = formData.get("title");
  const summary = formData.get("summary");

  // if(title === '' || summary === '') {
  //   alert('title and form should not be empty');
  //   return null
  // }

  await fetch("http://localhost:8000/posts/", {
    method: "POST",
    body: JSON.stringify({
      title,
      summary,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}

// export const handelAddPost = async () => {

//     const response = await fetch('http://localhost:8000/posts/', {
//       method: POST,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         title,
//         summary,
//       })
//     });

//     if (!response.ok) {
//       throw Error('cannot post')
//     }
// }

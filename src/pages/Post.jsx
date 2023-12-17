import React from "react";
import { SlClose } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { useNavigate, useNavigation } from "react-router-dom";
import { Modal } from "react-bootstrap";
import PostStyles from "./Newpost.module.css";
import { useState } from "react";



export default function Post(props) {
  const route = useNavigate();
  const navigation = useNavigation()

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(props.post.title);
  const [summary, setSummary] = useState(props.post.summary);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);


  async function delPost(id) {
   

    if (confirm("are you sure you want to delete?")) {
      try {
        await fetch("http://localhost:8000/posts/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        route("/");
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function updatePost(id) {
  try {
    await new Promise((resolve, reject) => setTimeout((resolve)('resolved')),8000)
   const request = await fetch("http://localhost:8000/posts/" + id, {
      method: 'PUT',
      body: JSON.stringify({title, summary}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    handleClose()
    route('/')
    console.log(await request.json);
    if(!request.ok) throw Error('cannot update')
  
  } catch (error) {
    console.log(error)
  } 
  }

{
  if(navigation.state === 'loading') {
    return <div style={{fonstSize: '2rem', color:'red', margin: '0 auto'}}>Saving Changes....</div>
  }
}



  return (
    <div
      style={{
        width: "30%",
        borderRadius: "0.3rem",
        padding: "1rem",
        backgroundColor: "black",
        color: "#fff",
        position: "relative",
      }}
    >
      <CiEdit
        color="purple"
        size={22}
        style={{
          position: "absolute",
          right: "2rem",
          top: "-2px",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      />

      <SlClose
        color="purple"
        size={22}
        style={{
          position: "absolute",
          right: 0,
          top: "-2px",
          cursor: "pointer",
        }}
        onClick={() => delPost(props.post.id)}
      />
      <p>{props.post.title}</p>
      <p>{props.post.summary}</p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form> */}
            <label htmlFor="title"> Title</label> <br />
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={PostStyles.input}
              required
            />{" "}
            <br />
            <label htmlFor="summary">Summary</label> <br />
            <textarea
              row={5}
              name="summary"
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className={PostStyles.input}
              required
            />
            <div className={PostStyles.btns}>
              <button
                type="button"
                onClick={handleClose}
                className={PostStyles.cancel_btn}
              >
                Close
              </button>
              <button 
              onClick={() => updatePost(props.post.id)}
              className={PostStyles.add_btn}>Save Changes</button>
            </div>
          {/* </Form> */}
        </Modal.Body>
      </Modal>
    </div>
  );
}

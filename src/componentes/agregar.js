import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestoreInstance } from './firestore';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


function AgregarPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const postsRef = collection(firestoreInstance, 'Post');
      const newPost = await addDoc(postsRef, {
        title: title,
        content: content,
      });
      console.log("Post agregado con ID:", newPost.id);
      setTitle('');
      setContent('');
      navigate('/Post-logeo');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Card className="p-4 custom-card mx-auto">
      <CardTitle tag="h4">Nuevo Post</CardTitle>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Título:</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="content">Desarrollo:</Label>
            <Input
              type="textarea"
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </FormGroup>
          <Button color="success" type="submit">Agregar post</Button>
          {error && <p>{error}</p>}
        </Form>
      </CardBody>
    </Card>
  );
}

export default AgregarPost;
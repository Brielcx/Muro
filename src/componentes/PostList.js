import React from 'react';
import { Card, CardBody, CardTitle, CardText, Container } from 'reactstrap';
import { useState, useEffect } from 'react';
import { firestoreInstance } from './firestore.js';
import {
  collection,
  getDocs,
  query,
} from 'firebase/firestore';


function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const colec = collection(firestoreInstance, 'Post');
    const qry = query(colec);
    getDocs(qry).then(snapshot => {
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(posts)
      setPosts(posts);
    });
  }, []);

  
  return (
    <Container className="my-4 justify-content-end" style={{ width: '700px', height: '700px', overflowX: 'auto' }}>
  <div className="post-list">
    {posts.map((post) => (
      <Card key={post.id}>
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <CardText>{post.content}</CardText>
        </CardBody>
      </Card>
    ))}
  </div>
</Container>
);
}

export default PostList;
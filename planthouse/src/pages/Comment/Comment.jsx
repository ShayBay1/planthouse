import React, {useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/Header/Header";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import PostFeed from "../../components/PostFeed/PostFeed";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as postsAPI from "../../utils/postApi";

export default function Feed({user, handleLogout}) {
    console.log(postsAPI, " <-- postsAPI")
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  

    async function handleAddPost(post) {
      try {
        setLoading(true);
        const data = await postsAPI.create(post); 
        console.log(data, " this is 'data' a response from the server, in handleAddPost");
        setPosts([data.post, ...posts]);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }
    async function getComments() {
      try {
        const data = await postsAPI.getElementById();
        console.log(data, " this is data,");
        setPosts([...data.posts]);
        setLoading(false);
      } catch (err) {
        console.log(err.message, " this is the error");
        setError(err.message);
      }
    }
    useEffect(() => {
      getComments();
    }, []);
  
    if (error) {
      return (
        <>
          <PageHeader handleLogout={handleLogout} user={user}/>
          <ErrorMessage error={error} />;
        </>
      );
    }
  
    if (loading) {
      return (
        <>
          <PageHeader handleLogout={handleLogout} user={user}/>
          <Loading />
        </>
      );
    } 
  
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <PageHeader />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddPostForm handleAddPost={handleAddPost} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <PostFeed posts = {posts} numPhotosCol={1} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  
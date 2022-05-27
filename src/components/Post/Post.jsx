import React from "react";
<<<<<<< HEAD
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function PostCard({ post, isProfile, removeComment, addComment, user }) {

=======
import { Card, Icon, Image, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";


function PostCard({ post, isProfile, removePost, removeComment, addComment, user }) {
  function handleOnClick(){
    console.log("initial button was clicked")
    removePost(post._id)
  }
  
>>>>>>> working
  return (
    <Card key={post._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
<<<<<<< HEAD
=======
          <Container textAlign="right">
          <Icon name={"x"} size="large" color="red" onClick={handleOnClick}></Icon>
          </Container>
>>>>>>> working
          <Card.Header>
            <Link to={`/${post.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  post.user.photoUrl
                    ? post.user.photoUrl
                    : "https://i.imgur.com/bAo2Kx2.jpeg"
                }
              />
              {post.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}
      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{post.caption}</Card.Description>
      </Card.Content>
<<<<<<< HEAD
      {/* var Comment: {
    new (data?: string): Comment;
    prototype: Comment;
<Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>
    <Comment>
      <Comment.Avatar src= {`/${coment.user.avatarUrl}`} />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment> 
</Comment.Group>
      }       */}
=======
>>>>>>> working
    </Card>
  );
}

export default PostCard;

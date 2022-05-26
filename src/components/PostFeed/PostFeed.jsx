import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import PostCard from '../Post/Post';
import Loading from '../Loader/Loader';

export default function PostFeed({posts, numPhotosCol, isProfile, loading, user, addComment, removeComment}){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loading size="small">Loading</Loading>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null}
        {posts.map((post) => {
          return (
            <PostCard
              post={post}
              key={post._id}
              isProfile={isProfile}
              user={user}
              addComment={addComment}
              removeComment={removeComment}
            />
          );
        })}
      </Card.Group>
  
    )
}
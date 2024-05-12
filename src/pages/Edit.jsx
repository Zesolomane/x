import React from 'react'

const Edit = () => {
  return (
    <div>Edit</div>
  )
}
const postLoader = async ({params, allposts}) => {
    const postId = params.id;
    const post = await allposts.postId;
    return post;
}
export {Edit as default, postLoader}
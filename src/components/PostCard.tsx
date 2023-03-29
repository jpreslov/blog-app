const PostCard = ({ post }) => {
  const { id, content, createdAt, userId } = post
  return (
    <div className='p-4 m-2 rounded-md text-zinc-200 bg-slate-700'>
      <h1>{content}</h1>
    </div>
  )
}

export default PostCard
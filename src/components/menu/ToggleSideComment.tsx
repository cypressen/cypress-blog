import { useSideCommentContext } from '@/components/SideCommentProvider'
const ToggleSideComment = () => {
  const { sideComment, setSideComment } = useSideCommentContext()
  return (
    <button
      className="btn"
      onClick={() => {
        setSideComment(!sideComment)
      }}
    >
      Toggle Comment Position
      <br />
      {sideComment ? 'Right' : 'Left'}
    </button>
  )
}

export default ToggleSideComment

import { useSideCommentContext } from '@/components/SideCommentProvider'
import ToggleSideComment from '@/components/menu/ToggleSideComment'

const LayoutBody = ({ props }: any) => {
  const { sideComment } = useSideCommentContext()
  // const sideComment = true
  return (
    <div className="max-w-svh m-auto max-h-svh bg-blue-400">
      <div
        className="relative grid h-svh
      grid-cols-1 md:grid-cols-5 lg:grid-cols-6
      gap-4
      p-0 md:p-0 lg:p-20
      top-16 md:top-0"
      >
        <div
          className={`col-span-1 ${
            sideComment ? 'col-start-1' : 'col-start-2'
          } row-start-1 p-2 bg-red-300`}
        >
          {props.menu}
          <ToggleSideComment />
        </div>

        <div
          className={`col-span-3 p-2 ${
            sideComment ? 'col-start-2' : 'col-start-3'
          } row-start-1 bg-green-500 overflow-scroll`}
        >
          <main>
            {sideComment ? 'right' : 'left'}
            {props.content}
            {!sideComment && props.comment}
          </main>
        </div>
        {sideComment && (
          <div className="col-span-2 col-start-5 row-start-1 p-2 bg-yellow-300">
            {props.comment}
          </div>
        )}
      </div>
    </div>
  )
}
export default LayoutBody

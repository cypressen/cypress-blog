import { SideCommentProvider } from '@/components/SideCommentProvider'
import LayoutBody from './LayoutBody'

const RageLayout = (props: any) => {
  return (
    <SideCommentProvider>
      <LayoutBody props={props} />
    </SideCommentProvider>
  )
}

export default RageLayout

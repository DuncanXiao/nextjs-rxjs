import MasonryExample from '@/components/MasonryExample'
import LazyLoadImageExample from '@/components/LazyLoadImageExample'

class Layout extends React.Component {
  render () {
    return (
      <div className='container'>
        <MasonryExample />
        {/* <LazyLoadImageExample /> */}
      </div>
    )
  }
}

export default Layout

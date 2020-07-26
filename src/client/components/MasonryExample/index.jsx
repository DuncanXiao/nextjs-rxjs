import Masonry from 'react-masonry-component'
import debounce from 'lodash/debounce'
import { isScrollBottom } from '@/helpers/scroll'

class MasonryExample extends React.Component {
  state = {
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = debounce(() => {
    if (isScrollBottom()) {
      const imgs = [].concat(this.state.images)
      this.setState((prevState) => {
        return {
          images: imgs.concat([prevState.images[imgs.length % 12]])
        }
      })
    }
  }, 50)

  handleLayoutComplete (item) {
    console.log(item)
  }

  render () {
    const { images } = this.state
    return (
      <div className='masonry-container'>
        <Masonry
          className='my-gallery-class'
          elementType='ul'
          onImagesLoaded={this.handleImagesLoaded}
          onLayoutComplete={laidOutItems => this.handleLayoutComplete(laidOutItems)}
          onRemoveComplete={removedItems => this.handleRemoveComplete(removedItems)}
        >
          {
            images.map((i, k) => (
              <img
                className='custon-image'
                key={k}
                src={`/static/messi${i}.jpg`}
                offset={1}
              />
            ))
          }
        </Masonry>
        <style jsx>
          {`
             .custon-image {
              width: 300px;
              // margin-top:10px;
            }
          `}
        </style>
      </div>
    )
  }
}

export default MasonryExample

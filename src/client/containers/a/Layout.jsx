import Image from '@/components/Image'
import Masonry from 'react-masonry-component'
import css from 'styled-jsx/css'

const { className, styles } = css.resolve`
  .custon-image {
    margin-top:10px;
  }
`

class Layout extends React.Component {
  handleLayoutComplete (item) {
    console.log(item)
  }

  render () {
    const images = [1, 2, 3, 4, 5, 6, 7]
    return (
      <div className='container'>

        <Masonry
          onImagesLoaded={this.handleImagesLoaded}
          onLayoutComplete={laidOutItems => this.handleLayoutComplete(laidOutItems)}
          onRemoveComplete={removedItems => this.handleRemoveComplete(removedItems)}
        >
          {
            images.map((i) => (
              <Image className={`${className} custon-image`} isLazyLoad={false} key={i} src={`/static/messi${i}.jpg`} offset={1} overflow />
            ))
          }
        </Masonry>
        <style jsx>
          {`
            // .container {
            //   height: 300px;
            //   overflow: auto;
            // }
          `}
        </style>
        {styles}
      </div>
    )
  }
}

export default Layout

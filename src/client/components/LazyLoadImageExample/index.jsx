import Image from '@/components/Image'
import { isScrollBottom } from '@/helpers/scroll'
import css from 'styled-jsx/css'

const { className, styles } = css.resolve`
  .custon-image {
    width: 300px;
    // margin-top:10px;
  }
`

class LazyLoadImageExample extends React.Component {
  state = {
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  // componentDidMount () {
  //   window.addEventListener('scroll', this.handleScroll)
  // }

  // handleScroll = () => {
  //   if (isScrollBottom()) {
  //     const imgs = [].concat(...this.state.images)
  //     this.setState((prevState) => {
  //       return {
  //         images: imgs.concat(...prevState.images)
  //       }
  //     })
  //   }
  // }

  render () {
    const { images } = this.state
    return (
      <>
        {
          images.map((i, k) => (
            <Image className={`${className} custon-image`} key={k} src={`/static/messi${i}.jpg`} offset={1} overflow />
          ))
        }
        {styles}
      </>
    )
  }
}

export default LazyLoadImageExample

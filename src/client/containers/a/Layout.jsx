import MasonryExample from '@/components/MasonryExample'
import { connect } from 'react-redux'
import css from 'styled-jsx/css'
import { addCountAction } from '@/ducks/home/addCount'

const { className, styles } = css.resolve`
  .container { background: green }
  .haha { background: red }
`

class Layout extends React.Component {
  handleClick = () => {
    const { addCountAction, count } = this.props
    addCountAction({ count })
  }

  render () {
    return (
      <div className={`${className} container`}>
        <div className={`${className} haha`} onClick={this.handleClick}>{this.props.count}</div>
        <MasonryExample />
        {styles}
      </div>
    )
  }
}

const mapStateToProps = ({
  addCount: {
    count
  }
}) => ({
  count
})

const mapDispatchToProps = dispatch => ({
  addCountAction: data => dispatch(addCountAction(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout)

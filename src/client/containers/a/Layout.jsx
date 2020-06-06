import MasonryExample from '@/components/MasonryExample'
import { connect } from 'react-redux'
import { addCountAction } from '@/ducks/home/addCount'

class Layout extends React.Component {
  handleClick = () => {
    const { addCountAction, count } = this.props
    addCountAction({ count })
  }

  render () {
    return (
      <div className='container'>
        <div className='haha' onClick={this.handleClick}>{this.props.count}</div>
        <MasonryExample />
        <style jsx>
          {`
            .container { background: green }
            .haha { background: red }
          `}
        </style>
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
})
export default connect(mapStateToProps, mapDispatchToProps)(Layout)

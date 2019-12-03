import Nav from '@/components/nav'

class APage extends React.Component {
  static async getInitialProps(ctx) {
    const { req: { toolkit } } = ctx
    console.log('sss', Object.keys(ctx))
    console.log('aa', toolkit.isMobile())
    return {}
  }

  render () {
    return (<div>
      <p>a</p>
      <Nav></Nav>
    </div>
    )
  }
}

export default APage
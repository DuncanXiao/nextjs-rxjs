import Layout from '@/containers/a/Layout.jsx'

class APage extends React.Component {
  static async getInitialProps (ctx) {
    const { req: { toolkit } } = ctx
    return {}
  }

  render () {
    return (<div>
      <p>a</p>
      <Layout />
    </div>
    )
  }
}

export default APage
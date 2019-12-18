import Layout from '@/containers/b/Layout.jsx'

class APage extends React.Component {
  static async getInitialProps (ctx) {
    const { req: { toolkit } } = ctx
    return {}
  }

  render () {
    return (
      <div>
        <Layout />
      </div>
    )
  }
}

export default APage

import dynamic from 'next/dynamic'
const Draft = dynamic(import('@/components/Draft'), {
  ssr: false
})

class Layout extends React.Component {
  render () {
    return (
      <Draft />
    )
  }
}

export default Layout

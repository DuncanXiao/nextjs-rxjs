import React from 'react'
import Lazyload from 'react-lazyload'

export default (config = {}) => {
  return (WrappedComponent) => (props) => {
    return (
      <Lazyload {...{
        throttle: config.throttle || 200,
        height: config.height || 300,
        once: config.once || true,
        offset: config.offset || [500, 0],
        placeholder: null
      }}
      >
        <WrappedComponent {...props} />
      </Lazyload>
    )
  }
}

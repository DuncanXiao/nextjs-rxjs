import React from 'react'
import Lazyload from 'react-lazyload'

const Image = (props) => {
  // eslint-disable-next-line max-len
  const defaultSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC`
  return <Lazyload {...{
    ...props,
    throttle: props.throttle || 200,
    height: props.height || 300,
    once: props.once || true,
    offset: props.offset || [500, 0]
  }}>
    <img height={props.height} src={props.src || defaultSrc} alt={props.alt} className={props.className} />
  </Lazyload>
}

export default Image

import React from 'react'
import LazyLoadImage from '@/components/LazyLoad/Image'
// eslint-disable-next-line max-len
const defaultSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC`

export default (props) => {
  const { isLazyLoad = true } = props
  if (!isLazyLoad) {
    return <img height={props.height} src={props.src || defaultSrc} alt={props.alt} className={props.className} />
  } else {
    return <LazyLoadImage {...props} />
  }
}

import React from 'react'
import './podfonts.css'

const Podfont = ({ icon, host, size, className, style }) => {
  size = size || '1x'
  const type = host ? 'h' : 'a'
  const props = {
    style: style,
    className: `pf pf-${size} pf-${type}-${icon} ${className}`
  }

  return React.createElement('i', props)
}

export default Podfont

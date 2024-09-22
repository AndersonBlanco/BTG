import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={28}
      viewBox="0 0 20 28"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.666.751V.21l.016.542.096-.001c.735 0 1.373.227 1.814.56.44.333.651.74.658 1.133v24.08l-8.807-6.432-.442-.323-.443.323L.75 26.524V2.564l.001-.119c.005-.393.216-.8.657-1.134C1.848.977 2.488.75 3.224.75h.085l.013.001h13.344z"
        stroke="#525252"
        strokeWidth={1.5}
        fill={props.fill}
      />
    </Svg>
  )
}

export default SvgComponent

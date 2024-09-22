import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 27H1V11.68l13-10.4 13 10.4V27h-8v-6.467c0-2.678-2.305-4.733-5-4.733s-5 2.055-5 4.733V27z"
        fill={props.fill}
        stroke="#000"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default SvgComponent

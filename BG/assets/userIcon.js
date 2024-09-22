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
        d="M4.85 19.56l-.003.233.128.194a10.83 10.83 0 0018.05 0l.128-.194-.003-.232c-.015-.967-.512-1.765-1.176-2.386-.66-.618-1.537-1.112-2.456-1.496-1.835-.767-4.022-1.169-5.518-1.169-1.502 0-3.69.402-5.524 1.17-.918.383-1.793.877-2.452 1.496-.663.62-1.16 1.419-1.174 2.385zM.75 14C.75 6.686 6.686.75 14 .75S27.25 6.686 27.25 14 21.314 27.25 14 27.25.75 21.314.75 14zm18.2-5.6A4.944 4.944 0 0014 3.45 4.944 4.944 0 009.05 8.4 4.944 4.944 0 0014 13.35a4.944 4.944 0 004.95-4.95z"
        stroke="#525252"
        fill={props.fill}
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default SvgComponent

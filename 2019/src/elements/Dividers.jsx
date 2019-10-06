import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-scroll-parallax'

export const Divider = styled(Parallax)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`

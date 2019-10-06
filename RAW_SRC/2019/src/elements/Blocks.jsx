import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-scroll-parallax'

export const Block = styled(Parallax)`
  ${tw`w-auto h-full z-50 rounded-lg shadow-lg p-8`};
  background: ${props => props.bg};
`

import styled from 'styled-components'
import tw from 'tailwind.macro'
import ImageService from '../../services/Image'
import BgFallback from '../../images/bg_post_fallback.png'

export const PostCardThumb = styled.div`
${tw`h-40 lg:h-auto lg:w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden z-10`}
    background-image: url('${props => ImageService.checkValidImage(props.bg) ? props.bg : BgFallback}');
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: .5rem;
    border-top-left-radius: .5rem;
`
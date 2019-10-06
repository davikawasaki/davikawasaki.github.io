import styled from 'styled-components'
import tw from 'tailwind.macro'
import DataService from '../../services/Data'
import BgFallback from '../../images/bg_gallery_fallback.png'

export const PhotoCardThumb = styled.div`
${tw`h-full w-full flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden z-10`}
    background-image: url('${props => !DataService.isEmpty(props.bg) ? props.bg : BgFallback}');
    background-size: cover;
    background-position: center;
    border-top-left-radius: ${props => !props.inverted ? '.5rem' : '0'};
    border-top-right-radius: ${props => !props.inverted ? '.5rem' : '0'};
    border-bottom-left-radius: ${props => props.inverted ? '.5rem' : '0'};
    border-bottom-right-radius: ${props => props.inverted ? '.5rem' : '0'};
`
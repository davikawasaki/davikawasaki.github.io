import styled from 'styled-components'
import tw from 'tailwind.macro'

export const FilterTag = styled.button`
    ${tw`inline-block rounded-lg p-2 text-base mr-2 z-50`}
    border: none;
    @media (max-width: 600px) {
        width: calc(1/2*100% - (1 - 1/2) * 2rem);
        margin-bottom: 0.5rem;
    }
    width: calc(1/4*100% - (1 - 1/4) * 2rem);
    margin: 0 0.5rem 1rem 0.5rem;
    background-color: ${props => props.bg};
    font-family: inherit;
    & p {
        margin: 0;
    }
    &:focus {
        outline: none;
    }
`

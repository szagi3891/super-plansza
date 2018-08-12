import styled from 'react-emotion';
import { Theme } from '../Theme';

interface HeaderPropsType {
    role: 'main' | 'subtitle',
}


export const Header = styled('h2')<HeaderPropsType>`
    color: ${Theme.header};
    text-justify: center;
    ${ props => props.role === 'main' ? 'text-transform: uppercase;' : ''}
    ${ props => props.role === 'main' ? `color: ${Theme.header};` : `color: ${Theme.header_sub};` }
`;

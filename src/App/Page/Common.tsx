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


interface MessageImgPropsType {
    src: string,
}

export const GridImage = styled('div')<MessageImgPropsType>`
    min-height: 300px;
    background-image: url("${props => props.src}");
    background-size: cover;
    background-position: center;
`;

export const GridCell = styled('div')`
    padding: 10px;
`;

export const GridRowFull = styled('div')`
    padding: 10px;
    grid-column-start: 1;
    grid-column-end: 4;
`;

export const GridRowShort = styled('div')`
    grid-column-start: 1;
    grid-column-end: 3;
`;

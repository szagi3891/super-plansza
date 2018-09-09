import styled from 'react-emotion';
import { Theme } from '../Theme';

interface HeaderPropsType {
    role: 'main' | 'subtitle',
}

export const Header = styled('h2')<HeaderPropsType>`
    text-align: center;
    ${ props => props.role === 'main' ? `
        color: ${Theme.header};
        text-transform: uppercase;
        font-size: 36px;
    ` : `
        color: ${Theme.header_sub};
    `}
`;


export const Grid = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;

    @media (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

interface MessageImgPropsType {
    src: string,
    setMinHeight: boolean,
}

export const GridImage = styled('div')<MessageImgPropsType>`
    ${ props => props.setMinHeight ? 'min-height: 300px;' : ''}
    background-image: url("${props => props.src}");
    background-size: cover;
    background-position: center;
`;

export const GridCell = styled('div')`
    padding: 10px;
`;

export const GridRowFull = styled('div')`
    grid-column-start: 1;
    grid-column-end: 2;

    @media (min-width: 500px) {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    @media (min-width: 800px) {
        grid-column-end: 4;
    }
`;

export const GridRowShort = styled('div')`
    grid-column-start: 1;
    grid-column-end: 2;

    @media (min-width: 800px) {
        grid-column-end: 3;
    }
`;

export const Content = styled('div')`
    line-height: 24px;
    margin-bottom: 20px;
`;

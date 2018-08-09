import * as React from 'react';
import styled from 'react-emotion';
import * as Color from 'color';
import { Link } from 'react-router-dom';

const menuColor = '#e0e0e0';
const menuColorHover = Color(menuColor).alpha(.5).string();

const Wrapper = styled('div')`
    display: flex;
    flex-direction: row;
`;

const Item = styled('span')`
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    background-color: ${menuColor};
    cursor: pointer;
    border-radius: 2px;

    &:hover {
        background-color: ${menuColorHover};
        color: red;
    }
`;

export class Menu extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <Link to="/"><Item>Strona główna</Item></Link>
                <Link to="/zapisz-sie"><Item>Zapisz się!</Item></Link>
                <Link to="/ankieta"><Item>Ankieta</Item></Link>
                <Link to="/aktualnosci"><Item>Aktualności</Item></Link>
            </Wrapper>
        );
    }
}


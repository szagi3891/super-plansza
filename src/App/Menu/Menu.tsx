import * as React from 'react';
import styled, { css } from 'react-emotion';
import * as Color from 'color';
import { NavLink } from 'react-router-dom';

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

const activeClassName = css`
    color: red;
`;

export class Menu extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <NavLink activeClassName={activeClassName} to="/">
                    <Item>Strona główna</Item>
                </NavLink>
                <NavLink activeClassName={activeClassName} to="/aktualnosci">
                    <Item>Aktualności</Item>
                </NavLink>
                <NavLink activeClassName={activeClassName} to="/kontakt">
                    <Item>Kontakt</Item>
                </NavLink>
            </Wrapper>
        );
    }
}


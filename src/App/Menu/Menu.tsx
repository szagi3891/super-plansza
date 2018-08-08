import * as React from 'react';
import styled from 'react-emotion';
import * as Color from 'color';

const menuColor = '#e0e0e0';
const menuColorHover = Color(menuColor).alpha(.5).string();

const Wrapper = styled('div')`
    display: flex;
    flex-direction: row;
`;

const Item = styled('div')`
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
                <Item>Strona główna</Item>
                <Item>Zapisz się!</Item>
                <Item>Ankieta</Item>
                <Item>Aktualności</Item>
            </Wrapper>
        );
    }
}


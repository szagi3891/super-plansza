import * as React from 'react';
import styled from 'react-emotion';
import * as Color from 'color';
import { AppState, PageType } from 'AppState/AppState';
import { observer } from 'mobx-react';
import { action } from 'mobx';

const menuColor = '#e0e0e0';
const menuColorHover = Color(menuColor).alpha(.5).string();

const Wrapper = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

interface ItemPropsType {
    isSelect: boolean,
}

const Item = styled('span')<ItemPropsType>`
    border: 1px solid black;
    padding: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: ${menuColor};
    cursor: pointer;
    border-radius: 2px;
    user-select: none;

    &:hover {
        background-color: ${menuColorHover};
        color: red;
    }
    ${props => props.isSelect ? `
        background-color: ${menuColorHover};
        color: red;
` : ''}
`;

interface MenuItemPropsType {
    appState: AppState
    page: PageType,
    children: React.ReactNode,
}

@observer
class MenuItem extends React.Component<MenuItemPropsType> {
    render() {
        const { appState, page, children } = this.props;

        const isSelect = appState.page === page;

        return (
            <Item isSelect={isSelect} onClick={this.onClick}>{ children }</Item>
        );
    }
    @action private onClick = () => {
        const { appState, page } = this.props;
        appState.setPage(page);
    }
}

interface MenuPropsType {
    appState: AppState
}

export class Menu extends React.Component<MenuPropsType> {
    render() {
        const { appState } = this.props;

        return (
            <Wrapper>
                <MenuItem appState={appState} page="home">Strona główna</MenuItem>
                <MenuItem appState={appState} page="news">Aktualności</MenuItem>
                { /* <MenuItem appState={appState} page="cennik">Cennik</MenuItem> */ }
                <MenuItem appState={appState} page="lokalizacje">Lokalizacje</MenuItem>
                <MenuItem appState={appState} page="contact">Kontakt i Zapisy</MenuItem>
                <MenuItem appState={appState} page="wypozyczalnia">Wypożyczalnia</MenuItem>
            </Wrapper>
        );
    }

}


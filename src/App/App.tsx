import * as React from 'react';
import styled from 'react-emotion';
import * as Color from 'color';
import './Reset.tsx';
import { Menu } from './Menu/Menu';
import { Route } from 'react-router'
import { Switch, HashRouter } from 'react-router-dom';
import { Row } from './Utils';
import { Home } from './Page/Home/Home';
import { Header } from './Header/Header';

//const react_logo = require('./react-icon.svg');

const colorBackground = '#ffd536';
var colorMainColumn = Color(colorBackground).lighten(0.5);

const Background = styled('div')`
    background-color: ${colorBackground};
`;

const Wrapper = styled('div')`
    width: 1024px;
    margin: 0 auto;
    background-color: ${colorMainColumn.string()};
    min-height: 100vh;
    padding-top: 20px;
`;

interface PropsType {
    label: string,
}

const ZapiszSie = () => {
    return (
        <Row>
            <div>Zapisz się ...</div>
        </Row>
    );
};

const Ankieta = () => {
    return (
        <Row>
            <div>Ankieta ...</div>
        </Row>
    );
};

const Aktualnosci = () => {
    return (
        <Row>
            <div>Aktualnosci ...</div>
        </Row>
    );
};

export class App extends React.PureComponent<PropsType> {
    render() {
        return (
            <HashRouter>
                <Background>
                    <Header />
                    <Wrapper>
                        <Row>
                            <Menu />
                        </Row>

                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path='/zapisz-sie' component={ZapiszSie} />
                            <Route path='/ankieta' component={Ankieta} />
                            <Route path='/aktualnosci' component={Aktualnosci} />
                        </Switch>

                    </Wrapper>
                </Background>
            </HashRouter>
        );
    }
}

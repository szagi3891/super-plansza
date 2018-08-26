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
import { Theme } from './Theme';
import { Header as HeaderText } from './Page/Common';
import { News } from './Page/News/News';
import { Contact } from './Page/Contact/Contact';

const colorBackground = Theme.background;
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

const HeaderBox = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
`;

const Grid = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
`;

export class App extends React.PureComponent {
    render() {
        return (
            <HashRouter>
                <Background>
                    <Header />
                    <Wrapper>
                        <HeaderBox>
                            <HeaderText role="main">"SUPER PLANSZA"</HeaderText>
                            <HeaderText role="subtitle">Spotkania przy nowoczesnych grach planszowych</HeaderText>
                        </HeaderBox>

                        <Row>
                            <Menu />
                        </Row>

                        <Grid>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path='/aktualnosci' component={() => (
                                    <News mainView={false} />
                                )} />
                                <Route path="/kontakt" component={Contact} />
                            </Switch>
                        </Grid>

                    </Wrapper>
                </Background>
            </HashRouter>
        );
    }
}

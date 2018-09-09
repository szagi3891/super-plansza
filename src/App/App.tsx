import * as React from 'react';
import styled from 'react-emotion';
import * as Color from 'color';
import './Reset.tsx';
import { Menu } from './Menu/Menu';
import { Row } from './Utils';
import { Home } from './Page/Home/Home';
import { Header } from './Header/Header';
import { Theme } from './Theme';
import { Header as HeaderText, Grid } from './Page/Common';
import { News } from './Page/News/News';
import { Contact } from './Page/Contact/Contact';
import { AppState } from 'AppState/AppState';
import { observer } from 'mobx-react';
import { Cennik } from './Page/Cennik/Cennik';
import { Helmet } from "react-helmet";

const colorBackground = Theme.background;
var colorMainColumn = Color(colorBackground).lighten(0.5);

const Background = styled('div')`
    background-color: ${colorBackground};
    height: 100vh;
    overflow-y: auto;
`;

const Wrapper = styled('div')`
    position: relative;
    width: 100%;
    max-width: 1024px;
    margin: 300px auto 0;
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

interface PropsType {
    appState: AppState,
}

const WrapperBg1 = styled('div')`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

const WrapperBg2  = styled('div')`
    height: 100vh;
    overflow-y: auto;
    position: relative;
`;

@observer
export class App extends React.Component<PropsType> {
    render() {
        const { appState} = this.props;
        const page = appState.page;

        return (
            <Background>
                <WrapperBg1>
                    <Header />
                </WrapperBg1>

                <WrapperBg2>
                    <Wrapper>
                        <HeaderBox>
                            <HeaderText role="main">"SUPER PLANSZA"</HeaderText>
                            <HeaderText role="subtitle">Spotkania przy nowoczesnych grach planszowych</HeaderText>
                        </HeaderBox>

                        <Row>
                            <Menu appState={appState} />
                        </Row>

                        <Grid>
                            { page === 'home' ? (
                                <React.Fragment>
                                    <Home appState={appState} />
                                    <Helmet>
                                        <title>Strona główna</title>
                                    </Helmet>
                                </React.Fragment>
                             ) : null}
                            { page === 'news' ? (
                                <React.Fragment>
                                    <News appState={appState} mainView={false} />
                                    <Helmet>
                                        <title>Aktualności</title>
                                    </Helmet>
                                </React.Fragment>
                            ) : null }
                            { page === 'cennik' ? (
                                <React.Fragment>
                                    <Cennik />
                                    <Helmet>
                                        <title>Cennik</title>
                                    </Helmet>
                                </React.Fragment>
                            ) : null }
                            { page === 'contact' ? (
                                <React.Fragment>
                                    <Contact />
                                    <Helmet>
                                        <title>Kontakt</title>
                                    </Helmet>
                                </React.Fragment>
                            ) : null }
                        </Grid>

                    </Wrapper>
                </WrapperBg2>
            </Background>
        );
    }
}

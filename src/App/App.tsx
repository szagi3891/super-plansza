import * as React from 'react';
import styled from 'react-emotion';
import * as Color from 'color';
import './Reset.tsx';
import { Menu } from './Menu/Menu';
import { Row } from './Utils';
import { Home } from './Page/Home/Home';
import { Header } from './Header/Header';
import { Theme } from './Theme';
import { Header as HeaderText } from './Page/Common';
import { News } from './Page/News/News';
import { Contact } from './Page/Contact/Contact';
import { AppState } from 'AppState/AppState';
import { observer } from 'mobx-react';
import { Cennik } from './Page/Cennik/Cennik';

const colorBackground = Theme.background;
var colorMainColumn = Color(colorBackground).lighten(0.5);

const Background = styled('div')`
    background-color: ${colorBackground};
`;

const Wrapper = styled('div')`
    position: relative;
    width: 1024px;
    margin: -150px auto 0;
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

interface PropsType {
    appState: AppState,
}

@observer
export class App extends React.Component<PropsType> {
    render() {
        const { appState} = this.props;
        const page = appState.page;

        return (
            <Background>
                <Header />
                <Wrapper>
                    <HeaderBox>
                        <HeaderText role="main">"SUPER PLANSZA"</HeaderText>
                        <HeaderText role="subtitle">Spotkania przy nowoczesnych grach planszowych</HeaderText>
                    </HeaderBox>

                    <Row>
                        <Menu appState={appState} />
                    </Row>

                    <Grid>
                        { page === 'home' ? <Home appState={appState} /> : null}
                        { page === 'news' ? <News appState={appState} mainView={false} /> : null }
                        { page === 'cennik' ? <Cennik /> : null }
                        { page === 'contact' ? <Contact /> : null }
                    </Grid>

                </Wrapper>
            </Background>
        );
    }
}

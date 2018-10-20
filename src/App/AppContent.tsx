import * as React from 'react';
import styled from 'react-emotion';
import { Menu } from './Menu/Menu';
import { Row } from './Utils';
import { Home } from './Page/Home/Home';
import { Header as HeaderText, Grid } from './Page/Common';
import { News } from './Page/News/News';
import { Contact } from './Page/Contact/Contact';
import { AppState } from 'AppState/AppState';
import { observer } from 'mobx-react';
import { Cennik } from './Page/Cennik/Cennik';
import { Helmet } from "react-helmet";
import { Lokalizacje } from './Page/Lokalizacje/Lokalizacje';

const HeaderBox = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
`;

const assertNever = (label: string, _value: never) => {
    throw Error(label);
}

interface PropsType {
    appState: AppState,
}

@observer
export class  AppContent extends React.Component<PropsType> {
    render() {
        const { appState } = this.props;

        return (
            <React.Fragment>
                <HeaderBox>
                    <HeaderText role="main">"SUPER PLANSZA"</HeaderText>
                    <HeaderText role="subtitle">Spotkania przy nowoczesnych grach planszowych</HeaderText>
                </HeaderBox>

                <Row>
                    <Menu appState={appState} />
                </Row>

                <Grid>
                    { this.renderContent() }
                </Grid>
            </React.Fragment>
        )
    }

    private renderContent() {
        const { appState } = this.props;
        const page = appState.page;

        if (page === 'home') {
            return this.renderHome();
        }

        if (page === 'news') {
            return this.renderNews();
        }

        if (page === 'cennik') { 
            return this.renderCennik()
        }

        if (page === 'contact') {
            return this.renderContact();
        }

        if (page === 'lokalizacje') {
            return this.renderLokalizacje();
        }

        assertNever('Nieprawidłowe odgałęzienie', page);
    }

    private renderHome() {
        const { appState } = this.props;
        return (
            <React.Fragment>
                <Home appState={appState} />
                <Helmet>
                    <title>Strona główna</title>
                </Helmet>
            </React.Fragment>
        );
    }

    private renderNews() {
        const { appState } = this.props;
        return (
            <React.Fragment>
                <News appState={appState} mainView={false} />
                <Helmet>
                    <title>Aktualności</title>
                </Helmet>
            </React.Fragment>
        );
    }

    private renderCennik() {
        return (
            <React.Fragment>
                <Cennik />
                <Helmet>
                    <title>Cennik</title>
                </Helmet>
            </React.Fragment>
        );
    }

    private renderContact() {
        return (
            <React.Fragment>
                <Contact />
                <Helmet>
                    <title>Kontakt</title>
                </Helmet>
            </React.Fragment>
        );
    }

    private renderLokalizacje() {
        return (
            <React.Fragment>
                <Lokalizacje />
                <Helmet>
                    <title>Lokalizacje</title>
                </Helmet>
            </React.Fragment>
        );
    }
}
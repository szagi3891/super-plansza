import * as React from 'react';
import styled from 'react-emotion';
import * as Color from 'color';
import './Reset.tsx';
import { Header } from './Header/Header';
import { Theme } from './Theme';
import { AppState } from 'AppState/AppState';
import { observer } from 'mobx-react';
import { AppContent } from './AppContent';

const colorBackground = Theme.background;
var colorMainColumn = Color(colorBackground).lighten(0.5);

const Background = styled('div')`
    background-color: ${colorBackground};
    min-width: 300px;
    height: 100vh;
    overflow-y: auto;
    position: relative;
`;

const generateMedia = (rule: string) => {
    const out: Array<string> = [];

    for (let width = 300; width < 1024; width = width + 10) {
        const height = Math.floor((width * 300) / 1024);
        out.push(`
            @media (min-width: ${width}px) {
                ${rule}: ${height}px;
            }
        `);
    }

    return out.join('\n');
};

const WrapperBg1 = styled('div')`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    height: 85px;
    ${generateMedia('height')}

    display: flex;
`;

const WrapperBg2  = styled('div')`
    height: 100vh;
    overflow-y: auto;
    position: relative;
`;

const Wrapper = styled('div')`
    position: relative;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto 0;

    margin-top: 85px;
    ${generateMedia('margin-top')}

    background-color: ${colorMainColumn.string()};
    min-height: 100vh;
    padding-top: 20px;
`;

interface PropsType {
    appState: AppState,
}

@observer
export class App extends React.Component<PropsType> {
    render() {
        const { appState} = this.props;

        return (
            <Background>
                <WrapperBg1>
                    <Header />
                </WrapperBg1>

                <WrapperBg2>
                    <Wrapper>
                        <AppContent appState={appState} />
                    </Wrapper>
                </WrapperBg2>
            </Background>
        );
    }
}

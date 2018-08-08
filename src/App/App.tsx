import * as React from 'react';
import styled from 'react-emotion';
import * as Color from 'color';
import './Reset.tsx';
import { MainPageIntro } from './MainPageIntro/MainPageIntro';

const react_logo = require('./react-icon.svg');

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
`

const Logo = styled('img')`
    width: 50px;
    height: 50px;
`;

const Row = styled('div')`
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
`;

interface MessageImgPropsType {
    extraMargin: 'right' | 'left',
}
const MessageImg = styled('img')<MessageImgPropsType>`
    width: 300px;
    flex-shrink: 0;
    ${ props => props.extraMargin === 'left' ? 'margin-left: 10px;' : 'margin-right: 10px;'}
`;

const MessageText = styled('div')`
    flex-grow: 1;
`;

const imgMock = 'https://www.matczynefanaberie.pl/wp-content/uploads/2017/10/Gry-planszowe-o-dinozaurach-940x788.png';


interface PropsType {
    label: string,
}

export class App extends React.PureComponent<PropsType> {
    render() {
        return (
            <Background>
                <Wrapper>
                    <Row>
                        <MainPageIntro />
                    </Row>

                    <Row>
                        <MessageImg src={imgMock} extraMargin="right" />
                        <MessageText>
                            <p>Czym są nowoczesne gry planszowe?</p>
                            <p>Nowoczesne gry planszowe to przede wszystkim bardzo dobry sposób na spędzanie wolnego czasu a ponadto: przygoda, emocje, rozwój logicznego myślenia</p>
                        </MessageText>
                    </Row>

                    <Row>
                        <MessageText>
                            <p>Jak wyglądają zajęcia ?</p>
                            <p>- trwają 2 godziny</p>
                            <p>- zasiadamy do ławek</p>
                            <p>- tłumaczone są wszystkim zasady gry</p>
                            <p>- gramy tylko i wyłącznie w najlepsze gry</p>
                            <p>- w drugiej części zajęć chętni grają turniej, pozostali grają w ulubione gry</p>
                        </MessageText>
                        <MessageImg src={imgMock} extraMargin="left" />
                    </Row>

                    <div>
                        <Logo src={react_logo} />
                    </div>

                    { this.renderContent() }
                </Wrapper>
            </Background>
        );
    }
    private renderContent() {
        const out = [];

        for (let i=0; i<100; i++) {
            out.push((
                <p key={i}>
                    App ... { this.props.label} { i}
                </p>
            ))
        }

        return out;
    }
}

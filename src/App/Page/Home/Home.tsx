import * as React from 'react';
import styled from 'react-emotion';
import { Row } from '../../Utils';
import { MainPageIntro } from './MainPageIntro';


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


export const Home = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};
import * as React from 'react';
import styled from 'react-emotion';
import { Row } from '../../Utils';
const img1 = require('./home/1-image2.jpg');
const img2 = require('./home/2-image3.jpg');
const img3 = require('./home/3-image4.jpg');

const Ul = styled('ul')`
    padding-left: 40px;
`;

interface MessageImgPropsType {
    extraMargin: 'right' | 'left',
    src: string,
}

const MessageImg = styled('div')<MessageImgPropsType>`
    width: 300px;
    height: 300px;
    flex-shrink: 0;
    ${ props => props.extraMargin === 'left' ? 'margin-left: 10px;' : 'margin-right: 10px;'}
    background-image: url("${props => props.src}");
    background-size: cover;
    background-position: center;
`;

const MessageText = styled('div')`
    flex-grow: 1;
`;

export const Home = () => {
    return (
        <React.Fragment>
            <Row>
                <MessageText>
                    <Ul>
                        <li>Budujemy miasta i drogi</li>
                        <li>Zdobywamy K2 zimą</li>
                        <li>Terraformujemy marsa</li>
                        <li>Handlujemy kamieniami szlachetnymi</li>
                        <li>Tworzymy własne cywilizacje</li>
                        <li>Walczymy o życie na bezludnej wyspie</li>
                    </Ul>
                </MessageText>
                <MessageImg src={img1} extraMargin="left" />
            </Row>

            <Row>
                <MessageImg src={img2} extraMargin="right" />
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
                <MessageImg src={img3} extraMargin="left" />
            </Row>
        </React.Fragment>
    );
};
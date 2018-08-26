import * as React from 'react';
import styled from 'react-emotion';
import { News } from '../News/News';
import { GridImage, GridCell } from '../Common';
import { AppState } from 'AppState/AppState';
//const img1 = require('./home/1-image2.jpg');
const img2 = require('./home/2-image3.jpg');
const img3 = require('./home/3-image4.jpg');

const Ul = styled('ul')`
    padding-left: 15px;
`;

const Title = styled('h3')`
    color: red;
    margin-bottom: 10px;
`;

const Content = styled('div')`
    line-height: 24px;
`;

interface HomePropsType {
    appState: AppState,
}

export const Home = (props: HomePropsType) => {
    return (
        <React.Fragment>
            <News mainView={true} appState={props.appState} />

            <GridImage src={img2} setMinHeight={true} />

            <GridCell>
                <Title>Co robimy?:</Title>
                <Content>
                    <Ul>
                        <li>Budujemy własne królestwa</li>
                        <li>Zdobywamy K2 zimą</li>
                        <li>Terraformujemy Marsa</li>
                        <li>Handlujemy kamieniami szlachetnymi</li>
                        <li>Tworzymy własne cywilizacje</li>
                        <li>Walczymy o życie na bezludnej wyspie</li>
                    </Ul>
                </Content>
            </GridCell>

            <GridCell>
                <Title>W co gramy?:</Title>
                <Content>
                    <div>Najlepsze gry planszowe zdobywające nagrody i wyróżnienia na międzynarodowych konkursach i festiwalach na całym świecie.</div>
                    <div>Na przykład: Carrcassonne, Splendor, Królestwo w budowie, Wsiąść do pociągu, Sabotażysta, K2, Kolejka, Neuroshima Hex, Timeline oraz wiele innych.</div>
                </Content>
            </GridCell>

            <GridCell>
                <Title>Forma zajęć:</Title>
                <Content>
                    <div>Jak wyglądają zajęcia:</div>
                    <Ul>
                        <li>trwają 2 godziny</li>
                        <li>tłumaczone są zasady gry</li>
                        <li>gramy tylko i wyłącznie w najlepsze gry,</li>
                        <li>w drugiej części zajęć chętni grają turniej a pozostali w ulubione gry</li>
                    </Ul>
                </Content>
            </GridCell>

            <GridCell>
                <Title>Planszówki to:</Title>
                <Content>
                    <Ul>
                        <li>rozwój intelektualny</li>
                        <li>nauka strategicznego myślenia</li>
                        <li>rywalizacja</li>
                        <li>współpraca</li>
                        <li>odprężenie po zajęciach lekcyjnych</li>
                        <li>alternatywa dla gier komputerowych, smartfonów</li>
                        <li>zacieśnienie relacji z rówieśnikami</li>
                        <li>nauka radzenia sobie z porażką</li>
                    </Ul>
                </Content>
            </GridCell>

            <GridImage src={img3} setMinHeight={true} />

        </React.Fragment>
    );
};
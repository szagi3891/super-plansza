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
                <Title>Co robimy?</Title>
                <Content>
                    <Ul>
                        <li>Handlujemy kamieniami szlachetnymi</li>
                        <li>Zdobywamy K2 zimą</li>
                        <li>Terraformujemy Marsa</li>
                        <li>Rozwijamy własne cywilizacje</li>
                        <li>Walczymy o życie na bezludnej wyspie</li>
                        <li>Ratujemy ludzkość przed pandemią</li>
                        <li>Budujemy własne królestwa</li>
                    </Ul>
                </Content>
            </GridCell>

            <GridCell>
                <Title>W co gramy?</Title>
                <Content>
                    <Ul>
                        <li>Najlepsze gry planszowe zdobywające nagrody i wyróżnienia na międzynarodowych konkursach i festiwalach na całym świecie.</li>
                        <li>Na przykład: Carrcassonne, Splendor, Królestwo w budowie ,Wsiąść do pociągu, Sabotażysta, K2, Neuroshima Hex, 7 Cudów Świata, Timeline, Tajniacy oraz wiele innych.</li>
                    </Ul>
                </Content>
            </GridCell>

            <GridCell>
                <Title>Forma zajęć:</Title>
                <Content>
                    <Ul>
                        <li>Trwają 2 godziny</li>
                        <li>Tłumaczone są zasady gier</li>
                        <li>Przystępujemy do rozgrywek</li>
                        <li>W drugiej części chętni grają turniej, a pozostali w ulubione gry</li>
                        <li>Na każdych zajęciach zapozanjemy się z nową grą</li>
                    </Ul>
                </Content>
            </GridCell>

            <GridCell>
                <Title>Planszówki to:</Title>
                <Content>
                    <Ul>
                        <li>Rozwój intelektualny</li>
                        <li>Nauka strategicznego myślenia</li>
                        <li>Rywalizacja</li>
                        <li>Współpraca</li>
                        <li>Odprężenie po zajęciach lekcyjnych</li>
                        <li>Alternatywa dla gier komputerowych i smartfonów</li>
                        <li>Zacieśnienie relacji z rówieśnikami</li>
                        <li>Nauka radzenia sobie z porażką</li>
                    </Ul>
                </Content>
            </GridCell>

            <GridImage src={img3} setMinHeight={true} />

        </React.Fragment>
    );
};
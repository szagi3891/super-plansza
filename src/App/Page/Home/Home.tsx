import * as React from 'react';
import styled from 'react-emotion';
import { News } from '../News/News';
//const img1 = require('./home/1-image2.jpg');
const img2 = require('./home/2-image3.jpg');
const img3 = require('./home/3-image4.jpg');

const Ul = styled('ul')`
    padding-left: 15px;
`;

interface MessageImgPropsType {
    src: string,
}

/*
const MessageImg = styled('div')<MessageImgPropsType>`
    width: 300px;
    height: 300px;
    flex-shrink: 0;
    background-image: url("${props => props.src}");
    background-size: cover;
    background-position: center;
`;
*/

const Grid = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
`;

const GridImage = styled('div')<MessageImgPropsType>`
    min-height: 300px;
    background-image: url("${props => props.src}");
    background-size: cover;
    background-position: center;
`;

const GridCell = styled('div')`
    padding: 10px;
`;

const Title = styled('h3')`
    color: red;
    margin-bottom: 10px;
`;

export const Home = () => {
    return (
        <React.Fragment>
            <News mainView={true} />

            <Grid>
                <GridImage src={img2} />

                <GridCell>
                    <Title>Co robimy?:</Title>
                    <Ul>
                        <li>Budujemy własne królestwa</li>
                        <li>Zdobywamy K2 zimą</li>
                        <li>Terraformujemy Marsa</li>
                        <li>Handlujemy kamieniami szlachetnymi</li>
                        <li>Tworzymy własne cywilizacje</li>
                        <li>Walczymy o życie na bezludnej wyspie</li>
                    </Ul>
                </GridCell>

                <GridCell>
                    <Title>W co gramy?:</Title>
                    <div>Najlepsze gry planszowe zdobywające nagrody i wyróżnienia na międzynarodowych konkursach i festiwalach na całym świecie.</div>
                    <div>Na przykład: Carrcassonne, Splendor, Królestwo w budowie, Wsiąść do pociągu, Sabotażysta, K2, Kolejka, Neuroshima Hex, Timeline oraz wiele innych.</div>
                </GridCell>

                <GridCell>
                    <Title>Forma zajęć:</Title>
                    <div>Jak wyglądają zajęcia:</div>
                    <Ul>
                        <li>trwają 2 godziny</li>
                        <li>tłumaczone są zasady gry</li>
                        <li>gramy tylko i wyłącznie w najlepsze gry,</li>
                        <li>w drugiej części zajęć chętni grają turniej a pozostali w ulubione gry</li>
                    </Ul>
                </GridCell>

                <GridCell>
                    <Title>Planszówki to:</Title>
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
                </GridCell>

                <GridImage src={img3} />
            </Grid>

        </React.Fragment>
    );
};
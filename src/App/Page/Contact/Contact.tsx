import * as React from 'react';
import { GridRowFull, Content } from '../Common';
import styled from 'react-emotion';

const Iframe = styled('iframe')`
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 700px;
    height: 700px;
`;

const Header = styled('h2')`
    margin-bottom: 20px;
`;

export class Contact extends React.PureComponent {
    render() {
        return (
            <GridRowFull>
                <Content>
                    <Header>Kontakt</Header>

                    <br/>

                    <div>
                        E-mail:: <a href="mailto:superplansza@gmail.com">superplansza@gmail.com</a><br/>
                        Tel. 720 765 365
                    </div>
                    <br/>

                    <div>
                    Wypełnij poniższy formularz aby na bieżąco być informowanym o terminie pierwszych i kolejnych zajęć lub o zmianach terminu.
                    W przypadku dużej liczby chętnych o uczestnictwie decyduje kolejność zapisów.
                    </div>
                    <br/>

                    <Iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeXqELOJGLPBcb_8q7hGQAbUqlkRh9-5KrvTbCnywzpXt678w/viewform?embedded=true"
                        frameBorder="0"
                    >
                        Ładuję...
                    </Iframe>
                </Content>
            </GridRowFull>
        );
    }
}
import * as React from 'react';
import { GridRowFull, Content } from '../Common';
import styled from 'react-emotion';

const Iframe = styled('iframe')`
    display: block;
    margin: 0 auto;
`

export class Contact extends React.PureComponent {
    render() {
        return (
            <GridRowFull>
                <Content>
                    <div>1. W przypadku pytań dotyczących działalności koła SUPERPLANSZA proszę o kontakt wysyłając wiadomość na adres: superplansza@protonmail.com.</div>
                    <br/>

                    <div>2, Poniżej znajduje się link do rejestracji uczestnika zajęć oraz jego rodzica/ów / opiekuna/ów. Zostaw tam swoje podstawowe dane przypisując je do swojego dziecka.</div>
                    <br/>

                    <div>Rejestracja służy bezpieczeństwu dzieci i młodzieży przebywającej w klasie podczas zajęć.<br/>
                    Wskazane tutaj dane rodziców / opiekunów będą wykorzystywane do powiadomienia w przypadku zaistnienia trudnych do przewidzenia zdarzeń (zachowanie dziecka, ewakuacja budynku i.t.p.)).<br/>
                    Będą również przesyłane informacje o najbliższych i odwołanych zajęciach.</div>
                    <br/>
                    
                    <Iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeXqELOJGLPBcb_8q7hGQAbUqlkRh9-5KrvTbCnywzpXt678w/viewform?embedded=true"
                        width="700"
                        height="700"
                        frameBorder="0"
                    >
                        Ładuję...
                    </Iframe>
                </Content>
            </GridRowFull>
        );
    }
}
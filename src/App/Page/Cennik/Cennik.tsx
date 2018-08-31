import * as React from 'react';
import { GridRowFull, Content } from '../Common';

export class Cennik extends React.PureComponent {
    render() {
        return (
            <GridRowFull>
                <Content>
                    <div>W październiku udział w zajęciach jest bezpłatny.</div>
                    <br/>

                    <div>W pozostałych miesiącach koszt wynosi 10zł / 120min</div>
                    <br/>

                    <div>Jeżeli w danych zajęciach razem uczestniczy rodzeństwo to każde kolejne dziecko płaci 50% mniej od poprzedniego a czwarte i kolejne nie płaci.</div>
                    <br/>

                    <div>Przykład: Ania przyszła na zajęcia z dwójką braci. W sumie zapłacą 17,50zł (10zł + 5zł + 2,5zł)</div>
                    <br/>

                    <div>Opłaty pobierane są na miejscu przed zajęciami lub poprzez przelew bankowy najpóźniej do 5 dni od zakończonych zajęć na rachunek:</div>
                    <br/>

                    <div>SUPERPLANSZA<br/>
                    Nr rachunku: 49 1140 2004 0000 3202 5517 9805<br/>
                    W tytule: Imię i nazwisko uczestnika/ów</div>
                </Content>
            </GridRowFull>
        );
    }
}
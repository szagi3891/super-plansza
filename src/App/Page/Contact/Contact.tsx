import * as React from 'react';
import { GridRowFull } from '../Common';

export class Contact extends React.PureComponent {
    render() {
        return (
            <GridRowFull>
                <div>W przypadku pytań dotyczących działalności koła SUPERPLANSZA proszę</div>
                <div>o wysyłanie wiadomości na email: <a href="mailto:superplansza@protonmail.com">superplansza@protonmail.com</a></div>
            </GridRowFull>
        );
    }
}
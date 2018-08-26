import * as React from 'react';
import { GridRowFull } from '../Common';

export class Contact extends React.PureComponent {
    render() {
        return (
            <GridRowFull>
                <div>W przypadku pytań dotyczących działalności koła SUPERPLANSZA proszę</div>
                <div>o kontakt wysyłając wiadomość na email: superplansza@gmail.com lub superplansza@prootnmail.com</div>
            </GridRowFull>
        );
    }
}
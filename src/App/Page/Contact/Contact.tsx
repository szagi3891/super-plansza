import * as React from 'react';
import { GridRowFull, Content } from '../Common';

export class Contact extends React.PureComponent {
    render() {
        return (
            <GridRowFull>
                <Content>
                    <div>W przypadku pytań dotyczących działalności koła SUPERPLANSZA proszę</div>
                    <div>o wysyłanie wiadomości na email: <a href="mailto:superplansza@protonmail.com">superplansza@protonmail.com</a></div>
                </Content>
            </GridRowFull>
        );
    }
}
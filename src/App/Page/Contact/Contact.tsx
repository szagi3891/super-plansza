import * as React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')`
    padding: 0 10;
`;

export class Contact extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <div>W przypadku pytań dotyczących działalności koła SUPERPLANSZA proszę</div>
                <div>o kontakt wysyłając wiadomość na email: superplansza@gmail.com lub superplansza@prootnmail.com</div>
            </Wrapper>
        );
    }
}
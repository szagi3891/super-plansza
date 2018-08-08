import * as React from 'react';
import styled from 'react-emotion';

const Ul = styled('ul')`
    padding-left: 40px;
`;

export class MainPageIntro extends React.PureComponent {
    render() {
        return (
            <div>
                <h2>Witaj w świecie gier planszowych!</h2>
                <Ul>
                    <li>Budujemy miasta i drogi</li>
                    <li>Zdobywamy K2 zimą</li>
                    <li>Terraformujemy marsa</li>
                    <li>Handlujemy kamieniami szlachetnymi</li>
                    <li>Tworzymy własne cywilizacje</li>
                    <li>Walczymy o życie na bezludnej wyspie</li>
                </Ul>
            </div>
        );
    }
}

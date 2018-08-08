import * as React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import * as Color from 'color';

injectGlobal `
html,
body,
ul {
  margin: 0;
  padding: 0;
}

figure,
blockquote,
p {
  margin: 0
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  color: currentColor;
  text-decoration: none;
}

a:hover,
a:focus {
  color: currentColor;
  text-decoration: none;
}
`;

const colorBackground = '#ffd536';
var colorMainColumn = Color(colorBackground).lighten(0.5);

const Background = styled('div')`
    background-color: ${colorBackground};
`;

const Wrapper = styled('div')`
    width: 1024px;
    margin: 0 auto;
    background-color: ${colorMainColumn.string()};
    min-height: 100vh;
`

interface PropsType {
    label: string,
}

export class App extends React.PureComponent<PropsType> {
    render() {
        return (
            <Background>
                <Wrapper>
                    { this.renderContent() }
                </Wrapper>
            </Background>
        );
    }
    private renderContent() {
        const out = [];

        for (let i=0; i<100; i++) {
            out.push((
                <p key={i}>
                    App ... { this.props.label} { i}
                </p>
            ))
        }

        return out;
    }
}

import * as React from 'react';

interface PropsType {
    label: string,
}

export class App extends React.PureComponent<PropsType> {
    render() {
        return (
            <div>
                App ... { this.props.label}
            </div>
        );
    }
}

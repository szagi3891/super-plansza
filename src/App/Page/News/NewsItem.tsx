import * as React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')`
    margin-bottom: 20px;
`;

const Title = styled('h2')`
    margin-bottom: 10px;
`;

const Content = styled('div')`
    margin-bottom: 10px;
`

export interface NewsItemType {
    title: string,
    content: string,
    date:string,
    img: string | null,
}

interface PropsType {
    data: NewsItemType,
}

export class NewsItem extends React.PureComponent<PropsType> {
    render() {
        //const { , img } = this.props.data;

        return (
            <Wrapper>
                { this.leftColumn() }
            </Wrapper>
        );
    }

    private leftColumn() {
        const { title, content, date } = this.props.data;

        return (
            <div>
                <Title>{title}</Title>
                <Content>{content}</Content>
                <div>{date}</div>
            </div>
        )
    }
}
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
const Logo = styled('img')`
    margin-left: 20px;
    margin-bottom: 20px;
    float: right;
`;

const Clear = styled('div')`
    clear: both;
`;

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
        return (
            <Wrapper>
                { this.logo() }
                { this.leftColumn() }
                <Clear />
            </Wrapper>
        );
    }

    private logo() {
        const { title, img } = this.props.data;
        if (img === null) {
            return null;
        }

        return (
            <Logo src={img} alt={title} />
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
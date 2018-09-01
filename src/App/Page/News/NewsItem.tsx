import * as React from 'react';
import styled from 'react-emotion';
import { GridRowShort, GridImage, GridRowFull, Content } from '../Common';
const firstPhoto = require('./SP logo 5.jpg');

const Title = styled('h2')`
    margin-bottom: 20px;
`;

export interface NewsItemType {
    title: string,
    content: string,
    date: string | null,
}

interface PropsType {
    showImg: boolean,
    data: NewsItemType,
}

export class NewsItem extends React.PureComponent<PropsType> {
    render() {
        if (this.props.showImg) {
            return (
                <React.Fragment>
                    <GridRowShort>
                        { this.leftColumn() }
                    </GridRowShort>
                    <GridImage src={firstPhoto} setMinHeight={false} />
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <GridRowFull>
                    { this.leftColumn() }
                </GridRowFull>
            </React.Fragment>
        );
    }

    private leftColumn() {
        const { title, content } = this.props.data;

        return (
            <React.Fragment>
                <Title>{title}</Title>
                <Content>{content}</Content>
                { this.renderDate() }
            </React.Fragment>
        )
    }

    private renderDate() {
        const { date } = this.props.data;

        if (date !== null) {
            return (
                <div>{date}</div>
            );
        }

        return null;
    }
}
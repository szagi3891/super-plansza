import * as React from 'react';
import styled from 'react-emotion';
import { GridRowShort, GridImage, GridRowFull } from '../Common';
const firstPhoto = require('./SP logo 5.jpg');

const Title = styled('h2')`
    margin-bottom: 20px;
`;

const Content = styled('div')`
    line-height: 24px;
    margin-bottom: 20px;
`;

export interface NewsItemType {
    title: string,
    content: string,
    date:string,
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
                    <GridImage src={firstPhoto} />
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
        const { title, content, date } = this.props.data;

        return (
            <React.Fragment>
                <Title>{title}</Title>
                <Content>{content}</Content>
                <div>{date}</div>
            </React.Fragment>
        )
    }
}
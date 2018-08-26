import * as React from 'react';
import styled from 'react-emotion';
import { GridRowShort, GridCell, GridImage, GridRowFull } from '../Common';
const news1 = require('./SP logo 5.jpg');

const Title = styled('h2')`
    margin-bottom: 10px;
`;

const Content = styled('div')`
    margin-bottom: 10px;
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
                    <GridCell>
                        <GridImage src={news1} />
                    </GridCell>
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
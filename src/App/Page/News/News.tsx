import * as React from 'react';
import styled from 'react-emotion';
import { NewsItem, NewsItemType } from './NewsItem';
import { GridRowFull } from '../Common';
import { AppState } from 'AppState/AppState';

const data: Array<NewsItemType> = [{
    title: 'Zajęcia na start WSTĘP WOLNY!',
    content: `
        Z przyjemnością informuję, że pierwsze i drugie zajęcia z grami planszowymi ,
        które odbędą się w II LO w Chrzanowie w październiku
        będą bezpłatne. 
        Zapraszam młodzież i dzieci w wieku od lat 8 na 120 minut dobrej
        zabawy w piątek 12 i 26.10.2018r.
    `,
    date: '2018-08-12'
},{
    title: 'Wiadomosć nr 2 (starsza)',
    content: `Z przyjemnością informuję, że pierwsze i drugie zajęcia z grami planszowymi , które odbędą się w II LO w Chrzanowie w miesiącu październiku`,
    date: '2018-08-02',
},{
    title: 'Wiadomosć nr 3 (starsza)',
    content: `Z przyjemnością informuję, że pierwsze i drugie zajęcia z grami planszowymi , które odbędą się w II LO w Chrzanowie w miesiącu październiku`,
    date: '2018-06-22',
}];

const LinkInner = styled('span')`
    display: block;
    color: blue;
`;

interface PropsType {
    mainView: boolean,
    appState: AppState,
}

export class News extends React.PureComponent<PropsType> {
    render() {
        const { mainView } = this.props;

        const listToShow = mainView ? data.slice(0, 2) : data;

        return (
            <React.Fragment>
                { this.renderList(listToShow) }
                { mainView && data.length > 2 ? this.renderLink() : null}
            </React.Fragment>
        );
    }

    private renderList(listToShow: Array<NewsItemType>) {
        return listToShow.map(
            (item, index) => <NewsItem key={item.date} data={item} showImg={index === 0} />
        );
    }

    private renderLink() {
        return (
            <GridRowFull>
                <LinkInner onClick={this.onClick}>Więcej wiadomości</LinkInner>

                <hr/>
            </GridRowFull>
        );
    }

    private onClick = () => {
        this.props.appState.setPage('news');
    }
}

import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { NewsItem, NewsItemType } from './NewsItem';

const news1 = require('./news1.png');

const data: Array<NewsItemType> = [{
    title: 'Zajęcia na start WSTĘP WOLNY!',
    content: `
        Z przyjemnością informuję, że pierwsze i drugie zajęcia z grami planszowymi ,
        które odbędą się w II LO w Chrzanowie w październiku
        będą bezpłatne. 
        Zapraszam młodzież i dzieci w wieku od lat 8 na 120 minut dobrej
        zabawy w piątek 12 i 26.10.2018r.
    `,
    date: '2018-08-12',
    img: news1,
},{
    title: 'Wiadomosć nr 2 (starsza)',
    content: `Z przyjemnością informuję, że pierwsze i drugie zajęcia z grami planszowymi , które odbędą się w II LO w Chrzanowie w miesiącu październiku`,
    date: '2018-08-02',
    img: null,
},{
    title: 'Wiadomosć nr 3 (starsza)',
    content: `Z przyjemnością informuję, że pierwsze i drugie zajęcia z grami planszowymi , które odbędą się w II LO w Chrzanowie w miesiącu październiku`,
    date: '2018-06-22',
    img: null,
}];

const LinkInner = styled('span')`
    display: block;
    margin-top: 20px;
    color: blue;
`;

interface PropsType {
    mainView: boolean,
}

export class News extends React.PureComponent<PropsType> {
    render() {
        return (
            <React.Fragment>
                { this.renderList() }
                { this.renderLink() }
            </React.Fragment>
        );
    }

    private renderList() {
        const { mainView } = this.props;

        if (data.length < 1) {
            return null;
        }

        if (mainView) {
            return <NewsItem data={data[0]} />;
        }

        return data.map((item => <NewsItem key={item.date} data={item} />));
    }

    private renderLink() {
        const { mainView } = this.props;

        if (mainView && data.length > 1) {
            return (
                <React.Fragment>
                    <Link to="/aktualnosci">
                        <LinkInner>Więcej wiadomości</LinkInner>
                    </Link>

                    <hr/>
                </React.Fragment>
            );
        }
    }
}

import * as React from 'react';
import styled from 'react-emotion';
import { NewsItem, NewsItemType } from './NewsItem';
import { GridRowFull } from '../Common';
import { AppState } from 'AppState/AppState';

const NEWS_IN_MAIN_PAGE = 1;

const data: Array<NewsItemType> = [{
    title: 'Zajęcia w II LO w Chrzanowie na start!',
    /* content: `
        Z przyjemnością informuję, że pierwsze i drugie zajęcia z grami planszowymi ,
        które odbędą się w II LO w Chrzanowie w październiku
        będą bezpłatne. 
        Zapraszam młodzież i dzieci w wieku od lat 8 na 120 minut dobrej
        zabawy w piątek 12 i 26.10.2018r.
    `,
    */
    content: `
        Z przyjemnością informuję, że w roku szkolnym 2018/19 od października rozpoczyna działalność Klub Nowoczesnych Gier Planszowych.
        Zapraszam dzieci od lat 8 uczące się w szkołach podstawowych i młodzież szkół średnich na 120 minut dobrej rozgrywki i rozrywki.
        W październiku wstęp jest darmowy. Spotkania będą odbywały się cyklicznie 2 x w miesiącu w II LO  w Chrzanowie przy ul. Kardynała Wyszyńskiego 19.
        Szczegółowe informację dotyczące terminu zajęć podane zostaną wkrótce na stronie. 
    `,
    date: '2018-08-12'
}/*,{
    title: 'Wiadomosć nr 2 (starsza)',
    content: `Z przyjemnością informuję, że pierwsze i drugie zajęcia z grami planszowymi , które odbędą się w II LO w Chrzanowie w miesiącu październiku`,
    date: '2018-08-02',
},{
    title: 'Wiadomosć nr 3 (starsza)',
    content: `Z przyjemnością informuję, że pierwsze i drugie zajęcia z grami planszowymi , które odbędą się w II LO w Chrzanowie w miesiącu październiku`,
    date: '2018-06-22',
}*/];

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

        const listToShow = mainView ? data.slice(0, NEWS_IN_MAIN_PAGE) : data;

        return (
            <React.Fragment>
                { this.renderList(listToShow) }

                <GridRowFull>
                    { mainView && data.length > NEWS_IN_MAIN_PAGE ? this.renderLink() : null}
                    <hr/>
                </GridRowFull>

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
            <LinkInner onClick={this.onClick}>Więcej wiadomości</LinkInner>
        );
    }

    private onClick = () => {
        this.props.appState.setPage('news');
    }
}

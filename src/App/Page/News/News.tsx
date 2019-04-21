import * as React from 'react';
import styled from '@emotion/styled';
import { NewsItem, NewsItemType } from './NewsItem';
import { GridRowFull } from '../Common';
import { AppState } from 'AppState/AppState';

const NEWS_IN_MAIN_PAGE = 1;

const data: Array<NewsItemType> = [{
    title: 'Zajęcia 23 kwietnia są odwołane',
    content: 'W związku z przerwą w zajęciach lekcyjnych, spotkanie z nowoczesnymi grami planszowymi nie odbędzie się 23 kwietnia (podobnie jak to się stało z zajęciami 9 kwietnia). Informacja o ewentualnie terminie zastępczym zostanie podana na niniejszej stronie internetowej.',
    date: '2019-04-21',
}, {
    title: 'Kolejne zajęcia będą odbywały się we wtorki.',
    content: 'Szanowni rodzice korygujemy harmonogram zajęć z gier planszowych dla Szkoły Podstawowej nr 30. Kolejne będą odbywały się w następujących dniach: 9 i 23 kwiecień, 7 i 21 maj, 4 czerwiec. Godziny bez zmian t.j 14.30 - 16.30, sala nr 10.',
    date: '2019-04-07',
}, {
    title: 'Możesz wypożyczyć grę do domu',
    content: 'W zakładce [Wypożyczalnia] znajdą Państwo szczegóły dotyczące możliwości wypożyczenia gier planszowych do domu. Grę można odebrać na zajęciach i zwrócić dwa tygodnie później na kolejnych zajęciach. Ceny są bardzo atrakcyjne. Wymagana jest kaucja.',
    date: '2019-04-07'
}, {
    title: 'Zajęcia w Szkole P. Nr 30 przy ul. Konfederackiej 12',
    content: `
    Miło nam poinformować, że 12 lutego 2019r w Szkole Podstawowej nr 30 przy ul. Konfederackiej 12 ruszają zajęcia z nowoczesnych gier planszowych. Będą odbywać się w godzinach  14.30 – 16.30 w Sali nr 9. Kolejne przewidziane są na 26 luty, 12 i 26 marzec, 10 i 24 kwiecień, 8 i 22 maj oraz 5 czerwiec.
    
    Pierwsze zajęcia (12 lutego) będą bezpłatne. Każde kolejne to koszt 15zł.
    
    Zapraszamy!
`,
    date: '2019-02-05'
}, {
    title: 'Zapisy na zajęcia',
    content: `
        Serdecznie zapraszamy do zapisywania dzieci na odbywające się lub planowane zajęcia w Twojej Szkole.
        Na pozostawione dane kontaktowe otrzymasz informacje o dacie i godzinie pierwszych i kolejnych zajęć.
    `,
    date: '2018-11-18'
}, {
    title: "Gramy w Krakowie i Chrzanowie (Październik)",
    content: "Najbliższe spotkanie z grami planszowymi odbędzie się 23 października o godzinie 15.00 w Szkole Podstawowej nr 110 w Krakowie. Kolejne 24 października w SP nr 19 i XXVII LO w Krakowie o godz. 15.20 i 26 października w ILO w Chrzanowie. Wszystkie spotkania to bezpłatne zajęcia próbne. Będzie okazja żeby poznać światowe klasyki takie jak Splendor, Królestwo w Budowie, Carcassone, Kolejka lub inne. Serdecznie zapraszamy uczniów szkół podstawowych i średnich. Weź ze sobą siostrę , brata, koleżankę i kolegę. Zapraszamy!",
    date: '2018-10-14'
}, {
    title: "Planszówki w SP nr 19 i XXVII LO w Krakowie",
    content: "Zapraszamy dzieci od lat 8 i młodzież na pierwsze spotkanie z nowoczesnymi grami planszowymi, które odbędzie się w dniu  10 października (środa) o godzinie 15.20 do 17.20 w budynku Zespołu Szkół Ogólnokształcących przy ul. Senatorskiej 35 w Krakowie. Zaproś kolegów i koleżanki i rywalizujcie w emocjonujących rozgrywkach przy ciekawych grach planszowych. W październiku opłaty nie obowiązują.",
    date: '2018-09-18'
}, {
    title: 'Październik w II LO w Chrzanowie wstęp wolny',
    content: 'Pierwsze spotkanie z nowoczesnymi grami planszowymi odbędzie się w dniu  12października (piątek) o godzinie 15.30 w budynku II LO w Chrzanowie w Sali 04. Zagramy w super gry – dobra zabawa gwarantowana. Zapraszamy.',
    date: '2018-09-14'

}, {
    title: 'Gramy w Szkole Podstawowej nr 110 im. ks. Jana Twardowskiego w Krakowie',
    content: `Serdecznie zapraszam  na spotkanie z nowoczesnymi grami planszowymi, które odbędzie się w Szkole Podstawowej nr 110 w Krakowie. Zajęcia w październiku będą nieodpłatne.

Dokładna data i godzina zostanie podana wkrótce.
`,
    date: '2018-09-12'
}, {
    title: 'Zajęcia w II LO w Chrzanowie na start !',
    content: `
        Z przyjemnością informuję, że w roku szkolnym 2018/19 od października rozpoczyna działalność Klub Nowoczesnych Gier Planszowych.
        Zapraszam dzieci od lat 8 uczące się w szkołach podstawowych i młodzież szkół średnich na 120 minut dobrej rozgrywki i rozrywki.
        W październiku wstęp jest darmowy. Spotkania będą odbywały się cyklicznie 2 x w miesiącu w II LO  w Chrzanowie przy ul. Kardynała Wyszyńskiego 19.
        Szczegółowe informację dotyczące terminu zajęć podane zostaną wkrótce na stronie. 
    `,
    date: '2018-08-12'
}];

const LinkInner = styled('span')`
    display: block;
    color: blue;
    cursor: pointer;
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

                { mainView && data.length > NEWS_IN_MAIN_PAGE ? this.renderLink() : null}

                { mainView ? (
                    <GridRowFull>
                        <hr/>
                    </GridRowFull>
                ) : null }

            </React.Fragment>
        );
    }

    private renderList(listToShow: Array<NewsItemType>) {
        return listToShow.map(
            (item, index) => (
                <NewsItem key={item.title} data={item} showImg={index === 0} />
            )
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

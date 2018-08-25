import * as React from 'react';

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
            <div>
                news item ...
            </div>
        );
    }
}
import * as React from 'react';
import { Content, GridRowShort, GridImage } from '../Common';

const syrenki = require('./syrenki.png');

export class Lokalizacje extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <GridRowShort>
                    <Content>
                        <h2>Chrzanów</h2>
                        <p>II Liceum Ogólnokształcące</p>
	                    <p>ul. Kardynała Wyszyńskiego 19</p>
                        <p>sala nr 04</p>

                        <br />

                        <h2>Kraków</h2>
                    	<p>Szkoła Podstawowa nr 110</p>
                        <p>ul. Skwerowa 3</p>

                        <br />

                        <p>Zespół Szkół Ogólnokształcących nr 18</p>		
                        <p>Szkoła Podstawowa nr 19</p>
                        <p>XXVII Liceum Ogólnokształcące</p>
                        <p>ul. Senatorska 35</p>
				
                        <br/>
                        <br/>

                        <p>	Informacje o datach i godzinach podawane są na bieżaco w Aktualnościach</p>
                    
                    </Content>
                </GridRowShort>
                <GridImage src={syrenki} setMinHeight={false} />
            </React.Fragment>
        );
    }
}


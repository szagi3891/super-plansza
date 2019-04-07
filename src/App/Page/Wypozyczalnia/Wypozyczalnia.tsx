import * as React from 'react';
import { observer } from "mobx-react";
import { GridRowFull, Content } from '../Common';
import styled from '@emotion/styled';

const Header = styled('h2')`
    margin-bottom: 20px;
`;

const Table = styled('table')`
    width: 100%;
    border-collapse: collapse;

    td {
        border: 1px solid black;
        padding: 5px;
    }
`;

@observer
export class Wypozyczalnia extends React.Component {
    render() {
        return (
            <GridRowFull>
                <Content>

                <Header>Kontakt</Header>
                <p>OFERTA WYPOŻYCZALNI SUPERPLANSZA</p>
                <p>Wypożycz grę odbierając ją w dniu zajęć i ciesz się rozrywką w swoim domu przez 14 dni. Następnie zwróć grę w dniu kolejnych zajęć.</p>
                <p>Wypożyczając grę akceptujesz regulamin znajdujący się na stronie superplansza.pl</p>
                <p>Kaucja [B=150zł, C=100zł, D=50zł</p>
                <br/><br/>

                <Table>
                    <tbody>
                <tr>
                    <td>
                        <p ><b>L.p.</b></p>
                    </td>
                    <td>
                        <p ><b>Tytuł</b></p>
                    </td>
                    <td>
                        <p ><b>Od
                        ilu lat</b></p>
                    </td>
                    <td>
                        <p ><b>Kaucja</b></p>
                    </td>
                    <td>
                        <p ><b>Cena</b></p>
                        <p ><b>[zł/
                        2 tyg]</b></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >1</p>
                    </td>
                    <td>
                        <p>51 stan</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >2</p>
                    </td>
                    <td>
                        <p>6 bierze</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >3</p>
                    </td>
                    <td>
                        <p>Ardeny 1944</p>
                    </td>
                    <td>
                        <p >13</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >20</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >4</p>
                    </td>
                    <td>
                        <p>Bang (gra kościana)</p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >5</p>
                    </td>
                    <td>
                        <p>Carcassonne</p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >6</p>
                    </td>
                    <td>
                        <p>Cardline: Zwierzęta</p>
                    </td>
                    <td>
                        <p >7</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >7</p>
                    </td>
                    <td>
                        <p><span lang="en-US">Escape:
                        The Curse Of The Temple</span></p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >25</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p>K2</p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >9</p>
                    </td>
                    <td>
                        <p>K2: dodatek Broad Peak</p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >10</p>
                    </td>
                    <td>
                        <p>Kolejka</p>
                    </td>
                    <td>
                        <p >12</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >11</p>
                    </td>
                    <td>
                        <p>Kotek psotek</p>
                    </td>
                    <td>
                        <p >3</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >12</p>
                    </td>
                    <td>
                        <p>Królestwo w budowie</p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >B</p>
                    </td>
                    <td>
                        <p >20</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >13</p>
                    </td>
                    <td>
                        <p>List miłosny</p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >14</p>
                    </td>
                    <td>
                        <p>Looping loui</p>
                    </td>
                    <td>
                        <p >5</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >20</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >15</p>
                    </td>
                    <td>
                        <p>Misie</p>
                    </td>
                    <td>
                        <p >3</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >16</p>
                    </td>
                    <td>
                        <p>Neuroshima Duel</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >17</p>
                    </td>
                    <td>
                        <p>Obcy</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                    <td>
                        <p >B</p>
                    </td>
                    <td>
                        <p >25</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >18</p>
                    </td>
                    <td>
                        <p>Odbudowa Warszawy</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >25</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >19</p>
                    </td>
                    <td>
                        <p>Pędzące żółwie</p>
                    </td>
                    <td>
                        <p >5</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >20</p>
                    </td>
                    <td>
                        <p>Potwory do szafy</p>
                    </td>
                    <td>
                        <p >3</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >21</p>
                    </td>
                    <td>
                        <p>Przeciwieństwa</p>
                    </td>
                    <td>
                        <p >3</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >22</p>
                    </td>
                    <td>
                        <p>Pszczółki</p>
                    </td>
                    <td>
                        <p >4</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >23</p>
                    </td>
                    <td>
                        <p>Robinson Crusoe:
                        Przygoda na przeklętej wyspie</p>
                    </td>
                    <td>
                        <p >14</p>
                    </td>
                    <td>
                        <p >B</p>
                    </td>
                    <td>
                        <p >25</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >24</p>
                    </td>
                    <td>
                        <p>Roll for the Galaxy</p>
                    </td>
                    <td>
                        <p >13</p>
                    </td>
                    <td>
                        <p >B</p>
                    </td>
                    <td>
                        <p >25</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >25</p>
                    </td>
                    <td>
                        <p>Rummikub</p>
                    </td>
                    <td>
                        <p >7</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >26</p>
                    </td>
                    <td>
                        <p>Sabotażysta</p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >27</p>
                    </td>
                    <td>
                        <p>Sabotażysta - pojedynek</p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >28</p>
                    </td>
                    <td>
                        <p>Scrabble</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                    <td>
                        <p >B</p>
                    </td>
                    <td>
                        <p >25</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >29</p>
                    </td>
                    <td>
                        <p>Set</p>
                    </td>
                    <td>
                        <p >6</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >30</p>
                    </td>
                    <td>
                        <p>Space alert</p>
                    </td>
                    <td>
                        <p >12</p>
                    </td>
                    <td>
                        <p >B</p>
                    </td>
                    <td>
                        <p >25</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >31</p>
                    </td>
                    <td>
                        <p>Speed Cups</p>
                    </td>
                    <td>
                        <p >4</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >32</p>
                    </td>
                    <td>
                        <p>Splendor</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >33</p>
                    </td>
                    <td>
                        <p>Splendor mata</p>
                    </td>
                    <td>
                        <p >0</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >5</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>34</p>
                    </td>
                    <td>
                        <p>Tajniacy</p>
                    </td>
                    <td>
                        <p >14</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >35</p>
                    </td>
                    <td>
                        <p>Termity</p>
                    </td>
                    <td>
                        <p >10</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >20</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >36</p>
                    </td>
                    <td>
                        <p>Timeline Polska</p>
                    </td>
                    <td>
                        <p >8</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >37</p>
                    </td>
                    <td>
                        <p>Trzy małe świnki</p>
                    </td>
                    <td>
                        <p >3</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >20</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >38</p>
                    </td>
                    <td>
                        <p>Wilki i owce</p>
                    </td>
                    <td>
                        <p >7</p>
                    </td>
                    <td>
                        <p >D</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >39</p>
                    </td>
                    <td>
                        <p>Wysokie napięcie</p>
                    </td>
                    <td>
                        <p >12</p>
                    </td>
                    <td>
                        <p >B</p>
                    </td>
                    <td>
                        <p >25</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p >40</p>
                    </td>
                    <td>
                        <p>Yenga</p>
                    </td>
                    <td>
                        <p >6</p>
                    </td>
                    <td>
                        <p >C</p>
                    </td>
                    <td>
                        <p >15</p>
                    </td>
                </tr>
                </tbody>
                </Table>

                </Content>
            </GridRowFull>
        );
    }
}



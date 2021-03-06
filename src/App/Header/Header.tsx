import * as React from 'react';
import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

const photo01 = require('./fotodonagwka/N1adrenaline.jpg');
//const photo02 = require('./fotodonagwka/N2civ_box_3d.jpg');
//const photo03 = require('./fotodonagwka/N3hs_hex_duel.jpg');
const photo04 = require('./fotodonagwka/N4k2 blisko.jpg');
const photo05 = require('./fotodonagwka/N6-1163742_1920.jpg');
const photo06 = require('./fotodonagwka/N7domek_box3d.jpg');
//const photo07 = require('./fotodonagwka/Nk_3d.365162.800x0.jpg');
const photo08 = require('./fotodonagwka/Noll f g.jpg');
const photo09 = require('./fotodonagwka/NSpace Alert.jpg');
const photo10 = require('./fotodonagwka/NSpace-Alert.jpg');
const photo11 = require('./fotodonagwka/NSplendor-001-large.jpg');
const photo12 = require('./fotodonagwka/Nterra.jpg');
const photo13 = require('./fotodonagwka/Nythe-ilustracja-1.jpg');
const photo14 = require('./fotodonagwka/7DU_age2_PL.png');
const photo15 = require('./fotodonagwka/Npojedynek_3d.jpg');
const photo16 = require('./fotodonagwka/NUranopolis.jpg');

const photos = [
    photo01, photo04, photo05,
    photo06, photo08, photo09, photo10,
    photo11, photo12, photo13,
    photo14, photo15, photo16
];

interface ImageHeaderPropsType {
    show: boolean,
    src: string,
}

const Wrapper = styled('div')`
    /* width: 100%;
    height: 300px; */
    flex-grow: 1;
    position: relative;
`;

const ImageHeader = styled('div')<ImageHeaderPropsType>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: ${props => props.show ? '1' : '0'};
    transition: opacity 2s;
    background-image: url("${props => props.src}");
    background-size: cover;
    background-position: center;
`;

@observer
export class Header extends React.Component {
    @observable current: number = 0;

    constructor(props: {}) {
        super(props);

        setInterval(() => {
            this.current = this.offsetIndex(1);
        }, 7000);
    }

    private offsetIndex(offset: number): number {
        const newOffset = (this.current + offset) % photos.length;
        return newOffset < 0 ? newOffset + photos.length : newOffset;
    }

    render() {
        return (
            <Wrapper>
                { photos.map(this.renderItem)}
            </Wrapper>
        )
    }

    renderItem = (src: string, index: number) => {
        const { current } = this;

        if (index === this.offsetIndex(-1) || index === current || index === this.offsetIndex(1)) {
            return (
                <ImageHeader
                    key={index}
                    src={src}
                    show={current === index}
                />
            );
        }

        return null;
    }
}

import * as S from './style.js'; 

import TitleInput from '../components/input/TitleInput.js';
import ExplainInput from '../components/input/ExplainInput.js';
import ContentInput from '../components/input/ContentInput.js';
import GreenButton from '../components/button/GreenButton.js';
import WhiteButton from '../components/button/WhiteButton.js';

function New() {
    return (
        <S.NewDiv>
            <S.NewHeaderDiv>
                <TitleInput/>
                <S.NewHeaderButtonListDiv>
                    <GreenButton text = "저장하기" />
                    <WhiteButton text = "삭제하기" />
                </S.NewHeaderButtonListDiv>
            </S.NewHeaderDiv>

            <ExplainInput/>
            
            <ContentInput/>
        </S.NewDiv>
    )
}

export default New;
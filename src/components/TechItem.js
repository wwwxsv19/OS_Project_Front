import * as S from './style.js';

function TechItem({ Icon, techName }) {
    return (
        <S.TechItemDiv>
            <Icon/>
            <S.TechItemP>{techName}</S.TechItemP>
        </S.TechItemDiv>
    )
}

export default TechItem;
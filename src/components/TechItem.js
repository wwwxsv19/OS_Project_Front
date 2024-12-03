import * as S from './style.js';

function TechItem({ Icon, techName }) {
    return (
        <S.TechItemDiv>
            <Icon style = {{ margin: '0px auto'}}></Icon>
            <S.TechItemP>{techName}</S.TechItemP>
        </S.TechItemDiv>
    )
}

export default TechItem;
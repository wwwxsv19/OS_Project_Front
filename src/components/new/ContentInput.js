import * as S from '../style.js';

function ContentInput() {
    return (
        <S.ContentDiv>
            <S.ContentTextarea 
                contentEditable = 'true'
                placeholder = "메묘 본문을 작성해 주세묘..."
            />
        </S.ContentDiv>
    )
}

export default ContentInput;
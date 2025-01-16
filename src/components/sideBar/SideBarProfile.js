import * as S from '../style.js';

import defaultImg from '../../assets/profile.jpg';

function SideBarProfile({ userImg, userName }) {
    return (
        <S.SideBarProfileDiv>
            <S.SideBarProfileImg
                src = {userImg ? userImg : defaultImg} 
            />
            <S.SideBarProfileP>{userName? userName : '사용자'}</S.SideBarProfileP>
        </S.SideBarProfileDiv>
    )
}

export default SideBarProfile;
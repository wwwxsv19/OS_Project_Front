import * as S from './style.js';

import testImage from '../assets/testImg.jpg';

function SideBarItem () {
    return (
        <S.SideBarItem>
            <img src = {testImage} alt = 'TestImage' width = '30px' height = '30px'></img>
            <p style = {{ fontSize: '16px', fontWeight: '700' }}>name</p>
        </S.SideBarItem>
    )
}

function SideBarItemList() {
    return (
        <div style = {{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <p style = {{ fontSize: '16px', fontWeight: '700', color: '#000000' }}>itemListName</p>
            <div style = {{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <SideBarItem></SideBarItem>
                <SideBarItem></SideBarItem>
            </div>
        </div>
    )
}

function SideBar() {
    return (
        <S.SideBarDiv>
            <SideBarItemList></SideBarItemList>
        </S.SideBarDiv>
    )
}

export default SideBar;
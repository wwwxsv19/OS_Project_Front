import * as S from './style.js';

import testImage from '../assets/testImg.jpg';

function SideBarItem () {
    return (
        <div style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src = {testImage} alt = 'TestImage' width = '30px' height = '30px'></img>
            <p>sideBarItem</p>
        </div>
    )
}

function SideBar() {
    return (
        <S.SideBarDiv>
            <SideBarItem></SideBarItem>
            <SideBarItem></SideBarItem>
        </S.SideBarDiv>
    )
}

export default SideBar;
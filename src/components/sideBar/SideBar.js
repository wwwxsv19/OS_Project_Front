import * as S from '../style.js';

import SideBarProfile from './SideBarProfile.js';
import SideBarGreenButtonList from './SideBarGreenButton.js';
import SideBarGrayButtonList from './SideBarGrayButton.js';

import { ReactComponent as Myo } from '../../assets/icons/myo.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting.svg';
import { ReactComponent as QuestionIcon } from '../../assets/icons/question.svg';
import { ReactComponent as DevelopIcon } from '../../assets/icons/develop.svg';

function DefaultButtonList() {
    const listName = ''
    const count = 1;
    const iconList = [HomeIcon];
    const buttonNameList = ['홈'];
    const pathList = ['/new']
    
    return (
        <SideBarGreenButtonList
            listName = {listName}
            count = {count} 
            iconList = {iconList}
            buttonNameList = {buttonNameList}
            pathList = {pathList}
        />
    )
}

function PageButtonList() {
    const listName = '내 메묘'
    
    // 불러온 메모 데이터에 맞게 count, iconList, pathList 업데이트
    const count = 4;
    const iconList = [Myo, Myo, Myo, Myo];
    const buttonNameList = ['메묘 1', '메묘 2', '메묘 3', '메묘 4'];
    const pathList = ['/1', '/2', '/3', '/4']
    
    return (
        <SideBarGreenButtonList
            listName = {listName}
            count = {count} 
            iconList = {iconList}
            buttonNameList = {buttonNameList}
            pathList= {pathList}
        />
    )
}

function ETCButtonList() {
    const count = 3;
    const iconList = [SettingIcon, QuestionIcon, DevelopIcon];
    const buttonNameList = ['설정', '문의하기', '개발 과정 보기'];
    const pathList = ['/setting', '/question', '/']

    return (
        <SideBarGrayButtonList
            count = {count}
            iconList = {iconList}
            buttonNameList = {buttonNameList}
            pathList = {pathList}
        />
    )
}

function SideBar() {
    return (
        <S.SideBarDiv>
            <SideBarProfile/>
            <DefaultButtonList/>
            <PageButtonList/>
            <ETCButtonList/>
        </S.SideBarDiv>
    )
}

export default SideBar;
import * as S from '../style.js';

function SideBarGrayButton({ Icon, ButtonName }) {
    return (
        <S.SideBarGrayButtonDiv>
            <Icon width = '24px' height = '24px' fill = '#6B6B6B'/>
            <S.SideBarGrayButtonP>{ButtonName}</S.SideBarGrayButtonP>
        </S.SideBarGrayButtonDiv>
    )
}

function SideBarGrayButtonList({ count, iconList, buttonNameList }) {
    return (
        <S.SideBarGrayButtonListDivP>
            { Array.from({ length: count }).map((_, index) => (
                <SideBarGrayButton
                    key = {index}
                    Icon = {iconList[index]}
                    ButtonName = {buttonNameList[index]}
                />
            ))}
        </S.SideBarGrayButtonListDivP>
    )
}

export default SideBarGrayButtonList; 
import * as S from '../style.js';

function SideBarGreenButton({ Icon, ButtonName }) {
    return (
        <S.SideBarGreenButtonDiv>
            <Icon width = '30px' height = '30px'/>
            <S.SideBarGreenButtonP>{ButtonName}</S.SideBarGreenButtonP>
        </S.SideBarGreenButtonDiv>
    )
}

function SideBarGreenButtonList({ listName, count, iconList, buttonNameList }) {
    return (
        <S.SideBarGreenButtonListDivP>
            <S.SideBarListP>{listName}</S.SideBarListP>

            <S.SideBarGreenButtonListDivC>
                { Array.from({ length: count }).map((_, index) => (
                    <SideBarGreenButton
                        key = {index}
                        Icon = {iconList[index]}
                        ButtonName = {buttonNameList[index]}
                    />
                ))}
            </S.SideBarGreenButtonListDivC>
        </S.SideBarGreenButtonListDivP>
    )
}

export default SideBarGreenButtonList; 
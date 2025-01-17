import { useNavigate } from 'react-router-dom';

import * as S from '../style.js';

function SideBarGrayButton({ Icon, ButtonName, path }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <S.SideBarGrayButtonDiv onClick = {handleClick}>
            <Icon width = '24px' height = '24px' fill = '#6B6B6B'/>
            <S.SideBarGrayButtonP>{ButtonName}</S.SideBarGrayButtonP>
        </S.SideBarGrayButtonDiv>
    )
}

function SideBarGrayButtonList({ count, iconList, buttonNameList, pathList }) {
    return (
        <S.SideBarGrayButtonListDivP>
            { Array.from({ length: count }).map((_, index) => (
                <SideBarGrayButton
                    key = {index}
                    Icon = {iconList[index]}
                    ButtonName = {buttonNameList[index]}
                    path = {pathList[index]}
                />
            ))}
        </S.SideBarGrayButtonListDivP>
    )
}

export default SideBarGrayButtonList; 
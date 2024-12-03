import * as S from './style.js';
import TechItem from '../components/TechItem.js'; 

import { ReactComponent as ReactIcon } from '../assets/react.svg';
import { ReactComponent as SpringIcon } from '../assets/spring.svg';
import { ReactComponent as MysqlIcon } from '../assets/mysql.svg';
import { ReactComponent as FigmaIcon } from '../assets/figma.svg';

function Tech() {
    return (
        <div style = {{ marginTop: "110px" }}>
            <S.HomeP2>사용 기술 스택</S.HomeP2>
            <S.TechDiv>
                <TechItem Icon = {ReactIcon} techName = "React"></TechItem>
                <TechItem Icon = {SpringIcon} techName = "Spring"></TechItem>
                <TechItem Icon = {MysqlIcon} techName = "Mysql"></TechItem>
                <TechItem Icon = {FigmaIcon} techName = "Figma"></TechItem>
            </S.TechDiv>
        </div>
    )
}

function Home() {
    return (
        <div>
            <S.HomeH1>Welcome!</S.HomeH1>
            <S.HomeP1>반갑습니다! 2308 박강은의 MEMO 서비스입니다.</S.HomeP1>
            <Tech></Tech>
        </div>
    );
}

export default Home;
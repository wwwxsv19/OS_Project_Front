import TechItem from '../components/TechItem.js'; 
import * as S from './style.js';

// SVG
import { ReactComponent as ReactIcon } from '../assets/react.svg';
import { ReactComponent as SpringIcon } from '../assets/spring.svg';
import { ReactComponent as MysqlIcon } from '../assets/mysql.svg';
import { ReactComponent as FigmaIcon } from '../assets/figma.svg';

function TechItemList() {
    return (
        <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '34px' }}>
            <S.TechP2>사용 기술 스택</S.TechP2>
            <S.TechItemListDiv>
                <TechItem Icon = {ReactIcon} techName = 'React'></TechItem>
                <TechItem Icon = {SpringIcon} techName = 'Spring'></TechItem>
                <TechItem Icon = {MysqlIcon} techName = 'Mysql'></TechItem>
                <TechItem Icon = {FigmaIcon} techName = 'Figma'></TechItem>
            </S.TechItemListDiv>
        </div>
    )
}

function Tech() {
    return (
        <S.TechDiv>    
            <S.TechTextDiv>
                <S.TechH1>Welcome!</S.TechH1>
                <S.TechP1>반갑습니다! 2308 박강은의 MEMO 서비스입니다.</S.TechP1>
            </S.TechTextDiv>
            <TechItemList></TechItemList>
        </S.TechDiv>
    );
}

export default Tech;
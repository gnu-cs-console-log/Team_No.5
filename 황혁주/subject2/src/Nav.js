function Nav(){
    return(
        <nav>
        <div className="left_nav">
            <button className="btn btn-outline-light">뒤로가기</button>
            <button className="btn btn-outline-light">홈</button>
            <button className="btn btn-outline-light">게임</button>
            <button className="btn btn-outline-light">엔터테인먼트</button>
            <button className="btn btn-outline-light">생산성</button>
            <button className="btn btn-outline-light">특가</button>
        
        </div>
        <div class="right_nav">
            <button id="searchbutton" className="btn btn-outline-light">검색</button>
            <button className="btn btn-outline-light">---</button>
        </div>
    </nav>
    );
}

export default Nav;
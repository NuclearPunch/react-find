
const style = ['', '모던', '북유럽', '클래식', '프로방스&로맨틱', '빈티지', '한국&아시아', '미니멀리즘', '인더스트리얼', '기타', '앤틱', '내추럴']

const spaces1 = [
    {id: 0, value: 1, title: "상업공간", imgSrc: "/img/concierge/Retail.png",    subTitle: "Retail",    selected:false},
    {id: 2, value: 3, title: "주거공간", imgSrc: "/img/concierge/Residence.png", subTitle: "Residence", selected:false},
    {id: 1, value: 2, title: "사무공간", imgSrc: "/img/concierge/Office.png",    subTitle: "Office",    selected:false},
    // {id: 4, title: "부분시공", imgSrc: "/img/concierge/Remdeling.png", subTitle: "Remdeling", selected:false},
]

const spaces2 = [
    {id: 0,  value: 1,title: "요식/식당", subTitle: "Retail", selected:false, parentId: 1},
    {id: 1,  value: 2,title: "상업공간",  subTitle: "Residence", selected:false, parentId: 1},
    {id: 2,  value: 3,title: "교육공간",  subTitle: "Office", selected:false, parentId: 1},
    {id: 3,  value: 4,title: "의료공간",  subTitle: "Remdeling", selected:false, parentId: 1},
    {id: 4,  value: 5,title: "운동공간",  subTitle: "Retail", selected:false, parentId: 1},
    {id: 5,  value: 6,title: "숙박공간",  subTitle: "Retail", selected:false, parentId: 1},
    {id: 6,  value: 7,title: "금융/중개", subTitle: "Retail", selected:false, parentId: 1},
    {id: 7,  value: 1,title: "사무공간",  subTitle: "Retail", selected:false, parentId: 3},
    {id: 8,  value: 2,title: "특수업무공간", subTitle: "Retail", selected:false, parentId: 3},
    {id: 9,  value: 1,title: "공동주택", subTitle: "Retail", selected:false, parentId: 2},
    {id: 10, value: 2,title: "단독주택", subTitle: "Retail", selected:false, parentId: 2},
]

const spaces3 = [
    {subTitle: "Retail",  value: 1, parentId: 0, id: 0, title: '카페', selected:false},                     
    {subTitle: "Retail",  value: 2, parentId: 0, id: 1, title: '프렌차이즈', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 0, id: 2, title: '레스토랑', selected:false},
    {subTitle: "Retail",  value: 4, parentId: 0, id: 3, title: '일반음식점', selected:false},
    {subTitle: "Retail",  value: 5, parentId: 0, id: 4, title: 'Bar/Club', selected:false},
    {subTitle: "Retail",  value: 6, parentId: 0, id: 5, title: '주점/호프/펍', selected:false},
    {subTitle: "Retail",  value: 7, parentId: 0, id: 6, title: '기타 (요식/식당)' , selected:false},

    {subTitle: "Retail",  value: 1, parentId: 1, id: 7, title: '패션', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 1, id: 8, title: '뷰티', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 1, id: 9, title: '일반매장', selected:false},
    {subTitle: "Retail",  value: 4, parentId: 1, id: 10, title: '백화점/쇼핑몰', selected:false},
    {subTitle: "Retail",  value: 5, parentId: 1, id: 11, title: '전시회 부스', selected:false},
    {subTitle: "Retail",  value: 6, parentId: 1, id: 12, title: '팝업스토어', selected:false},
    {subTitle: "Retail",  value: 7, parentId: 1, id: 13, title: '기타 (상업공간)' ,selected:false},

    {subTitle: "Retail",  value: 1, parentId: 2, id: 14, title: '학원', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 2, id: 15, title: '독서실', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 2, id: 16, title: '유치원/어린이집', selected:false},
    {subTitle: "Retail",  value: 4, parentId: 2, id: 17, title: '연수/수련원', selected:false},
    {subTitle: "Retail",  value: 5, parentId: 2, id: 18, title: '학교/대학', selected:false},
    {subTitle: "Retail",  value: 6, parentId: 2, id: 19, title: '기타 (교육공간)' , selected:false},

    {subTitle: "Retail",  value: 1, parentId: 3, id: 20, title: '일반병원/의원', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 3, id: 21, title: '한방병원/한의원', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 3, id: 22, title: '성형외과', selected:false},
    {subTitle: "Retail",  value: 4, parentId: 3, id: 23, title: '소아/내과', selected:false},
    {subTitle: "Retail",  value: 5, parentId: 3, id: 24, title: '치과', selected:false},
    {subTitle: "Retail",  value: 6, parentId: 3, id: 25, title: '동물병원', selected:false},
    {subTitle: "Retail",  value: 7, parentId: 3, id: 26, title: '약국', selected:false},
    {subTitle: "Retail",  value: 8, parentId: 3, id: 27, title: '기타 (의료공간)' , selected:false},

    {subTitle: "Retail",  value: 1, parentId: 4, id: 28, title: '휘트니스/요가', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 4, id: 29, title: '놀이형 공간', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 4, id: 30, title: '골프연습장', selected:false},
    {subTitle: "Retail",  value: 4, parentId: 4, id: 31, title: '체육도장', selected:false},
    {subTitle: "Retail",  value: 5, parentId: 4, id: 32, title: '탁구/당구/볼링장', selected:false},
    {subTitle: "Retail",  value: 6, parentId: 4, id: 33, title: '기타 (운동공간)' , selected:false},

    {subTitle: "Retail",  value: 1, parentId: 5, id: 34, title: '호텔/모텔/레지던스', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 5, id: 35, title: '게스트하우스', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 5, id: 36, title: '펜션', selected:false},
    {subTitle: "Retail",  value: 4, parentId: 5, id: 37, title: '기타 (숙박공간)', selected:false},

    {subTitle: "Retail",  value: 1, parentId: 6, id: 38, title: '금융(은행, 증권)', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 6, id: 39, title: '중개사무소(부동산 등)', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 6, id: 40, title: '기타 (금융/중개)', selected:false},
 
    {subTitle: "Retail",  value: 1, parentId: 7, id: 41, title: '사옥', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 7, id: 42, title: '일반 사무실', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 7, id: 43, title: '기타 (사무공간)', selected:false},
 
    {subTitle: "Retail",  value: 1, parentId: 8, id: 44, title: '방송/사진 스튜디오', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 8, id: 45, title: '음향/레코딩 스튜디오', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 8, id: 46, title: '컨트롤룸/서버룸', selected:false},
    {subTitle: "Retail",  value: 4, parentId: 8, id: 47, title: '기타 (특수업무공간)', selected:false},

    {subTitle: "Retail",  value: 1, parentId: 9, id: 48, title: '아파트/주상복합', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 9, id: 49, title: '빌라/연립주택', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 9, id: 50, title: '오피스텔/원룸', selected:false},
    {subTitle: "Retail",  value: 4, parentId: 9, id: 51, title: '기타 (공동주택)', selected:false},

    {subTitle: "Retail",  value: 1, parentId: 10, id: 52, title: '일반 단독주택', selected:false},
    {subTitle: "Retail",  value: 2, parentId: 10, id: 53, title: '협소주택', selected:false},
    {subTitle: "Retail",  value: 3, parentId: 10, id: 54, title: '별장/전원주택', selected:false},
    {subTitle: "Retail",  value: 4, parentId: 10, id: 55, title: '타운하우스', selected:false},
    {subTitle: "Retail",  value: 5, parentId: 10, id: 56, title: '한옥', selected:false},
    {subTitle: "Retail",  value: 6, parentId: 10, id: 57, title: '기타 (단독주택)', selected:false},
]

export default{
    spaces1  : spaces1,
    spaces2  : spaces2,
    spaces3  : spaces3,
    style    : style,
}

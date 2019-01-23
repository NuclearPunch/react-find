
const style = [
        {id: 1, title: "모던", imgSrc: "/img/concierge/style1.png",    subTitle: "Mordern",    selected:false},
        {id: 2, title: "북유럽", imgSrc: "/img/concierge/style2.png", subTitle: "Northern European", selected:false},
        {id: 3, title: "클래식", imgSrc: "/img/concierge/style3.png",    subTitle: "Classic",    selected:false},
        {id: 4, title: "프로방스&로맨틱", imgSrc: "/img/concierge/style4.png",    subTitle: "Provence & Romantic", selected:false},
        {id: 5, title: "빈티지", imgSrc: "/img/concierge/style5.png", subTitle: "Vintage", selected:false},
        {id: 6, title: "한국&아시아", imgSrc: "/img/concierge/style6.png",    subTitle: "Korean & Asian",    selected:false},
        {id: 7, title: "미니멀리즘", imgSrc: "/img/concierge/style7.png",    subTitle: "Minimalism",    selected:false},
        {id: 8, title: "인더스트리얼", imgSrc: "/img/concierge/style8.png", subTitle: "Industrial", selected:false},
        {id: 9, title: "기타", imgSrc: "/img/concierge/style9.png",    subTitle: "Etc",    selected:false},
        {id: 10, title: "앤틱", imgSrc: "/img/concierge/style10.png",    subTitle: "Antique",    selected:false},
        {id: 11, title: "내추럴", imgSrc: "/img/concierge/style11.png", subTitle: "Natural", selected:false},
    ]
   
const spaces1 = [
    {id: 0, value: 1, title: "상업공간", imgSrc: "/img/concierge/Retail.png",    subTitle: "Retail",    selected:false},
    {id: 2, value: 3, title: "주거공간", imgSrc: "/img/concierge/Residence.png", subTitle: "Residence", selected:false},
    {id: 1, value: 2, title: "사무공간", imgSrc: "/img/concierge/Office.png",    subTitle: "Office",    selected:false},
    // {id: 4, title: "부분시공", imgSrc: "/img/concierge/Remdeling.png", subTitle: "Remdeling", selected:false},
]

const spaces2 = [
    {id: 0,  value: 1, title: "요식/식당", subTitle: "restaurant", selected:false, parentId: 0},
    {id: 1,  value: 2, title: "상업공간", subTitle: "Retail", selected:false, parentId: 0},
    {id: 2,  value: 3, title: "교육공간", subTitle: "education", selected:false, parentId: 0},
    {id: 3,  value: 4, title: "의료공간", subTitle: "Remdeling", selected:false, parentId: 0},
    {id: 4,  value: 5, title: "운동공간", subTitle: "Retail", selected:false, parentId: 0},
    {id: 5,  value: 6, title: "숙박공간", subTitle: "Retail", selected:false, parentId: 0},
    {id: 6,  value: 7, title: "금융/중개", subTitle: "Retail", selected:false, parentId: 0},
    {id: 7,  value: 1, title: "사무공간", subTitle: "Retail", selected:false, parentId: 1},
    {id: 8,  value: 2, title: "특수업무공간", subTitle: "Retail", selected:false, parentId: 1},
    {id: 9,  value: 1, title: "공동주택", subTitle: "Retail", selected:false, parentId: 2},
    {id: 10, value: 2, title: "단독주택", subTitle: "Retail", selected:false, parentId: 2},

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


	function srcConvert(str, opt) {
		
		if (!str) {
			return '';
		}
		if (!/^\/file\/download/.test(str)) {
			return str;
		}
		if (!opt) {
			opt = 1;
		}
		var match = str.match(/\/file\/download\/(\w+\.\w{2,5})/),
			result;


		match = match? match[1] : str;
		switch (opt) {
			case 1:
				result = '/file/download/small-' + match;
				break;

			case 2:
				result = '/file/download/medium-' + match;
				break;

			case 3:
				result = '/file/download/large-' + match;
				break;

			default:
				throw new Error('src2convert ' + opt + ' is default');
        }
        
		return result;
    }//end of srcConvert
    
    function isNumeric(text, option) {
		// 좌우 trim(공백제거)을 해준다.
		text = String(text).replace(/^\s+|\s+$/g, "");
		let regex;
		if(typeof option.toString() === "undefined" || option.toString() === "1"){
			// 모든 10진수 (부호 선택, 자릿수구분기호 선택, 소수점 선택)
			regex = /^[+]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
		}else if(option.toString() === "2"){
			// 부호 미사용, 자릿수구분기호 선택, 소수점 선택
			regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
		}else if(option.toString() === "3"){
			// 부호 미사용, 자릿수구분기호 미사용, 소수점 선택
			regex = /^[0-9]+(\.[0-9]+)?$/g;
		}else{
			// only 숫자만(부호 미사용, 자릿수구분기호 미사용, 소수점 미사용)
			regex = /^[0-9]$/g;
		}
		
		if( regex.test(text) ){
			text = text.replace(/,/g, "");
			return isNaN(text) ? false : true;
		} else { 
			return false;  
		}
	}

    function dehtmlSpecialChars(text) {

		if (!text) {

			return '';
		}
		if ( isNumeric(text, 1) ) {
			//text = String(text);

			text = text.toString();
			return text;
		}
        if ( typeof text != 'string' ) {
            return text;
        }

		return text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'");
	}//end of dehtmlSpecialChars
    const career = ['1년 미만', '1년 이상 3년 미만', '3년 이상 5년 미만', '5년 이상 10년 미만', '10년 이상 20년 미만', '20년 이상'];
    const locationMap = {
		0: '전세계', 
		82000000: '전국',


		82001000: '서울',

		82001001: '강남구',
		82001002: '강동구',
		82001003: '강북구',
		82001004: '강서구',
		82001005: '관악구',
		82001006: '광진구',
		82001007: '구로구',
		82001008: '금천구',
		82001009: '노원구',
		82001010: '도봉구',
		82001011: '동대문구',
		82001012: '동작구',
		82001013: '마포구',
		82001014: '서대문구',
		82001015: '서초구',
		82001016: '성동구',
		82001017: '성북구',
		82001018: '송파구',
		82001019: '양천구',
		82001020: '영등포구',
		82001021: '용산구',
		82001022: '은평구',
		82001023: '종로구',
		82001024: '중구',
		82001025: '중랑구',

		82002000: '경기',

		82002001: '가평군',
		82002002: '고양시 덕양구',
		82002003: '고양시 일산동구',
		82002004: '고양시 일산서구',
		82002005: '과천시',
		82002006: '광명시',
		82002007: '광주시',
		82002008: '구리시',
		82002009: '군포시',
		82002010: '김포시',
		82002011: '남양주시',
		82002012: '동두천시',
		82002013: '부천시 소사구',
		82002014: '부천시 오정구',
		82002015: '부천시 원미구',
		82002016: '성남시 분당구',
		82002017: '성남시 수정구',

		82002018: '안산시 단원구',
		82002019: '안산시 상록구',
		82002020: '안성시',
		82002021: '안양시 동안구',
		82002022: '안양시 만안구',
		82002023: '양주시',
		82002024: '용인시 처인구',
		82002025: '의왕시',
		82002026: '의정부시',
		82002027: '이천시',
		82002028: '파주시',
		82002029: '평택시',
		82002030: '포천시',
		82002031: '하남시',
		82002032: '화성시',

        82002033: '성남시 중원구',
        82002034: '수원시 장안구',
        82002035: '수원시 권선구',
        82002036: '수원시 팔달구',
        82002037: '수원시 영통구',
        82002038: '시흥시',
        82002039: '양평군',
        82002040: '여주시',
        82002041: '연천군',
        82002042: '오산시',
        82002043: '용인시 기흥구',
        82002044: '용인시 수지구',


		82003000: '인천',

		82003001: '강화구',
		82003002: '계양구',
		82003003: '남구',
		82003004: '남동구',
		82003005: '동구',
		82003006: '부평구',
		82003007: '서구',
		82003008: '연수구',
		82003009: '옹진군',
		82003010: '중구',


		82004000: '강원',

		82004001: '강릉시',
		82004002: '고성군',
		82004003: '동해시',
		82004004: '삼척시',
		82004005: '속초시',
		82004006: '양구군',
		82004007: '양양군',
		82004008: '영월군',
		82004009: '원주시',
		82004010: '인제군',
		82004011: '정선군',
		82004012: '철원군',
		82004013: '춘천시',
		82004014: '태백시',
		82004015: '평창군',
		82004016: '홍천군',
		82004017: '화천군',
		82004018: '횡성군',


		82005000: '대전',

		82005001: '대덕구',
		82005002: '동구',
		82005003: '서구',
		82005004: '유성구',
		82005005: '중구',


		82006000: '세종',

		82006001: '세종시',


		82007000: '충남',

		82007001: '계룡시',
		82007002: '공주시',
		82007003: '금산군',
		82007004: '논산시',
		82007005: '당진시',
		82007006: '보령시',
		82007007: '부여군',
		82007008: '서산시',
		82007009: '서천군',
		82007010: '아산시',
		82007011: '예산군',
		82007012: '천안시 동남구',
		82007013: '천안시 서북구',
		82007014: '청양군',
		82007015: '태양군',
		82007016: '홍성군',


		82008000: '충북',
		82008001: '괸산군',
		82008002: '단양군',
		82008003: '보은군',
		82008004: '영동군',
		82008005: '옥천군',
		82008006: '음성군',
		82008007: '제천시',
		82008008: '증평군',
		82008009: '진천군',
		82008010: '청주시 상당구',
		82008011: '청주시 서원구',
		82008012: '청주시 청원구',
		82008013: '청주시 흥덕구',
		82008014: '충주시',


		82009000: '부산',
		82009001: '강서구',
		82009002: '금정구',
		82009003: '기장군',
		82009004: '남구',
		82009005: '동구',
		82009006: '동래구',
		82009007: '부산 진구',
		82009008: '북구',
		82009009: '사상구',
		82009010: '사하구',
		82009011: '서구',
		82009012: '수영구',
		82009013: '연제구',
		82009014: '영도구',
		82009015: '중구',
		82009016: '해운대구',


		82010000: '울산',

		82010001: '남구',
		82010002: '동구',
		82010003: '북구',
		82010004: '울주군',
		82010005: '중구',


		82011000: '경남',

		82011001: '거제시',
		82011002: '거창군',
		82011003: '고성군',
		82011004: '김해시',
		82011005: '남해군',
		82011006: '밀양시',
		82011007: '사천시',
		82011008: '산청군',
		82011009: '양산시',
		82011010: '의령군',
		82011011: '진주시',
		82011012: '창녕군',
		82011013: '창원시 마산합포구',
		82011014: '창원시 마사회원구',
		82011015: '창원시 성산구',
		82011016: '창원시 의창구',
		82011017: '창원시 진해구',
		82011018: '통영시',
		82011019: '하동군',
		82011020: '함안군',
		82011021: '함양군',
		82011022: '합천군',


		82012000: '경북',

		82012001: '경산시',
		82012002: '경주시',
		82012003: '고령군',
		82012004: '구미시',
		82012005: '군위군',
		82012006: '김천시',
		82012007: '문경시',
		82012008: '봉화군',
		82012009: '상주시',
		82012010: '성주군',
		82012011: '안동시',
		82012012: '영덕군',
		82012013: '영양군',
		82012014: '영주시',
		82012015: '영천시',
		82012016: '에천군',
		82012017: '울릉군',
		82012018: '울진군',
		82012019: '의성군',
		82012020: '청도군',
		82012021: '청송군',
		82012022: '칠곡군',
		82012023: '포항시 남구',
		82012024: '포항시 북구',


		82013000: '대구',

		82013001: '남구',
		82013002: '달서구',
		82013003: '달성군',
		82013004: '동구',
		82013005: '북구',
		82013006: '서구',
		82013007: '수성수',
		82013008: '중구',


		82014000: '광주',

		82014001: '광산구',
		82014002: '남구',
		82014003: '동구',
		82014004: '북구',
		82014005: '서구',


		82015000: '전남',

		82015001: '강진군',
		82015002: '고흥군',
		82015003: '곡성군',
		82015004: '광양시',
		82015005: '구례군',
		82015006: '나주시',
		82015007: '담양군',
		82015008: '목포시',
		82015009: '무안군',
		82015010: '보성군',
		82015011: '순천시',
		82015012: '신안군',
		82015013: '여수시',
		82015014: '영광군',
		82015015: '영암군',
		82015016: '완도군',
		82015017: '장성군',
		82015018: '장흥군',
		82015019: '진도군',
		82015020: '함평군',
		82015021: '해남군',
		82015022: '화순군',


		82016000: '전북',

		82016001: '고창군',
		82016002: '군산시',
		82016003: '김제시',
		82016004: '남원시',
		82016005: '무주군',
		82016006: '부안군',
		82016007: '순창군',
		82016008: '완주군',
		82016009: '익산시',
		82016010: '임실군',
		82016011: '장수군',
		82016012: '전주시 덕진구',
		82016013: '전주시 완산구',
		82016014: '정읍시',
		82016015: '진안군',


		82017000: '제주',

		82017001: '서귀포시',
		82017002: '제주시'
    };
    const specialty = {
		interior: {
			name: '인테리어',
			interiorFull: '디자인 + 시공',
			interiorDesign: '디자인',
			interiorContractor: '시공',
			interiorStyling: '스타일링',
            interiorPart: '부분 의뢰'
		},
	
    };
    const mainSpecialty = ['', '상업공간', '주거공간', '업무공간', '기타공간'];
	const businessType = ['법인사업자', '개인/팀', '개인사업자'];

	function numberComma(number) {
		if(number < 1){
			return 0;
		}
		return removeComma(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	function removeComma(number) {
		return parseInt(number.toString().replace(/,/g,""));
	}

	const dayCode = {
		1: {
			name: '수',
			date: '22',
		},
		2: {
			name: '목',
			date: '23',
		},
		3: {
			name: '금',
			date: '24',
		},
		4: {
			name: '토',
			date: '25',
		},
		5: {
			name: '일',
			date: '26',
		},
	
    };

	
	const timeCode = {
		1: {
			value: '11:00 ~ 11:50',
		},
		2: {
			value: '12:00 ~ 12:50',
		},
		3: {
			value: '13:00 ~ 13:50',
		},
		4: {
			value: '14:00 ~ 14:50',
		},
		5: {
			value: '15:00 ~ 15:50',
		},
		6: {
			value: '16:00 ~ 16:50',
		},
		7: {
			value: '17:00 ~ 17:50',
		},
	
    };


export default{
    spaces1  : spaces1,
    spaces2  : spaces2,
    spaces3  : spaces3,
    style    : style, 
    srcConvert : srcConvert,
    dehtmlSpecialChars : dehtmlSpecialChars,
    career : career,
    locationMap : locationMap,
    specialty : specialty,
    mainSpecialty : mainSpecialty,
	businessType : businessType,
	numberComma : numberComma,
	removeComma : removeComma,
	dayCode		: dayCode,
	timeCode	: timeCode,
}

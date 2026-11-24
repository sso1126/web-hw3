/* // part A : 영화 데이터 10건
const titles = [
    // 내 인생 영화
    "너의 이름은",
    "하울의 움직이는 성",
    "목소리의 형태",
    "마루 밑 아리에티",
    "주토피아",
    
    // 박스 오피스 1~5
    "극장판 치이카와: 인어 섬의 비밀",
    "암살자(들)",
    "실낙원",
    "타짜: 벨제붑의 노래",
    "클레이페이스"
];

const years = [
    2026,
    2016,
    1997,
    2024,
    1997,

    2026,
    2026,
    2026,
    2026,
    2026
];

const ratings = [
    7.1,
    8.4,
    8.2,
    6.9,
    8.3,

    7.1,
    7.2,
    8.0,
    7.0,
    7.5
];

const audiences = [
    0,
    0,
    0,
    0,
    0,

    23394977,
    3382132,
    112193,
    2006488,
    84051
];
*/



// Part B : 영화 객체 10건(Part A와 같은 순서)
const movies = [
    // 내 인생 영화
    {
        title: "너의 이름은", year: 2016, date: "2016-07-01", rating: 8.4,
        audience: 0, poster: "/2DJCufz3Oa703PbLjNX1pM6MCG2.jpg", type: "mine", rank: null, overview: "시골 마을에 사는 소녀 미츠하와 도쿄에 사는 소년 타키는 서로의 몸이 바뀌는 꿈을 꾸기 시작한다. 처음에는 혼란스러워하던 두 사람은 점차 상대방의 삶에 적응하며 서로에게 호감을 느끼게 된다. 하지만 어느 날, 두 사람은 서로의 존재를 기억하지 못하게 되고, 그들은 다시 만나기 위해 시간을 거슬러 운명적인 여정을 시작한다."
    },
    {
        title: "하울의 움직이는 성", year: 2004, date: "2004-09-09", rating: 8.3,
        audience: 0, poster: "/xiz6TiSduvR1U3VLfWVlBEdT9fO.jpg", type: "mine", rank: null, overview: "젊은 마법사 하울과 소녀 소피의 사랑 이야기를 그린 판타지 애니메이션. 소피는 마법사 하울에게 저주를 받아 노파로 변하게 되고, 하울의 움직이는 성에서 함께 살게 된다. 두 사람은 서로의 상처와 비밀을 이해하며 사랑을 키워가지만, 전쟁과 마법의 위협 속에서 그들의 운명은 점점 더 복잡해진다."
    },
    {
        title: "목소리의 형태", year: 2016, date: "2016-09-17", rating: 8.3,
        audience: 0, poster: "/aUF10sSW5OVfpK6Ma3vJYd3Tp3A.jpg", type: "mine", rank: null, overview: "어린 시절 청각장애를 가진 소녀 쇼코를 괴롭혔던 쇼야는 죄책감에 시달리며 살아간다. 고등학생이 된 후 쇼코를 다시 만나 과거의 잘못을 사과하고, 두 사람은 서로의 상처를 이해하며 관계를 이어 나간다. 하지만 주변의 시선과 오해로 인해 그들의 우정과 사랑은 시험에 들게 된다."
    },
    {
        title: "마루 밑 아리에티", year: 2010, date: "2010-07-16", rating: 7.6,
        audience: 0, poster: "/1Xz0WSXeXzyTCbHADGBpmEaDpZl.jpg", type: "mine", rank: null, overview: "인간의 집 마루 밑에서 살아가는 소인 가족의 소녀 아리에티는 인간에게 필요한 물건을 몰래 빌려오며 살아가던 중, 소년 쇼우와 만나게 된다. 두 사람은 서로의 세계를 이해하며 우정을 쌓아가지만, 인간과 소인족의 갈등과 위험이 다가오면서 그들의 관계는 위기에 처하게 된다."
    },
    {
        title: "주토피아", year: 2016, date: "2016-02-11", rating: 7.8,
        audience: 0, poster: "/uitqZVbhvlQV5iLOdbk3itGoNNd.jpg", type: "mine", rank: null, overview: "토끼 경찰관 주디는 누구나 무엇이든 될 수 있는 도시 주토피아에서 최초의 토끼 경찰관이 된다. 여우 닉과 함께 의문의 실종 사건을 수사하며 도시를 둘러싼 숨겨진 진실을 밝혀 나간다."
    },


    // 박스 오피스 1~5
    {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.6,
        audience: 0, poster: "/rVOll8XOde5BuIF4tGO1q0pfngQ.jpg", type: "mine", rank: null, overview: "치이카와와 친구들이 인어 섬에서 펼치는 모험과 우정을 그린 애니메이션 영화. 치이카와는 인어 섬의 비밀을 밝혀내기 위해 친구들과 함께 다양한 도전을 겪으며 성장해 나간다."
    },
    {
        title: "시간을 달리는 소녀", year: 2006, date: "2006-07-15", rating: 7.7,
        audience: 0, poster: "/zhvpSzYKUMdAfId2VSU1qLFeW5x.jpg", type: "mine", rank: null, overview: "평범한 고등학생 마코토는 우연히 시간 여행 능력을 얻게 된다. 그녀는 과거와 미래를 오가며 친구들과 가족의 삶에 영향을 미치게 되고, 그 과정에서 사랑과 우정, 책임에 대한 중요한 교훈을 배우게 된다."
    },
    {
        title: "극장판 카드캡터 체리 : 봉인된 카드", year: 2000, date: "2000-07-15", rating: 8.2,
        audience: 0, poster: "/ezYcCER756g37B4Y7kZKfr2flgc.jpg", type: "mine", rank: null, overview: "체리와 친구들이 봉인된 카드를 찾아 모험을 떠나는 이야기를 그린 애니메이션 영화. 체리는 카드의 힘을 이용해 다양한 도전을 극복하며 성장하고, 친구들과의 우정을 더욱 깊게 다져 나간다."
    },
    {
        title: "울고 싶은 나는 고양이 가면을 쓴다", year: 2020, date: "2020-06-18", rating: 7.8,
        audience: 0, poster: "/g9ArpDiGMz9OCCCdI1JKmS5JteH.jpg", type: "mine", rank: null, overview: "한 소녀가 고양이 가면을 쓰고 울고 싶은 마음을 표현하며 성장해 나가는 이야기를 그린 애니메이션 영화."
    },
    {
        title: "벼랑 위의 포뇨", year: 2008, date: "2008-07-15", rating: 7.7,
        audience: 0, poster: "/tGSuFBsqdXxIz3fTSBfsZU9FBMN.jpg", type: "mine", rank: null, overview: "벼랑 위에서 벌어지는 포뇨의 이야기를 그린 애니메이션 영화. 포뇨는 다양한 도전을 겪으며 성장해 나가고, 그 과정에서 사랑과 우정, 그리고 진실을 찾아 나선다."
    },

];
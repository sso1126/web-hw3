/* // part A : 영화 데이터 10건
const titles = [
    // 내 인생 영화
    "극장판 치이카와: 인어 섬의 비밀",
    "너의 이름은",
    "엔드 오브 에반게리온",
    "명탐정 코난: 100만 달러의 펜타그램 포스터",
    "모노노케 히메",

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
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.6,
        audience: 23394977, poster: "/rVOll8XOde5BuIF4tGO1q0pfngQ.jpg", type: "mine", rank: null, overview: "치이카와와 친구들은 높은 보수와 맛있는 음식이 제공된다는 초대장을 받고 특별한 섬으로 떠난다. 하지만 섬에서 벌어지는 수상한 사건과 거대한 세이렌의 등장으로 예상치 못한 모험에 휘말리게 된다."
    },


    // 박스 오피스 1~5
    {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.6,
        audience: 23394977, poster: "/rVOll8XOde5BuIF4tGO1q0pfngQ.jpg", type: "boxoffice", rank: 1
    },
    {
        title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.2,
        audience: 3382132, poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "boxoffice", rank: 2
    },
    {
        title: "실낙원", year: 2026, date: "2026-10-21", rating: 8.0,
        audience: 112193, poster: "wkm9BQLok7U2KihcCspCa663Qse.jpg", type: "boxoffice", rank: 3
    },
    {
        title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23", rating: 7.0,
        audience: 2006488, poster: "/w5OX3u2SpMVRU0sol0mtIaf4LSI.jpg", type: "boxoffice", rank: 4
    },
    {
        title: "클레이페이스", year: 2026, date: "2026-10-19", rating: 7.5,
        audience: 84051, poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg", type: "boxoffice", rank: 5
    },

];
// part A : 영화 데이터 10건
const titles = [
    // 내 인생 영화
    "너의 이름은",
    "하울의 움직이는 성",
    "목소리의 형태",
    "마루 밑 아리에티",
    "주토피아",
    
    // 박스 오피스 1~5
    "폭설",
    "헝거게임 55번째 추첨의 날",
    "극장판 치이카와: 인어 섬의 비밀",
    "폴2: 데드포인트",
    "최종면접"
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

    7.5,
    7.8,
    7.6,
    7.2,
    7.2
];

const audiences = [
    0,
    0,
    0,
    0,
    0,

    462142,
    98465,
    3075239,
    246495,
    327605
];




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
        title: "폭설", year: 2026, date: "2026-11-18", rating: 7.5,
        audience: 462142, poster: "/xiBYIFWBrLD7Z7jWrt0e7YLLmfC.jpg", type: "boxoffice", rank: 1, overview: "한 겨울, 폭설로 인해 고립된 마을에서 벌어지는 미스터리 스릴러 영화. 주민들은 눈 속에서 생존을 위해 서로를 의심하며 긴장감 넘치는 상황에 직면하게 된다."
    },
    {
        title: "헝거게임 55번째 추첨의 날", year: 2026, date: "2026-11-18", rating: 7.8,
        audience: 98465, poster: "/6ehDHRVDtwe1oMu6EMtKC3SoVER.jpg", type: "boxoffice", rank: 2, overview: "디스토피아 세계에서 매년 열리는 헝거게임의 55번째 추첨의 날을 다룬 액션 스릴러 영화. 주인공은 생존을 위해 치열한 경쟁에 뛰어들며, 권력과 정의, 인간성에 대한 질문을 던진다."
    },
    {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.6,
        audience: 3075239, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 3, overview: "치이카와와 친구들이 인어 섬에서 펼치는 모험과 우정을 그린 애니메이션 영화. 치이카와는 인어 섬의 비밀을 밝혀내기 위해 친구들과 함께 다양한 도전을 겪으며 성장해 나간다."
    },
    {
        title: "폴2: 데드포인트", year: 2026, date: "2026-11-11", rating: 7.2,
        audience: 246495, poster: "/9fhPxF6clLRoQfpmgn5jGpL6BTA.jpg", type: "boxoffice", rank: 4, overview: "폴과 그의 동료들이 새로운 임무를 수행하며 벌어지는 액션 스릴러 영화. 폴은 과거의 적들과 맞서며, 팀워크와 전략을 통해 위기를 극복하고 임무를 완수하려 한다."
    },
    {
        title: "최종면접", year: 2026, date: "2026-11-04", rating: 7.2,
        audience: 327605, poster: "/wImwvRmbR28hPNDmaj5W7zvxk0T.jpg", type: "boxoffice", rank: 5, overview: "한 젊은 구직자가 최종 면접에서 겪는 긴장과 도전을 그린 드라마 영화. 그는 면접관들의 까다로운 질문과 압박 속에서 자신의 능력과 인성을 증명하며, 진정한 자신을 찾아가는 여정을 시작한다."
    },

];
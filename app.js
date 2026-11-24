// app.js : 영화 배열을 다루는 함수 6개 / 전소영(26학번)


// 찜한 제목 배열을 브라우저에 저장하고 불러오기(교재에 없는 문법: localStorage, JSON)
const liked = JSON.parse(localStorage.getItem("liked") || "[]");
function saveLiked() {
    localStorage.setItem("liked", JSON.stringify(liked));
}
function updateLikeCount() {
    document.getElementById("likeCount").textContent = liked.length;
}


// 영화 배열을 다루는 기본 함수
// average : 영화 배열 ⇒ 평균 평점(숫자)
// 1
function average(list) {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
console.log("평균:", average(movies));



// 2
function best(list) {
    let top = list[0];
    for (const m of list) {
        if (m.rating > top.rating) {
            top = m;
        }
    }
    return top;
}
console.log("최고:", best(movies).title);



// 3
function filterByRating(list, min) {
    return list.filter(m => m.rating >= min);
}
console.log("8점 이상:", filterByRating(movies, 8).length + "편");


// 5
function yearsSince(dateStr) {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}
console.log(yearsSince(movies[0].date) + "년 전 개봉");



function posterUrl(path, size) {
    return "https://image.tmdb.org/t/p/" + size + path;
}
console.log(posterUrl(movies[0].poster, "w342"));


//=========================================================================


// search : 검색어가 포함된 영화 찾기
function search(list, keyword) {
    return list.filter(m =>
        m.title.toLowerCase().includes(keyword.toLowerCase())
    );
}

//=========================================================================

// 4
// sortBy : 영화 배열을 원하는 기준으로 정렬
function sortBy(list, key, desc) {
    const copy = [...list];

    copy.sort((a, b) => {
        if (typeof a[key] === "string") {
            return a[key].localeCompare(b[key]);
        }

        return a[key] - b[key];
    });

    if (desc) {
        copy.reverse();
    }

    return copy;
}

//=========================================================================

// renderCards : 영화 배열 ⇒ 보드에 카드 생성
function renderCards(list) {
    const board = document.querySelector(".board");
    board.innerHTML = "";

    for (const m of list) {
        const card = document.createElement("article");
        card.className = "card";

        // 평점이 8점 이상이면 hot 클래스 추가
        if (m.rating >= 8) {
            card.classList.add("hot");
        }

        // 카드에 데이터 속성 추가
        card.setAttribute("data-type", m.type);
        card.setAttribute("data-title", m.title);

        // 박스오피스 영화에만 순위 표시
        let rankHTML = "";

        if (m.type === "boxoffice" && m.rank != null) {
            rankHTML = `<span class="rank">${m.rank}</span>`;
        }

        // 포스터가 없으면 영화 제목 표시
        let posterHTML = "";

        if (m.poster) {
            posterHTML = `
                <img class="poster"
                src="${posterUrl(m.poster, "w342")}"
                alt="${m.title} 포스터">
            `;
        } else {
            card.classList.add("no-poster");

            posterHTML = `
                <div class="poster-fallback">${m.title}</div>
            `;
        }

        // 이미 찜한 영화인지 확인
        const isLiked = liked.includes(m.title);

        // 카드 내용 생성
        card.innerHTML = `
            ${rankHTML}
            ${posterHTML}

            <span class="badge">${m.rating}</span>

            <div class="info">
                <h3>${m.title}</h3>
                <p class="year">${m.year}</p>

                <button class="like ${isLiked ? "liked" : ""}"
                type="button">♥</button>
            </div>
        `;

        board.appendChild(card);
    }

    // 영화가 없을 때 안내 문구 표시
    if (list.length === 0) {
        board.classList.add("is-empty");
    } else {
        board.classList.remove("is-empty");
    }

    const emptyMessage = document.querySelector(".state-empty");

    if (emptyMessage) {
        emptyMessage.hidden = list.length !== 0;
    }

    // 영화 개수 표시
    document.querySelector("#count").textContent =
        list.length + "편";

    updateLikeCount();
}


// 6. 검색 + 보기 필터 + 정렬
// getView : 검색 → 보기 필터 → 정렬
function getView() {

    // 검색어 가져오기
    const keyword = document.querySelector("#q").value.trim();

    // 정렬 기준 가져오기
    const key = document.querySelector("#sort").value;

    // 선택된 라디오 버튼 가져오기
    const checkedType = document.querySelector(
        'input[name="type"]:checked'
    );

    const type = checkedType ? checkedType.value : "all";

    // ① 검색 적용
    let result = search(movies, keyword);

    // ② 보기 필터 적용
    if (type !== "all") {
        result = result.filter(m => m.type === type);
    }

    // ③ 정렬 적용
    result = sortBy(result, key, key !== "title");

    return result;
}


// 7. 화면 새로고침 함수
function refresh() {
    renderCards(getView());
}


// 8. 이벤트 리스너
// 검색창에 입력하면 실행
document.querySelector("#q").addEventListener("input", refresh);

// 정렬 기준을 바꾸면 실행
document.querySelector("#sort").addEventListener("change", refresh);

// 보기 필터를 바꾸면 실행
document.querySelector("#typeFilter").addEventListener("change", refresh);


// 찜하기 버튼 클릭
document.querySelector(".board").addEventListener("click", (e) => {

    if (e.target.classList.contains("like")) {

        const card = e.target.closest(".card");
        const title = card.dataset.title;

        const index = liked.indexOf(title);

        if (index === -1) {
            liked.push(title);
        } else {
            liked.splice(index, 1);
        }

        saveLiked();

        e.target.classList.toggle("liked");

        updateLikeCount();
    }
});


// 9. 처음 화면 실행
refresh();


// 10. 상세창 열기 및 닫기
const dialog = document.getElementById("detail");

// 상세창 열기
document.getElementById("open").addEventListener("click", () => {
    dialog.showModal();
});

// 상세창 닫기
document.getElementById("closeDetail").addEventListener("click", () => {
    dialog.close();
});
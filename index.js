// 课程表 · 渲染由你写
//
// xingqi：周几，1 = 周一 … 5 = 周五
// jieci ：第几节开始
// jieshu：连上几节（2 就是占两格）
// yanse ：颜色，对应 index.css 里写的几个类名

let kecheng = [
    { mingzi: "高等数学", laoshi: "王建国", jiaoshi: "A301", xingqi: 1, jieci: 1, jieshu: 2, yanse: "lan" },
    { mingzi: "大学英语", laoshi: "李梅", jiaoshi: "B202", xingqi: 1, jieci: 3, jieshu: 2, yanse: "lv" },
    { mingzi: "体育", laoshi: "张强", jiaoshi: "操场", xingqi: 1, jieci: 5, jieshu: 2, yanse: "cheng" },
    { mingzi: "C语言程序设计", laoshi: "陈磊", jiaoshi: "C105", xingqi: 2, jieci: 1, jieshu: 2, yanse: "zi" },
    { mingzi: "HTML5+CSS3", laoshi: "刘洋", jiaoshi: "C208", xingqi: 2, jieci: 3, jieshu: 2, yanse: "huang" },
    { mingzi: "无", laoshi: "无", jiaoshi: "无", xingqi: 2, jieci: 5, jieshu: 2, yanse: "无" },
    { mingzi: "高等数学", laoshi: "王建国", jiaoshi: "A301", xingqi: 3, jieci: 1, jieshu: 2, yanse: "lan" },
    { mingzi: "JavaScript基础", laoshi: "刘洋", jiaoshi: "C208", xingqi: 3, jieci: 3, jieshu: 2, yanse: "huang" },
    { mingzi: "无", laoshi: "无", jiaoshi: "无", xingqi: 3, jieci: 5, jieshu: 2, yanse: "无" },
    { mingzi: "大学英语", laoshi: "李梅", jiaoshi: "B202", xingqi: 4, jieci: 1, jieshu: 2, yanse: "lv" },
    { mingzi: "数据库原理", laoshi: "赵敏", jiaoshi: "C301", xingqi: 4, jieci: 5, jieshu: 2, yanse: "zi" },
    { mingzi: "无", laoshi: "无", jiaoshi: "无", xingqi: 4, jieci: 3, jieshu: 2, yanse: "无" },
    { mingzi: "无", laoshi: "无", jiaoshi: "无", xingqi: 5, jieci: 1, jieshu: 2, yanse: "无" },
    { mingzi: "移动应用开发", laoshi: "刘洋", jiaoshi: "C208", xingqi: 5, jieci: 3, jieshu: 2, yanse: "huang" },
    { mingzi: "就业指导", laoshi: "孙丽", jiaoshi: "报告厅", xingqi: 5, jieci: 5, jieshu: 2, yanse: "cheng" }
]
if (JSON.parse(localStorage.getItem("kecheng"))) {
    kecheng = JSON.parse(localStorage.getItem("kecheng"))
}
const biaoge = document.querySelector(".biaoge")
const biaodan = document.querySelector(".biaodan")
const tianjiaanniu = document.querySelector(".tianjiaanniu")
const input = document.querySelectorAll("input")
const tianjiabox = document.querySelector(".tianjiabox")
const shanchubox = document.querySelector(".shanchubox")
const fou = document.querySelector(".fou")
const shi = document.querySelector(".shi")
let kongxiabiao = null
let kechengboxxiabiao = null
function xuanran() {
    biaoge.querySelectorAll(".kechengbox").forEach(function (d) {
        d.remove()
    })
    const xuanranshuzu = kecheng.map(function (d) {
        return `<div class="kechengbox ${d.yanse == "无" ? "kong" : "you"}">
              <div class="gechengjieshao">
                  <div class="kemu">${d.mingzi}</div>
                  <div class="laoshi">${d.laoshi}·${d.jiaoshi}</div>
              </div>
        </div>`
    })
    biaoge.insertAdjacentHTML("beforeend", xuanranshuzu.join(''))
    const kechengbox = document.querySelectorAll(".kechengbox")
    for (let a = 0; a < kecheng.length; a++) {
        if (kecheng[a].yanse == "lan") {
            kechengbox[a].style = `grid-row:${kecheng[a].jieci + 1}/span ${kecheng[a].jieshu};grid-column:${kecheng[a].xingqi + 1}/span 1; background-color: #e0f2fe;color:#0759a3;`
        } else if (kecheng[a].yanse == "zi") {
            kechengbox[a].style = `grid-row:${kecheng[a].jieci + 1}/span ${kecheng[a].jieshu};grid-column:${kecheng[a].xingqi + 1}/span 1; background-color: #f3e8ff;color:#6b21a8 ;`
        } else if (kecheng[a].yanse == "cheng") {
            kechengbox[a].style = `grid-row:${kecheng[a].jieci + 1}/span ${kecheng[a].jieshu};grid-column:${kecheng[a].xingqi + 1}/span 1; background-color: #ffedd5;color:#a63412;`
        } else if (kecheng[a].yanse == "huang") {
            kechengbox[a].style = `grid-row:${kecheng[a].jieci + 1}/span ${kecheng[a].jieshu};grid-column:${kecheng[a].xingqi + 1}/span 1; background-color: #fef9c3;color:#a34d0e;`
        } else if (kecheng[a].yanse == "lv") {
            kechengbox[a].style = `grid-row:${kecheng[a].jieci + 1}/span ${kecheng[a].jieshu};grid-column:${kecheng[a].xingqi + 1}/span 1; background-color: #dcfce7;color:#166534;`
        } else if (kecheng[a].yanse == "无") {
            kechengbox[a].style = `grid-row:${kecheng[a].jieci + 1}/span ${kecheng[a].jieshu};grid-column:${kecheng[a].xingqi + 1}/span 1; background-color: #e7e5e4;color:#e7e5e4;`
        } else {
            kechengbox[a].style = `grid-row:${kecheng[a].jieci + 1}/span ${kecheng[a].jieshu};grid-column:${kecheng[a].xingqi + 1}/span 1;background-color: #c3a190;color:#e7e5e4;`
        }
    }
}
xuanran()
biaoge.addEventListener("click", function (e) {
    const kong = e.target.closest(".kechengbox.kong")
    const kechengbox = e.target.closest(".kechengbox.you")
    kongxiabiao = Array.from(document.querySelectorAll(".kechengbox")).indexOf(kong)
    kechengboxxiabiao = Array.from(document.querySelectorAll(".kechengbox")).indexOf(kechengbox)
    if (e.target.closest(".kechengbox.kong")) {
        biaodan.style = `display:block;`
        tianjiabox.style = `display:block;`
    }
    if (e.target.closest(".kechengbox.you")) {
        biaodan.style = `display:block;`
        shanchubox.style = `display:block;`
    }
})
tianjiaanniu.addEventListener("click", function () {
    if (input[0].value == "" || input[1].value == "" || input[2].value == "") {
        alert("不能为空")
        return
    }
    kecheng[kongxiabiao].mingzi = input[0].value
    kecheng[kongxiabiao].laoshi = input[1].value
    kecheng[kongxiabiao].jiaoshi = input[2].value
    for (let b = 0; b < kecheng.length; b++) {
        if (input[0].value == kecheng[b].mingzi) {
            kecheng[kongxiabiao].yanse = kecheng[b].yanse
            break
        } else if (input[0].value != kecheng[b].mingzi) {
            kecheng[kongxiabiao].yanse = "新"
        }
    }
    localStorage.setItem("kecheng", JSON.stringify(kecheng))
    xuanran()
    for (let b = 0; b < input.length; b++) {
        input[b].value = ''
    }
    biaodan.style = `display:none;`
    tianjiabox.style = `display:none;`
})

shi.addEventListener("click", function () {
    kecheng[kechengboxxiabiao].yanse = "无"
    kecheng[kechengboxxiabiao].mingzi = "无"
    kecheng[kechengboxxiabiao].laoshi = "无"
    kecheng[kechengboxxiabiao].jiaoshi = "无"
    localStorage.setItem("kecheng", JSON.stringify(kecheng))
    xuanran()
    biaodan.style = `display:none;`
    shanchubox.style = `display:none;`
})
fou.addEventListener("click", function () {
    biaodan.style = `display:none;`
    shanchubox.style = `display:none;`
})

let nav = document.querySelector(".side-nav");
let items = nav.querySelectorAll("li");
let curIndex = 1;
let main = document.querySelector("main");
let originContent = main.innerHTML;
let years = [2019, 2021, 2022];

for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.addEventListener("click", () => {
        items.forEach(item => {
            item.classList.remove("side-nav__item--active");
        })
        item.classList.add("side-nav__item--active");
        curIndex = i + 1;

        // 改变内容,插入年份
        if (curIndex == 1) {
            years.forEach(year => {
                let newLi = document.createElement('li');
                newLi.className = "years";
                newLi.textContent = year;
                item.insertAdjacentElement("afterend", newLi);
            });
            main.innerHTML = originContent;
        }
        if (curIndex == 2) main.innerHTML = "<h1 style='display: block; padding-top: 200px; font-size: 100px; text-align: center; height: 800px'>注册成员</h1>";
        if (curIndex == 3) main.innerHTML = "<h1 style='display: block; padding-top: 200px; font-size: 100px; text-align: center; height: 800px'>历年奖项</h1>";
        if (curIndex == 4) main.innerHTML = "<h1 style='display: block; padding-top: 200px; font-size: 100px; text-align: center; height: 800px'>联系我们</h1>";
    });
}
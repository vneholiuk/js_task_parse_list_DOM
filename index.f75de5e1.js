"use strict";
const listEmployeeElement = document.getElementsByTagName("li");
const sortedList = sortList(listEmployeeElement);
getEmployees(listEmployeeElement);
for(let i = 0; i < listEmployeeElement.length; i++)listEmployeeElement[i].outerHTML = sortedList[i].outerHTML;
function getEmployees(list) {
    return [
        ...list
    ].map((e)=>({
            name: e.innerText,
            position: e.getAttribute("data-position"),
            salary: e.getAttribute("data-salary"),
            age: e.getAttribute("data-age")
        }));
}
function sortList(list) {
    return [
        ...list
    ].sort((a, b)=>+b.getAttribute("data-salary").replace(/\D/g, "") - +a.getAttribute("data-salary").replace(/\D/g, ""));
}

//# sourceMappingURL=index.f75de5e1.js.map
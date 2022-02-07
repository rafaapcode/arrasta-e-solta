document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
});

document.querySelectorAll(".area").forEach(area => {
    area.addEventListener("dragover", dragOver);
    area.addEventListener("dragleave", dragLeave);
    area.addEventListener("drop", drop);
})

document.querySelector(".neutralArea").addEventListener("dragover", dragOverNeutral);
document.querySelector(".neutralArea").addEventListener("dragleave", dragLeaveNeutral);
document.querySelector(".neutralArea").addEventListener("drop", dropNeutral);

// Function Item
function dragStart(e) {
    e.target.style.border = "1px solid blue";
    e.currentTarget.classList.add("dragging");
};

function dragEnd(e) {
    e.target.style.border = "none";
    e.currentTarget.classList.remove("dragging");
};

// Functions Area

function dragOver(e) {
    // Comportamento Padrão é NEGAR O DROP;
    // Prevenindo esse comportamento, o drop será liberado;
    if (e.currentTarget.querySelector(".item") === null) {
        e.preventDefault();
        e.currentTarget.classList.add("hover");
    }
};

function dragLeave(e) {
    e.currentTarget.classList.remove("hover");
};

function drop(e) {
    e.currentTarget.classList.remove("hover");

    if (e.currentTarget.querySelector(".item") === null) {
        let draggingItem = document.querySelector(".item.dragging");
        e.currentTarget.appendChild(draggingItem);
    }
};

// Function Neutral Area
function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add("hover");
};

function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove("hover");
};

function dropNeutral(e) {
    e.currentTarget.classList.remove("hover");
    let draggingItem = document.querySelector(".item.dragging");
    e.currentTarget.appendChild(draggingItem);
};
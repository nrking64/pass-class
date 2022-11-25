console.log("this is a branch")

const deliverables = [{
    priority: 1,
    courseName: "French",
    delivType: "Quiz",
    delivName: "Pronouns",
    dueDate: "2022-11-29",
},
{
    priority: 2,
    courseName: "Math",
    delivType: "Assignment",
    delivName: "Functions",
    dueDate: "2022-12-29",
},
{
    priority: 3,
    courseName: "English",
    delivType: "Midterm",
    delivName: "Crysalids Essay",
    dueDate: "2022-10-21",
}]
renderTable()
function renderTable() {
    const mainTaskBody = document.getElementById("mainTaskBody")
    for (let i = mainTaskBody.children.length-1; i >= 0; i--) {
        const row = mainTaskBody.children[i]
        console.log(row)
        if (row.id != "inputRow") {
            mainTaskBody.removeChild(row)
        }
    }
    deliverables.forEach(row => {
        const newRow = mainTaskBody.insertRow(mainTaskBody.rows.length)
        newRow.classList.add("trStyle")
        Object.values(row).forEach(value => {
            const newTD = document.createElement("td")
            newTD.innerText = value
            newRow.append(newTD)
        })
    });
}

function onClickSaveDeliverable() {
    const priorityElement = document.getElementById("urgency");
    const courseNameElement = document.getElementById("courseName");
    const deliverableTypeElement = document.getElementById("delivType");
    const deliverableNameElement = document.getElementById("delivName");
    const dueDateElement = document.getElementById("dueDate");
    const deliverable = {
        priority: priorityElement.value,
        courseName: courseNameElement.value,
        delivType: deliverableTypeElement.value,
        delivName: deliverableNameElement.value,
        dueDate: dueDateElement.value
    }
    deliverables.push(deliverable)
    renderTable()
}
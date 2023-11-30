let people = []
let list = document.querySelector('[data-list]')
function addPerson() {
    let name = document.querySelector('[data-entry]').value
    people.push(name)
    localStorage.setItem('peopleNames', JSON.stringify(people))
    displayPeople()
}

document.querySelector('[data-btn]').addEventListener('click', addPerson)

function displayPeople() {
    let displayPerson1 = JSON.parse( localStorage.getItem('peopleNames') )
    if(displayPerson1) {
        displayPerson1.forEach( person=>{
            list.innerHTML =+
            `<li>${person}</li>`
        })
    }else{
        list.innerHTML = 'no data'
    }
}
try{
    displayPeople()
}catch(e) {
    console.log(e.message);
}

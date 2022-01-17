generateDiv = _ => {
    let divOutside = document.getElementById("card-outer");
    let title = document.getElementById("input1").value;
    let desc = document.getElementById("input2").value;

    if (title === '' && desc === '') {
        alert("You must write something!");
    } else {
        divOutside.innerHTML += `<div class="card mycard" id="myUL" style="width: 18rem;">
            <div class="card-body mybody">
              <h5 class="card-title mytitle" id="title">${title}</h5>
              <p class="card-text mytext ">${desc}</p>
              <button class="btn btn-info btncolor1" onclick="edit(this)">Edit</button>
              <button class="btn btn-info btncolor2" onclick="del(this)">Delete</button>
            </div>
          </div>`;
    }

    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";

}

edit = e => {

    let title = e.closest(".card-body").querySelector('.card-title').innerHTML;
    let notes = e.closest(".card-body").querySelector('.card-title').innerHTML
    const editTitle = prompt("EDIT YOUR TITLE", title);
    const editNotes = prompt("EDIT YOUR NOTES", notes);
    e.closest(".card-body").querySelector('.card-text').innerHTML = editNotes;
    e.closest(".card-body").querySelector('.card-title').innerHTML = editTitle;
    e.closest(".card-body").querySelector('.card-text').innerHTML = editNotes;

}

del = e => {
    e.closest(".card").innerHTML = "";
    e.closest("#card-outer").innerHTML = "";
}

deleteDiv = _ => {
    let del = document.getElementById("card-outer")
    del.innerHTML = "";
}
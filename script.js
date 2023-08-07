
i = 1;
function AddNote() {
    // e = document.createElement('p').innerText(a);
    a = document.getElementById("note").value
    if (a == "") {
        alert("Note box can't be empty")
    }
    else {

        a = '<p class="para">' + i + ") " + a + '</p> <br class="sp">'
        // a = a + ", "
        document.getElementsByClassName("clr")[0].insertAdjacentHTML("beforeend", a);
        i++;
    }
}
function Clear() {
    document.getElementById("note").value = "";
}
function Remove() {
    if (i == 1) {
        alert("Nothing to delete..")
    }
    else {

        document.getElementsByClassName("para")[i - 2].remove();
        document.getElementsByClassName("sp")[i - 2].remove();
        // document.getElementsByClassName("clr").removeChild(document.getElementsByClassName("para")[i-2])
        i--;
    }
}
function RemoveAll() {
    if (i == 1) {
        alert("Nothing to delete..")
    }
    else {
        for (var j = 0; j < i - 1; j++) {
            document.getElementsByClassName("para")[0].remove();
            document.getElementsByClassName("sp")[0].remove();
        }
        i = 1;

    }
}
function pdf() {
    var had = document.getElementById("headnote").value;
    if (had == "") {
        alert("Please give heading for your notes");
    } else {
        // had.style = "font-size: 69px;";
        var printContents = document.getElementById("notes").innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        document.getElementsByClassName("headdiv")[0].innerHTML = had;
        document.getElementsByTagName("title")[0].innerHTML = had;


        window.print();

        document.body.innerHTML = originalContents;
        document.getElementsByClassName("headdiv")[0].innerText = "Notes";
        document.getElementsByTagName("title")[0].innerHTML = "Notes";
    }

}
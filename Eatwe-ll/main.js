function myFunction() {
    var upload = document.createElement("input");
    upload.setAttribute("type", "file");
    document.body.appendChild(upload);
}

var i = 0;
function bar() {
    if (i === 0) {
        i = 0;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame,90);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                return
            }
            }
        }
    }

// File search function
    function mySearch() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < td.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

function pressDelete() {
  alert("Delete"); 
}

function pressEdit() {
  alert("Edit")
}

function bar() {
  alert("Update")
}

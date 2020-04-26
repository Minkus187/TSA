var usersInfo = [
{
    username: "loretta",
    password: "Loretta1010"

},
{
    username: "Minkus",
    password: "Ocloo"
},
]


function getInfo() {
    var username = document.getElementById("userName").value
    var password = document.getElementById("password").value
    
    for(i = 0; i < usersInfo.length; i++) {
        if(username == usersInfo[i].username && password == usersInfo[i].password) 
        {
            window.open('admin.html')
            {
                alert(username + " is logged in !!!")
                return    
            }
        }
    }
    alert("Incorrect username or password!!!")
}

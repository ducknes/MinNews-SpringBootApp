const newUser = document.getElementById("submit");

newUser.onclick = () => {
    email = document.getElementById("email").value;
    login = document.getElementById("login").value;
    password = document.getElementById("password").value;
    $.ajax({
        type : "POST",
        contentType: "application/json",
        charset: "UTF-8",
        cache: false,
        url: '/registration_page',
        data: JSON.stringify({
            email: email,
            login: login,
            password: password,
            role: "Пользователь"
        }),
        success: function(error){
            document.getElementById('login1').innerHTML = '';
            document.getElementById('email1').innerHTML = '';
            document.getElementById('password1').innerHTML = '';

            if (error === "Такая почта уже существует"){
                document.getElementById('email1').innerHTML = "Такая почта уже существует";
            }
            else if(error === "Такой логин уже существует"){
                document.getElementById('login1').innerHTML = "Такой логин уже существует";
            }
            else if(error === "OK"){
                document.getElementById('login1').innerHTML = '';
                document.getElementById('email1').innerHTML = '';
                document.getElementById('password1').innerHTML = '';
                document.location.href = "/"
            }

            let arr = error.split("\n")
            for (let i = 0; i < arr.length; i++) {
                let new_arr = arr[i].split(" - ")
                document.getElementById(new_arr[0] + "1").innerHTML = new_arr[1];
            }
        }
    })
}
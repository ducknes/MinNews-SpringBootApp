const logInto = document.getElementById("submit")

logInto.onclick = () => {
    login = document.getElementById("login").value;
    password = document.getElementById("password").value;
    $.ajax({
        type : "POST",
        contentType: "application/json",
        charset: "UTF-8",
        cache: false,
        url: '/',
        data: JSON.stringify({
            login: login,
            password: password
        }),
        success: function (data){
            document.getElementById('password1').innerHTML = '';
            document.getElementById('login1').innerHTML = '';
            if (data === "Такого пользователя не существует"){
                document.getElementById("login1").innerHTML = data;
            }
            else if (data === "Пароль неверный"){
                document.getElementById('password1').innerHTML = "Неверный пароль";
            }
            else if (data === "news_page"){
                document.getElementById('login1').innerHTML = '';
                document.getElementById('password1').innerHTML = '';
                window.sessionStorage.setItem("login", login);
                document.location.href = "news_page";
            }
            else if (data === "news_page2"){
                document.getElementById('login1').innerHTML = '';
                document.getElementById('password1').innerHTML = '';
                window.sessionStorage.setItem("login", login);
                document.location.href = "news_page2";
            }
            else if (data === "moder_news_page"){
                document.getElementById('login1').innerHTML = '';
                document.getElementById('password1').innerHTML = '';
                window.sessionStorage.setItem("login", login);
                document.location.href = "moder_news_page";
            }
        }
    })
}

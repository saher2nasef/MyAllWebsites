window.onload = function() {
    let body = document.querySelector("body").dataset.type;
    if (body == "friends") {
        let search = document.querySelector(".friends .search button");
        let searchbar = document.querySelector(".friends .search input");
        let all_users = document.querySelector("ul.all_users");
        let AllDriends = document.querySelector(".AllDriends");
        let friend_request = document.querySelector("ul.friend_request");

        search.onclick = function() {
            if (searchbar.disabled == true) {
                searchbar.disabled = false;
                this.classList.add("active");
            } else {
                searchbar.disabled = true;
                this.classList.remove("active");
            }
            searchbar.value = "";
        }
        let h5 = document.querySelector(".head h5");
        let searchOutput = document.querySelector(".searchOutput");
        searchbar.onkeyup = function() {
            let searchTerm = searchbar;
            if (searchTerm.value != "") {
                searchTerm.classList.add("active");
                all_users.style.display = "none";
                $.ajax({
                    type: "POST",
                    url: "php/search.php",
                    dataType: "html",
                    async: false,
                    data: {
                        "searchTerm": searchTerm.value,
                        "ThisNot": h5.dataset.id
                    },
                    success: function(data) {
                        searchOutput.innerHTML = data;
                    }
                });
            } else {
                all_users.style.display = "block";
                searchTerm.classList.remove("active");
                searchOutput.innerHTML = "";
            }
        };
        let length, lastLength = 2;
        $.ajax({
            type: "POST",
            url: "php/length.dataBase.php",
            dataType: "html",
            async: false,
            success: function(d) {
                localStorage.setItem("length", d);
            }
        });
        setInterval(() => {
            $.ajax({
                type: "POST",
                url: "php/length.dataBase.php",
                dataType: "html",
                async: false,
                success: function(d) {
                    length = Number(d);
                }
            });
        }, 500);
        Onload();
        let Last = setInterval(() => {
            lastLength = localStorage.getItem("length");
            if (lastLength < length) {
                Onload();
            } else {
                localStorage.setItem("length", length);
            }
        }, 500);

        function Onload() {
            $.ajax({
                type: "POST",
                url: "php/users.php",
                dataType: "html",
                async: false,
                data: {
                    "ThisNot": h5.dataset.id
                },
                success: function(d) {
                    all_users.innerHTML = d;
                }
            });
            var baseUrl = (window.location).href; // You can also use document.URL
            var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
            $.ajax({
                type: "POST",
                url: "php/getFriends.php",
                dataType: "html",
                async: false,
                data: {
                    "koopId": koopId
                },
                success: function(d) {
                    friend_request.innerHTML = d;
                }
            });
            let UlLiA = document.querySelectorAll("ul.friend_request li button.accept");
            for (let i = 0; i < UlLiA.length; i++) {
                UlLiA[i].onclick = function() {
                    $.ajax({
                        type: "POST",
                        url: "php/savefriends.php",
                        dataType: "html",
                        async: false,
                        data: {
                            "From": [UlLiA[i].dataset.id, koopId, UlLiA[i].dataset.del]
                        },
                    });
                }
            }
            $.ajax({
                type: "POST",
                url: "php/GetDataAllYou.php",
                dataType: "html",
                async: false,
                data: {
                    "koopId": koopId
                },
                success: function(d) {
                    AllDriends.innerHTML = d;
                    let UlLiA = document.querySelectorAll(".AllDriends li a");
                    let UlLiBtn = document.querySelectorAll("ul.all_users li button");
                    for (let i = 0; i < UlLiA.length; i++) {
                        var baseUrl = (window.location).href; // You can also use document.URL
                        var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
                        var koopId2 = UlLiA[i].dataset.go;
                        let h5 = document.querySelector(".head h5");
                        UlLiA[i].href = "chat.php?user_id=" + koopId2 + "&Back=" + koopId + "&Name=" + h5.dataset.name + "";
                        UlLiA[i].onclick = function() {
                            var nu1 = UlLiA[i].dataset.go;
                            let nu2 = h5.dataset.id;
                            $.ajax({
                                type: "POST",
                                url: "php/CreateTableForPageUsers.php",
                                dataType: "html",
                                async: false,
                                data: {
                                    "createTable": Number(nu1) + Number(nu2),
                                },
                            });
                        }
                    }
                    for (let i = 0; i < UlLiBtn.length; i++) {
                        UlLiBtn[i].onclick = function() {
                            var baseUrl = (window.location).href; // You can also use document.URL
                            var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
                            let DivId = this.parentElement.parentElement.parentElement.dataset.id;
                            $.ajax({
                                type: "POST",
                                url: "php/friends.php",
                                dataType: "html",
                                async: false,
                                data: {
                                    "From": [koopId, DivId]
                                },
                            });
                        }
                    }

                }
            });
        }
        let LogOut = document.querySelector("#LogOut");
        LogOut.onclick = function() {
            location.href = "Login.php";
            let nu1 = document.querySelector(".head h5").dataset.id;
            $.ajax({
                type: "POST",
                url: "php/logout.php",
                dataType: "html",
                async: false,
                data: {
                    "From": nu1
                },
            });
        }
    } else {
        let btnToggleHide = document.querySelector(".All button");
        let Password = document.querySelector(".All input[type='Password']");

        btnToggleHide.onclick = function() {
            this.classList.toggle("active");
            if (Password.type === "password") {
                Password.type = "text";
            } else {
                Password.type = "password";
            }
        }
    }
}
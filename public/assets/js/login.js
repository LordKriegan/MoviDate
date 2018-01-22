window.onload = function() {
    $("#showLogin").on("click", function(e) {
        e.preventDefault();
        $("#loginForm").css("display", "block");
        $("#signUpForm").css("display", "none");
    });

    $("#showSignup").on("click", function(e) {
        e.preventDefault();
        $("#loginForm").css("display", "none");
        $("#signUpForm").css("display", "block");
    });

    $("#userLoginBtn").on("click", function(e) {
        e.preventDefault();
        axios.post("/api/loginUser", {
            userName: $("#userName").val().trim(),
            password: $("#password").val().trim()
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.error(error);
        })
    });
    $("#userSignUpBtn").on("click", function(e) {
        e.preventDefault();
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = position.coords.latitude + "," + position.coords.longitude
                axios.post("/api/createUser", {
                    userName: $("#signUpUn").val().trim(),
                    password: $("#signUpPw").val().trim(),
                    age: $("#signUpAge").val().trim(),
                    description: $("#signUpDesc").val().trim(),
                    gender: $("#signUpGender").val().trim(),
                    location: pos
                }).then(function(response) {
                    console.log(response);
                }).then(function(error) {
                    console.error(error);
                });
            }, function (err) {
                console.error("Uh-oh! Something went wrong when we tried to get your location.", err);
            });
        } else {
            console.error("Your browser does not support geolocations.");
        }
    });
}
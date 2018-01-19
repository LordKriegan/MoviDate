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
}
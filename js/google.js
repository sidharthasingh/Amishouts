signincounter=0;
addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

function gobacktosignin()
{
    $("#pass_reset").css("display","block");
    $("#or").css("display","block");
    $("#register-with-us").css("display","block");
    $("#goback").css("display","none");
    $("#register-using").animate({opacity: 0}, 500);
    $("#register-using").css("display", "none");
    $("#log3").animate({opacity:0},200);
    $("#log3").css("display","none");
    $("#log2").animate({opacity:0},200);
    $("#log2").css("display","none");
    $("#log1").css("display","block");
    $("#log1").animate({opacity:1},500);
    $("#register-with-us").animate({opacity: 1}, 500);
}

function onSuccess(googleUser) {

    function switch_to_complete_sign_up(pas) {
        if (damon_var = pas) {
            $("#log3").animate({
                opacity: '0'
            }, 500);
            $("#log3").css("display", "none");
            $("#log2").css("display", "block");
            $("#log2").animate({
                opacity: '1'
            }, 500);
            $("#wait").css("display", "none");
            $("#or").css("display","none");
            $("#register-using").css("display","none");
        }
    }

    function gen(fname, lname, email) 
    {
        if (empty_check(fname, email, "a", "a", "a", "a") && email_check(email)) {
            xml = new XMLHttpRequest();
            xml.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if(signincounter!=0)
                    {
                        res = this.responseText;
                        if (res != "0" && res != "") 
                        {
                            if (res == "1") 
                            {
                                $("#wait").css("display", "none");
                                alert("You are already registered. Try 'Sign In'");
                                gobacktosignin();
                            } 
                            else if (res == "3") 
                            {
                                alert("Something looks fishy here. Are you a hacker?");
                            } 
                            else 
                            {
                                switch_to_complete_sign_up(res);
                            }
                        } 
                        else 
                        {
                            $("#wait").css("display", "none");
                            alert("Something went fishy...");
                        }
                    }
                    else
                    {
                        signincounter=1;
                         $("#wait").css("display", "none");
                    }
                }
            }
            xml.open("GET", "/php/registration.php?fname=" + fname + "&lname=" + lname + "&email=" + email, true);
            xml.send();
        }
    }

    function splitfname(str) {
        st = new String(str);
        for (i = 0; i < st.length; i++)
            if (st.charAt(i) == ' ')
                return st.substr(0, i);
    }

    function splitlname(str) {
        st = new String(str);
        for (i = 0; i < st.length; i++)
            if (st.charAt(i) == ' ')
                return st.substr(i + 1, st.length);
    }
    $("#wait").css("display", "block");
    var profile = googleUser.getBasicProfile();
    fname = splitfname(profile.getName());
    lname = splitlname(profile.getName());
    email = profile.getEmail();
    $(".abcRioButtonContents").text("Sign In");
    gen(fname, lname, email);
}

function onFailure() {
    alert("LOGIN Failed");
}

function renderButton() {
    gapi.signin2.render('m-signin2', {
        'scope': 'profile email',
        'width': 150,
        'height': 40,
        'longtitle': false,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}

function register_option() {
    $("#register-with-us").animate({opacity: 0}, 500);
    $("#pass_reset").css("display","none");
    $("#goback").css("display","block");
    $("#log1").animate({opacity:0},500);
    $("#log1").css("display","none");
    $("#log3").css("display","block");
    $("#log3").animate({opacity:1},500);
    $("#register-with-us").css("display", "none");
    $("#register-using").css("display", "block");
    $("#register-using").animate({opacity: 1}, 500);
}
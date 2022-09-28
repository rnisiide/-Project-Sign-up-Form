let pswd = document.getElementById("password");
let confirmpswd = document.getElementById("confirmpassword");
let pswdspan = document.querySelector(".pswdmatch")



pswd.addEventListener ("blur", (event) => {
    pswdverify();
}) 

confirmpswd.addEventListener ("blur", () => {
    pswdverify()
})

function pswdverify() {
    if (pswd.value != confirmpswd.value) {
        pswd.style.borderColor = "#b28dd8";
        confirmpswd.style.borderColor = "#b28dd8";
        pswdspan.style.opacity = "1";
    } else {
        pswdspan.style.opacity = "0"
        pswd.style.borderColor = "";
        confirmpswd.style.borderColor = "";
    }

}

function checkData(){
    // let uname = document.getElementById("fname").value;
    let uname = document.myform.fname.value;
    let uedu = document.myform.edu;
    let email = document.myform.mail.value;
    let pass = document.myform.pass.value;
    let gen = document.myform.gen;
    let con = document.myform.num.value;
    let regname = "^[a-zA-Z ]{3,20}$";
    let rpass = "^[a-zA-Z0-9!@#$%^&*]{6,16}$";
    let rmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let rnum = "^[0-9]{9,11}$";
    if(uname.trim() === ""){
        window.alert("Fullname required");
        document.getElementById("fname").focus();
        return false;
    }
    if(!uname.trim().match(regname)){
        window.alert("Fullname min3 max20");
        document.getElementById("fname").focus();
        return false;
    }
    if(uedu[0].checked == false && uedu[1].checked == false && uedu[2].checked == false && uedu[3].checked == false){
        window.alert("Select atleast 1 qualification");
        return false;
    }
    if(!pass.trim().match(rpass)){
        window.alert("Password should be strong");
        return false;
    }
    if(!email.trim().match(rmail)){
        window.alert("Enter valid Email format");
        return false;
    }

    if(gen[0].checked == false && gen[1].checked == false){
        window.alert("Select your gender");
        return false;
    }
    if(!con.trim().match(rnum)){
        console.log(con);
        window.alert("Enter valid contact");
        return false;
    }

}
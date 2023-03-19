function open(){

    let form = window.document.getElementById("login");
    let username = form.id.value;
    let password = form.pass.value;
    
    if(username == "mimin" && password == "mimin123"){
        alert("Selamat Datang Mimin, Anda Administrator");
    }else if(username == "budi" && password == "budi123"){
        alert("Selamat Datang Budi, Anda Operator");
    }else{
        alert("Maaf Anda Gagal Login");
    }
}
function username(){
	//tangkap request form
	let frm  = window.document.getElementById("login");
	frm.id.value = "";
}

function password(){
	//tangkap request form
	let frm  = window.document.getElementById("login");
	frm.pass.value = "";
}
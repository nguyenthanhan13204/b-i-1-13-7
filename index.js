// Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không



let a = prompt("Nhập số a: ");
a = parseInt(a);
let b = prompt("Nhập số b: ");
b = parseInt(b);
if(a % b){
    alert("a chia hết cho b")
} else{
    alert("a không chia hết cho b")
}
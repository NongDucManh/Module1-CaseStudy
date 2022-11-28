//dữ liệu

//list xe Eclass
new Product("E 300 AMG",3129000000,"../image/eclass1.jpg",  "Eclass")
let eclass1 = new Product("E 300 AMG",3129000000,"../image/eclass1.jpg",  "Eclass")
let eclass2 = new Product("E 200 Exclusive",2470000000,"../image/eclass2.jpg",  "Eclass")
let eclass3 = new Product("E 180",2099000000,"../image/eclass3.jpg",  "Eclass")
let eclass4 = new Product("E200",2160000000,"../image/eclass4.jpg",  "Eclass")
let arrayEclass = [[eclass1, eclass2], [eclass3, eclass4]];

//list xe số

let motor1 = new Product("CBR1000RR", 678000000, "../image/xemoto1.png", "Motor");
let motor2 = new Product("CBR1000RR", 678000000, "../image/xemoto2.png", "Motor");
let motor3 = new Product("CBR1000RR", 678000000, "../image/xemoto3.png", "Motor");
let motor4 = new Product("CBR1000RR", 678000000, "../image/xemoto4.png", "Motor");
let motor5 = new Product("CBR1000RR", 678000000, "../image/xemoto5.png", "Motor");
let arrayMotor = [[motor1, motor2, motor3], [motor4, motor5]];

//list xe moto

let motorbike1 = new Product( "Future 125FI",30200000, "../image/xeso1.png", "Motorbike");
let motorbike2 = new Product( "Blade",18800000, "../image/xeso2.png", "Motorbike");
let motorbike3 = new Product( "Wave Alpha",17800000, "../image/xeso3.png", "Motorbike");
let motorbike4 = new Product( "Wave RSX FI",21700000, "../image/xeso4.png", "Motorbike");
let arrayMotorbike = [[motorbike1, motorbike2, motorbike3], [motorbike4]];

//hàm tạo list
function showElement(array) {
    console.log("test");
    let content = "<table>";
    for (let i = 0; i < array.length; i++) {
        content += "<tr>";
        for (let j = 0; j < array[i].length; j++) {
            content += "<td>";
            content += "<img  alt='Lỗi' class='custom-width' src=" + array[i][j].image + ">";
            content += "<h2>" + array[i][j].name + "</h2>";
            content += "<p>Giá: " + array[i][j].price + " VND</p>";
            if (!checkAdmin()) {
                content += "<button onclick='renderEdit(\"Cập nhật\");editProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Sửa&nbsp;</button>" + "&emsp;";
                content += "<button onclick='deleteProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Xóa&nbsp;</button>";
            }
            content += "</td>";
        }
        content += "<tr>";
    }
    content += "</table>";
    console.log("test" + content);
    document.getElementById("displayElement").innerHTML = content
}



function showEclass() {
    showElement(arrayEclass)
}

function showMotor() {
    showElement(arrayMotor)
}

function showMotorbike() {
    showElement(arrayMotorbike)
}

//kiểm tra xem đã đăng nhập admin hay chưa?
function checkAdmin() {
    let username = localStorage.getItem("username")
    let data = ""
    if (username === null) {
        data += "<div id='admin'><a href='login.html'>Đăng nhập</a></div>"
        document.getElementById("header").innerHTML = data
        return true;
    } else {
        data += "<div id='admin'><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='index.html'>Đăng xuất</a></div>"
        document.getElementById("header").innerHTML = data
        return false;
    }
}

function logout() {
    localStorage.clear()
}





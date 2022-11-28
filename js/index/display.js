//dữ liệu

//list xe Eclass
new Product("E 300 AMG",3129000000,"../image/eclass1.jpg",  "Eclass")
let eclass1 = new Product("E 300 AMG",3129000000,"../image/eclass1.jpg",  "Eclass")
let eclass2 = new Product("E 200 Exclusive",2470000000,"../image/eclass2.jpg",  "Eclass")
let eclass3 = new Product("E 180",2099000000,"../image/eclass3.jpg",  "Eclass")
let eclass4 = new Product("E200",2160000000,"../image/eclass4.jpg",  "Eclass")
let arrayEclass = [[eclass1, eclass2], [eclass3, eclass4]];

//list xe Glc

let glc1 = new Product("GLC 200",  1850000000 , "../image/glc1.jpeg", "Glc");
let glc2 = new Product("GLC 200 4MATIC", 2129000000 , "../image/glc2.jpg", "Glc");
let glc3 = new Product("GLC 300 4MATIC", 2569000000 , "../image/glc3.jpg", "Glc");
let glc4 = new Product("GLC 300 4MATIC Coupé",  3099000000 , "../image/glc4.jpg", "Glc");
let arrayGlc = [[glc1, glc2 ], [glc3, glc4]];

//list xe Sclass

let sclass1 = new Product( "S 450 L",4299000000 , "../image/sclass1.jpg", "Sclass");
let sclass2 = new Product( "S 450 L Luxury",4969000000 , "../image/sclass2.jpg", "Sclass");
let sclass3 = new Product( "Maybach S 450 4MATIC",7469000000, "../image/sclass3.jpg", "Sclass");
let sclass4 = new Product( "Maybach S680 4Matic",16000000000, "../image/sclass4.jpg", "Sclass");
let arraySclass = [[sclass1, sclass2, sclass3], [sclass4]];

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

function showGlc() {
    showElement(arrayGlc)
}

function showSclass() {
    showElement(arraySclass)
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





function renderEdit(text) {
    let data = ""
    data += "<table id='table'>" +
        "<tr><td colspan='2'><h2>" + text + "</h2></td></tr>" +
        "<tr><td><label for='name'>Tên sản phẩm</label></td>" +
        "<td><input type='text' name='name' size='25' maxlength='30' id='name'></td></tr>" +
        "<tr><td><label for='price'>Giá sản phẩm</label></td>" +
        "<td><input type='text' name='price' size='25' maxlength='30' id='price'></td></tr>" +
        "<tr><td><label for='image'>Ảnh sản phẩm</td>" +
        "<td><input type='text' name='image' size='25' maxlength='30' id='image'></label></td></tr>" +
        "<tr><td><label for='category'>Loại xe</label></td>" +
        "<td><select id='category'>" +
        "<option></option>" +
        "<option value='Eclass'>E-Class</option>" +
        "<option value='Glc'>GLC</option>" +
        "<option value='Sclass'>S-class</option>" +
        "</select></td></tr>" +
        "<tr><td></td><td>" +
        "<button onclick='editForm()'>&emsp;&emsp;" + text + "&emsp;&emsp;</button> " +
        "<button onclick='cancelEdit()'>&emsp;&emsp;Hủy&emsp;&emsp;</button></td></tr>" +
        "</table>";
    document.getElementById("poster").innerHTML = data;
}

function cancelEdit() {
    document.getElementById("poster").innerHTML = ""
}

//edit khi click vào submit form
function editForm() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let category = document.getElementById("category").value;
    let i = localStorage.getItem("indexXI");
    let j = localStorage.getItem("indexXJ");
    switch (category) {

        case "Eclass": {
            arrayEclass[i][j] = new Product(name, price, image, category);
            showEclass();
            break;
        }
        case "Glc": {
            arrayGlc[i][j] = new Product(name, price, image, category);
            showGlc();
            break;
        }
        case "Sclass": {
            arraySclass[i][j] = new Product(name, price, image, category);
            showSclass();
            break;
        }
    }
    cancelEdit();
}

//edit khi click vào nút edit
function editProduct(i, j, category) {
    localStorage.setItem("indexXI", i)
    localStorage.setItem("indexXJ", j)
    switch (category) {

        case "Eclass": {
            renderValueEdit(arrayEclass[i][j])
            break
        }
        case "Glc": {
            renderValueEdit(arrayGlc[i][j])
            break
        }
        case "Sclass": {
            renderValueEdit(arraySclass[i][j])
            break
        }
    }
}

function renderValueEdit(product) {
    document.getElementById("name").value = product.getName()
    document.getElementById("price").value = product.getPrice()
    document.getElementById("image").value = product.getImage()
    document.getElementById("category").value = product.getCategory()
}

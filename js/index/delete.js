function reRender(category) {
    switch (category) {
        case "Eclass": {
            showEclass()
            break;
        }
        case "Glc": {
            showGlc()
            break;
        }
        case "Sclass": {
            showSclass()
            break;
        }
    }
}

function deleteProduct(i, j, category) {
    switch (category) {
        case "Eclass": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayEclass[i][j].getName() + "?")) {
                arrayEclass[i].splice(j, 1)
            }
            break;
        }
        case "Glc": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayGlc[i][j].getName() + "?")) {
                arrayGlc[i].splice(j, 1)
            }
            break;
        }
        case "Sclass": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arraySclass[i][j].getName() + "?")) {
                arraySclass[i].splice(j, 1)
            }
            break;
        }
    }
    reRender(category);
}

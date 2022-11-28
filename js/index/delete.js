function reRender(category) {
    switch (category) {
        case "Eclass": {
            showEclass()
            break
        }
        case "Motor": {
            showMotor()
            break
        }
        case "Motorbike": {
            showMotorbike()
            break
        }
    }
}

function deleteProduct(i, j, category) {
    switch (category) {
        case "Eclass": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayEclass[i][j].getName() + "?")) {
                arrayEclass[i].splice(j, 1)
            }
            break
        }
        case "Motor": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayMotor[i][j].getName() + "?")) {
                arrayMotor[i].splice(j, 1)
            }
            break
        }
        case "Motorbike": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayMotorbike[i][j].getName() + "?")) {
                arrayMotorbike[i].splice(j, 1)
            }
            break
        }
    }
    reRender(category)
}

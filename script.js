var menu = document.getElementById("menu"); // lưu địa chỉ id menu vao biến menu
function show(){ //tạo hàm dùng để hiển thị thanh navigation
    menu.style.right ="0"; // hiển thị bên lề phải của trang
}
function hide(){ //tạo hàm che đi thanh navigation
    menu.style.right = "-200px"; // hiển thị bên lề phải nhưng cách lề phải -200px (lệch phải so với trang)
}

const form = document.getElementById('form'); // khai báo biến form lưu địa chỉ của 'form'
const username = document.getElementById('username'); //khai báo biến username lưu địa chỉ của 'username'
const email = document.getElementById('email'); //khai báo biến password lưu địa chỉ của 'email'
const password = document.getElementById('password');//khai báo biến password lưu địa chỉ của 'password'
const password2 = document.getElementById('password2');//khai báo biến password lưu địa chỉ của password2'
// kiem tra form va chan su kien submit
form.addEventListener('submit', e => { // bắt sự kiện submit trang form
	e.preventDefault(); // chặn việc submit form
	checkInputs(); // kiểm tra đầu vào
    document.getElementById('form').addEventListener('submit', function(){ //bắt sự kiện submit trang form nếu kiểm tra đầu vào là đúng
    alert('Đã Đăng Ký Thành Công!! Chào Mừng Đã Đến Với Liên Minh Tốc Chiến'); // thông báo khi trang nhận submit thành công
    });
    
});

function checkInputs() { // hàm kiểm tra đầu vào
	// cat khoang trang từng input nếu bị thừa
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
// check du lieu nhap vao username
	if(usernameValue === '') { // nếu không nhận được gì
		setErrorFor(username, 'Vui lòng nhập tài khoản của bạn'); // gọi hàm thông báo sai và yêu cầu nhập vào
	} else { // ngược lại nếu đúng
		setSuccessFor(username); //gọi hàm thông báo đúng
	}
// check email
    if(emailValue == ''){ // nếu email rỗng
        setErrorFor(email,'Vui lòng nhập Email'); //gọi hàm thông báo sai là yêu cầu nhập vào
    } else if(!isEmail(emailValue)){ // trường hợp không phải là email  
        setErrorFor(email, 'Không phải Email'); //gọi hàm kiểm tra email và bắt nhập lại
    }else{//ngược lại
        setSuccessFor(email);//gọi hàm thông báo đúng
    }

    if(passwordValue === ''){ // kiểm tra đầu vào rỗng thì yêu cầu nhập
        setErrorFor(password,'Vui lòng nhập mật khẩu'); // gọi hàm thông báo sai và nhập lại
    }else{
        setSuccessFor(password); // gọi hàm thông báo đúng
    }
// check lai password 2
    if(password2Value ===''){ // kiểm tra đầu vào rỗng thì yêu cầu nhập
        setErrorFor(password2,'Vui lòng nhập lại mật khẩu');// gọi hàm thông báo sai và nhập lại
    }else if(passwordValue !== password2Value){ // trường hợp không trùng password2 với password
        setErrorFor(password2,'Mật khẩu không chính xác'); //gọi hàm thông báo sai và yêu cầu nhập lại
    }
    else{
        setSuccessFor(password2); // gọi hàm thông báo đúng
    }
	
}
//check password
    
// hàm kiểm tra bắt lỗi nhập xuất
function setErrorFor(input, message) {
	const formControl = input.parentElement; // khai báo biến formControl kiểm tra đầu vào input của thẻ cha chứa nó
	const small = formControl.querySelector('small'); //khai báo biến small lưu địa chỉ 'small' trong thẻ cha chứa nó
	formControl.className = 'form-control error'; //thêm thuộc tính vào nếu báo sai để gọi css
	small.innerText = message; // in thông báo lỗi gán vào message
}
// hàm kiểm tra đúng nhập xuất đúng
function setSuccessFor(input) { 
	const formControl = input.parentElement;// khai báo biến formControl kiểm tra đầu vào input của thẻ cha chứa nó
	formControl.className = 'form-control success';//thêm thuộc tính vào nếu báo đúng để gọi css
}

function isEmail(email){ // hàm kiểm tra có phải là email không
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); // biểu thức chính quy của email
}








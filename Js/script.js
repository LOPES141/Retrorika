<script>
    {/* Fungsi untuk menampilkan pesan kesalahan */}
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }
    {/* Fungsi untuk menampilkan pesan sukses */}
    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
    {/* Fungsi untuk memeriksa apakah input kosong */}
    function checkRequired(inputArray) {
        let isRequired = false;
        inputArray.forEach(function(input) {
            if (input.value.trim() === '') {
                showError(input, '${getFieldName(input)} isrequired');
                isRequired = true;
            } else {
                showSuccess(input);
            }
        });
        return !isRequired;
    }
    {/* Fungsi untuk mendapatkan nama field */}
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    {/* Event listener untuk form registrasi */}
    document.getElementById('registrationForm').addEventListener('submit',function(e) {
        e.preventDefault();
        // Memeriksa kevalidan input
        if (checkRequired([username, email, password,confirmPassword])) {
            alert('Registrasi berhasil!');
            // Lakukan tindakan lanjutan di sini, misalnya mengirim data ke server
        } 
    });
    function openfunc() {
        document.getElementById("form").style.display = "block";
    }
    function ok(){
        document.getElementById("btn-con");
    }
    function btn-con.addEventListener('click', function()){
        document.location.href = "index.hmtl";
    }
    function closefunc() {
        document.getElementById("form").style.display = "none";
    }
</script>
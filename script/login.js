document.getElementById( 'login-btn')
.addEventListener('click', function(){
    const numberInput = document.getElementById('input-number');
    const phoneNumber = numberInput . value;
   console.log(phoneNumber);

    const inputPin = document.getElementById('input-pin');
    const pin = inputPin . value;
    console.log(pin);

    if(phoneNumber === '01776777987' && pin === '1234'){

        alert('Login successful!');
        window.location.assign('/Home.html'); 

    }else{
        alert('login failed!');
        return;
    }

}) 
document.querySelector('.login-form').addEventListener('submit', function(event){
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    document.querySelector('.login-container').innerHTML = '';


    const passwords = {
        'password1': 'https://website1.com',
        '69': 'https://mauricewa.github.io/PortfolioPiPe/',
        'password3': 'https://website3.com'
    };


    if (password in passwords) {
        let welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = "<h2>Welcome " + username + "! to the new room</h2>";
        document.querySelector('.login-container').appendChild(welcomeMessage);


        let btn = document.createElement('button');
        btn.innerHTML = 'Visit Website';
        btn.onclick = function() { window.location.href = passwords[password]; };
        document.querySelector('.login-container').appendChild(btn);
    } else {
        alert('Incorrect password');
    }
});

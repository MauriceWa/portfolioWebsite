document.querySelector('.login-form').addEventListener('submit', function(event){
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;


    document.querySelector('.login-container').innerHTML = '';

    // wachtwoord kiezen daar beneden
    if (password === 'yourPassword') {
        let welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = "<h2>Welcome " + username + "! to the new room</h2>";
        document.querySelector('.login-container').appendChild(welcomeMessage);

        var links = [
            {url: 'http://website1.com', text: 'Website 1'},
            {url: 'http://website2.com', text: 'Website 2'},
            {url: 'http://website3.com', text: 'Website 3'},
            {url: 'http://website4.com', text: 'Website 4'}
        ];

        links.forEach(function(link) {
            let btn = document.createElement('button');
            btn.innerHTML = link.text;
            btn.onclick = function() { window.location.href = link.url; };
            document.querySelector('.login-container').appendChild(btn);
        });
    } else {
        alert('Incorrect password');
    }
});

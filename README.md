# <p align="center">Popup Project

This project allow you to make custom popups and notifications that can be helpful in your website. 

## Importing
```
<script>
        const jsFileUrl = 'https://raw.githubusercontent.com/ItsYousof/Popup-Project/main/main.js';

        fetch(jsFileUrl)
            .then(response => response.text())
            .then(code => {
                const script = document.createElement('script');
                script.textContent = code;
                document.body.appendChild(script);
            });
    </script>
```

# <p align="center">Popup Project

This project allows you to make custom popups and notifications that can be helpful on your website. 

## Importing
```
<script src="https://codebentodev.w3spaces.com/scripts.js"></script>
```
## Using
Here is every function that you might use, 
```
    createErrorNotification(text, position) // 1 = Top-left corner
    createSuccessrNotification(text, position); // 2 = Top-right corner
    createWarningNotification(text, position) // 3 = Bottom-left corner
    createInfoNotification(text, position) // 4 = Bottom-right corner
    createPopup(bgColor, textColor, headline, bodyText)
```
You can determine the position of the notifications using numbers 1 - 4 <br>
```
1 = Top Left

2 = Top Right 

3 = Bottom Left

4 = Bottom right
```
If you would like to, you can make a notification with custom background, border color, and text color
```
createNotification(backgroundColor, textColor, text, borderColor, position)
```

Thank you for using this project!

(() => {
    function createNotification(backgroundColor, textColor, text, borderColor, position) {
        const notification = document.createElement('div');
        notification.style.backgroundColor = backgroundColor;
        notification.style.fontFamily = "'Courier New', Courier, monospace";
        notification.style.color = textColor;
        notification.style.border = `2px solid ${borderColor}`;
        notification.style.padding = '15px 30px';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        notification.style.fontSize = '16px';
        notification.style.fontWeight = 'bold';
        notification.style.position = 'fixed';
        notification.style.zIndex = '1000';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-50px)';
        notification.style.transition = 'all 0.5s ease-out';
        notification.innerText = text;

        switch (position) {
            case 1:
                notification.style.top = '20px';
                notification.style.left = '20px';
                notification.style.transform = 'translateX(-50px)';
                break;
            case 3:
                notification.style.top = '20px';
                notification.style.right = '20px';
                break;
            case 4:
                notification.style.bottom = '20px';
                notification.style.left = '20px';
                notification.style.transform = 'translateX(-50px)';
                break;
            case 5:
                notification.style.bottom = '20px';
                notification.style.right = '20px';
                break;
            default:
                console.error('Invalid position value');
                return;
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translate(0, 0)';
        }, 10);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = position.includes('top') ? 'translateY(-50px)' : 'translateY(50px)';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    function createErrorNotification(text, position) {
        const backgroundColor = '#ff4d4d';
        const textColor = '#ffffff';
        const borderColor = '#cc0000';
        createNotification(backgroundColor, textColor, '❌ ' + text, borderColor, position);
    }

    function createSuccessNotification(text, position) {
        const backgroundColor = '#4CAF50';
        const textColor = '#ffffff';
        const borderColor = '#388E3C';
        createNotification(backgroundColor, textColor, '✅  ' + text, borderColor, position);
    }

    function createWarningNotification(text, position) {
        const backgroundColor = '#ffcc00';
        const textColor = '#000000';
        const borderColor = '#ff9900';
        createNotification(backgroundColor, textColor, '🔔 ' + text, borderColor, position);
    }

    function createInfoNotification(text, position) {
        const backgroundColor = '#2196f3';
        const textColor = '#ffffff';
        const borderColor = '#1976d2';
        createNotification(backgroundColor, textColor, 'ℹ️ ' + text, borderColor, position);
    }

    function createPopup(bgColor, textColor, headline, bodyText) {
        const notification = document.createElement('div');
        notification.style.backgroundColor = bgColor;
        notification.style.color = textColor;
        notification.style.position = 'fixed';
        notification.style.top = '50%';
        notification.style.left = '50%';
        notification.style.transform = 'translate(-50%, -50%)';
        notification.style.padding = '20px';
        notification.style.width = '300px';
        notification.style.maxWidth = '90%';
        notification.style.border = '1px solid #ccc';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        notification.style.zIndex = '1000';

        const content = document.createElement('div');

        const closeBtn = document.createElement('div');
        closeBtn.textContent = '×';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '5px';
        closeBtn.style.right = '10px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.fontSize = '20px';
        closeBtn.style.fontWeight = 'bold';
        closeBtn.onclick = function () {
            closePopup(notification);
        };

        const heading = document.createElement('h2');
        heading.textContent = headline;
        heading.style.fontSize = '24px';
        heading.style.marginBottom = '10px';
        heading.style.textAlign = 'center';
        heading.style.fontFamily = "Arial, Helvetica, sans-serif";

        const paragraph = document.createElement('p');
        paragraph.textContent = bodyText;
        paragraph.style.fontSize = '16px';
        paragraph.style.lineHeight = '1.5';
        paragraph.style.fontFamily = "Courier New, Courier, monospace";
        paragraph.style.fontWeight = '600';

        content.appendChild(closeBtn);
        content.appendChild(heading);
        content.appendChild(paragraph);
        notification.appendChild(content);

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
    }

    function closePopup(notification) {
        if (notification) {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }
    }

    window.createErrorNotification = createErrorNotification;
    window.createSuccessNotification = createSuccessNotification;
    window.createWarningNotification = createWarningNotification;
    window.createInfoNotification = createInfoNotification;
    window.createPopup = createPopup;
})();

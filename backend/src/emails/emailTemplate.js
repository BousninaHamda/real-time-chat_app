export function createWelcomeEmailTemplate(name, clientURL) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Real-Time Chat App</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                line-height: 1.6;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 40px 20px;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .hero {
                text-align: center;
                padding: 20px 0;
            }
            .logo {
                max-width: 150px;
                height: auto;
                margin-bottom: 30px;
            }
            .greeting {
                color: #333333;
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 15px;
                text-align: center;
            }
            .welcome-message {
                color: #666666;
                font-size: 18px;
                text-align: center;
                margin-bottom: 30px;
                padding: 0 20px;
            }
            .cta-button {
                display: inline-block;
                background-color: #007bff;
                color: #ffffff !important;
                text-decoration: none;
                padding: 15px 30px;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                text-align: center;
                margin: 20px auto;
                display: block;
                width: fit-content;
                transition: background-color 0.3s ease;
            }
            .cta-button:hover {
                background-color: #0056b3;
            }
            .footer {
                text-align: center;
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid #eeeeee;
                color: #999999;
                font-size: 14px;
            }
            .features {
                margin: 30px 0;
                padding: 0 20px;
            }
            .feature-item {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                color: #666666;
            }
            .feature-icon {
                color: #007bff;
                margin-right: 10px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="hero">
                <img src="https://via.placeholder.com/150x80?text=Chat+App+Logo" alt="Real-Time Chat App Logo" class="logo">
            </div>
            
            <h1 class="greeting">Hello ${name}!</h1>
            
            <p class="welcome-message">
                Welcome to our Real-Time Chat App! We're excited to have you join our community. 
                Get ready to connect with friends, family, and colleagues in real-time with our 
                lightning-fast messaging platform.
            </p>
            
            <div class="features">
                <div class="feature-item">
                    <span class="feature-icon">⚡</span>
                    <span>Instant real-time messaging</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">🔒</span>
                    <span>Secure and private conversations</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">👥</span>
                    <span>Group chats and direct messages</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">📱</span>
                    <span>Works on all your devices</span>
                </div>
            </div>
            
            <a href="${clientURL}" class="cta-button">Start Chatting Now</a>
            
            <div class="footer">
                <p>Thanks for joining us!</p>
                <p>If you have any questions, feel free to reach out to our support team.</p>
                <p>&copy; 2025 Real-Time Chat App. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

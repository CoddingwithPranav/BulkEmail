// packages/email/src/templates/otp-template.ts

// Logo SVG as data URI for email compatibility
const logoDataUri = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjcyNCAzNi41ODA5QzM3Ljc0MjYgMzIuNTYyMiA0MC4wMDAzIDI3LjExMTggNDAuMDAwMyAyMS40Mjg2QzQwLjAwMDMgMTUuNzQ1NCAzNy43NDI2IDEwLjI5NDkgMzMuNzI0IDYuMjc2MjlDMjkuNzA1NCAyLjI1NzY1IDI0LjI1NDkgMS4wMjE4OGUtMDYgMTguNTcxNyAwQzEyLjg4ODUgLTEuMDIxODhlLTA2IDcuNDM4MDcgMi4yNTc2NCAzLjQxOTQzIDYuMjc2MjhMMTAuNDkwNSAxMy4zNDczQzExLjYwNjMgMTQuNDYzMSAxMy40MDgxIDE0LjQwNzQgMTQuODI3NiAxMy43MTgxQzE1Ljk4MzYgMTMuMTU2OCAxNy4yNjIyIDEyLjg1NzEgMTguNTcxNyAxMi44NTcxQzIwLjg0NSAxMi44NTcxIDIzLjAyNTIgMTMuNzYwMiAyNC42MzI2IDE1LjM2NzdDMjYuMjQwMSAxNi45NzUxIDI3LjE0MzEgMTkuMTU1MyAyNy4xNDMxIDIxLjQyODZDMjcuMTQzMSAyMi43MzgxIDI2Ljg0MzUgMjQuMDE2NyAyNi4yODIyIDI1LjE3MjdDMjUuNTkyOSAyNi41OTIyIDI1LjUzNzIgMjguMzk0IDI2LjY1MjkgMjkuNTA5OEwzMy43MjQgMzYuNTgwOVoiIGZpbGw9IiMyOTdBRkYiPjwvcGF0aD4KPHBhdGggZD0iTTMwIDQwSDE5LjUwOThDMTcuOTk0MyA0MCAxNi41NDA4IDM5LjM5OCAxNS40NjkyIDM4LjMyNjNMMS42NzM2OCAyNC41MzA4QzAuNjAyMDQgMjMuNDU5MiAwIDIyLjAwNTcgMCAyMC40OTAyVjEwTDMwIDQwWiIgZmlsbD0iIzM0QzJGRiI+PC9wYXRoPgo8cGF0aCBkPSJNMTAuNzE0MyAzOS45OTk5SDQuMjg1NzFDMS45MTg3OCAzOS45OTk5IDAgMzguMDgxMiAwIDM1LjcxNDJWMjkuMjg1NkwxMC43MTQzIDM5Ljk5OTlaIiBmaWxsPSIjMzRDMkZGIj48L3BhdGg+Cjwvc3ZnPg==`;

export const getOTPTemplate = (otp: string): string => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Bulk Email - Verify Your Account</title>
  </head>
  <body style="margin:0; padding:0; background:#f8fafc; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:white; border-radius:10px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08); border:1px solid #e8e8e8;">
            <!-- Header with brand color -->
            <tr>
              <td align="center" style="padding:48px 32px; background:linear-gradient(135deg, #297AFF 0%, #1a5fd9 100%);">
                <img src="${logoDataUri}" alt="Bulk Email" width="64" style="display:block; margin:0 auto;" />
                <h1 style="color:white; margin:16px 0 0; font-size:28px; font-weight:700; letter-spacing:-0.5px;">Bulk Email</h1>
                <p style="color:rgba(255,255,255,0.95); margin:6px 0 0; font-size:13px; font-weight:500;">Professional Email Marketing Platform</p>
              </td>
            </tr>
            
            <!-- Main Content -->
            <tr>
              <td style="padding:48px 40px; text-align:center;">
                <h2 style="color:#0f172a; font-size:24px; font-weight:600; margin:0 0 12px; letter-spacing:-0.3px;">Your Verification Code</h2>
                <p style="color:#64748b; font-size:15px; margin:0 0 36px; line-height:1.6;">
                  Enter this code to verify your account and start sending professional email campaigns
                </p>
                
                <!-- OTP Code Box -->
                <div style="display:inline-block; background:#297AFF; color:white; font-size:40px; font-weight:700; letter-spacing:10px; padding:20px 44px; border-radius:10px; box-shadow:0 4px 16px rgba(41, 122, 255, 0.25); margin:0 0 32px;">
                  ${otp}
                </div>
                
                <p style="color:#64748b; margin:0 0 32px; font-size:13px; line-height:1.5;">
                  <strong style="color:#475569;">Expires in 10 minutes</strong> • Keep this code confidential
                </p>
                
                <!-- Security Tips Box -->
                <div style="margin:0; padding:20px; background:#f8fafc; border-radius:10px; border:1px solid #e2e8f0; text-align:left;">
                  <p style="color:#475569; font-size:13px; margin:0 0 10px; font-weight:600; display:flex; align-items:center;">
                    <span style="display:inline-block; margin-right:6px;">🔒</span> Security Tips
                  </p>
                  <ul style="color:#64748b; font-size:12px; margin:0; padding:0 0 0 20px; line-height:1.7;">
                    <li style="margin-bottom:4px;">Never share this verification code with anyone</li>
                    <li style="margin-bottom:4px;">Bulk Email staff will never ask for this code</li>
                    <li>Report suspicious emails to <strong>security@bulkemail.com</strong></li>
                  </ul>
                </div>
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="padding:28px 32px; background:#f8fafc; text-align:center; border-top:1px solid #e2e8f0;">
                <p style="color:#94a3b8; font-size:12px; line-height:1.6; margin:0 0 8px;">
                  © ${new Date().getFullYear()} <strong style="color:#64748b;">Bulk Email</strong> • Professional Email Marketing Platform
                </p>
                <p style="margin:0; font-size:12px;">
                  <a href="https://bulkemail.com" style="color:#297AFF; text-decoration:none; font-weight:500;">Website</a>
                  <span style="color:#cbd5e1; margin:0 6px;">•</span>
                  <a href="https://bulkemail.com/help" style="color:#297AFF; text-decoration:none;">Help Center</a>
                  <span style="color:#cbd5e1; margin:0 6px;">•</span>
                  <a href="https://bulkemail.com/privacy" style="color:#297AFF; text-decoration:none;">Privacy Policy</a>
                </p>
              </td>
            </tr>
          </table>
          
          <!-- Bottom spacing -->
          <table width="600" cellpadding="0" cellspacing="0" style="margin-top:20px;">
            <tr>
              <td style="text-align:center; padding:0 20px;">
                <p style="color:#94a3b8; font-size:11px; line-height:1.5; margin:0;">
                  This email was sent to verify your Bulk Email account. If you didn't request this, please ignore this email.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`;
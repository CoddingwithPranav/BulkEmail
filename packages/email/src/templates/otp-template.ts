// packages/email/src/templates/otp-template.ts
export const getOTPTemplate = (otp: string): string => `
  <!-- Hidden image forces Gmail to show MessagerNepal logo instead of "M" -->
  <img src="https://i.imgur.com/3nP5KjM.png" width="1" height="1" style="display:none;" alt="" />

  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>MessagerNepal - Verify Your Account</title>
  </head>
  <body style="margin:0; padding:0; background:#f8fafc; font-family:Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:white; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.1);">
            <tr>
              <td align="center" style="padding:40px 20px; background:linear-gradient(135deg, #1e40af, #3b82f6);">
                <img src="https://i.imgur.com/3nP5KjM.png" alt="MessagerNepal" width="180" style="border-radius:12px;" />
                <h1 style="color:white; margin:20px 0 0; font-size:32px;">MessagerNepal</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:50px 40px; text-align:center;">
                <h2 style="color:#1e293b; font-size:26px;">Your Verification Code</h2>
                <p style="color:#475569; font-size:16px; margin:20px 0 40px;">
                  Use this code to complete your registration:
                </p>
                <div style="display:inline-block; background:#1e40af; color:white; font-size:42px; font-weight:bold; letter-spacing:12px; padding:24px 48px; border-radius:16px; box-shadow:0 10px 25px rgba(30,102,255,0.3);">
                  ${otp}
                </div>
                <p style="color:#64748b; margin-top:40px; font-size:14px;">
                  Expires in <strong>10 minutes</strong> • Never share this code
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px; background:#f1f5f9; text-align:center; color:#94a3b8; font-size:13px;">
                © ${new Date().getFullYear()} MessagerNepal • 
                <a href="https://messagernepal.com" style="color:#3b82f6; text-decoration:none;">messagernepal.com</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`;
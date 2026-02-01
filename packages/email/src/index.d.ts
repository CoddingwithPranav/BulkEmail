interface BulkEmailData {
    to: string;
    subject: string;
    text: string;
    html: string;
}
export declare const sendOTPEmail: (to: string, otp: string) => Promise<any>;
export declare const sendBulkEmail: ({ to, subject, text, html, campaignId, contactId }: BulkEmailData & {
    campaignId: string;
    contactId: string;
}) => Promise<any>;
export {};
//# sourceMappingURL=index.d.ts.map
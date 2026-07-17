export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { targetRole, messageTitle, messageBody } = req.body;

    const notificationPayload = {
        app_id: "19502337-1f76-4600-a1de-1e499263572c",
        contents: { en: messageBody },
        headings: { en: messageTitle },
        target_channel: "push",
        filters: [
            { field: "tag", key: "user_role", relation: "=", value: targetRole }
        ]
    };

    try {
        const response = await fetch("https://onesignal.com/api/v1/notifications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Basic ${process.env.ONESIGNAL_API_KEY}`
            },
            body: JSON.stringify(notificationPayload)
        });

        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            const errData = await response.json();
            return res.status(response.status).json({ error: errData });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

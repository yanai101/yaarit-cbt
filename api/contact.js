import notificationapi from 'notificationapi-node-server-sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, subject, message } = req.body;

  console.log(process.env.NOTIFICATIONAPI_CLIENT_ID);
  console.log(process.env.NOTIFICATIONAPI_CLIENT_SECRET);
  console.log(process.env.NOTIFICATIONAPI_NOTIFICATION_ID);
  console.log(process.env.NOTIFICATIONAPI_USER_ID);
  console.log(req.body);

  if (!process.env.NOTIFICATIONAPI_CLIENT_ID || !process.env.NOTIFICATIONAPI_CLIENT_SECRET) {
    console.error('Missing NotificationAPI credentials');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  notificationapi.init(
    process.env.NOTIFICATIONAPI_CLIENT_ID,
    process.env.NOTIFICATIONAPI_CLIENT_SECRET
  );

  try {
    await notificationapi.send({
      notificationId: process.env.NOTIFICATIONAPI_NOTIFICATION_ID || 'contact_form',
      user: {
        id: process.env.NOTIFICATIONAPI_USER_ID || 'admin_user',
        email: 'yaaritcbt@gmail.com',
      },
      mergeTags: {
        name,
        phone,
        subject,
        message,
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('NotificationAPI Error:', error);
    res.status(500).json({ error: 'Failed to send notification' });
  }
}

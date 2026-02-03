import notificationapi from 'notificationapi-node-server-sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, subject, message } = req.body;

  // SECURITY NOTE: In a production team environment, these should be Environment Variables.
  // Using direct values for immediate deployment as requested by user.
  const clientId = '7g9mabb041f4v4xqnuhw76go7v';
  const clientSecret = '033o4wghjalrgz4rwsmvi5bm569r5ke34pzlt6ua9ufb9cqjim8and7t2e';
  const notificationId = 'yaarit_cbt';

  notificationapi.init(clientId, clientSecret);

  try {
    await notificationapi.send({
      notificationId: notificationId,
      user: {
        id: 'admin_owner', // Unique ID for the recipient (site owner)
        email: 'yaaritcbt@gmail.com', // The email address to receive notifications
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

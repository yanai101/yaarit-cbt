import notificationapiLib from 'notificationapi-node-server-sdk';

// Safe import handling for CJS/ESM interop
const notificationapi = notificationapiLib.default || notificationapiLib;

export default async function handler(req, res) {
  console.log('API/Contact: Function started');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, subject, message } = req.body;

  // Debug Environment Variables (Lengths only for security)
  console.log('Debug: Client ID Length:', process.env.NOTIFICATIONAPI_CLIENT_ID ? process.env.NOTIFICATIONAPI_CLIENT_ID.length : 'MISSING');
  console.log('Debug: Client Secret Length:', process.env.NOTIFICATIONAPI_CLIENT_SECRET ? process.env.NOTIFICATIONAPI_CLIENT_SECRET.length : 'MISSING');
  console.log('Debug: Notification ID:', process.env.NOTIFICATIONAPI_NOTIFICATION_ID);
  
  if (!process.env.NOTIFICATIONAPI_CLIENT_ID || !process.env.NOTIFICATIONAPI_CLIENT_SECRET) {
    console.error('Critical: Missing NotificationAPI credentials');
    return res.status(500).json({ error: 'Server configuration error: Missing Credentials' });
  }

  try {
    console.log('Initializing NotificationAPI with EU region...');
    notificationapi.init(
      process.env.NOTIFICATIONAPI_CLIENT_ID,
      process.env.NOTIFICATIONAPI_CLIENT_SECRET
    );
    // Force EU Base URL (The library might not expose the config option in init directly in all versions, 
    // but the user's snippet suggests it does, or we might need to set it on the instance if init return void)
    // Actually, checking the user snippet: notificationapi.init(clientId, clientSecret, { baseURL: ... });
    // Let's match that signature.
    
    // RE-INIT with config object
    notificationapi.init(
        process.env.NOTIFICATIONAPI_CLIENT_ID, 
        process.env.NOTIFICATIONAPI_CLIENT_SECRET,
        { baseURL: 'https://api.eu.notificationapi.com' }
    );
    
    console.log('NotificationAPI initialized.');

    console.log('Sending notification...');
    await notificationapi.send({
      notificationId: process.env.NOTIFICATIONAPI_NOTIFICATION_ID || 'yaarit_cbt',
      user: {
        id: 'yaaritcbt@gmail.com',
        email: 'yaaritcbt@gmail.com',
        number: '+972506989894' // User request: +972506989894
      },
      mergeTags: {
        name,
        phone,
        subject,
        message,
      },
    });
    console.log('Notification sent successfully.');

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('NotificationAPI Error Detail:', error);
    // Return specific error message for debugging (remove in strict production if needed, but useful now)
    res.status(500).json({ error: 'Failed to send notification', details: error.message });
  }
}

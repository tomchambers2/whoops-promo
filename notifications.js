const beamsClient = new PusherPushNotifications.Client({
  instanceId: "YOUR_INSTANCE_ID",
});

beamsClient
  .start()
  .then((beamsClient) => beamsClient.getDeviceId())
  .then((deviceId) =>
    console.log("Successfully registered with Beams. Device ID:", deviceId)
  )
  .catch(console.error);

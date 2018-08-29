import {
  Cloud,
  Hub,
} from './src';

// if (process.env.email && process.env.password) {
//   Cloud.requestToken(process.env.email, process.env.password);
// } else if (process.env.email) {
//   Cloud.requestPassword(process.env.email);
// } else {
//   console.error('Email not set!');
// }


(async () => {
  // await Cloud.getHubKeys();
  // const hubToken: string = Cloud.config.hubs[0].token;
  // Hub.createHubInstance(hubToken);
  const devices = await Hub.getDevices();
  devices.forEach((device) => {
    console.info('device', device);
  });
})();


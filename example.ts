import { Cloud } from './src';

if (process.env.email && process.env.password) {
  Cloud.requestToken(process.env.email, process.env.password);
} else if (process.env.email) {
  Cloud.requestPassword(process.env.email);
} else {
  console.error('Email not set!');
}

import { Cloud } from './src';

if (process.env.email && process.env.password) {
  Cloud.emailLogin(process.env.email, process.env.password);
} else if (process.env.email) {
  Cloud.requestLogin(process.env.email);
} else {
  console.error('Email not set!');
}

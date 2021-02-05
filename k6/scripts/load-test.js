import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '5m', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
    'retrieved components': ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

export default () => {
  const BASE_URL = 'http://host.docker.internal:4000';

  let clients = http
    .get(`${BASE_URL}/clients`, {
      headers: { 'Content-Type': 'application/json' },
    })
    .json();
  check(clients, {
    'retrieved clients': (obj) => obj.length > 0,
  });

  sleep(1);
};

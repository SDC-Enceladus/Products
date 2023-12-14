import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 1000 },
    { duration: '1m', target: 1000 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'],
  },
};

const BASE_URL = 'http://0.0.0.0:3210/products/';

export default function () {
  let response = http.get(`${BASE_URL}`);
  check(response, { 'status was 200': (r) => r.status === 200 });
  sleep(1);

  response = http.get(`${BASE_URL}798199`);
  check(response, { 'status was 200': (r) => r.status === 200 });
  sleep(1);

  response = http.get(`${BASE_URL}798199/styles`);
  check(response, { 'status was 200': (r) => r.status === 200 });
  sleep(1);

  response = http.get(`${BASE_URL}798199/related`);
  check(response, { 'status was 200': (r) => r.status === 200 });
  sleep(1);

  response = http.get(`${BASE_URL}798199/stylesNew`);
  check(response, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10, // usuarios virtuales
    duration: '30s', // duración de la prueba
};

export default function () {
    const res = http.get('https://test-api.k6.io/public/crocodiles/');
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
    });
    sleep(1); // simular tiempo de espera entre peticiones
}

import http from 'k6/http';
import { check } from 'k6';

export const options = {
    scenarios: {
        scenario_50tps: {
            executor: 'constant-arrival-rate',
            rate: 50, // 50 requests por segundo
            timeUnit: '1s',
            duration: '1m', // Duración: 1 minuto
            preAllocatedVUs: 10,
            maxVUs: 50,
        },
        scenario_100tps: {
            executor: 'constant-arrival-rate',
            rate: 100, // 100 requests por segundo
            timeUnit: '1s',
            duration: '1m', // Duración: 1 minuto
            preAllocatedVUs: 20,
            maxVUs: 100,
            startTime: '1m', // Inicia después de 1 minuto
        },
    },
};

const jwtToken = __ENV.JWT_TOKEN; // JWT pasado como variable de entorno

export default function () {
    const url = 'https://dummyjson.com/products/add';
    const payload = JSON.stringify({
        title: `Product-${__ITER}`, // Valor único por iteración
        price: Math.random() * 100,
    });

    const headers = {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
    };

    const res = http.post(url, payload, { headers });

    check(res, {
        'is status 200': (r) => r.status === 200,
        'is response valid': (r) => r.json().title === JSON.parse(payload).title,
    });
}



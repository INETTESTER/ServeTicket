import http from 'k6/http';

// 2. เปลี่ยนจาก default function เป็น function ปกติ โดยใช้ path `login` เป็นชื่อฟังก์ชัน
export function Login() {
  const url = 'https://test-api-serve.one.th/standard/authentication/authentication/login';

  const payload = JSON.stringify({
    username: 'admin_softway',
    password: 'eth0u==QMwM3chBFQjd3cqne4',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  // 3. log response body
  //console.log('🔐 Response body:', res.body);

  // 4. return response
  return res;
}

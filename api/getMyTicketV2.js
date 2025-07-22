import http from 'k6/http';

// 2. สร้างฟังก์ชันชื่อ ticket ตาม path หลังสุด
export function getMyTicketV2() {
  const url = 'https://test-api-serve.one.th/standard/backend/ticket/V2' +
    '?platform_id=e6d2d5a9-151c-43e3-994c-59351f652e78' +
    '&user_id=8ea2eee6-a00a-4236-8d24-bd212727b239' +
    '&status_id=0&is_assign=false&is_all=true&page=1&limit=10&active_status=true';

  const res = http.get(url);

  // 3. log response body
  //console.log('🎫 Response body:', res.body);

  // 4. return response
  return res;
}

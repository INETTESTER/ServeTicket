import http from 'k6/http';

export function getAllTicketV2() {
  const url = 'https://test-api-serve.one.th/standard/backend/ticket/allV2' +
    '?platform_id=7111f67b-d1ee-42aa-a0eb-578138e9a2ab' +
    '&channel_ticket=all&page=1&limit=200&is_all=true&is_assign=false' +
    '&status_id=0&column_name=&keyword=&active_status=true';

  const params = {
    headers: {
      'Authorization': 'Bearer HlgaV7aDuE3RYXgb3kuAP43kXsceVrhC',
    },
  };

  const res = http.get(url, params);

  // ✅ log response body
  //console.log('📄 Response body:', res.body);

  // ✅ return response
  return res;
}

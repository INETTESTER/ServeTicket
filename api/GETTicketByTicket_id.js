import http from 'k6/http';

export function GETTicketByTicket_id() {
  const url = 'https://test-api-serve.one.th/standard/backend/ticket/ticket_detail' +
    '?id=ba69f1c4-d8ee-45b5-8a86-6e68a25048c9' +
    '&platform_id=c389b224-0e8c-4ddb-87ec-5b706535eccd';

  const res = http.get(url);

  // ✅ log response body
  //console.log('🧾 Response body:', res.body);

  // ✅ return response
  return res;
}

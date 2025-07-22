import http from 'k6/http';

export function Search_My_Ticket() {
  const url = 'https://test-api-serve.one.th/standard/backend/ticket/V2' +
    '?platform_id=c389b224-0e8c-4ddb-87ec-5b706535eccd' +
    '&user_id=f1152101-16eb-406d-9e6a-a1a85a808a49' +
    '&page=1&limit=10&is_all=true&is_assign=false' +
    '&status_id=0&column_name=ticket_no&keyword=&active_status=true';

  const params = {
    headers: {
      'Authorization': 'Bearer HWD90y8Fd1f4dmn1RA7fvk70SvrWQUtt',
    },
  };

  const res = http.get(url, params);

  // ✅ log response body
  //console.log('📘 Response body:', res.body);

  // ✅ return response
  return res;
}

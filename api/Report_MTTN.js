import http from 'k6/http';

export function Report_MTTN() {
  const url = 'https://test-api-serve.one.th/standard/report/mttn' +
    '?platform_id=c389b224-0e8c-4ddb-87ec-5b706535eccd';

  const params = {
    headers: {
      'Authorization': 'Bearer HL1uthbIopn2wLQ90QILii13ShHlFocS',
    },
  };

  const res = http.get(url, params);

  // ✅ log response body
  //console.log('📊 Response body:', res.body);

  // ✅ return response
  return res;
}

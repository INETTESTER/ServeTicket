import http from 'k6/http';

export function Report() {
  const url = 'https://test-api-serve.one.th/standard/report/report';

  const payload = JSON.stringify({
    platform_id: "c389b224-0e8c-4ddb-87ec-5b706535eccd",
    start_date: "2025-06-12T10:09:56.000Z",
    end_date: "2025-07-15T10:10:00.000Z",
    active_status: [true, false],
    ticket_type_id: [1, 2, 3],
    ticket_status_id: [1, 2, 3, 4, 5, 6, 7, 8],
    priority_id: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    member_group_id: [
      "41c6ddbf-cb7c-4803-acd2-aefc1f9ad077",
      "ef7b129e-fc1e-45fb-bf17-4f698d1aa6a0"
    ],
    member_group_original: [
      "41c6ddbf-cb7c-4803-acd2-aefc1f9ad077",
      "ef7b129e-fc1e-45fb-bf17-4f698d1aa6a0"
    ],
    key_sort: "ticket_no",
    value_sort: "desc",
    sla: ["on_time", "warning_time", "overdue", "no_sla"],
    search_key: "ticket_no",
    search_operator: "like",
    search_value: ""
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer HL1uthbIopn2wLQ90QILii13ShHlFocS'
    },
  };

  const res = http.post(url, payload, params);

  // ✅ log response body
  //console.log('📑 Response body:', res.body);

  // ✅ return response
  return res;
}

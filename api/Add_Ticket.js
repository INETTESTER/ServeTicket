import http from 'k6/http';

export function Add_Ticket(cid) {
  const url = 'https://test-api-serve.one.th/standard/backend/ticket';
  const ticket_no = `${__VU}${__ITER}`+""+cid;
  const payload = JSON.stringify({
    platform_id: "c389b224-0e8c-4ddb-87ec-5b706535eccd",
    created_by: "f1152101-16eb-406d-9e6a-a1a85a808a49",
    is_affect_sla: false,
    is_major_incident: false,
    active_status: true,
    username: null,
    ticket_no: ""+ticket_no,
    open_at: "2025-07-15T09:47:46.527Z",
    ticket_type_id: 1,
    channel_notification_id: 3,
    priority_id: 9,
    service_id: "dda3b5f2-2714-419f-ac5d-e386db527119",
    member_group_id: "ef7b129e-fc1e-45fb-bf17-4f698d1aa6a0",
    member_group_orginal_id: "ef7b129e-fc1e-45fb-bf17-4f698d1aa6a0",
    category_id: "1",
    sub_category_id: "1",
    customer_id: 7648,
    customer_erp_code: "-",
    customer_full_name_th: "Customer01",
    customer_full_name_eng: "-",
    customer_cvm_code: "CN-0001",
    subject: "ทดสอบ สร้าง ticket & upload file",
    contact_id: "other",
    contact_name: "ทดสอบ",
    contact_position: "ทดสอบ",
    contact_phone: "ทดสอบ",
    contact_email: "ทดสอบ",
    notify_name: "ทดสอบ",
    notify_position: "ทดสอบ",
    notify_phone: "ทดสอบ",
    notify_email: "ทดสอบ",
    description: "ทดสอบ สร้าง ticket & upload file"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  // log response body
  //console.log('📩 Response body:', res.body);

  // return response
  return res;
}

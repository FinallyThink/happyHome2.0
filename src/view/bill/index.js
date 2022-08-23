import Mock from "mockjs";
let data = [];
for (let i = 0 ;i<10 ;i++) {
   data.push(Mock.mock({
        date:'@date("yyyy-MM-dd")',
        type: /\w{5,10}/,
        amount: /\d{5,10}/,
    }))
}

export default {
  tableHead: [
    { value: "date", text: "Date", width: "120" },
    { value: "amount", text: "Amount", width: "120" },
    { value: "type", text: "Type" },
  ],
  tableData: data
};

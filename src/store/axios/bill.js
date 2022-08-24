import Mock from "mockjs";
const actions = {
  async GET_BILL_LIST() {
    let data = [];
    for (let i = 0; i < 10; i++) {
      data.push(
        Mock.mock({
          date: '@date("yyyy-MM-dd")',
          type: /\w{5,10}/,
          amount: /\d{5,10}/,
        })
      );
    }
    return data;
  },
};

export default {
  ...actions,
};

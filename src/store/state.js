let defaultCity = '上海';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {}
// 防止用户开启隐身模式

export default {
  city: defaultCity
};

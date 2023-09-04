export function getCurrentTime() {
  const time = new Date();

  return {
    hours: time.getHours() >= 10 ? time.getHours() : "0" + time.getHours(),
    minutes: time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes(),
    seconds: time.getSeconds() >= 10 ? time.getSeconds() : "0" + time.getSeconds(),
  };
}

// собирался сделать валидацию с всплывающим окном ошибки, но подумал, что времени на всё осталось мало и решил оставить простой консольный эррор
export function validateDiameterInput(value) {
  if (parseInt(value) >= 200 && parseInt(value) <= 800) {
    return value;
  } else {
    throw new Error("Incorrect value. Diameter should be number between 200 and 800");
  }
}


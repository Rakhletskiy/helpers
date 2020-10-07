export const getUniqueNumber = () => {
  return Math.floor(Math.random() * 100000000) + 1;
};

export const dateFromStringDDMMYYYY = (date: string) => {
  const splited: string[] = date.split(".");
  return new Date(
    parseInt(splited[2]),
    parseInt(splited[1]) - 1,
    parseInt(splited[0])
  );
};

export const formatHumanDate = (date: Date) => {
  const months: string[] = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();

  return day + " " + months[month] + " " + year;
};

export const removeTab = (id: string): void => {
  let lis = Array.from(document.querySelectorAll("#tab-list li a"));
  lis.forEach((li: Element) => {
    let elId: string | null = li.getAttribute("id");
    if (!elId || elId.substr(0, 3) !== "ael") {
      return true;
    }

    if (li.getAttribute("nevetael") == id) {
      window.removeEl(parseInt(elId.substr(3)), 1);
      return false;
    }

    return true;
  });
};

export const getParamsFromLink = (type: string, search: string) => {
  let direction;
  let id;
  if (type === "reports") {
    direction = (search.split("direction=")[1] || "").split("&")[0];
    id = (search.split("id=")[1] || "").split("&")[0];
  } else {
    id = (search.split("id=")[1] || "").split("&")[0];
  }

  return {
    direction: direction,
    id: id,
  };
};

export function isValidInn(i: any) {
  if (!i) return false;
  if (i.match(/\D/)) return false;

  const inn = i.match(/(\d)/g);

  if (inn.length == 10) {
    return (
      inn[9] ==
      String(
        ((2 * inn[0] +
          4 * inn[1] +
          10 * inn[2] +
          3 * inn[3] +
          5 * inn[4] +
          9 * inn[5] +
          4 * inn[6] +
          6 * inn[7] +
          8 * inn[8]) %
          11) %
          10
      )
    );
  } else if (inn.length == 12) {
    return (
      inn[10] ==
        String(
          ((7 * inn[0] +
            2 * inn[1] +
            4 * inn[2] +
            10 * inn[3] +
            3 * inn[4] +
            5 * inn[5] +
            9 * inn[6] +
            4 * inn[7] +
            6 * inn[8] +
            8 * inn[9]) %
            11) %
            10
        ) &&
      inn[11] ==
        String(
          ((3 * inn[0] +
            7 * inn[1] +
            2 * inn[2] +
            4 * inn[3] +
            10 * inn[4] +
            3 * inn[5] +
            5 * inn[6] +
            9 * inn[7] +
            4 * inn[8] +
            6 * inn[9] +
            8 * inn[10]) %
            11) %
            10
        )
    );
  }

  return false;
}

export const onChangeYear = (year: number, result: any) => {
  window.location.href = `${window.location.origin}/${year}/?q=${result[0].rkl}`;
};

export const checkSnils = (value: any) => {
   if (!/^\d{3}-\d{3}-\d{3}\s\d{2}$/.test(value)) {
    return false;
  }
  value = value.replace(/\D/g, '');
  var checkSum = parseInt(value.slice(9), 10);
  value = value.substring(0, 9).split('');
  var sum = value.reduce(function (acc: any, next: any, index: any) {
    return acc + next * (9 - index);
  }, 0);
  return (sum < 100 && sum === checkSum)
    || ((sum === 100 || sum === 101) && checkSum === 0)
    || (sum > 101 && (sum % 101 === checkSum || (sum % 101 === 100 && checkSum === 0)));
};




export const capitalize = (sentence) => {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}

export const dateFormatting = (timeStr) => {
    let date = new Date(timeStr);
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dateStr = day+"/"+month+"/"+year;

    return (dateStr)
}

export const dateFormat = (myDate) => {
    myDate = myDate.split("-");
    let newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
    console.log(newDate.getTime());

    return (newDate.getDate())
}

export const formatNumber = (number, decimals, dec_point, thousands_sep) => {
    // Strip all characters but numerical ones.
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
          var k = Math.pow(10, prec);
          return '' + Math.round(n * k) / k;
      };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

export const calculateDiscount = (price, discount) => {
    if (discount > 0) {
        discount = (price / 100) * discount;
        return price - discount;
    } else {
        return price
    }
}

export const increment = (count) => {
    if(count > 0) {
        count = count += 1;
        return count;
    }
}

export const decrement = (count) => {
    if(count > 0) {
        count = count -= 1;
        return count;
    }
}


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

export const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
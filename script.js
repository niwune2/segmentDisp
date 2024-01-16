function clock() {
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();

    const timeFormat = [
        formatTime(hours),
        formatTime(mins),
        formatTime(seconds)
    ];

    const timeSlot = timeFormat.join('').split('');// 配列
    // join()は配列の全要素を順に連結した新しい文字列を返す
    // split()は指定したパターンで文字列を分割して配列に入れて返す
    const numbers = [
        '1111110', // 0
        '0110000', // 1
        '1101101', // 2
        '1111001', // 3
        '0110011', // 4
        '1011011', // 5
        '0011111', // 6
        '1110010', // 7
        '1111111', // 8
        '1110011'  // 9
    ];
    console.log(`timeSlot: ${timeSlot}`);
    const numbersArray = timeSlot.map(val => {
        return val = numbers[val];
        // mapは与えられた関数を配列すべての要素に対して呼び出し、新しい配列を生成する
    });
    console.log(`numbersArray: ${numbersArray}`);

    const segmentNumber = numbersArray.join('').split('');
    console.log(`segmentNumber: ${segmentNumber}`);

    segmentStarter(segmentNumber);
    lampAnimation();
}

function segmentStarter(segmentArray) {
    const segments = document.getElementsByClassName('seg');

    for (let i = 0; i < segmentArray.length; i++) {
        if (!Number(segmentArray[i])) {
            segments.item(i).classList.add('inactive');
            segments.item(i).classList.remove('active');
        } else {
            segments.item(i).classList.add('active');
            segments.item(i).classList.remove('inactive');
        }
    }
}

function lampAnimation() {
    const lamp = document.getElementsByClassName('lamp');

    for (let i = 0; i < lamp.length; i++) {
        lamp.item(i).classList.toggle('active');
        lamp.item(i).classList.toggle('inactive');
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time.toString();
}

setInterval(clock, 1000);

clock();
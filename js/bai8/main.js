window.onload = () => {
    setTimeout(t1, 1000);

    setInterval(() => {
        let arr = document.getElementsByTagName('p');

        let symbols = ['$ ', '> ', '/ ', '@ ', '# '];
        
        for (let i = 0; i < arr.length; i ++) {
            let symbol = symbols[Math.floor(Math.random() * symbols.length)];

            arr[i].setAttribute('data-content', symbol);
        }
    }, 250);
}

function createBox (name) {
    let box = document.createElement('div');

    box.classList.add('box');
    box.innerHTML = name;

    box.style.top = Math.round(Math.random() * (window.innerHeight - 100) + 50) + 'px';
    box.style.left = Math.round(Math.random() * (window.innerWidth - 100) + 50) + 'px';

    document.getElementById('ground').appendChild(box);
}

function write (text) {
    let box = document.getElementById('welcome');

    let chars = text.split('');
    let timeChar = 50;

    let p = document.createElement('p');
    p.setAttribute('data-content', '$ ');
    box.appendChild(p);

    chars.forEach((char, i) => {
        setTimeout(() => {
            p.innerHTML += char;
        }, timeChar * i);
    });

    return new Promise((res, rej) => {
        setTimeout(() => res('ok'), (chars.length * timeChar) + 1000);
    });
}

function runBox () {
    let arr = document.getElementsByClassName('box');
    let boxs = [];

    for (let i = 0; i < arr.length; i ++) {
        boxs.push({
            el: arr[i],
            speedX: Math.round(Math.random() * 6) - 3,
            speedY: Math.round(Math.random() * 6) - 3
        });
    }

    setInterval(() => {
        boxs.forEach(box => {
            let x = parseInt(box.el.style.left.replace('px', ''));
            let y = parseInt(box.el.style.top.replace('px', ''));

            x += box.speedX;
            y += box.speedY;

            if (x >= window.innerWidth - 50 || x <= 0) box.speedX = -box.speedX;
            if (y >= window.innerHeight - 50 || y <= 0) box.speedY = -box.speedY;

            box.el.style.left = x + 'px';
            box.el.style.top = y + 'px';
        });
    }, 50);
}

// --------------------------------------------------
// Kịch bản của bà tân vê lốc
// --------------------------------------------------

function t1 () {
    write('Xin chào tất cả các cháu đã quay trở lại với kênh của bà tân vê lốc!')
    .then(() => {
        write('Các cháu ơi, hôm nay bà sẽ code trò chơi "Đố anh bắt được em" các cháu nhé ^^')
        .then(() => {
            write('Đầu tiên bà cần tạo một cái hộp *__*')
            .then(() => {
                createBox('Bắt em đi ahihi');

                setTimeout(t2, 2000);
            });
        });
    });
}

function t2 () {
    write('Hình như một cái hộp hơi ít nhể :((')
    .then(() => {
        write('Được rồi, bà sẽ tạo thêm vài cái hộp nữa nha các cháu ^^')
        .then(() => {
            write('Hai cái... ba cái... bốn cái... năm cái... chắc được rồi đó')
            .then(() => {
                write('Giờ bà sẽ cho mấy em gái kia chạy nhảy nha ^^')
                .then(() => {
                    runBox();
                    setTimeout(t3, 2000);
                });
            });

            createBox('Em là Bug');
            createBox('Em là dễ thương');
            createBox('Em là nyc (Nằm yên coi)');
            createBox('Em là xiền');
        });
    });
}

function t3 () {
    write('Thôi mệt lắm bà không làm nữa đâu ^^')
    .then(() => {
        write('Trong đoạn code trên, bà đã sử dụng các phương thức getElementById, getElementByClassName và getElementByTagName')
        .then(() => {
            write('Không những thế, bà còn sử dụng các BOM setTimeout, setInterval')
            .then(() => {
                write('Rồi cháu nghĩ là chỉ có 2 BOM thôi ư?')
                .then(() => {
                    write('Không hề, bà còn có BOM cuối, lần này là BOOOM')
                    .then(() => {
                        write('Cái cuối chính là... location reload ^^')
                        .then(() => {
                            write('Bái bai!!!');
                            location.reload();
                        });
                    });
                });
            });            
        });
    });
}
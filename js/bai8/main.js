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
// K???ch b???n c???a b?? t??n v?? l???c
// --------------------------------------------------

function t1 () {
    write('Xin ch??o t???t c??? c??c ch??u ???? quay tr??? l???i v???i k??nh c???a b?? t??n v?? l???c!')
    .then(() => {
        write('C??c ch??u ??i, h??m nay b?? s??? code tr?? ch??i "????? anh b???t ???????c em" c??c ch??u nh?? ^^')
        .then(() => {
            write('?????u ti??n b?? c???n t???o m???t c??i h???p *__*')
            .then(() => {
                createBox('B???t em ??i ahihi');

                setTimeout(t2, 2000);
            });
        });
    });
}

function t2 () {
    write('H??nh nh?? m???t c??i h???p h??i ??t nh??? :((')
    .then(() => {
        write('???????c r???i, b?? s??? t???o th??m v??i c??i h???p n???a nha c??c ch??u ^^')
        .then(() => {
            write('Hai c??i... ba c??i... b???n c??i... n??m c??i... ch???c ???????c r???i ????')
            .then(() => {
                write('Gi??? b?? s??? cho m???y em g??i kia ch???y nh???y nha ^^')
                .then(() => {
                    runBox();
                    setTimeout(t3, 2000);
                });
            });

            createBox('Em l?? Bug');
            createBox('Em l?? d??? th????ng');
            createBox('Em l?? nyc (N???m y??n coi)');
            createBox('Em l?? xi???n');
        });
    });
}

function t3 () {
    write('Th??i m???t l???m b?? kh??ng l??m n???a ????u ^^')
    .then(() => {
        write('Trong ??o???n code tr??n, b?? ???? s??? d???ng c??c ph????ng th???c getElementById, getElementByClassName v?? getElementByTagName')
        .then(() => {
            write('Kh??ng nh???ng th???, b?? c??n s??? d???ng c??c BOM setTimeout, setInterval')
            .then(() => {
                write('R???i ch??u ngh?? l?? ch??? c?? 2 BOM th??i ???')
                .then(() => {
                    write('Kh??ng h???, b?? c??n c?? BOM cu???i, l???n n??y l?? BOOOM')
                    .then(() => {
                        write('C??i cu???i ch??nh l??... location reload ^^')
                        .then(() => {
                            write('B??i bai!!!');
                            location.reload();
                        });
                    });
                });
            });            
        });
    });
}
function send (text, speaker_id = 1) {
    let xhr = new XMLHttpRequest();
    xhr.open('post', 'https://api.zalo.ai/v1/tts/synthesize', true);

    xhr.setRequestHeader('apikey', 'YLOixQvMv6O5hD34PqdAfahRY7Qgp8DK');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

    xhr.send(`input=${text}&encode_type=0&speaker_id=${speaker_id}`);

    return new Promise((res, rej) => {
        xhr.onload = () => {
            let data = JSON.parse(xhr.response);

            if (data.error_code == 0) res(data.data.url);
            else rej(data.error_code);
        }
    });
}

send("Một con vịt xoè ra hai con thằn lằn con dmm").then(url => {
    let audio = new Audio(url);
    audio.play();
});



async function videoPlayBack() {
    try {
        const response = await fetch("https://api.b2o.goodline.info/ords/mobile/vc2/downloads", {
            "headers": {
                "accept": "application/json",
                "api_key": "86e3ff40ec2c52a8504c8669710b4394",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "priority": "u=1, i",
                // "token": "18F83E3B-AF20-07CB-E065-025056B67B70"
                "token": "190EFBDF-DAE1-6775-E065-025056B67B70"
            },
            "referrer": "https://video.linkvideo.ru/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        });
        const data = await response.json();
        const firstVideo = data[0].url;
        if (multipage.getUserAgent() === 'Safari') {
            setTimeout(() => {
                document.getElementById('videoPlayBack').src = data[0].url;
                document.getElementById('videoPlayBack').parentNode.play()
            }, 1000)
        } else if (multipage.getUserAgent() !== 'Safari') {
            document.getElementById('videoPlayBack').parentNode.src = data[0].url;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
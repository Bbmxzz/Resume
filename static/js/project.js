$(document).ready(function() {
    let imageData = document.getElementById('image-data');

    let urls = {
        '1-2.png': imageData.getAttribute('data-url-1-2'),
        '6-1.png': imageData.getAttribute('data-url-6-1'),
        '6-2.png': imageData.getAttribute('data-url-6-2'),
        '5-1.jpg': imageData.getAttribute('data-url-5-1'),
        '5-4.png': imageData.getAttribute('data-url-5-4'),
        '4-0.jpg': imageData.getAttribute('data-url-4-0'),
        '4-1.jpg': imageData.getAttribute('data-url-4-1'),
        '3-1.jpg': imageData.getAttribute('data-url-3-1'),
        '3-2.jpg': imageData.getAttribute('data-url-3-2'),
        '2-1.jpg': imageData.getAttribute('data-url-2-1'),
        '2-2.jpg': imageData.getAttribute('data-url-2-2'),
        '1-1.jpg': imageData.getAttribute('data-url-1-1')
    };

    $('.item:nth-child(2)').css('background-image', 'url(' + urls['1-2.png'] + ')');

    $('.next').click(function() {
        let items = $('.item');
        $('.slide').append(items.eq(0));
        console.log(items); // แสดงค่าของ items ใน console

        let currentImage = $('.item:nth-child(2)').css('background-image');

        if (currentImage.includes('1-1.jpg')) {
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['1-2.png'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['6-1.png'] + ')');

        } else if (currentImage.includes('2-1.jpg')) {
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['2-2.jpg'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['1-1.jpg'] + ')');

        } else if (currentImage.includes('3-1.jpg')) {
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['3-2.jpg'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['2-1.jpg'] + ')');

        } else if (currentImage.includes('4-1.jpg')) {
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['4-0.jpg'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['3-1.jpg'] + ')');

        } else if (currentImage.includes('5-1.jpg')) {
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['5-4.png'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['4-1.jpg'] + ')');

        } else if (currentImage.includes('6-1.png')) {
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['6-2.png'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['5-1.jpg'] + ')');
        }
    });

    $('.prev').click(function() {
        let currentImg = $('.item:nth-child(2)').css('background-image');
        let items = $('.item');
        $('.slide').prepend(items.eq(items.length - 1));
        console.log(items); // แสดงค่าของ items ใน console

        if (currentImg.includes('1-2.png')) {
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['1-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['6-2.png'] + ')');

        } else if (currentImg.includes('2-2.jpg')) {
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['2-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['1-2.png'] + ')');

        } else if (currentImg.includes('3-2.jpg')) {
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['3-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['2-2.jpg'] + ')');

        } else if (currentImg.includes('4-0.jpg')) {
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['4-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['3-2.jpg'] + ')');

        } else if (currentImg.includes('5-4.png')) {
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['5-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['4-0.jpg'] + ')');

        } else if (currentImg.includes('6-2.png')) {
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['6-1.png'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['5-4.png'] + ')');
        }
    });

    function updateImages() {
        let currentImage = $('.item:nth-child(2)').css('background-image');

        if (currentImage.includes('1-1.jpg')) {
            $('.item:nth-child(6)').css('background-image', 'url(' + urls['5-1.jpg'] + ')');
            $('.item:nth-child(5)').css('background-image', 'url(' + urls['4-1.jpg'] + ')');
            $('.item:nth-child(4)').css('background-image', 'url(' + urls['3-1.jpg'] + ')');
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['2-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['1-2.png'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['6-1.png'] + ')');
        } else if (currentImage.includes('2-1.jpg')) {
            $('.item:nth-child(6)').css('background-image', 'url(' + urls['6-1.png'] + ')');
            $('.item:nth-child(5)').css('background-image', 'url(' + urls['5-1.jpg'] + ')');
            $('.item:nth-child(4)').css('background-image', 'url(' + urls['4-1.jpg'] + ')');
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['3-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['2-2.jpg'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['1-1.jpg'] + ')');
        } else if (currentImage.includes('3-1.jpg')) {
            $('.item:nth-child(6)').css('background-image', 'url(' + urls['2-1.jpg'] + ')');
            $('.item:nth-child(5)').css('background-image', 'url(' + urls['6-1.png'] + ')');
            $('.item:nth-child(4)').css('background-image', 'url(' + urls['5-1.jpg'] + ')');
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['4-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['3-2.jpg'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['2-1.jpg'] + ')');
        } else if (currentImage.includes('4-1.jpg')) {
            $('.item:nth-child(6)').css('background-image', 'url(' + urls['2-1.jpg'] + ')');
            $('.item:nth-child(5)').css('background-image', 'url(' + urls['1-1.jpg'] + ')');
            $('.item:nth-child(4)').css('background-image', 'url(' + urls['6-1.png'] + ')');
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['5-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['4-0.jpg'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['3-1.jpg'] + ')');
        } else if (currentImage.includes('5-1.jpg')) {
            $('.item:nth-child(6)').css('background-image', 'url(' + urls['3-1.jpg'] + ')');
            $('.item:nth-child(5)').css('background-image', 'url(' + urls['2-1.jpg'] + ')');
            $('.item:nth-child(4)').css('background-image', 'url(' + urls['1-1.jpg'] + ')');
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['6-1.png'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['5-4.png'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['4-1.jpg'] + ')');
        } else if (currentImage.includes('6-1.png')) {
            $('.item:nth-child(6)').css('background-image', 'url(' + urls['4-1.jpg'] + ')');
            $('.item:nth-child(5)').css('background-image', 'url(' + urls['3-1.jpg'] + ')');
            $('.item:nth-child(4)').css('background-image', 'url(' + urls['2-1.jpg'] + ')');
            $('.item:nth-child(3)').css('background-image', 'url(' + urls['1-1.jpg'] + ')');
            $('.item:nth-child(2)').css('background-image', 'url(' + urls['6-2.png'] + ')');
            $('.item:nth-child(1)').css('background-image', 'url(' + urls['5-1.jpg'] + ')');
        }
    }

    $('.item').click(function() {
        let clickedIndex = $(this).index();
        let items = $('.item');
        $('.slide').append(items.slice(0, clickedIndex-1));
        updateImages();
    });
});
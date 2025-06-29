let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
console.log(url_segment[1]);




let play_btn = document.getElementById('play');
let video = document.getElementById('video');


// play pause trailer using left button

play_btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    } else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.remove('bi-pause');
        play_btn.classList.add('bi-play-fill');
    }
})


video.addEventListener('ended', () => {
    video.play();
})



// 
let date = new Date();
let main_date = date.getDate();
console.log(main_date);
Array.from(document.getElementsByClassName('date_point')).forEach((e1) => {

    if (e1.innerText == main_date) {
        e1.classList.add('h6_active')



    }
})


let pvr = [{
    pvr: 'PVR Gold',
    movie: 'tabaah',
    loc: 'gurgaon',
    audi: 1,
    type: '4DX',
    series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
    row_section: 3,
    seat: 24,
    j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    f: [5, 6, 15, 17, 18],
    e: [2, 7, 8, 17, 18],
    d: [5, 16, 15, 23, 22],
    c: [1, 2, 11, 12, 19],
    b: [8, 5],
    a: [],
    price: [800, 800, 560, 560, 560, 560, 450, 450],
    date: 29,
    img: 'tabah.png',
    video: 'trailer.mp4'
},
{
    pvr: 'PVR Gold',
    movie: 'Gadar2',
    loc: 'gurgaon',
    audi: 2,
    type: '4DX',
    series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
    row_section: 3,
    seat: 24,
    j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    f: [5, 6, 15, 17, 18],
    e: [2, 7, 8, 17, 18],
    d: [5, 16, 15, 23, 22],
    c: [6, 8, 11, 12, 19],
    b: [8, 5, 12, 13, 14],
    a: [],
    price: [800, 800, 560, 560, 560, 560, 450, 450],
    date: 29,
    img: 'gadar2.png',
    video: 'gadar2_trailer.mp4'

},
{
    pvr: 'PVR Gold',
    movie: 'tabaah',
    loc: 'gurgaon',
    audi: 1,
    type: '4DX',
    series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
    row_section: 3,
    seat: 24,
    j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    f: [5, 6, 15, 17, 18],
    e: [2, 7, 8, 17, 18],
    d: [5, 16, 15, 23, 22],
    c: [1, 2, 11, 12, 19],
    b: [8, 5],
    a: [12, 17],
    price: [800, 800, 560, 560, 560, 560, 450, 450],
    date: 30,
    img: 'tabah.png',
    video: 'trailer.mp4'
},
{
    pvr: 'PVR Gold',
    movie: 'Gadar2',
    loc: 'gurgaon',
    audi: 2,
    type: '4DX',
    series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
    row_section: 3,
    seat: 24,
    j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    f: [5, 6, 15, 17, 18],
    e: [2, 7, 8, 17, 18],
    d: [5, 16, 15, 23, 22],
    c: [6, 8, 11, 12, 19],
    b: [8, 5, 12, 13, 14],
    a: [5, 8, 7, 13],
    price: [800, 800, 560, 560, 560, 560, 450, 450],
    date: 30,
    img: 'gadar2.png',
    video: 'gadar2_trailer.mp4'

}


];


let addSeats = (arr) => {
    // console.log(arr);
    arr.forEach((e1, i) => {
        const { series, row_section, seat, price, a, b, c, d, e, f, h, j } = e1;

        // create row
        for (let index = 0; index < series.length; index++) {

            // console.log(series[index]);

            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];

            booked_seats = eval(series[index].toLowerCase());
            // console.log(booked_seats);



            // create seats

            for (let seats = 0; seats < seat; seats++) {

                if (seats === 0) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }


                let li = document.createElement('li');

                let filter = booked_seats.filter(e1 => {
                    return e1 === seats;
                })
                // console.log(filter);

                if (filter.length > 0) {
                    li.className = "seat booked";
                }
                else {
                    li.className = "seat";
                }

                li.id = series[index] + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', series[index]);
                li.innerText = price[index]

                li.onclick = () => {
                    if (li.className === 'seat booked') {
                        li.classList.remove('selected');
                    } else {
                        li.classList.toggle('selected');
                    }
                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    if (len > 0) {
                        document.getElementById('book_ticket').style.display = 'unset';
                    } else {
                        document.getElementById('book_ticket').style.display = 'none';
                    }
                }
                row.appendChild(li);
                if (seats === seat - 1) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }



            }





            document.getElementById('chair').appendChild(row);
        }




    });

}


let data = pvr.filter(Obj => Obj.date == main_date && Obj.movie == url_segment[1]);
// // console.log(data);
//  addSeats(data);


document.getElementById('title').innerText = data[0].movie;
document.getElementById('poster').src = data[0].img;
document.getElementById('video').src = data[0].video;
addSeats(data);
let offDate = () => {
    Array.from(document.getElementsByClassName('date_point')).forEach(e1 => {
        e1.classList.remove('h6_active');
    })
}
Array.from(document.getElementsByClassName('date_point')).forEach(e1 => {

    e1.addEventListener('click', () => {
        if (e1.innerText > date.getDate() - 1) {
            offDate();
            e1.classList.add('h6_active')
            main_date = +e1.innerText;
            document.getElementById('chair').innerHTML = '';

            let data = pvr.filter(Obj => Obj.date == main_date && Obj.movie == url_segment[1]);
            // console.log(data);
            addSeats(data);


        }
    })
})

document.getElementById('book_ticket').addEventListener('click', () => {
    Array.from(document.getElementsByClassName('selected')).forEach(e1 => {


        let seat_no = e1.getAttribute('book');

        let seat_sr = e1.getAttribute('sr').toLowerCase();
        let seat_price = e1.innerText;

        let obj = {
            movie: url_segment[1],
            date: main_date
        }

        let getData = pvr.map((obj) => {
            if (obj.movie === url_segment[1] && obj.date === main_date) {
                obj[seat_sr].push(+ seat_no);
            }

            return obj;
        });


        // console.log(getData);
        document.getElementById('chair').innerHTML = '';
        let data = getData.filter(obj => obj.date === main_date && obj.movie === url_segment[1]);





        document.getElementById('screen').style.display = 'none';
        document.getElementById('chair').style.display = 'none';
        document.getElementById('det').style.display = 'none';
        document.getElementById('ticket').style.display = 'block';
        document.getElementById('book_ticket').style.display = 'none';
        document.getElementById('back_ticket').style.display = 'unset';
        // back_ticket

        let tic = document.createElement('div');
        tic.className = 'tic';
        tic.innerHTML = `  <div class="barcode">
                        <div class="card">
                            <h6>ROW ${seat_sr.toUpperCase()}</h6>
                            <h6>${main_date} June 2025</h6>
                        </div> 
                        <div class="card">
                            <h6>Seat ${seat_no}</h6>
                            <h6>23:00</h6>
                        </div>
                        <svg id="${seat_sr}${seat_no}barcode"> </svg>
                        <h5> Gold Cinema</h5>
                    </div> 
                     <div class="tic_details"> 
                        <div class="type">4DX </div>
                        <h5 class="pvr"> <span>Gold</span> Cinema</h5>
                        <h1>Tabaah</h1>
                        <div class="seat_det">
                            <div class="seat_cr">
                                <h6>ROW</h6>
                                <h6>${seat_sr.toUpperCase()}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>SEAT</h6>
                                <h6>${seat_no}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>Date</h6>
                                <h6>${main_date} <sub>Jun</sub></h6>
                            </div>
                            <div class="seat_cr">
                                <h6>Time</h6>
                                <h6>11:30 <sub>pm</sub></h6>
                            </div>
                        </div>
                    </div>`
        document.getElementById('ticket').appendChild(tic);
        JsBarcode(`#${seat_sr}${seat_no}barcode`, `${seat_sr.toUpperCase()}${seat_no}${seat_price}${main_date}`);



    })
})

document.getElementById('back_ticket').addEventListener('click', () => {
    document.getElementById('screen').style.display = 'inline-block';
    document.getElementById('chair').style.display = 'block';
    document.getElementById('det').style.display = 'flex';
    document.getElementById('ticket').style.display = 'none';
    document.getElementById('book_ticket').style.display = 'unset';
    document.getElementById('back_ticket').style.display = 'none';










});


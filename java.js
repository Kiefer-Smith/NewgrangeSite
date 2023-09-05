popup = {
    init: function () {
        $('figure').click(function () {
            popup.open($(this));
        });

        $(document).on('click', '.popup img', function () {
            return false;
        }).on('click', '.popup', function () {
            popup.close();
        })
    },
    open: function ($figure) {
        $('.gallery').addClass('pop');
        $popup = $('<div class="popup" />').appendTo($('body'));
        $fig = $figure.clone().appendTo($('.popup'));
        $bg = $('<div class="bg" />').appendTo($('.popup'));
        $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
        $shadow = $('<div class="shadow" />').appendTo($fig);
        src = $('img', $fig).attr('src');
        $shadow.css({ backgroundImage: 'url(' + src + ')' });
        $bg.css({ backgroundImage: 'url(' + src + ')' });
        setTimeout(function () {
            $('.popup').addClass('pop');
        }, 10);
    },
    close: function () {
        $('.gallery, .popup').removeClass('pop');
        setTimeout(function () {
            $('.popup').remove()
        }, 100);
    }
}

popup.init()

const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        console.log(imgSrc)
    });
});

let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itembox");
let boxFancy = document.querySelectorAll(".fancybox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
    for (let m = 0; m < boxFancy.length; m++) {
      boxFancy[m].classList.remove("active");
      Fancybox.bind("[data-fancybox].active", {
        groupAll: false
      });
      if (
        boxFancy[m].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        boxFancy[m].classList.add("active");
        Fancybox.bind("[data-fancybox].active", {
          groupAll: true
        });
      }
    }
  });
}


  
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute("href").substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var mySwiper = new Swiper(".shop__big-slider", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  observeParents: true,
  observer: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  thumbs: {
    swiper: {
      el: ".shop__small-slider",
      slidesPerView: 5,
      grabCursor: true,
      slideToClickedSlide: true,
      watchOverflow: true,
      observeParents: true,
      observer: true,
      spaceBetween: 6,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        // when window width is >= 480px
        550: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 5 // spaceBetween: 40

        }
      }
    }
  }
});
var mySwiper2 = new Swiper(".shop__big-slider2", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  observeParents: true,
  observer: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  thumbs: {
    swiper: {
      el: ".shop__small-slider2",
      slidesPerView: 5,
      grabCursor: true,
      slideToClickedSlide: true,
      watchOverflow: true,
      observeParents: true,
      observer: true,
      spaceBetween: 6,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        // when window width is >= 480px
        550: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 5,
          spaceBetween: 7

        }
      }
    }
  }
});

function sliderArrows() {
  var button = document.querySelector(".table__next");

  button.onclick = function () {
    var container = document.querySelector(".table__body");
    var scrollAmount = 0;
    var slideTimer = setInterval(function () {
      container.scrollLeft += 20;
      scrollAmount += 20;

      if (scrollAmount >= 200) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };

  var back = document.querySelector(".table__prev");

  back.onclick = function () {
    var container = document.querySelector(".table__body");
    var scrollAmount = 0;
    var slideTimer = setInterval(function () {
      container.scrollLeft -= 20;
      scrollAmount += 20;

      if (scrollAmount >= 200) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };
}

sliderArrows();

function fbEvents() {
  $(".shop__btn").click(function () {
    gtag("event", "all", {
      event_category: "Lead",
      event_label: "AddToCart",
    });
    fbq("track", "AddToCart");
  });
}
fbEvents();
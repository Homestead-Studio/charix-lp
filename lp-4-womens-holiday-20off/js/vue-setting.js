"use strict";

Vue.config.devtools = true;
var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      qty: 1,
      pickedSize: {
        name: "Select a size",
        id: "",
      },
      pickedColor: "",
      colors: [
        {
          name: "Camel",
          img: "img/svg/colors/01.svg",
          oldPrice: 165,
          newPrice: 132,
          sizes: [
            {
              name: "Select a size",
              id: 0,
            },
            {
              name: "Euro 35 = US 5",
              id: 12101902303333,
            },
            {
              name: "Euro 35.5 = US 5.5",
              id: 12101902336101,
            },
            {
              name: "Euro 36 = US 6",
              id: 12101902368869,
            },
            {
              name: "Euro 36.5 = US 6.5",
              id: 12101902401637,
            },
            {
              name: "Euro 37 = US 7",
              id: 12101902434405,
            },
            {
              name: "Euro 37.5 = US 7.5",
              id: 12101902467173,
            },
            {
              name: "Euro 38 = US 8",
              id: 12101902499941,
            },
            {
              name: "Euro 38.5 = US 8.5",
              id: 12101902532709,
            },
            {
              name: "Euro 39 = US 8.5-9",
              id: 12101902565477,
            },
            {
              name: "Euro 39.5 = US 9",
              id: 12101902598245,
            },
            {
              name: "Euro 40 = US 9-9.5",
              id: 12101902631013,
            },
            {
              name: "Euro 40.5 = US 9.5",
              id: 12101902663781,
            },
            {
              name: "Euro 41 = US 9.5-10",
              id: 12101902696549,
            },
            {
              name: "Euro 41.5 = US 10",
              id: 18454643703875,
            },
            {
              name: "Euro 42 = US 10.5",
              id: 18454634758211,
            },
            {
              name: "Euro 42.5 = US 10.5-11",
              id: 32259047489603,
            },
            {
              name: "Euro 43 = US 11",
              id: 12101902827621,
            },
            {
              name: "Euro 44 = US 11.5-12",
              id: 32131521773635,
            },
            {
              name: "Euro 45 = US 12-12.5",
              id: 32306418221123,
            },
            {
              name: "Euro 46 = US 12.5-13",
              id: 32306418483267,
            },
          ],
        },
        {
          name: "Black",
          oldPrice: 165,
          newPrice: 132,
          img: "img/svg/colors/02.svg",
          sizes: [
            {
              name: "Select a size",
              id: 0,
            },
            {
              name: "Euro 35 = US 5",
              id: 12101882445925,
            },
            {
              name: "Euro 35.5 = US 5.5",
              id: 12101882478693,
            },
            {
              name: "Euro 36 = US 6",
              id: 12101882511461,
            },
            {
              name: "Euro 36.5 = US 6.5",
              id: 12101882544229,
            },
            {
              name: "Euro 37 = US 7",
              id: 12101882576997,
            },
            {
              name: "Euro 37.5 = US 7.5",
              id: 12101882609765,
            },
            {
              name: "Euro 38 = US 8",
              id: 12101882642533,
            },
            {
              name: "Euro 38.5 = US 8.5",
              id: 12101882675301,
            },
            {
              name: "Euro 39 = US 8.5-9",
              id: 12101882708069,
            },
            {
              name: "Euro 39.5 = US 9",
              id: 12101882740837,
            },
            {
              name: "Euro 40 = US 9-9.5",
              id: 12101882773605,
            },
            {
              name: "Euro 40.5 = US 9.5",
              id: 12101882806373,
            },
            {
              name: "Euro 41 = US 9.5-10",
              id: 12101882839141,
            },
            {
              name: "Euro 41.5 = US 10",
              id: 18446230159427,
            },
            {
              name: "Euro 42 = US 10.5",
              id: 18449722540099,
            },
            {
              name: "Euro 42.5 = US 10.5-11",
              id: 32259040182339,
            },
            {
              name: "Euro 43 = US 11",
              id: 12101898141797,
            },
            {
              name: "Euro 44 = US 11.5-12",
              id: 32131515744323,
            },
            {
              name: "Euro 45 = US 12-12.5",
              id: 32306416844867,
            },
            {
              name: "Euro 46 = US 12.5-13",
              id: 32306417041475,
            },
          ],
        },
        {
          name: "Dark Navy",
          oldPrice: 165,
          newPrice: 132,
          img: "img/svg/colors/03.svg",
          sizes: [
            {
              name: "Select a size",
              id: 0,
            },
            {
              name: "Euro 35 = US 5",
              id: 12101913411685,
            },
            {
              name: "Euro 35.5 = US 5.5",
              id: 12101913444453,
            },
            {
              name: "Euro 36 = US 6",
              id: 12101913477221,
            },
            {
              name: "Euro 36.5 = US 6.5",
              id: 12101913509989,
            },
            {
              name: "Euro 37 = US 7",
              id: 12101913542757,
            },
            {
              name: "Euro 37.5 = US 7.5",
              id: 12101913575525,
            },
            {
              name: "Euro 38 = US 8",
              id: 12101913608293,
            },
            {
              name: "Euro 38.5 = US 8.5",
              id: 12101913641061,
            },
            {
              name: "Euro 39 = US 8.5-9",
              id: 12101913673829,
            },
            {
              name: "Euro 39.5 = US 9",
              id: 12101913706597,
            },
            {
              name: "Euro 40 = US 9-9.5",
              id: 12101913739365,
            },
            {
              name: "Euro 40.5 = US 9.5",
              id: 12101913772133,
            },
            {
              name: "Euro 41 = US 9.5-10",
              id: 12101913804901,
            },
            {
              name: "Euro 41.5 = US 10",
              id: 18454729654339,
            },
            {
              name: "Euro 42 = US 10.5",
              id: 18454730702915,
            },
            {
              name: "Euro 42.5 = US 10.5-11",
              id: 32259050209347,
            },
            {
              name: "Euro 43 = US 11",
              id: 12101913935973,
            },
            {
              name: "Euro 44 = US 11.5-12",
              id: 32131527213123,
            },
            {
              name: "Euro 45 = US 12-12.5",
              id: 32306427199555,
            },
            {
              name: "Euro 46 = US 12.5-13",
              id: 32306427232323,
            },
          ],
        },
        {
          name: "Ultimate Gray",
          oldPrice: 165,
          newPrice: 132,
          img: "img/svg/colors/04.svg",
          sizes: [
            {
              name: "Select a size",
              id: 0,
            },
            {
              name: "Euro 35 = US 5",
              id: 32306442567747,
            },
            {
              name: "Euro 35.5 = US 5.5",
              id: 32306442600515,
            },
            {
              name: "Euro 36 = US 6",
              id: 32306442633283,
            },
            {
              name: "Euro 36.5 = US 6.5",
              id: 32306442666051,
            },
            {
              name: "Euro 37 = US 7",
              id: 32306442698819,
            },
            {
              name: "Euro 37.5 = US 7.5",
              id: 32306442731587,
            },
            {
              name: "Euro 38 = US 8",
              id: 32306442764355,
            },
            {
              name: "Euro 38.5 = US 8.5",
              id: 32306442797123,
            },
            {
              name: "Euro 39 = US 8.5-9",
              id: 32306442829891,
            },
            {
              name: "Euro 39.5 = US 9",
              id: 32306442862659,
            },
            {
              name: "Euro 40 = US 9-9.5",
              id: 32306442895427,
            },
            {
              name: "Euro 40.5 = US 9.5",
              id: 32306442928195,
            },
            {
              name: "Euro 41 = US 9.5-10",
              id: 32306442960963,
            },
            {
              name: "Euro 41.5 = US 10",
              id: 32306442993731,
            },
            {
              name: "Euro 42 = US 10.5",
              id: 32306443026499,
            },
            {
              name: "Euro 42.5 = US 10.5-11",
              id: 32306443059267,
            },
            {
              name: "Euro 43 = US 11",
              id: 32306443092035,
            },
            {
              name: "Euro 44 = US 11.5-12",
              id: 32306443124803,
            },
            {
              name: "Euro 45 = US 12-12.5",
              id: 32306443157571,
            },
            {
              name: "Euro 46 = US 12.5-13",
              id: 32306443190339,
            },
          ],
        },
        {
          name: "Graphite",
          oldPrice: 165,
          newPrice: 132,
          img: "img/svg/colors/05.svg",
          sizes: [
            {
              name: "Select a size",
              id: 0,
            },
            {
              name: "Euro 35 = US 5",
              id: 39444888715331,
            },
            {
              name: "Euro 35.5 = US 5.5",
              id: 39444888748099,
            },
            {
              name: "Euro 36 = US 6",
              id: 39444888780867,
            },
            {
              name: "Euro 36.5 = US 6.5",
              id: 39444888813635,
            },
            {
              name: "Euro 37 = US 7",
              id: 39444888846403,
            },
            {
              name: "Euro 37.5 = US 7.5",
              id: 39444888879171,
            },
            {
              name: "Euro 38 = US 8",
              id: 39444888911939,
            },
            {
              name: "Euro 38.5 = US 8.5",
              id: 39444888944707,
            },
            {
              name: "Euro 39 = US 8.5-9",
              id: 39444888977475,
            },
            {
              name: "Euro 39.5 = US 9",
              id: 39444889010243,
            },
            {
              name: "Euro 40 = US 9-9.5",
              id: 39444889043011,
            },
            {
              name: "Euro 40.5 = US 9.5",
              id: 39444889075779,
            },
            {
              name: "Euro 41 = US 9.5-10",
              id: 39444889108547,
            },
            {
              name: "Euro 41.5 = US 10",
              id: 39444889141315,
            },
            {
              name: "Euro 42 = US 10.5",
              id: 39444889174083,
            },
            {
              name: "Euro 42.5 = US 10.5-11",
              id: 39444889206851,
            },
            {
              name: "Euro 43 = US 11",
              id: 39444889239619,
            },
            {
              name: "Euro 44 = US 11.5-12",
              id: 39444889272387,
            },
            {
              name: "Euro 45 = US 12-12.5",
              id: 39444889305155,
            },
            {
              name: "Euro 46 = US 12.5-13",
              id: 39444889337923,
            },
          ],
        },
        {
          name: "Camel / Black",
          oldPrice: 165,
          newPrice: 132,
          img: "img/svg/colors/06.svg",
          sizes: [
            {
              name: "Select a size",
              id: 0,
            },
            {
              name: "Euro 35 = US 5",
              id: 18574726594627,
            },
            {
              name: "Euro 35.5 = US 5.5",
              id: 18574726627395,
            },
            {
              name: "Euro 36 = US 6",
              id: 18574726660163,
            },
            {
              name: "Euro 36.5 = US 6.5",
              id: 18574726692931,
            },
            {
              name: "Euro 37 = US 7",
              id: 18574726725699,
            },
            {
              name: "Euro 37.5 = US 7.5",
              id: 18574726758467,
            },
            {
              name: "Euro 38 = US 8",
              id: 18574726791235,
            },
            {
              name: "Euro 38.5 = US 8.5",
              id: 18574726824003,
            },
            {
              name: "Euro 39 = US 8.5-9",
              id: 18574726856771,
            },
            {
              name: "Euro 39.5 = US 9",
              id: 18574726889539,
            },
            {
              name: "Euro 40 = US 9-9.5",
              id: 18574726922307,
            },
            {
              name: "Euro 40.5 = US 9.5",
              id: 18574726955075,
            },
            {
              name: "Euro 41 = US 9.5-10",
              id: 18574726987843,
            },
            {
              name: "Euro 41.5 = US 10",
              id: 18574727020611,
            },
            {
              name: "Euro 42 = US 10.5",
              id: 18574727053379,
            },
            {
              name: "Euro 42.5 = US 10.5-11",
              id: 32259048013891,
            },
            {
              name: "Euro 43 = US 11",
              id: 18574727249987,
            },
            {
              name: "Euro 44 = US 11.5-12",
              id: 32131523182659,
            },
            {
              name: "Euro 45 = US 12-12.5",
              id: 32306420416579,
            },
            {
              name: "Euro 46 = US 12.5-13",
              id: 32306420449347,
            },
          ],
        },
        {
          name: "Bordeaux",
          oldPrice: 165,
          newPrice: 132,
          img: "img/svg/colors/07.svg",
          sizes: [
            {
              name: "Select a size",
              id: 0,
            },
            {
              name: "Euro 35 = US 5",
              id: 12101917835365,
            },
            {
              name: "Euro 35.5 = US 5.5",
              id: 12101917868133,
            },
            {
              name: "Euro 36 = US 6",
              id: 12101917900901,
            },
            {
              name: "Euro 36.5 = US 6.5",
              id: 12101917933669,
            },
            {
              name: "Euro 37 = US 7",
              id: 12101917966437,
            },
            {
              name: "Euro 37.5 = US 7.5",
              id: 12101917999205,
            },
            {
              name: "Euro 38 = US 8",
              id: 12101918031973,
            },
            {
              name: "Euro 38.5 = US 8.5",
              id: 12101918064741,
            },
            {
              name: "Euro 39 = US 8.5-9",
              id: 12101918097509,
            },
            {
              name: "Euro 39.5 = US 9",
              id: 12101918130277,
            },
            {
              name: "Euro 40 = US 9-9.5",
              id: 12101918163045,
            },
            {
              name: "Euro 40.5 = US 9.5",
              id: 12101918195813,
            },
            {
              name: "Euro 41 = US 9.5-10",
              id: 12101918228581,
            },
            {
              name: "Euro 41.5 = US 10",
              id: 18454587277379,
            },
            {
              name: "Euro 42 = US 10.5",
              id: 18454599237699,
            },
            {
              name: "Euro 42.5 = US 10.5-11",
              id: 32259047194691,
            },
            {
              name: "Euro 43 = US 11",
              id: 12101918359653,
            },
            {
              name: "Euro 44 = US 11.5-12",
              id: 32131519905859,
            },
            {
              name: "Euro 45 = US 12-12.5",
              id: 32306417795139,
            },
            {
              name: "Euro 46 = US 12.5-13",
              id: 32306417893443,
            },
          ],
        },
        {
          name: "Safari",
          oldPrice: 165,
          newPrice: 132,
          img: "img/svg/colors/08.svg",
          sizes: [
            {
              name: "Select a size",
              id: 0,
            },
            {
              name: "Euro 35 = US 5",
              id: 39444905263171,
            },
            {
              name: "Euro 35.5 = US 5.5",
              id: 39444905295939,
            },
            {
              name: "Euro 36 = US 6",
              id: 39444905361475,
            },
            {
              name: "Euro 36.5 = US 6.5",
              id: 1,
            },
            {
              name: "Euro 37 = US 7",
              id: 39444905394243,
            },
            {
              name: "Euro 37.5 = US 7.5",
              id: 39444905427011,
            },
            {
              name: "Euro 38 = US 8",
              id: 39444905459779,
            },
            {
              name: "Euro 38.5 = US 8.5",
              id: 39444905492547,
            },
            {
              name: "Euro 39 = US 8.5-9",
              id: 39444905525315,
            },
            {
              name: "Euro 39.5 = US 9",
              id: 39444905558083,
            },
            {
              name: "Euro 40 = US 9-9.5",
              id: 39444905590851,
            },
            {
              name: "Euro 40.5 = US 9.5",
              id: 39444905623619,
            },
            {
              name: "Euro 41 = US 9.5-10",
              id: 39444905656387,
            },
            {
              name: "Euro 41.5 = US 10",
              id: 39444905689155,
            },
            {
              name: "Euro 42 = US 10.5",
              id: 39444905721923,
            },
            {
              name: "Euro 42.5 = US 10.5-11",
              id: 39444905754691,
            },
            {
              name: "Euro 43 = US 11",
              id: 39444905787459,
            },
            {
              name: "Euro 44 = US 11.5-12",
              id: 39444905820227,
            },
            {
              name: "Euro 45 = US 12-12.5",
              id: 39444905852995,
            },
            {
              name: "Euro 46 = US 12.5-13",
              id: 39444905885763,
            },
          ],
        },
      ],
    };
  },
  methods: {
    minus: function minus() {
      if (this.qty <= 1) {
        this.qty = 1;
      } else {
        this.qty--;
      }
    },
    plus: function plus() {
      this.qty++;
    },
    generateLink: function generateLink() {
      var url = "https://www.charixshoes.com/cart/";
      var size = this.pickedSize.id;
      var qty = this.qty; // console.log(size);

      window.open(url + size + ":" + qty + "?discount=HOLIDAY20", "_self");
    },
    changeSlider: function changeSlider() {
      if (this.pickedColor.name === "Camel") {
        mySwiper.slideTo(0);
        mySwiper2.slideTo(0);
      } else if (this.pickedColor.name === "Black") {
        mySwiper.slideTo(5);
        mySwiper2.slideTo(5);
      } else if (this.pickedColor.name === "Dark Navy") {
        mySwiper.slideTo(10);
        mySwiper2.slideTo(10);
      } else if (this.pickedColor.name === "Ultimate Gray") {
        mySwiper.slideTo(15);
        mySwiper2.slideTo(15);
      } else if (this.pickedColor.name === "Graphite") {
        mySwiper.slideTo(20);
        mySwiper2.slideTo(20);
      } else if (this.pickedColor.name === "Camel / Black") {
        mySwiper.slideTo(24);
        mySwiper2.slideTo(24);
      } else if (this.pickedColor.name === "Bordeaux") {
        mySwiper.slideTo(29);
        mySwiper2.slideTo(29);
      } else if (this.pickedColor.name === "Safari") {
        mySwiper.slideTo(34);
        mySwiper2.slideTo(34);
      }
    },
  },
  mounted: function mounted() {
    this.pickedColor = this.colors[0];
  },
  watch: {
    pickedColor: function pickedColor() {
      this.pickedSize = this.pickedColor.sizes[0];
      this.changeSlider();
    },
  },
});

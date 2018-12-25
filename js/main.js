$(document).ready(function () {

    'use strict';

    // show & hide box
    $('.box').click(function () {
        $(this).toggleClass('show hide');
    });

    // responsive nav
    var nav = $('.nav'),
        animateTime = 500,
        navLink = $('.header .top .navLink');
        navLink.click(function () {
        if (nav.height() === 0) {
            autoHeightAnimate(nav, animateTime);
        } else {
            nav.stop().animate({
                height: '0'
            }, animateTime);
        }
    });

    // responsive options
    // Dropdown toggle
    $('.dropdown-toggle').click(function(){
        $(this).next('.dropdown').toggle();
    });
    
    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
        $('.dropdown').hide();
        }
    });

});

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	element.height(curHeight); // Reset to Default Height
    	element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}

// box 1

new Chart(document.getElementById("line-chart1"), {
    type: 'line',
    data: {
      labels: ["","","","","","","","","",""],
      datasets: [{ 
          data: [45,53,46,55,58,52,80,49,54,51],
          label: "Posts",
          borderColor: "#062886",
          fill: false,
          pointBorderWidth: 3,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
        }, { 
          data: [9,79,54,50,48,9,48,25,47,70],
          label: "Comments",
          borderColor: "#4C78F2",
          fill: false,
          pointBorderWidth: 3,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
        },
      ]
    },
    options: {
      bezierCurve: false,
      title: {
        display: true,
      },
      elements: {
          line: {
              tension: 0
          }
      }
    }
  });

// box 2

new Chart(document.getElementById("line-chart2"), {
    type: 'line',
    data: {
      labels: ["","","","","","","","","",""],
      datasets: [{ 
          data: [25,94,86,80,62,23,70],
          label: "Natural",
          borderColor: "#F4F071",
          fill: false,
          pointBorderWidth: 3,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
        }, { 
          data: [32, 52,28,60,70,53,75,48,57],
          label: "Positive",
          borderColor: "#51FE7F",
          fill: false,
          pointBorderWidth: 3,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
        }, { 
          data: [9,71,54,50,40,8,48,15,47,80],
          label: "Negative",
          borderColor: "#B90B0B",
          fill: false,
          pointBorderWidth: 3,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
        } 
      ]
    },
    options: {
      bezierCurve: false,
      title: {
        display: true,
      },
      elements: {
          line: {
              tension: 0
          }
      }
    }
  });;
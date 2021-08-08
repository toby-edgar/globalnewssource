
//covert json from js object
var myKey = JSON.parse(myKey);
var key = myKey[0].key;
console.log(key);

(function() {
  //IIFE begins

  // search button
  $('#submit').click(function() {
    var country = document.getElementById('country').value;
    console.log(country);
    var category = document.getElementById('category').value;
    console.log(category);
    var keyword = document.getElementById('keyword').value;
    console.log(keyword);

    // alert if category or country are not selected
    if (country === 'Country' || category === 'Category') {
      alert('You must select a country and category')
    } else {
      document.getElementById('objects').innerHTML = '';

      // running API
      runAPI();
    }
  });
// search section ends


  // refresh page on click
  $('#refresh').click(function() {
    location.reload();
    return false;
  });
  // refresh btn ends


// function creating the article cards
  function runAPI() {
    $.ajax({
      url: 'https://newsapi.org/v2/top-headlines?language=en&country=' + country.value + '&category=' + category.value + '&q=' + keyword.value + '&apiKey=' + key,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        console.log(data.articles);

        var i;
        for (i = 0; i < data.articles.length; i++) {
          var x = data.articles[i]
          document.getElementById('objects').innerHTML +=
            '<div class="articles col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"> ' +
            '<div id="card" class="card mt-3 ml-5" style="width: 45rem;">' +
            '<div class="card-body">' + '<img src="' + x.urlToImage + '">' +
            '<class="card-text">' + '<h4>' + x.title + '</h4>' + '<br>' + '<p>' + x.description + '</p>' + '<p> Source: ' + x.source.name + '</p><br>' +
            '</div>' +
            '</div>' +
            '</div>';
        } //for loop

        // button takes you to article clicked
        $('.card').click(function() {
          console.log(x.url);
        });
      },
      error: function() {
        alert('An error was encountered.');
      }
    });

  }; // runAPI() ends


  // scroll to top button
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.up-btn').fadeIn();
    } else {
      $('.up-btn').fadeOut(500);
    }
  });

  $('.up-btn').on('click', function() {
    $('html').scrollTop(0);
  });
// scroll btn ends


  //  about popup open
  $('.about-popup').click(function(e) {
    popup();
    $('.about-popup').toggleClass('fullscreen');
  });

  function popup() {
    // popup down
    if ($('.about-popup').hasClass('popup-hover')) {
      $('.about-popup').removeClass('popup-hover');
      $('.popup-before').addClass('hide');
      $('.popup-before').fadeOut(100,
        function() {
          $('.popup-after').fadeIn(1500);
        });
    } else { // popup up
      $('.about-popup').addClass('popup-hover');
      $('.popup-after').fadeOut(100,
        function() {
          $('.popup-before').fadeIn(1200);
        });
    }
  };
  // pop up ends


}());//iife ends

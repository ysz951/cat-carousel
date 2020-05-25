function imageClicks() {
    $('.thumbnail').on('click', function(event) {
      let imageSrc = $(this).find('img').attr('src');  
      let imageAlt = $(this).find('img').attr('alt');
      $('.hero img').attr('src', imageSrc, 'alt', imageAlt);
    });
  }
  
  $(imageClicks);
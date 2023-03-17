$(document).ready(function() {
  // Hide elements on page load
  $(".editor").hide();
  $('.topic').not('.topik-1').hide();

  // Show/hide elements on click events
  $('.all-btn').click(function() {
    $('.card-dashboard').show();
  });

  $('.blog-btn').click(function() {
    $('.card-dashboard').hide();
    $('.blog-card').show();
  });

  $('.sm-btn').click(function() {
    $('.card-dashboard').hide();
    $('.sm-card').show();
  });

  
  $('.web-btn').click(function() {
    $('.card-dashboard').hide();
    $('.web-card').show();
  });

  $('.lain-btn').click(function() {
    $('.card-dashboard').hide();
    $('.lain-card').show();
  });


  $('.editor-back').click(function() {
    $('.dashboard').show();
    $('.topnav').show();
    $('.editor').hide();
  });

  // Topic-related click events
  $('.add-topic').click(function() {
    var $nextTopic = $(this).closest('.topic').next('.topic');
    $nextTopic.show();
    $nextTopic.find('input[type="text"]').val('');
  });

  $('.remove-topic').click(function() {
    $(this).closest('.topic').hide();
    $(this).closest('.topic').find('input[type="text"]').val('');
  });

  $('#article-generator').click(function() {
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Blog");
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').show();
    $('.input-deskripsi').hide();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    // Show only the topic element with the class "topik-1"
    $('.topic').hide();
    $('.topik-1').show();
  });

  $('#paragraph-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Blog");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi paragraf anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').show();
    $('.topic').hide();
});


  $('#bagian-blog-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Blog");
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').show();
    $('.input-deskripsi').hide();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    // Show only the topic element with the class "topik-1"
    $('.topic').hide();
    $('.topik-1').show();
  });

  $('#judul-blog-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Blog");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi artikel anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#ide-blog-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Blog");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi blog anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#pengantar-blog-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Blog");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi blog anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').show();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#garisbesar-blog-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Blog");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi blog anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').show();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#kesimpulan-blog-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Blog");

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').show();
    $('.input-deskripsi').hide();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    // Show only the topic element with the class "topik-1"
    $('.topic').hide();
    $('.topik-1').show();
  });

  $('#postbisnis-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Media Sosial");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi post ini";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').show();
    $('.input-deskripsi-perusahaan').show();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#post-pribadi-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Media Sosial");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi post ini";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#deskripsi-instagram-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Media Sosial");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi post ini";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#hastag-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Media Sosial");
    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').hide();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').show();
    $('.topic').hide();
  });

  $('#twitter-threads-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Media Sosial");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi thread ini";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#tweet-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Media Sosial");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi tweet ini";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#judul-situs-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Web Dan Seo");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi produk anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').show();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').show();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#subjudul-situs-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Web Dan Seo");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi produk anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').show();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').show();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#deskripsiurl-situs-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Web Dan Seo");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi produk anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').hide();
    $('.input-produk').hide();
    $('.input-website').show();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').show();
    $('.topic').hide();
  });

  $('#faq-situs-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Web Dan Seo");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi produk anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').show();
    $('.topic').hide();
  });

  $('#testimoni-situs-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Web Dan Seo");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi produk anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').show();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#tentangkami-situs-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Web Dan Seo");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi produk anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').show();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').show();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#cta-situs-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Web Dan Seo");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi produk anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').show();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').show();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#judul-video-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Alat Lain");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi video anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#skrip-video-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Alat Lain");

    // Set the dynamic placeholder
    var placeholderText = "Tuliskan deskripsi video anda";
    $('#prompt-deskripsi').attr('placeholder', placeholderText);

    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').hide();
    $('.input-deskripsi').show();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').show();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });

  $('#deskripsi-video-generator').click(function() {
    // Your existing code here
    var blogText = $(this).find('span').text();
    $(".alat-dropdown").text(blogText);
    $(".usecased-dropdown").text("Alat Lain");
    // Your existing code here
    $('.dashboard').hide();
    $('.topnav').hide();
    $('.editor').show();
    $('.input-judul').show();
    $('.input-deskripsi').hide();
    $('.input-produk').hide();
    $('.input-website').hide();
    $('.input-perusahaan').hide();
    $('.input-deskripsi-perusahaan').hide();
    $('.input-audiens').hide();
    $('.input-kata-kunci').hide();
    $('.topic').hide();
  });
  
});


$(window).scroll(function () {
  scrollTop = $(window).scrollTop();
  console.log(scrollTop);
  if (scrollTop > 200) {
    $("#formSearch").addClass("search-fix");
    $("#formSearch").show(200, function () {
      $(".slide-tab").slideDown(200);
    });
    $(".search-fix .search-box .search").on("click", () => {
      $(".slide-tab").hide();
      $(".search-history").show();
    });
  } else {
    $(".slide-tab").slideUp(200);
    $("#formSearch").removeClass("search-fix");
  }
});

$(document).ready(() => {
  $(".history-opt #his-close").on("click", function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop > 200) {
      
      $(".slide-tab").show();
    }
    $(".search-history").hide();
  });
});

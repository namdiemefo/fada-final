 var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

$(document).ready(function() {
  $('#sidebar-wrapper a:first').addClass('active');
  $('.content:not(:first)').hide();
  $('#sidebar-wrapper a').click(function (event) {
      event.preventDefault();
      var content = $(this).attr('href');
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      $(content).show();
      $(content).siblings('.content').hide();
  });
});

 
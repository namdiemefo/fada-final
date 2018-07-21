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

$(document).ready(function(){

            $('#show_profile').click(function() {
            		$('.contents').css('display', 'none'); //hide existing
              	$('#profile').css('display', 'block'); //show only this
            });          

             $('#show_courseEva').click(function() {
             		$('.contents').css('display', 'none');
             		$('#courseEva').css('display', 'block');
            });

            
            $('#show_finalClearance').click(function() {
                $('.contents').css('display', 'none');
                $('#finalClearance').css('display', 'block');
            });

            $('#show_viewCourseEva').click(function() {
                $('.contents').css('display', 'none');
                $('#viewCourseEva').css('display', 'block');
            });

             
            $('#payFee').click(function() {
                $('.contents').css('display', 'none');
                $('#payfee').css('display', 'block');
            });

            $('#payReceipt').click(function() {
                $('.contents').css('display', 'none');
                $('#payreceipt').css('display', 'block');
            });

            $('#attendance').click(function() {
                $('.contents').css('display', 'none');
                $('#Attendance').css('display', 'block');
            });

            $('#course_reg').click(function() {
                $('.contents').css('display', 'none');
                $('#courseReg').css('display', 'block');
            });

            $('#eds').click(function() {
                $('.contents').css('display', 'none');
                $('#EdsReg').css('display', 'block');
            });

            $('#gradreq').click(function() {
                $('.contents').css('display', 'none');
                $('#GradReq').css('display', 'block');
            });

            $('#printReg').click(function() {
                $('.contents').css('display', 'none');
                $('#PrintReg').css('display', 'block');
            });



});	


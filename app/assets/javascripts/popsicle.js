// var API = 'https://mashup-api.herokuapp.com';
//
// $(document).ready(function(){
//   var cohortId = window.location.pathname.split("/")[2];
//   var getStudents = function() {
//     return $.ajax({
//       url: API + '/api/v1/students?id=' + cohortId,
//       method: 'GET',
//     }).done(function(data){
//       for (var i = 0; i < data.length; i++) {
//         $('.popsicle').append('<p class="popsicle">' + data[i].name + '</p>');
//       }
//     }).fail(function(error){
//       console.error(error);
//     });
//   };
//
//   getStudents();
// });

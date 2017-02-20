// var API = 'https://mashup-api.herokuapp.com';
//
// $(document).ready(function(){
//   var cohortId = window.location.pathname.split("/cohorts/")[1];
//   debugger;
//   var getOneCohort = function() {
//     return $.ajax({
//       url: API + '/api/v1/cohorts/' + cohortId,
//       method: 'GET',
//     }).done(function(data){
//       for (var i = 0; i < data.length; i++) {
//         $('.cohort-show').append('<p class="cohort">' + data[i].name + '</p>');
//       }
//     }).fail(function(error){
//       console.error(error);
//     });
//   };
//
//   getOneCohort();
// });

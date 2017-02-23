// var API = 'https://mashup-api.herokuapp.com';
//
// $(document).ready(function(){
//   var getCohorts = function() {
//     return $.ajax({
//       url: API + '/api/v1/cohorts',
//       method: 'GET',
//     }).done(function(data){
//       for (var i = 0; i < data.length; i++) {
//         $('.cohorts').append('<p>' + `<a href="/cohorts/${data[i].id}">${data[i].name}</a>` + '</p>');
//       }
//     }).fail(function(error){
//       console.error(error);
//     });
//   };
//   getCohorts();
//
// });

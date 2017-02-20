var API = 'https://mashup-api.herokuapp.com';

$(document).ready(function(){
  var cohortId = window.location.pathname.split("/")[2];
  //this gets the cohort id, need the name for below to work

  var getProjects = function() {
    return $.ajax({
      url: API + '/api/v1/projects?name=' + cohortId,
      method: 'GET',
    }).done(function(data){
      for (var i = 0; i < data.length; i++) {
        $('.projects').append('<p class="project">' + data[i].name + '</p>');
      }
    }).fail(function(error){
      console.error(error);
    });
  };

  getProjects();
});

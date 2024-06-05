$(document).ready(function () {
    loadTab("about", "about");
    loadTab("project", "project");
    loadTab("contact", "contact");
  });

  function loadTab(tabFile, tabName) {
    $.ajax({
        url: tabFile,
        type: 'GET',
        dataType: 'html',
        success: function(data) {
            $('#' + tabName).html(data);
        },
        error: function(xhr, status, error) {
            console.error('Error loading tab:', error);
        }
    });
}

  function openTab(tabName) {
    var tabElement = document.getElementById(tabName);
    var navbarHeight = document.querySelector(".navbar").offsetHeight;
    tabElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  $(document).ready(function() {
  $('.icon').click(function() {
    $('.toggleMenu').toggle();
  });
});
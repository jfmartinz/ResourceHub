$("#searchInput").focus(function () {
  
    $("#searchInput").css({
      "display": "inline",
      "width": "40%",
      "border": "1px solid #40585d",
      "opacity": "1",
      "padding": "8px 20px 8px 20px",
      "background-image": "none",
      "box-shadow": "0 0 1px black"
    });
    $("#submitsearch").css("display", "inline");
   
    $("#searchInput").prop("placeholder", "");
  });
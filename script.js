$(document).ready(function() {
  // run runApp and fade in the content
  runApp();

})


function runApp() { 
  // get position data:
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      // run apiRequest function with position data:
      apiRequest(position.coords.latitude, position.coords.longitude);
    })
  }
  
  else {
    alert("Please activate GPS."); 
  }
  
}

function apiRequest(lat, lon) {
  
  // API request:
  $.get("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon, 
    function(json) {
    
      // store temperature values:
      var celsius = Math.round(json.main.temp);
      var fahrenheit = Math.round(json.main.temp * 9/5 + 32);
    
      // show data from API request:
      $(".location").text(json.name + ", " + json.sys.country);
      $(".temp").text(celsius);
      $(".temp-toggle").text("°C");
      $(".description").text(json.weather[0].description);
    
      // run showIcon to display the appropriate icon:
      showIcon(json.weather[0].id);
    
      // toggle between celsius and fahrenheit:
      $(".temp-toggle").click(function() {
        if ($(".temp-toggle").text() == "°C") {
          $(".temp-div").fadeOut(400, function() {
          $(".temp-toggle").text("°F");
          $(".temp").text(fahrenheit);
          $(".temp-div").fadeIn(500);
          });
        }
        else {
          $(".temp-div").fadeOut(400, function() {
          $(".temp-toggle").text("°C");
          $(".temp").text(celsius);
          $(".temp-div").fadeIn(500);
          });
        }
      })
    
    }
        
  );
  
}

function showIcon(weatherId, weatherDescr) {
  // check ID and show appropriate icon:
  if (weatherId >= 200 && weatherId <= 232) {
    $(".weather-icon").css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTkuOTk5LDY1LjY0MWMtMC4yOCwwLTAuNjQ5LDAtMS4wNjIsMGwzLjU4NS00LjQxMg0KCWMzLjE4MS0xLjA1Nyw1LjQ3Ny00LjA1Myw1LjQ3Ny03LjU4OGMwLTQuNDE4LTMuNTgxLTcuOTk4LTcuOTk5LTcuOTk4Yy0xLjYwMSwwLTMuMDgzLDAuNDgtNC4zMzMsMS4yOQ0KCWMtMS4yMzItNS4zMTYtNS45NzQtOS4yOS0xMS42NjUtOS4yOWMtNi42MjYsMC0xMS45OTgsNS4zNzItMTEuOTk4LDEyYzAsNS40NDYsMy42MzIsMTAuMDM4LDguNjA0LDExLjUwNGwtMS4zNDksMy43NzcNCgljLTYuNTItMi4wMjEtMTEuMjU1LTguMDk4LTExLjI1NS0xNS4yODJjMC04LjgzNSw3LjE2My0xNS45OTksMTUuOTk4LTE1Ljk5OWM2LjAwNCwwLDExLjIyOSwzLjMxMiwxMy45NjUsOC4yMDQNCgljMC42NjQtMC4xMTQsMS4zMzctMC4yMDUsMi4wMzMtMC4yMDVjNi42MjcsMCwxMS45OTksNS4zNzEsMTEuOTk5LDExLjk5OFM2Ni42MjYsNjUuNjQxLDU5Ljk5OSw2NS42NDF6IE00OC4wMDEsNTEuNjQxaDkuOTk4DQoJbC01Ljk5OSwxMGg2Ljk5OUw0Ni4wMDEsNzcuNjM5bDMuNi0xMS45OThoLTYuNkw0OC4wMDEsNTEuNjQxeiIvPg0KPC9zdmc+DQo=')");
  }
  else if (weatherId >= 300 && weatherId <= 321) {
    $(".weather-icon").css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjMuOTQzLDY0Ljk0MXYtNC4zODFjMi4zODctMS4zODUsMy45OTgtMy45NjEsMy45OTgtNi45MmMwLTQuNDE4LTMuNTgtOC03Ljk5OC04DQoJYy0xLjYwMiwwLTMuMDg0LDAuNDgxLTQuMzM0LDEuMjkxYy0xLjIzMi01LjMxNi01Ljk3My05LjI5LTExLjY2NC05LjI5Yy02LjYyNywwLTExLjk5OCw1LjM3Mi0xMS45OTgsMTEuOTk5DQoJYzAsMy41NDksMS41NDksNi43MjksMy45OTgsOC45MjZ2NC45MTRjLTQuNzc3LTIuNzY4LTcuOTk4LTcuOTIyLTcuOTk4LTEzLjg0YzAtOC44MzYsNy4xNjItMTUuOTk4LDE1Ljk5OC0xNS45OTgNCgljNi4wMDQsMCwxMS4yMjksMy4zMTIsMTMuOTY1LDguMjAzYzAuNjY0LTAuMTEzLDEuMzM2LTAuMjA1LDIuMDMzLTAuMjA1YzYuNjI3LDAsMTEuOTk4LDUuMzczLDExLjk5OCwxMg0KCUM3MS45NDEsNTguODYxLDY4LjYsNjMuMjkzLDYzLjk0Myw2NC45NDF6IE00MS45NDUsNTMuNjQxYzEuMTA0LDAsMiwwLjg5NSwyLDJ2My45OThjMCwxLjEwNS0wLjg5NiwyLTIsMmMtMS4xMDUsMC0yLTAuODk1LTItMg0KCXYtMy45OThDMzkuOTQ1LDU0LjUzNSw0MC44NCw1My42NDEsNDEuOTQ1LDUzLjY0MXogTTQxLjk0NSw2NS42MzljMS4xMDQsMCwyLDAuODk1LDIsMnYzLjk5OGMwLDEuMTA1LTAuODk2LDItMiwyDQoJYy0xLjEwNSwwLTItMC44OTUtMi0ydi0zLjk5OEMzOS45NDUsNjYuNTMzLDQwLjg0LDY1LjYzOSw0MS45NDUsNjUuNjM5eiBNNDkuOTQzLDU3LjYzOWMxLjEwNSwwLDIsMC44OTYsMiwydjRjMCwxLjEwNC0wLjg5NSwyLTIsMg0KCWMtMS4xMDQsMC0xLjk5OC0wLjg5Ni0xLjk5OC0ydi00QzQ3Ljk0NSw1OC41MzUsNDguODQsNTcuNjM5LDQ5Ljk0Myw1Ny42Mzl6IE00OS45NDMsNjkuNjM5YzEuMTA1LDAsMiwwLjg5NSwyLDEuOTk4djQNCgljMCwxLjEwNS0wLjg5NSwyLTIsMmMtMS4xMDQsMC0xLjk5OC0wLjg5NS0xLjk5OC0ydi00QzQ3Ljk0NSw3MC41MzMsNDguODQsNjkuNjM5LDQ5Ljk0Myw2OS42Mzl6IE01Ny45NDMsNTMuNjQxDQoJYzEuMTA0LDAsMiwwLjg5NSwyLDJ2My45OThjMCwxLjEwNS0wLjg5NiwyLTIsMmMtMS4xMDUsMC0yLTAuODk1LTItMnYtMy45OThDNTUuOTQzLDU0LjUzNSw1Ni44MzgsNTMuNjQxLDU3Ljk0Myw1My42NDF6DQoJIE01Ny45NDMsNjUuNjM5YzEuMTA0LDAsMiwwLjg5NSwyLDJ2My45OThjMCwxLjEwNS0wLjg5NiwyLTIsMmMtMS4xMDUsMC0yLTAuODk1LTItMnYtMy45OTgNCglDNTUuOTQzLDY2LjUzMyw1Ni44MzgsNjUuNjM5LDU3Ljk0Myw2NS42Mzl6Ii8+DQo8L3N2Zz4NCg==')");
  }
  else if (weatherId >= 500 && weatherId <= 504) {
    $(".weather-icon").css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjMuOTQzLDY0Ljk0MXYtNC4zODFjMi4zODktMS4zODMsNC0zLjk2MSw0LTYuOTJjMC00LjQxNy0zLjU4Mi03Ljk5OS04LTcuOTk5DQoJYy0xLjYsMC0zLjA4MiwwLjQ4LTQuMzMzLDEuMjkxYy0xLjIzMS01LjMxNy01Ljk3NC05LjI5LTExLjY2NS05LjI5Yy02LjYyNiwwLTExLjk5OCw1LjM3Mi0xMS45OTgsMTEuOTk4DQoJYzAsMy41NSwxLjU1MSw2LjcyOCw0LDguOTI1djQuOTE2Yy00Ljc3Ny0yLjc2OC04LTcuOTIyLTgtMTMuODQxYzAtOC44MzUsNy4xNjMtMTUuOTk3LDE1Ljk5OC0xNS45OTcNCgljNi4wMDQsMCwxMS4yMjksMy4zMTEsMTMuOTY1LDguMjAzYzAuNjY0LTAuMTEzLDEuMzM4LTAuMjA1LDIuMDMzLTAuMjA1YzYuNjI3LDAsMTEuOTk5LDUuMzcyLDExLjk5OSwxMS45OTkNCglDNzEuOTQyLDU4Ljg2Myw2OC42MDEsNjMuMjkzLDYzLjk0Myw2NC45NDF6IE00MS45NDYsNTMuNjQxYzEuMTA0LDAsMS45OTksMC44OTYsMS45OTksMnYxNS45OThjMCwxLjEwNS0wLjg5NSwyLTEuOTk5LDINCglzLTItMC44OTUtMi0yVjU1LjY0MUMzOS45NDYsNTQuNTM3LDQwLjg0Miw1My42NDEsNDEuOTQ2LDUzLjY0MXogTTQ5Ljk0NSw1Ny42NDFjMS4xMDQsMCwyLDAuODk1LDIsMnYxNS45OThjMCwxLjEwNC0wLjg5NiwyLTIsMg0KCXMtMi0wLjg5Ni0yLTJWNTkuNjQxQzQ3Ljk0NSw1OC41MzUsNDguODQxLDU3LjY0MSw0OS45NDUsNTcuNjQxeiBNNTcuOTQ0LDUzLjY0MWMxLjEwNCwwLDEuOTk5LDAuODk2LDEuOTk5LDJ2MTUuOTk4DQoJYzAsMS4xMDUtMC44OTUsMi0xLjk5OSwycy0yLTAuODk1LTItMlY1NS42NDFDNTUuOTQ0LDU0LjUzNyw1Ni44NCw1My42NDEsNTcuOTQ0LDUzLjY0MXoiLz4NCjwvc3ZnPg0K')");
  }
  else if (weatherId == 511) {
    $(".weather-icon").css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjMuOTk5LDY0Ljk0MXYtNC4zODFjMi4zODktMS4zODMsMy45OTktMy45NjEsMy45OTktNi45Mg0KCWMwLTQuNDE3LTMuNTgxLTcuOTk5LTcuOTk4LTcuOTk5Yy0xLjYwMSwwLTMuMDg0LDAuNDgtNC4zMzQsMS4yOTFjLTEuMjMxLTUuMzE3LTUuOTc0LTkuMjktMTEuNjY1LTkuMjkNCgljLTYuNjI2LDAtMTEuOTk4LDUuMzcyLTExLjk5OCwxMS45OThjMCwzLjU1LDEuNTUsNi43MjgsMy45OTksOC45MjV2NC45MTZjLTQuNzc2LTIuNzY4LTcuOTk4LTcuOTIyLTcuOTk4LTEzLjg0MQ0KCWMwLTguODM1LDcuMTYyLTE1Ljk5NywxNS45OTctMTUuOTk3YzYuMDA0LDAsMTEuMjI5LDMuMzExLDEzLjk2Niw4LjIwM2MwLjY2My0wLjExMywxLjMzNi0wLjIwNSwyLjAzMy0wLjIwNQ0KCWM2LjYyNiwwLDExLjk5OCw1LjM3MiwxMS45OTgsMTEuOTk5QzcxLjk5OCw1OC44NjMsNjguNjU2LDYzLjI5Myw2My45OTksNjQuOTQxeiBNNDIuMDAyLDY1LjYzOWMtMS4xMDQsMC0xLTAuODk1LTEtMS45OTh2LTgNCgljMC0xLjEwNC0wLjEwNC0yLDEtMnMxLDAuODk2LDEsMnY4QzQzLjAwMiw2NC43NDQsNDMuMTA2LDY1LjYzOSw0Mi4wMDIsNjUuNjM5eiBNNDIuMDAyLDY5LjYzOWMxLjEwNCwwLDEuOTk5LDAuODk2LDEuOTk5LDINCgljMCwxLjEwNS0wLjg5NSwyLTEuOTk5LDJzLTItMC44OTUtMi0yQzQwLjAwMiw3MC41MzUsNDAuODk3LDY5LjYzOSw0Mi4wMDIsNjkuNjM5eiBNNTAuMDAxLDY5LjYzOWMtMS4xMDQsMC0xLTAuODk1LTEtMnYtNy45OTgNCgljMC0xLjEwNS0wLjEwNC0yLDEtMnMxLDAuODk1LDEsMnY3Ljk5OEM1MS4wMDEsNjguNzQ0LDUxLjEwNSw2OS42MzksNTAuMDAxLDY5LjYzOXogTTUwLjAwMSw3My42MzljMS4xMDQsMCwxLjk5OSwwLjg5NSwxLjk5OSwyDQoJYzAsMS4xMDQtMC44OTUsMi0xLjk5OSwycy0yLTAuODk2LTItMkM0OC4wMDEsNzQuNTMzLDQ4Ljg5Niw3My42MzksNTAuMDAxLDczLjYzOXogTTU4LDY1LjYzOWMtMS4xMDQsMC0xLTAuODk1LTEtMS45OTh2LTgNCgljMC0xLjEwNC0wLjEwNC0yLDEtMnMxLDAuODk2LDEsMnY4QzU5LDY0Ljc0NCw1OS4xMDQsNjUuNjM5LDU4LDY1LjYzOXogTTU4LDY5LjYzOWMxLjEwNCwwLDIsMC44OTYsMiwyYzAsMS4xMDUtMC44OTYsMi0yLDINCglzLTItMC44OTUtMi0yQzU2LDcwLjUzNSw1Ni44OTYsNjkuNjM5LDU4LDY5LjYzOXoiLz4NCjwvc3ZnPg0K')");
  }
  else if (weatherId >= 520 && weatherId <= 531) {
    $(".weather-icon").css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzkuOTQxLDQzLjY0MmgtNGMtMS4xMDQsMC0yLTAuODk1LTItMmMwLTEuMTA0LDAuODk2LTIsMi0yaDQNCgljMS4xMDQsMCwyLDAuODk2LDIsMkM4MS45NDEsNDIuNzQ4LDgxLjA0NSw0My42NDIsNzkuOTQxLDQzLjY0MnogTTcyLjA4NCwzMC4zM2MtMC43ODEsMC43ODEtMi4wNDcsMC43ODEtMi44MjgsMA0KCWMtMC43ODEtMC43OC0wLjc4MS0yLjA0NywwLTIuODI4bDIuODI4LTIuODI4YzAuNzgxLTAuNzgsMi4wNDctMC43OCwyLjgyOCwwYzAuNzgxLDAuNzgxLDAuNzgxLDIuMDQ4LDAsMi44MjhMNzIuMDg0LDMwLjMzeg0KCSBNNjkuMTM3LDQ1LjkzN0w2OS4xMzcsNDUuOTM3YzEuNzUsMi4wODQsMi44MDUsNC43NywyLjgwNSw3LjcwNGMwLDUuMjIzLTMuMzQyLDkuNjUyLTcuOTk4LDExLjMwMXYtNC4zODENCgljMi4zODktMS4zODMsNC0zLjk2MSw0LTYuOTJjMC00LjQxNy0zLjU4Mi03Ljk5OS04LTcuOTk5Yy0xLjYsMC0zLjA4NCwwLjQ4LTQuMzM0LDEuMjkxYy0xLjIzLTUuMzE3LTUuOTczLTkuMjktMTEuNjY0LTkuMjkNCgljLTYuNjI3LDAtMTEuOTk4LDUuMzcyLTExLjk5OCwxMS45OThjMCwzLjU1LDEuNTUxLDYuNzI4LDQsOC45MjV2NC45MTZjLTQuNzc3LTIuNzY4LTgtNy45MjItOC0xMy44NDENCgljMC04LjgzNSw3LjE2Mi0xNS45OTcsMTUuOTk4LTE1Ljk5N2MxLjU3MiwwLDMuMDksMC4yMzEsNC41MjMsMC42NTRjMi4xOTUtMi44MjcsNS42MTctNC42NTQsOS40NzUtNC42NTQNCgljNi42MjcsMCwxMS45OTgsNS4zNzEsMTEuOTk4LDExLjk5OEM2OS45NDEsNDMuMTU4LDY5LjY1LDQ0LjYwMiw2OS4xMzcsNDUuOTM3eiBNNTcuOTQzLDMzLjY0NGMtMi4yMTEsMC00LjIxNSwwLjg5OC01LjY2MiwyLjM1DQoJYzIuMzQsMS40MzUsNC4yODUsMy40NTIsNS42MjksNS44NTRjMC42NjQtMC4xMTMsMS4zMzgtMC4yMDUsMi4wMzMtMC4yMDVjMi4xMjUsMCw0LjExOSwwLjU1OSw1Ljg1LDEuNTI3bDAsMA0KCWMwLjA5Ni0wLjQ5NCwwLjE1LTEuMDA0LDAuMTUtMS41MjdDNjUuOTQzLDM3LjIyNCw2Mi4zNjEsMzMuNjQ0LDU3Ljk0MywzMy42NDR6IE01Ny45NDMsMjUuNjQ0Yy0xLjEwNCwwLTItMC44OTUtMi0ydi0zLjk5OQ0KCWMwLTEuMTA0LDAuODk2LTEuOTk5LDItMS45OTljMS4xMDUsMCwyLDAuODk1LDIsMS45OTl2My45OTlDNTkuOTQzLDI0Ljc1LDU5LjA0OSwyNS42NDQsNTcuOTQzLDI1LjY0NHogTTQzLjgwMywzMC4zM2wtMi44MjgtMi44MjgNCgljLTAuNzc5LTAuNzgtMC43NzktMi4wNDcsMC0yLjgyOGMwLjc4MS0wLjc4LDIuMDQ5LTAuNzgsMi44MjgsMGwyLjgyOCwyLjgyOGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0OCwwLDIuODI4DQoJQzQ1Ljg1LDMxLjExMSw0NC41ODQsMzEuMTExLDQzLjgwMywzMC4zM3ogTTQxLjk0NSw1My42NDFjMS4xMDUsMCwyLDAuODk2LDIsMnYxNS45OThjMCwxLjEwNS0wLjg5NSwyLTIsMmMtMS4xMDQsMC0yLTAuODk1LTItMg0KCVY1NS42NDFDMzkuOTQ1LDU0LjUzNyw0MC44NDIsNTMuNjQxLDQxLjk0NSw1My42NDF6IE00OS45NDUsNTcuNjQxYzEuMTA0LDAsMiwwLjg5NSwyLDJ2MTUuOTk4YzAsMS4xMDQtMC44OTYsMi0yLDINCgljLTEuMTA1LDAtMi0wLjg5Ni0yLTJWNTkuNjQxQzQ3Ljk0NSw1OC41MzUsNDguODQsNTcuNjQxLDQ5Ljk0NSw1Ny42NDF6IE01Ny45NDMsNTMuNjQxYzEuMTA1LDAsMiwwLjg5NiwyLDJ2MTUuOTk4DQoJYzAsMS4xMDUtMC44OTUsMi0yLDJjLTEuMTA0LDAtMi0wLjg5NS0yLTJWNTUuNjQxQzU1Ljk0Myw1NC41MzcsNTYuODQsNTMuNjQxLDU3Ljk0Myw1My42NDF6Ii8+DQo8L3N2Zz4NCg==')");
  }
  else if (weatherId >= 600 && weatherId <= 622) {
    $(".weather-icon").css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjMuOTk5LDY0Ljk0M3YtNC4zODFjMi4zODktMS4zODUsMy45OTktMy45NjMsMy45OTktNi45MjINCgljMC00LjQxNi0zLjU4MS03Ljk5OC03Ljk5OS03Ljk5OGMtMS42LDAtMy4wODMsMC40OC00LjMzMywxLjI5MWMtMS4yMzEtNS4zMTctNS45NzQtOS4yOTEtMTEuNjY1LTkuMjkxDQoJYy02LjYyNywwLTExLjk5OCw1LjM3My0xMS45OTgsMTJjMCwzLjU0OSwxLjU1LDYuNzI5LDQsOC45MjR2NC45MTZjLTQuNzc3LTIuNzY4LTgtNy45MjItOC0xMy44NA0KCWMwLTguODM2LDcuMTYzLTE1Ljk5OSwxNS45OTgtMTUuOTk5YzYuMDA0LDAsMTEuMjI5LDMuMzEyLDEzLjk2NSw4LjIwNGMwLjY2NC0wLjExMywxLjMzNy0wLjIwNSwyLjAzMy0wLjIwNQ0KCWM2LjYyNywwLDExLjk5OSw1LjM3MywxMS45OTksMTEuOTk4QzcxLjk5OCw1OC44NjMsNjguNjU1LDYzLjI5Myw2My45OTksNjQuOTQzeiBNNDIuMDAxLDU3LjY0MWMxLjEwNSwwLDIsMC44OTYsMiwyDQoJYzAsMS4xMDUtMC44OTUsMi0yLDJjLTEuMTA0LDAtMS45OTktMC44OTUtMS45OTktMkM0MC4wMDIsNTguNTM3LDQwLjg5Nyw1Ny42NDEsNDIuMDAxLDU3LjY0MXogTTQyLjAwMSw2NS42NDFjMS4xMDUsMCwyLDAuODk1LDIsMg0KCWMwLDEuMTA0LTAuODk1LDEuOTk4LTIsMS45OThjLTEuMTA0LDAtMS45OTktMC44OTUtMS45OTktMS45OThDNDAuMDAyLDY2LjUzNSw0MC44OTcsNjUuNjQxLDQyLjAwMSw2NS42NDF6IE01MC4wMDEsNjEuNjQxDQoJYzEuMTA0LDAsMiwwLjg5NSwyLDJjMCwxLjEwNC0wLjg5NiwyLTIsMmMtMS4xMDUsMC0yLTAuODk2LTItMkM0OC4wMDEsNjIuNTM1LDQ4Ljg5Niw2MS42NDEsNTAuMDAxLDYxLjY0MXogTTUwLjAwMSw2OS42MzkNCgljMS4xMDQsMCwyLDAuODk2LDIsMmMwLDEuMTA1LTAuODk2LDItMiwyYy0xLjEwNSwwLTItMC44OTUtMi0yQzQ4LjAwMSw3MC41MzUsNDguODk2LDY5LjYzOSw1MC4wMDEsNjkuNjM5eiBNNTcuOTk5LDU3LjY0MQ0KCWMxLjEwNSwwLDIsMC44OTYsMiwyYzAsMS4xMDUtMC44OTUsMi0yLDJjLTEuMTA0LDAtMS45OTktMC44OTUtMS45OTktMkM1Niw1OC41MzcsNTYuODk2LDU3LjY0MSw1Ny45OTksNTcuNjQxeiBNNTcuOTk5LDY1LjY0MQ0KCWMxLjEwNSwwLDIsMC44OTUsMiwyYzAsMS4xMDQtMC44OTUsMS45OTgtMiwxLjk5OGMtMS4xMDQsMC0xLjk5OS0wLjg5NS0xLjk5OS0xLjk5OEM1Niw2Ni41MzUsNTYuODk2LDY1LjY0MSw1Ny45OTksNjUuNjQxeiIvPg0KPC9zdmc+DQo=')");
  }
  else if (weatherId >= 701 && weatherId <= 781) {
    $(".weather-icon").css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjkuOTk4LDY1LjY0MUgzMC4wMDNjLTEuMTA0LDAtMi0wLjg5Ni0yLTJjMC0xLjEwNSwwLjg5Ni0yLDItMmgzOS45OTUNCgljMS4xMDQsMCwyLDAuODk1LDIsMkM3MS45OTgsNjQuNzQ0LDcxLjEwMyw2NS42NDEsNjkuOTk4LDY1LjY0MXogTTY5Ljk5OCw1Ny42NDFIMzAuMDAzYy0xLjEwNCwwLTItMC44OTUtMi0yYzAtMS4xMDQsMC44OTYtMiwyLTINCgloMzkuOTk1YzEuMTA0LDAsMiwwLjg5NiwyLDJDNzEuOTk4LDU2Ljc0Niw3MS4xMDMsNTcuNjQxLDY5Ljk5OCw1Ny42NDF6IE01OS45OTksNDUuNjQzYy0xLjYwMSwwLTMuMDgzLDAuNDgtNC4zMzMsMS4yOTENCgljLTEuMjMyLTUuMzE3LTUuOTc0LTkuMjkxLTExLjY2NS05LjI5MWMtNi42MjYsMC0xMS45OTgsNS4zNzMtMTEuOTk4LDEyaC00YzAtOC44MzUsNy4xNjMtMTUuOTk5LDE1Ljk5OC0xNS45OTkNCgljNi4wMDQsMCwxMS4yMjksMy4zMTIsMTMuOTY1LDguMjA0YzAuNjY0LTAuMTEzLDEuMzM3LTAuMjA1LDIuMDMzLTAuMjA1YzUuMjIyLDAsOS42NTIsMy4zNDIsMTEuMzAxLDhoLTQuMzgxDQoJQzY1LjUzNSw0Ny4yNTMsNjIuOTU4LDQ1LjY0Myw1OS45OTksNDUuNjQzeiBNMzAuMDAzLDY5LjYzOWgzOS45OTVjMS4xMDQsMCwyLDAuODk2LDIsMmMwLDEuMTA1LTAuODk2LDItMiwySDMwLjAwMw0KCWMtMS4xMDQsMC0yLTAuODk1LTItMkMyOC4wMDMsNzAuNTM1LDI4Ljg5OCw2OS42MzksMzAuMDAzLDY5LjYzOXoiLz4NCjwvc3ZnPg0K')");
  }
  else if (weatherId == 800) {
    $(".weather-icon").css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzEuOTk3LDUxLjk5OWgtMy45OThjLTEuMTA1LDAtMi0wLjg5NS0yLTEuOTk5czAuODk1LTIsMi0yaDMuOTk4DQoJYzEuMTA1LDAsMiwwLjg5NiwyLDJTNzMuMTAzLDUxLjk5OSw3MS45OTcsNTEuOTk5eiBNNjQuMTQyLDM4LjY4OGMtMC43ODEsMC43ODEtMi4wNDksMC43ODEtMi44MjgsMA0KCWMtMC43ODEtMC43ODEtMC43ODEtMi4wNDcsMC0yLjgyOGwyLjgyOC0yLjgyOGMwLjc3OS0wLjc4MSwyLjA0Ny0wLjc4MSwyLjgyOCwwYzAuNzc5LDAuNzgxLDAuNzc5LDIuMDQ3LDAsMi44MjhMNjQuMTQyLDM4LjY4OHoNCgkgTTUwLjAwMSw2MS45OThjLTYuNjI3LDAtMTItNS4zNzItMTItMTEuOTk4YzAtNi42MjcsNS4zNzItMTEuOTk5LDEyLTExLjk5OWM2LjYyNywwLDExLjk5OCw1LjM3MiwxMS45OTgsMTEuOTk5DQoJQzYxLjk5OSw1Ni42MjYsNTYuNjI4LDYxLjk5OCw1MC4wMDEsNjEuOTk4eiBNNTAuMDAxLDQyLjAwMWMtNC40MTgsMC04LDMuNTgxLTgsNy45OTljMCw0LjQxNywzLjU4Myw3Ljk5OSw4LDcuOTk5DQoJczcuOTk4LTMuNTgyLDcuOTk4LTcuOTk5QzU3Ljk5OSw0NS41ODIsNTQuNDE5LDQyLjAwMSw1MC4wMDEsNDIuMDAxeiBNNTAuMDAxLDM0LjAwMmMtMS4xMDUsMC0yLTAuODk2LTItMnYtMy45OTkNCgljMC0xLjEwNCwwLjg5NS0yLDItMmMxLjEwNCwwLDIsMC44OTYsMiwydjMuOTk5QzUyLjAwMSwzMy4xMDYsNTEuMTA0LDM0LjAwMiw1MC4wMDEsMzQuMDAyeiBNMzUuODYsMzguNjg4bC0yLjgyOC0yLjgyOA0KCWMtMC43ODEtMC43ODEtMC43ODEtMi4wNDcsMC0yLjgyOHMyLjA0Ny0wLjc4MSwyLjgyOCwwbDIuODI4LDIuODI4YzAuNzgxLDAuNzgxLDAuNzgxLDIuMDQ3LDAsMi44MjhTMzYuNjQxLDM5LjQ2OSwzNS44NiwzOC42ODh6DQoJIE0zNC4wMDIsNTBjMCwxLjEwNC0wLjg5NiwxLjk5OS0yLDEuOTk5aC00Yy0xLjEwNCwwLTEuOTk5LTAuODk1LTEuOTk5LTEuOTk5czAuODk2LTIsMS45OTktMmg0QzMzLjEwNyw0OCwzNC4wMDIsNDguODk2LDM0LjAwMiw1MA0KCXogTTM1Ljg2LDYxLjMxMmMwLjc4MS0wLjc4LDIuMDQ3LTAuNzgsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0OCwwLDIuODI4bC0yLjgyOCwyLjgyOGMtMC43ODEsMC43ODEtMi4wNDcsMC43ODEtMi44MjgsMA0KCWMtMC43ODEtMC43OC0wLjc4MS0yLjA0NywwLTIuODI4TDM1Ljg2LDYxLjMxMnogTTUwLjAwMSw2NS45OThjMS4xMDQsMCwyLDAuODk1LDIsMS45OTl2NGMwLDEuMTA0LTAuODk2LDItMiwyDQoJYy0xLjEwNSwwLTItMC44OTYtMi0ydi00QzQ4LjAwMSw2Ni44OTMsNDguODk2LDY1Ljk5OCw1MC4wMDEsNjUuOTk4eiBNNjQuMTQyLDYxLjMxMmwyLjgyOCwyLjgyOGMwLjc3OSwwLjc4MSwwLjc3OSwyLjA0OCwwLDIuODI4DQoJYy0wLjc4MSwwLjc4MS0yLjA0OSwwLjc4MS0yLjgyOCwwbC0yLjgyOC0yLjgyOGMtMC43ODEtMC43OC0wLjc4MS0yLjA0NywwLTIuODI4QzYyLjA5Myw2MC41MzEsNjMuMzYsNjAuNTMxLDY0LjE0Miw2MS4zMTJ6Ii8+DQo8L3N2Zz4NCg==')");
  }
  else if (weatherId >= 801 && weatherId <= 804) {
    $(".weather-icon").css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDMuOTQ1LDY1LjYzOWMtOC44MzUsMC0xNS45OTgtNy4xNjItMTUuOTk4LTE1Ljk5OA0KCWMwLTguODM2LDcuMTYzLTE1Ljk5OCwxNS45OTgtMTUuOTk4YzYuMDA0LDAsMTEuMjI5LDMuMzEyLDEzLjk2NSw4LjIwM2MwLjY2NC0wLjExMywxLjMzOC0wLjIwNSwyLjAzMy0wLjIwNQ0KCWM2LjYyNywwLDExLjk5OSw1LjM3MywxMS45OTksMTJjMCw2LjYyNS01LjM3MiwxMS45OTgtMTEuOTk5LDExLjk5OEM1Ny4xNjgsNjUuNjM5LDQ3LjE0Myw2NS42MzksNDMuOTQ1LDY1LjYzOXogTTU5Ljk0Myw2MS42MzkNCgljNC40MTgsMCw4LTMuNTgyLDgtNy45OThjMC00LjQxOC0zLjU4Mi04LTgtOGMtMS42LDAtMy4wODIsMC40ODEtNC4zMzMsMS4yOTFjLTEuMjMxLTUuMzE2LTUuOTc0LTkuMjktMTEuNjY1LTkuMjkNCgljLTYuNjI2LDAtMTEuOTk4LDUuMzcyLTExLjk5OCwxMS45OTljMCw2LjYyNiw1LjM3MiwxMS45OTgsMTEuOTk4LDExLjk5OEM0Ny41NjIsNjEuNjM5LDU2LjkyNCw2MS42MzksNTkuOTQzLDYxLjYzOXoiLz4NCjwvc3ZnPg0K')");
  }
  
}


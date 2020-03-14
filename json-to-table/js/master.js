var app = new Vue({
   el: '#app',
   data() {
      return {
         data
      };
   },
   methods: {
      filterSelection: function(city) {
         var x, i;
         x = document.getElementsByClassName("filter-table");
         if (city == "all") city = "";
         for (i = 0; i < x.length; i++) {
            removeFilterClass(x[i], "show");
            if (x[i].className.indexOf(city) > -1) addFilterClass(x[i], "show");
         }
      }
   }
});

app.filterSelection('all');

function addFilterClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
   }
}

function removeFilterClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
   }
   element.className = arr1.join(" ");
}

$(window).scroll(function() {
   if($(window).scrollTop() >= 100) {
      $('.entry-btn').addClass('in-view');
   } else {
      $('.entry-btn').removeClass('in-view');
   }
});

var btnContainer = document.getElementsByClassName("filter-buttons")[0];
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
   });
}
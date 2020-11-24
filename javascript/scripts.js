function modal()
{
    var modal = document.getElementById("myModal");

    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

function advice()
{
    alert("Pentru a te putea implica trebuie sa-ti creezi cont sau sa te loghezi! :)");
}

//menu navbar
function openNav()
{
	document.getElementById("nav").style.width="100%";
}
function closeNav()
{
    document.getElementById("nav").style.width="0%";
}
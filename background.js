function sendCurrentUrl(url) {
  var req = new XMLHttpRequest(); 

  //Check if the data transfer was successful(Checks if 'Event' occured)
  req.addEventListener('readystatechange', function (evt) {
    if (req.readyState === 4) {
      if (req.status === 200) {
        console.log('Saved !');
      } else {
        alert("ERROR: status " + req.status);
      }
    }
  });
  
  try{req.open('POST', 'http://localhost:1234/db1/insertdb.php', true);
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      req.send('url=' + encodeURIComponent(url));
    }catch(e){
    alert(e.toString());
    }
}

chrome.runtime.onMessage.addListener(function(url, sender, sendResponse) {
	sendCurrentUrl(url);
});

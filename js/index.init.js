
function getValue(varname)
{
  var url = window.location.href;
  //console.log(url);
  var qparts = url.split("?");
  if (qparts.length == 0){return "";}
  var query = qparts[1];
  var vars = query.split("&");
  var value = "";
  //console.log("length:"+vars.length);
  for (i=0; i<vars.length; i++)
  {
    //console.log("var["+i+"]="+vars[i]+"\n");
    var parts = vars[i].split("=");
    if (parts[0] == varname)
    {
      value = parts[1];
      //console.log("地址:"+decodeURI(value));
      break;
    }
  }
  console.log("value:"+value);
  value = unescape(decodeURI(value));
  console.log("value2:"+value);
  value.replace(/\+/g," ");
  console.log("value3:"+value);
  return value;
}

function displayMessage(msg, key){
  console.log("msg:"+msg);
  var content = "<div id='info' class='info'><div class='addr'>"+msg+"</div></div>";
  $(key).html(content);
}
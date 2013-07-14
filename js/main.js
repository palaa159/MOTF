var networkState = navigator.network.connection.type; 
if (networkState == Connection.NONE)
{
  $('#menu').html('This app requires an internet connection');
}
window.onload=function(){
  var map_div = document.getElementById('map');
  var option = {center: new daum.maps.LatLng(37.270298, 127.009235), draggable: false, level:2};

  var map = new daum.maps.Map(map_div, option);

  // 마커가 표시될 위치입니다
var markerPosition  = new daum.maps.LatLng(37.270298, 127.009235); 

// 마커를 생성합니다
var marker = new daum.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


}

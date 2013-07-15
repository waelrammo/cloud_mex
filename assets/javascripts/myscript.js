/* Cloud MeX */

var fetch = document.getElementById('fetch');
var play_btn = document.getElementById('play_btn');
var container = document.getElementById('container');
var lower = document.getElementById('lower');
var upper = document.getElementById('upper');

var router_path = "http://192.168.1.1/cgi-bin/balancePlateJS?cmd=%20&bytes=4096&timeout=1000&loops=100";
var color_gradient = ["FFFFFF","FEFEFE","FEFEFE","FDFDFD","FDFDFD","FCFCFC","FCFCFC","FBFBFB","FBFBFB","FAFAFA","FAFAFA","F9F9F9","F9F9F9","F8F8F8","F8F8F8","F7F7F7","F7F7F7","F6F6F6","F6F6F6","F5F5F5","F5F5F5","F4F4F4","F4F4F4","F3F3F3","F3F3F3","F2F2F2","F2F2F2","F1F1F1","F1F1F1","F0F0F0","F0F0F0","EFEFEF","EFEFEF","EEEEEE","EEEEEE","EDEDED","EDEDED","ECECEC","ECECEC","EBEBEB","EBEBEB","EAEAEA","EAEAEA","E9E9E9","E9E9E9","E8E8E8","E8E8E8","E7E7E7","E7E7E7","E6E6E6","E6E6E6","E5E5E5","E5E5E5","E4E4E4","E4E4E4","E3E3E3","E3E3E3","E2E2E2","E2E2E2","E1E1E1","E1E1E1","E0E0E0","E0E0E0","DFDFDF","DFDFDF","DEDEDE","DEDEDE","DDDDDD","DDDDDD","DCDCDC","DCDCDC","DBDBDB","DBDBDB","DADADA","DADADA","D9D9D9","D9D9D9","D8D8D8","D8D8D8","D7D7D7","D7D7D7","D6D6D6","D6D6D6","D5D5D5","D5D5D5","D4D4D4","D4D4D4","D3D3D3","D3D3D3","D2D2D2","D2D2D2","D1D1D1","D1D1D1","D0D0D0","D0D0D0","CFCFCF","CFCFCF","CECECE","CECECE","CDCDCD","CDCDCD","CCCCCC","CCCCCC","CBCBCB","CBCBCB","CACACA","CACACA","C9C9C9","C9C9C9","C8C8C8","C8C8C8","C7C7C7","C7C7C7","C6C6C6","C6C6C6","C5C5C5","C5C5C5","C4C4C4","C4C4C4","C3C3C3","C3C3C3","C2C2C2","C2C2C2","C1C1C1","C1C1C1","C0C0C0","C0C0C0","BFBFBF","BFBFBF","BEBEBE","BEBEBE","BDBDBD","BDBDBD","BCBCBC","BCBCBC","BBBBBB","BBBBBB","BABABA","BABABA","B9B9B9","B9B9B9","B8B8B8","B8B8B8","B7B7B7","B7B7B7","B6B6B6","B6B6B6","B5B5B5","B5B5B5","B4B4B4","B4B4B4","B3B3B3","B3B3B3","B2B2B2","B2B2B2","B1B1B1","B1B1B1","B0B0B0","B0B0B0","AFAFAF","AFAFAF","AEAEAE","AEAEAE","ADADAD","ADADAD","ACACAC","ACACAC","ABABAB","ABABAB","AAAAAA","AAAAAA","A9A9A9","A9A9A9","A8A8A8","A8A8A8","A7A7A7","A7A7A7","A6A6A6","A6A6A6","A5A5A5","A5A5A5","A4A4A4","A4A4A4","A3A3A3","A3A3A3","A2A2A2","A2A2A2","A1A1A1","A1A1A1","A0A0A0","A0A0A0","9F9F9F","9F9F9F","9E9E9E","9E9E9E","9D9D9D","9D9D9D","9C9C9C","9C9C9C","9B9B9B","9B9B9B","9A9A9A","9A9A9A","999999","999999","989898","989898","979797","979797","969696","969696","959595","959595","949494","949494","939393","939393","929292","929292","919191","919191","909090","909090","8F8F8F","8F8F8F","8E8E8E","8E8E8E","8D8D8D","8D8D8D","8C8C8C","8C8C8C","8B8B8B","8B8B8B","8A8A8A","8A8A8A","898989","898989","888888","888888","878787","878787","868686","868686","858585","858585","848484","848484","838383","838383","828282","828282","818181","818181","808080","808080","7F7F7F","7F7F7F","7E7E7E","7E7E7E","7D7D7D","7D7D7D","7C7C7C","7C7C7C","7B7B7B","7B7B7B","7A7A7A","7A7A7A","797979","797979","787878","787878","777777","777777","767676","767676","757575","757575","747474","747474","737373","737373","727272","727272","717171","717171","707070","707070","6F6F6F","6F6F6F","6E6E6E","6E6E6E","6D6D6D","6D6D6D","6C6C6C","6C6C6C","6B6B6B","6B6B6B","6A6A6A","6A6A6A","696969","696969","686868","686868","676767","676767","666666","666666","656565","656565","646464","646464","636363","636363","626262","626262","616161","616161","606060","606060","5F5F5F","5F5F5F","5E5E5E","5E5E5E","5D5D5D","5D5D5D","5C5C5C","5C5C5C","5B5B5B","5B5B5B","5A5A5A","5A5A5A","595959","595959","585858","585858","575757","575757","565656","565656","555555","555555","545454","545454","535353","535353","525252","525252","515151","515151","505050","505050","4F4F4F","4F4F4F","4E4E4E","4E4E4E","4D4D4D","4D4D4D","4C4C4C","4C4C4C","4B4B4B","4B4B4B","4A4A4A","4A4A4A","494949","494949","484848","484848","474747","474747","464646","464646","454545","454545","444444","444444","434343","434343","424242","424242","414141","414141","404040","404040","3F3F3F","3F3F3F","3E3E3E","3E3E3E","3D3D3D","3D3D3D","3C3C3C","3C3C3C","3B3B3B","3B3B3B","3A3A3A","3A3A3A","393939","393939","383838","383838","373737","373737","363636","363636","353535","353535","343434","343434","333333","333333","323232","323232","313131","313131","303030","303030","2F2F2F","2F2F2F","2E2E2E","2E2E2E","2D2D2D","2D2D2D","2C2C2C","2C2C2C","2B2B2B","2B2B2B","2A2A2A","2A2A2A","292929","292929","282828","282828","272727","272727","262626","262626","252525","252525","242424","242424","232323","232323","222222","222222","212121","212121","202020","202020","1F1F1F","1F1F1F","1E1E1E","1E1E1E","1D1D1D","1D1D1D","1C1C1C","1C1C1C","1B1B1B","1B1B1B","1A1A1A","1A1A1A","191919","191919","181818","181818","171717","171717","161616","161616","151515","151515","141414","141414","131313","131313","121212","121212","111111","111111","101010","101010","0F0F0F","0F0F0F","0E0E0E","0E0E0E","0D0D0D","0D0D0D","0C0C0C","0C0C0C","0B0B0B","0B0B0B","0A0A0A","0A0A0A","090909","090909","080808","080808","070707","070707","060606","060606","050505","050505","040404","040404","030303","030303","020202","020202","010101","010101","000000","000000","000000"];
var color_gradient_heat = ['2641F7', '254DF6', '2459F6', '2466F6', '2372F5', '237FF5', '228CF5', '2298F5', '21A5F4', '21B2F4', '20BEF4', '1FCBF4', '1FD8F3', '1EE5F3', '1EF2F3', '1DF2E6', '1DF2D9', '1CF2CC', '1CF2BE', '1BF1B0', '1BF1A3', '1AF195', '19F187', '19F07A', '18F06C', '18F05E', '17EF50', '17EF43', '16EF35', '16EF27', '15EE19', '1EEE15', '2BEE14', '38EE14', '45ED13', '52ED13', '5FED12', '6DED12', '7AEC11', '87EC11', '94EC10', 'A1EB10', 'AFEB0F', 'BCEB0E', 'C9EB0E', 'D6EA0D', 'E4EA0D', 'EAE20C', 'EAD40C', 'E9C60B', 'E9B80B', 'E9AA0A', 'E89C0A', 'E88E09', 'E88009', 'E87208', 'E76408', 'E75507', 'E74707', 'E73906', 'E62B06', 'E61C05', 'E60E05', 'E60409'];
var is_playing = false;

function play () {

	if (is_playing) {
		clearInterval(play_intervalID);
		is_playing = false;
		play_btn.innerHTML = "Play"; 		
	}
	else {
		play_intervalID = setInterval(loadXMLDoc, 10);
		is_playing = true;
		play_btn.innerHTML = "Stop"; 		
	}

}

function drawData () {

	var sensel_size = 20; // should probably be 5 for interpolation
	var x, y;
	var box; 

	for (y=0; y<32; y++){
		for (x=0; x<64; x++){
			box = document.getElementById(x+"_"+y);
			box.innerHTML = box.dataset.value;
			box.style.marginTop = box.style.marginTop + sensel_size*y + "px";
			box.style.marginLeft = box.style.marginLeft + sensel_size*x + "px";
			box.style.backgroundColor = "#" + color_gradient_heat[mapToRange(box.dataset.value, 64)];	
		}
	}

}

function loadXMLDoc () {

	var xml_http;
	
	if(window.XMLHttpRequest){xml_http = new XMLHttpRequest();}
	else {xml_http = new ActiveXObject("Microsoft.XMLHttp");}

	xml_http.onreadystatechange = function () {
		if (xml_http.readyState === 4 && xml_http.status === 200){
			document.getElementById("container").innerHTML = xml_http.responseText;
			drawData();				
		}
	}

	xml_http.open("GET", router_path, true);
	xml_http.send();

}

function upper_callback(){
	// rules for string to integer comparison?

	var upper_value = parseInt(upper.value);
	var lower_value = parseInt(lower.value);

	if (upper_value > 4095) upper.value = 4095;
	else if (upper_value < 1) upper.value = 1;
	if (upper_value <= lower_value) upper.value = lower_value + 1;

}

function lower_callback(){
	// rules for string to integer comparison?

	var upper_value = parseInt(upper.value);
	var lower_value = parseInt(lower.value);

	if (lower_value > 4094) lower.value = 4094;
	else if (lower_value < 0) lower.value = 0;
	if (lower_value >= upper_value) lower.value = upper_value - 1;

}

function mapToRange(value, gradSize){

	var lower_value = parseInt(lower.value);
	var upper_value = parseInt(upper.value);
	var box_value = parseInt(value);

	if (box_value <= lower_value) return 0;
	else if (box_value >= upper_value) return 63;
	else return Math.floor(63 * (box_value - lower_value) / upper_value);
}


/* Increase Frame Rate */

	// create divs client side
	// code will be visible to anyone who wants to take a look at the application

/* Interpolation */

	// split each cell into 3 by 3 with original sensel's value in the center
	// the new corner sensels will be weighted as such: 0.65a + 0.15(b+d) + 0.5c
	// the new center sensels will be weighted as such: 0.40(a+b) + 0.1(c+d)

/* Access App From Internet */

	// Understand router networking
	// Understand AJAX requests to a third party server (the router)?
	// Mirror the data results to a third party server
import { JSFrame } from 'jsframe.js';

export class triggeredFunctions {


	static hacaroBlackClick() {

		const jsFrame = new JSFrame();
		const align = 'CENTER_CENTER';//アンカー
		const x = window.innerWidth / 2;
		const y = window.innerHeight / 2;
		const frame = jsFrame.create({
			title: 'ウィンドウ',
			left: 20,
			top: 20,
			width: 320,
			height: 220,
			movable: true,//マウスで移動可能
			resizable: true,//マウスでリサイズ可能
			html: '<div id="my_element" style="padding:10px;font-size:12px;color:darkgray;">Contents of window</div>'
		});



		frame.setPosition(x, y, align);
		frame.show();
		setTimeout(() => {
			frame.$('#my_element').innerHTML = '<span style="color:red">Hello world</span>';
		}, 1000);



	}

	static hacaroBlueClick() {
		const jsFrame = new JSFrame();
		const align = 'CENTER_CENTER';//アンカー
		const x = window.innerWidth / 2;
		const y = window.innerHeight / 2;
		const frame = jsFrame.create({
			title: 'ウィンドウ',
			width: 640,
			height: 560,
			movable: true,//マウスで移動可能
			resizable: true,//マウスでリサイズ可能
			url: 'https://platform.voice-doujin.space/event/fleamarket',//iframe内に表示するURL
			urlLoaded: (_frame) => { }
		});

		frame.setPosition(x, y, align);
		frame.show();
		setTimeout(() => {
			frame.$('#my_element').innerHTML = '<span style="color:red">Hello world</span>';
		}, 1000);


	}





	static stage01Click() {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/stage/01.php';
		const x = window.innerWidth / 2;
		const y = window.innerHeight / 2.2;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 320) {
			widthx = x * 0.9;
			heighty = y * 1.5;
			posx = x / 2;
			posy = y;
		} else {
			widthx = x * 1.8;
			heighty = y * 1.5;
			posx = x;
			posy = y;
		}

		const frame = jsFrame.create({
			title: windowtitle,
			width: widthx,
			height: heighty,
			movable: true,//マウスで移動可能
			resizable: true,//マウスでリサイズ可能
			url: innerurl,
			urlLoaded: (_frame) => { }
		});

		frame.setPosition(posx, posy, align);
		frame.show();

	}

	static stage02Click() {

		const LINK = 'https://voice-doujin.space/vr/stage/02.php'; // 別タブ遷移したいURL

		// -------------------------------------------------------------
		// この「cman_winOpen()」を使用すると、指定の画面が表示されます 
		// -------------------------------------------------------------

	
		var wH = argDispOrHtml == "HTML" ? document.documentElement.clientHeight : screen.availHeight;
	    wH = Math.floor(wH / 2); 
		if (wH < 100) {
			wH= 100;
		}

		var wW = argDispOrHtml == "HTML" ? document.documentElement.clientWidth : screen.availWidth;
		wW = Math.floor(wH / 3);
		if (wW < 100) {
			wW= 100;
		}

		var wT = wH /2;
		var wL = wW /2;  // モニター中央 Left計算
		var wOption = "top=" + wT + ", left=" + wL + ", height=" + wH + ", width=" + wW + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(wW, wH);
			winObj.moveTo(wL, wT);
		} catch (e) {
		}

	


	}


	static stage03Click() {

		window.open("https://voice-doujin.space/vr/stage/03.php", "window1", "width=150,height=300,scrollbars=1");

	}

	static stage04Click() {
		const jsFrame = new JSFrame();
		const align = 'CENTER_CENTER';//アンカー
		const x = window.innerWidth / 2;
		const y = window.innerHeight / 2.2;
		const frame = jsFrame.create({
			title: 'ウィンドウ',
			width: x * 1.5,
			height: y * 1.5,
			movable: true,//マウスで移動可能
			resizable: true,//マウスでリサイズ可能
			url: 'https://voice-doujin.space/vr/stage/04.php',//iframe内に表示するURL
			urlLoaded: (_frame) => { }
		});

		frame.setPosition(x, y, align);
		frame.show();



	}
	static stage05Click() {
		const jsFrame = new JSFrame();
		const align = 'CENTER_CENTER';//アンカー
		const x = window.innerWidth / 2;
		const y = window.innerHeight / 2.2;
		const frame = jsFrame.create({
			title: 'ウィンドウ',
			width: x * 1.5,
			height: y * 1.5,
			movable: true,//マウスで移動可能
			resizable: true,//マウスでリサイズ可能
			url: 'https://voice-doujin.space/vr/stage/05.php',//iframe内に表示するURL
			urlLoaded: (_frame) => { }
		});

		frame.setPosition(x, y, align);
		frame.show();



	}


}
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
		const jsFrame = new JSFrame();
		const align = 'CENTER_CENTER';//アンカー
		const x = window.innerWidth / 2;
		const y = window.innerHeight / 2.2;

		const LINK = 'https://voice-doujin.space/vr/stage/02.php'; // 別タブ遷移したいURL

		// -------------------------------------------------------------
		// この「cman_winOpen()」を使用すると、指定の画面が表示されます 
		// -------------------------------------------------------------
		function cman_winOpen() {
			var wH = cman_calH("DISP", "2");  // 高さ1/2の計算
			var wW = cman_calW("DISP", "3");  // 横幅1/3の計算
			var wT = cman_calT("DISP", "CC", wH);  // モニター中央 Top計算
			var wL = cman_calL("DISP", "CC", wW);  // モニター中央 Left計算
			var wOption = "top=" + wT + ", left=" + wL + ", height=" + wH + ", width=" + wW + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

			// 画面を開く
			var winObj = window.open(LINK, "_blank", wOption);
			winObj.focus();

			try {
				winObj.resizeTo(wW, wH);
				winObj.moveTo(wL, wT);
			} catch (e) {
			}

			delete winObj;

		}

		// -----------------------------------------
		// 以下は汎用関数です。このまま使用ください
		// -----------------------------------------
		// 開く画面の高さ計算（px値でreturn）
		function cman_calH(argDispOrHtml, argSize) {
			var wH = argDispOrHtml == "HTML" ? document.documentElement.clientHeight : screen.availHeight;
			if (!wH) { return 100; }
			switch (argSize) {
				case "1": break;
				case "2": wH = Math.floor(wH / 2); break;
				case "3": wH = Math.floor(wH / 3); break;
				case "4": wH = Math.floor(wH / 4); break;
				default: wH = 100; break;
			}
			if (wH < 100) { return 100; } else { return wH; }
		}
		// 開く画面の横幅計算（px値でreturn）
		function cman_calW(argDispOrHtml, argSize) {
			var wW = argDispOrHtml == "HTML" ? document.documentElement.clientWidth : screen.availWidth;
			if (!wW) { return 100; }
			switch (argSize) {
				case "1": break;
				case "2": wW = Math.floor(wW / 2); break;
				case "3": wW = Math.floor(wW / 3); break;
				case "4": wW = Math.floor(wW / 4); break;
				default: wW = 100; break;
			}
			if (wW < 100) { return 100; } else { return wW; }
		}
		// 開く画面の開始縦位置を計算（px値でreturn）
		function cman_calT(argDispOrHtml, argPos, argHeight) {
			var wBaseT = 0;
			if (argDispOrHtml == "HTML") {
				wBaseT = document.body.scrollTop;
				if (!wBaseT) { wBaseT = 0; }
			}
			var wH = argDispOrHtml == "HTML" ? document.documentElement.clientHeight : screen.availHeight;
			if (!wH) { wH = 0; }
			var wTop = 0;
			switch (argPos) {
				case "CC": wTop = Math.floor((wH - argHeight) / 2) + wBaseT; break;
				case "LT": wTop = wBaseT; break;
				case "RT": wTop = wBaseT; break;
				case "RB": wTop = Math.floor(wH - argHeight) + wBaseT; break;
				case "LB": wTop = Math.floor(wH - argHeight) + wBaseT; break;
			}
			if (wTop < 0) { return 0; } else { return wTop; }
		}
		// 開く画面の開始横位置を計算（px値でreturn）
		function cman_calL(argDispOrHtml, argPos, argWidth) {
			var wBaseL = 0;
			if (argDispOrHtml == "HTML") {
				wBaseL = window.screenX || window.screenLeft;
				if (!wBaseL) { wBaseL = 0; }
			}
			var wW = argDispOrHtml == "HTML" ? document.documentElement.clientWidth : screen.availWidth;
			if (!wW) { wW = 0; }
			var wLeft = 0;
			switch (argPos) {
				case "CC": wLeft = Math.floor((wW - argWidth) / 2) + wBaseL; break;
				case "LT": wLeft = wBaseL; break;
				case "RT": wLeft = Math.floor(wW - argWidth) + wBaseL; break;
				case "RB": wLeft = Math.floor(wW - argWidth) + wBaseL; break;
				case "LB": wLeft = wBaseL; break;
			}
			if (wLeft < 0) { return 0; } else { return wLeft; }
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
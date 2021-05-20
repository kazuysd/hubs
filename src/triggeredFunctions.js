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



	static innerFrameNumClick(numberStr) {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/inner/nn.php?config=inner'+numberStr;
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



	static innerFrame01Click() {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/inner/01.php';
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

	static innerFrame02Click() {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/innner/02.php';
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

	static innerFrame03Click() {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/inner/03.php';
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

	static innerFrame04Click() {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/inner/04.php';
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

	static innerFrame05Click() {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/inner/05.php';
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

	static innerFrame06Click() {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/inner/06.php';
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

	static innerFrame07Click() {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/inner/07.php';
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

	static innerFrame08Click() {
		const jsFrame = new JSFrame();
		const windowtitle = 'VOiCE VR';
		//アンカー
		const align = 'CENTER_CENTER';
		//iframe内に表示するURL
		const innerurl = 'https://voice-doujin.space/vr/inner/08.php';
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



	static popup01Click() {

		const LINK = 'https://voice-doujin.space/vr/stage/01.php'; // 別タブ遷移したいURL


		const x = window.innerWidth;
		const y = window.innerHeight;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 640) {
			widthx = x * 0.5;
			heighty = y * 0.9;
			posx = x /8;
			posy = y /8;
		} else {
			widthx = x * 0.9;
			heighty = y * 0.9;
			posx = x /10;
			posy = y /10;
		}
	
	
		var wOption = "top=" + posy + ", left=" + posx + ", height=" + heighty + ", width=" + widthx + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(widthx, heighty);
			winObj.moveTo(posx, posy);
		} catch (e) {
		}

	


	}

	static popup02Click() {

		const LINK = 'https://voice-doujin.space/vr/stage/02.php'; // 別タブ遷移したいURL


		const x = window.innerWidth;
		const y = window.innerHeight;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 640) {
			widthx = x * 0.5;
			heighty = y * 0.9;
			posx = x /8;
			posy = y /8;
		} else {
			widthx = x * 0.9;
			heighty = y * 0.9;
			posx = x /10;
			posy = y /10;
		}
	
	
		var wOption = "top=" + posy + ", left=" + posx + ", height=" + heighty + ", width=" + widthx + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(widthx, heighty);
			winObj.moveTo(posx, posy);
		} catch (e) {
		}

	


	}

	static popup03Click() {

		const LINK = 'https://voice-doujin.space/vr/stage/03.php'; // 別タブ遷移したいURL


		const x = window.innerWidth;
		const y = window.innerHeight;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 640) {
			widthx = x * 0.5;
			heighty = y * 0.9;
			posx = x /8;
			posy = y /8;
		} else {
			widthx = x * 0.9;
			heighty = y * 0.9;
			posx = x /10;
			posy = y /10;
		}
	
	
		var wOption = "top=" + posy + ", left=" + posx + ", height=" + heighty + ", width=" + widthx + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(widthx, heighty);
			winObj.moveTo(posx, posy);
		} catch (e) {
		}

	


	}

	static popup04Click() {

		const LINK = 'https://voice-doujin.space/vr/stage/04.php'; // 別タブ遷移したいURL


		const x = window.innerWidth;
		const y = window.innerHeight;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 640) {
			widthx = x * 0.5;
			heighty = y * 0.9;
			posx = x /8;
			posy = y /8;
		} else {
			widthx = x * 0.9;
			heighty = y * 0.9;
			posx = x /10;
			posy = y /10;
		}
	
	
		var wOption = "top=" + posy + ", left=" + posx + ", height=" + heighty + ", width=" + widthx + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(widthx, heighty);
			winObj.moveTo(posx, posy);
		} catch (e) {
		}

	


	}

	static popup05Click() {

		const LINK = 'https://voice-doujin.space/vr/stage/05.php'; // 別タブ遷移したいURL


		const x = window.innerWidth;
		const y = window.innerHeight;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 640) {
			widthx = x * 0.5;
			heighty = y * 0.9;
			posx = x /8;
			posy = y /8;
		} else {
			widthx = x * 0.9;
			heighty = y * 0.9;
			posx = x /10;
			posy = y /10;
		}
	
	
		var wOption = "top=" + posy + ", left=" + posx + ", height=" + heighty + ", width=" + widthx + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(widthx, heighty);
			winObj.moveTo(posx, posy);
		} catch (e) {
		}

	


	}


	static popup06Click() {

		const LINK = 'https://voice-doujin.space/vr/stage/06.php'; // 別タブ遷移したいURL


		const x = window.innerWidth;
		const y = window.innerHeight;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 640) {
			widthx = x * 0.5;
			heighty = y * 0.9;
			posx = x /8;
			posy = y /8;
		} else {
			widthx = x * 0.9;
			heighty = y * 0.9;
			posx = x /10;
			posy = y /10;
		}
	
	
		var wOption = "top=" + posy + ", left=" + posx + ", height=" + heighty + ", width=" + widthx + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(widthx, heighty);
			winObj.moveTo(posx, posy);
		} catch (e) {
		}

	


	}

	static popup07Click() {

		const LINK = 'https://voice-doujin.space/vr/stage/07.php'; // 別タブ遷移したいURL


		const x = window.innerWidth;
		const y = window.innerHeight;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 640) {
			widthx = x * 0.5;
			heighty = y * 0.9;
			posx = x /8;
			posy = y /8;
		} else {
			widthx = x * 0.9;
			heighty = y * 0.9;
			posx = x /10;
			posy = y /10;
		}
	
	
		var wOption = "top=" + posy + ", left=" + posx + ", height=" + heighty + ", width=" + widthx + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(widthx, heighty);
			winObj.moveTo(posx, posy);
		} catch (e) {
		}

	


	}


	static popup08Click() {

		const LINK = 'https://voice-doujin.space/vr/stage/08.php'; // 別タブ遷移したいURL


		const x = window.innerWidth;
		const y = window.innerHeight;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 640) {
			widthx = x * 0.5;
			heighty = y * 0.9;
			posx = x /8;
			posy = y /8;
		} else {
			widthx = x * 0.9;
			heighty = y * 0.9;
			posx = x /10;
			posy = y /10;
		}
	
	
		var wOption = "top=" + posy + ", left=" + posx + ", height=" + heighty + ", width=" + widthx + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(widthx, heighty);
			winObj.moveTo(posx, posy);
		} catch (e) {
		}

	


	}



	static normal01Click() {

		const LINK = 'https://voice-doujin.space/vr/normal/01.php'; // 別タブ遷移したいURL


		const x = window.innerWidth;
		const y = window.innerHeight;
		var posx = 0;
		var posy = 0;
		var widthx = 0;
		var heighty = 0;

		if (x >= 640) {
			widthx = x * 0.5;
			heighty = y * 0.9;
			posx = x /8;
			posy = y /8;
		} else {
			widthx = x * 0.9;
			heighty = y * 0.9;
			posx = x /10;
			posy = y /10;
		}
	
	
		var wOption = "top=" + posy + ", left=" + posx + ", height=" + heighty + ", width=" + widthx + ", menubar=no" + ", toolbar=no" + ", location=no" + ", status=no" + ", resizable=yes" + ", scrollbars=yes" + ", directories=no";

		// 画面を開く
		var winObj = window.open(LINK, "_blank", wOption);
		winObj.focus();

		try {
			winObj.resizeTo(widthx, heighty);
			winObj.moveTo(posx, posy);
		} catch (e) {
		}

	


	}




	

}
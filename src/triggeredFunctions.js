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
		const align = 'CENTER_CENTER';//アンカー
		const x = window.innerWidth / 2;
		const y = window.innerHeight / 2.2;
		const frame = jsFrame.create({
			title: 'ウィンドウ',
			width: x*1.5,
			height: y*1.5,
			movable: true,//マウスで移動可能
			resizable: true,//マウスでリサイズ可能
			url: 'https://voice-doujin.space/vr/stage/01.php',//iframe内に表示するURL
			urlLoaded: (_frame) => { }
		});

		frame.setPosition(x, y, align);
		frame.show();



	}

	static stage02Click() {
		const jsFrame = new JSFrame();
		const align = 'CENTER_CENTER';//アンカー
		const x = window.innerWidth / 2;
		const y = window.innerHeight / 2.2;
		const frame = jsFrame.create({
			title: 'ウィンドウ',
			width: x*1.5,
			height: y*1.5,
			movable: true,//マウスで移動可能
			resizable: true,//マウスでリサイズ可能
			url: 'https://voice-doujin.space/vr/stage/02.php',//iframe内に表示するURL
			urlLoaded: (_frame) => { }
		});

		frame.setPosition(x, y, align);
		frame.show();



	}


	static stage03Click() {

		window.open("https://voice-doujin.space/vr/stage/03.php","window1","width=150,height=300,scrollbars=1");

	}

	static stage04Click() {
		const jsFrame = new JSFrame();
		const align = 'CENTER_CENTER';//アンカー
		const x = window.innerWidth / 2;
		const y = window.innerHeight / 2.2;
		const frame = jsFrame.create({
			title: 'ウィンドウ',
			width: x*1.5,
			height: y*1.5,
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
			width: x*1.5,
			height: y*1.5,
			movable: true,//マウスで移動可能
			resizable: true,//マウスでリサイズ可能
			url: 'https://voice-doujin.space/vr/stage/05.php',//iframe内に表示するURL
			urlLoaded: (_frame) => { }
		});

		frame.setPosition(x, y, align);
		frame.show();



	}


}
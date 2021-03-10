export class triggeredFunctions{



static hacaroBlackClick() {
	        
	        var el = document.getElementById("product_dialog_product_name");
	        if(!el)
		        {
				         
				            localStorage.setItem('product-name','VOiCE');
				            localStorage.setItem('product-id','5');
				            localStorage.setItem('product-info','');
				            localStorage.setItem('product-genre','');
				            localStorage.setItem('product-price','');
				            localStorage.setItem('product-status','');
				            localStorage.setItem('product-script-src', 'https://platform.voice-doujin.space');

				            document.querySelectorAll('[class*=product-button]')[0].click();
				        }
	    }

    static hacaroBlueClick() {
	            
	            var el = document.getElementById("product_dialog_product_name");
	            if(!el)
		            {
				                
				                localStorage.setItem('product-name','測定ベルト（Qualityベルトブルー）');
				                localStorage.setItem('product-id','6');
				                localStorage.setItem('product-info','');
				                localStorage.setItem('product-genre','');
				                localStorage.setItem('product-price','');
				                localStorage.setItem('product-status','');
				                localStorage.setItem('product-script-src', 'https://digista.shop-pro.jp/?mode=cartjs&pid=152183768&style=normal_gray&name=n&img=y&expl=y&stock=y&price=y&optview=n&inq=n&sk=n');

				                document.querySelectorAll('[class*=product-button]')[0].click();
				            }
	        }


}

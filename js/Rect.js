/** 创建一个矩形 n为大小*/
function Rect(n,color){
	createjs.Shape.call(this);
	this.setRectType = function(type){
		this._RectType = type;
		switch (type){
			case 1:
				this.setColor("#"+color[0]+color[1]+color[2]+color[3]+color[4]+color[5]);
				break;
			case 2:
				 var m=1.8-n/9;
				 this.setColor("#"+parseInt(color[0]/m)
				 				  +parseInt(color[1]/m)
				 				  +parseInt(color[2]/m)
				 				  +parseInt(color[3]/m)
				 				  +parseInt(color[4]/m)
				 				  +parseInt(color[5]/m));
				break;
		}
	}
	
	//绘制颜色 、大小
	this.setColor = function(colorString){
		this.graphics.beginFill(colorString);
		this.graphics.drawRect(0,0,400/n-5,400/n-5);
		this.graphics.endFill();
	}
	
	//得到矩形的类型
	this.getRectType = function(){
		return this._RectType;
	}
	this.setRectType(1);
}
//构建矩形
Rect.prototype = new createjs.Shape();

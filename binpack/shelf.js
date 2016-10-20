var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var testCase = [11, 21, 43, 39, 13, 52, 35, 25, 28, 20, 66, 55, 54, 62, 50, 61, 49, 16, 60, 51, 39, 27, 54, 62, 65, 13, 34, 50, 48, 63, 19, 41, 18, 61, 23, 51, 39, 58, 35, 14, 35, 31, 67, 58, 25, 24, 58, 63, 59, 57, 69, 57, 34, 28, 61, 30, 18, 57, 10, 26, 42, 66, 31, 50, 63, 13, 42, 10, 57, 63, 61, 54, 50, 53, 20, 54, 66, 31, 48, 35, 28, 25, 37, 54, 32, 50, 42, 49, 62, 37, 31, 24, 63, 44, 66, 29, 25, 51, 52, 17, 67, 55, 27, 48, 23, 39, 38, 41, 46, 15, 46, 68, 24, 41, 38, 20, 33, 42, 12, 12, 51, 31, 53, 41, 25, 28, 39, 69, 61, 12, 55, 59, 35, 60, 13, 60, 22, 41, 60, 68, 28, 33, 31, 60, 27, 48, 38, 60, 19, 63, 28, 50, 24, 31, 42, 38, 11, 17, 50, 36, 27, 59, 42, 25, 16, 61, 35, 19, 32, 67, 40, 53, 33, 42, 15, 40, 62, 23, 42, 19, 57, 42, 43, 59, 12, 10, 45, 68, 16, 15, 15, 34, 67, 33, 27, 54, 53, 64, 18, 22];
//var testCase = [20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,20, 40,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,40, 30,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,16, 16,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,36, 10,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,10, 36,6,15,6,15,6,15,6,15,6,15,6,15,6,15,6,15,6,15,15,6,15,6,15,6,15,6,15,6,15,6,15,6,15,6,15,6,15,6,15,6];
//var testCase = [10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11, 10,20, 22,11];
//var testCase = [160,160,80,80,80,80,60,60,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
//var testCase = [67,75,67,75,67,75,67,75,67,75,67,75,67,75,67,75,67,75,67,75,67,75,67,75,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11,50,11];

var numCase = testCase.length/2;



var r = new Array(); //items
var s = new Array(); //spaces
for(var i = 0; i<numCase; i++) {
    r[i] = {};
    r[i].w = testCase[i*2];
    r[i].h = testCase[i*2+1];
    r[i].r = false; //is rotated

    //rotation
    /*
    if(r[i].w > r[i].h) {
      var temp = r[i].w;
      r[i].w = r[i].h;
      r[i].h = temp;
      r[i].r = true;
    }
    */


}
// 'v' : 'is valid'
s.push({x:0, y:0, w:width, h:height, v:true});

//sorting

for(var i=0; i<numCase-1; i++) {
    for(var j=0; j<numCase-1-i; j++) {
        if(r[j].h > r[j+1].h) {
            var temp = r[j];
            r[j] = r[j+1];
            r[j+1] = temp;
        }
    }
}

var used = 0; //used space
var p = {x:0, y:0}; //next point
var m = 0; //max height
var i = r.length; //item iterator
var j; //item iterator

while(i--) {
  //find item for next column
  for(j=i; j>=0; j--) {
      if(r[j].w <= width-p.x) {
          break;
      }
  }
  //go to the next row
  if(j<0) {
      j=i;
      p.x = 0;
      p.y += m;
      m=0;
  }

  //find item for bottom of space
  if(r[j].h > height-p.y) {
      if(r[j].w <= height-p.y) {
          var temp = r[i].w;
          r[i].w = r[i].h;
          r[i].h = temp;
          r[i].r = false;
      }
      else continue;
  }

  //draw
  var fillStyle;
  if(r[j].r) fillStyle = "#6699CC";
  else fillStyle = "#CC6699";

  drawRect(ctx, {
      x:p.x,
      y:p.y,
      w:r[j].w,
      h:r[j].h}, fillStyle);
  p.x += r[j].w;
  used += r[j].w*r[j].h;
  if(r[j].h>m) m=r[j].h;

  //remove item from array
  r.splice(j,1);
}
//efficiency
var e = Math.floor(used/(width*height)*10000)/100;
ctx.font="20px Consolas";
ctx.fillStyle = "#000000";
ctx.fillText(e+"%",width-70,height-18);


  function drawRect(ctx, rect, fillStyle)
  {
  var x = rect.x;
  var y = rect.y;
  var w = rect.w;
  var h = rect.h;

  /* gradient */
  var r0 = Math.floor(x/width*220) + 36;
  var r1 = Math.floor((x+w)/width*220) + 36;
  var g0 = Math.floor(y/height*220) + 36;
  var g1 = Math.floor((y+h)/height*220) + 36;
  var b0 = Math.floor((1-(x+w+y+h)/(width+height))*220) + 36;
  var b1 = Math.floor((1-(x+w+y+h)/(width+height))*220) + 36;
  var grd = ctx.createLinearGradient(x, y, x+w, y+h);
  grd.addColorStop(0, "rgb("+r0+","+g0+","+b0+")");
  grd.addColorStop(1, "rgb("+r1+","+g1+","+b1+")");


    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.stroke();
}

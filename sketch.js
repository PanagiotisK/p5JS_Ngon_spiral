let n = 9;	// n-gon shape
let angle, px = 100 , py = 100, pxprev, pyprev;
let d = 10;	//	distance from center
let i = 0, counter = 0;	//	loop helpers
var points;

function setup() {
	createCanvas(window.innerWidth * 0.9 , window.innerHeight * 0.9);
	frameRate(20);
	points = [];

	var one_point = {};
	one_point.x = 0;
	one_point.y = 0;

	points.push(one_point);
}

function draw(){
	background(240);
	stroke(0);
	translate(width/2, height/2);

	pxprev = px;
	pyprev = py;
	angle = TWO_PI / n * i;
	px = sin(angle) * d / 4 ;
	py = cos(angle) * d / 4 ;
	line(pxprev, pyprev, px, py);

	var one_point = {};
	one_point.x = px;
	one_point.y = py;
	
	points.push(one_point);

	
	for(let point = 1 ; point < points.length ; point++) {
	  var currpoint = points[point];
	  var prevpoint = points[point - 1];
	  line(prevpoint.x, prevpoint.y, currpoint.x, currpoint.y);
	}
	
	i+=1;
	d+=4;
	if(i>(n*20))
		noLoop();
}

#pragma strict
var cCube : Transform;
var phi1:float;
var phi2:float;
var theta1:float;
var theta2:float;
var deltaphi:float;
var deltatheta:float;


function Start () {
	phi1 = Mathf.Atan2(cCube.position.z,cCube.position.x);
	theta1 = Mathf.Acos(cCube.position.y/cCube.position.magnitude);
	phi2 = Mathf.Atan2(cCube.position.z,cCube.position.x);
	theta2 = Mathf.Acos(cCube.position.y/cCube.position.magnitude);
	deltaphi = phi1-phi2;
	deltatheta = theta1-theta2;
}

function Update () {
	phi1 = Mathf.Atan2(cCube.position.z,cCube.position.x);
	theta1 = Mathf.Acos(cCube.position.y/cCube.position.magnitude);
	deltaphi = phi1-phi2;
	deltatheta = theta1-theta2;
	transform.parent.parent.parent.parent.Rotate(Vector3(0,-deltaphi*60,0));
	transform.parent.RotateAround(transform.parent.parent.position,Vector3(1,0,0),-deltatheta*60);
	phi2 = phi1;
	theta2 = theta1;
}
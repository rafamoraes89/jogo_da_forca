function apertarLetra_a() {

	document.getElementById('a_').innerHTML = "A"
	document.getElementById('a_').className = 'btn btn-success btn-lg'
	document.getElementById('a_').value = "A"
	document.getElementById("a").disabled = true;

	youWin()
}

function apertarLetra_g() {

	document.getElementById('g_').innerHTML = "G"
	document.getElementById('g_').className = 'btn btn-success btn-lg'
	document.getElementById('g_').value = "G"
	document.getElementById("g").disabled = true;
	youWin()
}

function apertarLetra_t() {

	document.getElementById('t_').innerHTML = "T"
	document.getElementById('t_').className = 'btn btn-success btn-lg'
	document.getElementById('t_').value = 'T'
	document.getElementById("t").disabled = true;
	youWin()
}

function apertarLetra_o() {

	document.getElementById('o_').innerHTML = "O"
	document.getElementById('o_').className = 'btn btn-success btn-lg'
	document.getElementById('o_').value = 'O'
	document.getElementById("o").disabled = true;
	youWin()

	

}

document.getElementById('avancar').onclick = function(){return false}
document.getElementById("ir").disabled = true;

function youWin() {
		let a = document.getElementById('a_').value
		let g = document.getElementById('g_').value
		let t = document.getElementById('t_').value
		let o = document.getElementById('o_').value
		if(a=='A' && g=='G' && t=="T" && o=="O") {
			document.getElementById("parabens").className = ""
		document.getElementById("parabens").className = "col-8 col1g"
		document.getElementById('avancar').onclick = function(){return true}
		document.getElementById("ir").disabled = false;
		document.getElementById('b').onclick = function(){return false}
		document.getElementById('c').onclick = function(){return false}
		document.getElementById('d').onclick = function(){return false}
		document.getElementById('e').onclick = function(){return false}
		document.getElementById('f').onclick = function(){return false}
		document.getElementById('h').onclick = function(){return false}
		document.getElementById('i').onclick = function(){return false}
		document.getElementById('j').onclick = function(){return false}
		document.getElementById('k').onclick = function(){return false}
		document.getElementById('l').onclick = function(){return false}
		document.getElementById('m').onclick = function(){return false}
		document.getElementById('n').onclick = function(){return false}
		document.getElementById('p').onclick = function(){return false}
		document.getElementById('q').onclick = function(){return false}
		document.getElementById('r').onclick = function(){return false}
		document.getElementById('s').onclick = function(){return false}
		document.getElementById('u').onclick = function(){return false}
		document.getElementById('v').onclick = function(){return false}
		document.getElementById('w').onclick = function(){return false}
		document.getElementById('x').onclick = function(){return false}
		document.getElementById('y').onclick = function(){return false}
		document.getElementById('z').onclick = function(){return false}
		}
}

function youLose_b() {
	document.getElementById('b').className = 'btn btn-danger btn-sm'
	document.getElementById('b').value = 1
	

	youLose()

	
	
}

function youLose_c() {
	document.getElementById('c').className = 'btn btn-danger btn-sm'
	document.getElementById('c').value = 1
	youLose()
	
}

function youLose_d() {
	document.getElementById('d').className = 'btn btn-danger btn-sm'
	document.getElementById('d').value = 1

	youLose()
	
}

function youLose_e() {
	document.getElementById('e').className = 'btn btn-danger btn-sm'
	document.getElementById('e').value = 1

	youLose()
	
}

function youLose_f() {
	document.getElementById('f').className = 'btn btn-danger btn-sm'
	document.getElementById('f').value = 1

	youLose()
	
}

function youLose_h() {
	document.getElementById('h').className = 'btn btn-danger btn-sm'
	document.getElementById('h').value = 1

	youLose()
	
}

function youLose_i() {
	document.getElementById('i').className = 'btn btn-danger btn-sm'
	document.getElementById('i').value = 1

	youLose()
	
}

function youLose_j() {
	document.getElementById('j').className = 'btn btn-danger btn-sm'
	document.getElementById('j').value = 1

	youLose()
	
}

function youLose_k() {
	document.getElementById('k').className = 'btn btn-danger btn-sm'
	document.getElementById('k').value = 1

	youLose()
	
}

function youLose_l() {
	document.getElementById('l').className = 'btn btn-danger btn-sm'
	document.getElementById('l').value = 1

	youLose()
	
}

function youLose_m() {
	document.getElementById('m').className = 'btn btn-danger btn-sm'
	document.getElementById('m').value = 1

	youLose()
	
}

function youLose_n() {
	document.getElementById('n').className = 'btn btn-danger btn-sm'
	document.getElementById('n').value = 1

	youLose()
	
}

function youLose_p() {
	document.getElementById('p').className = 'btn btn-danger btn-sm'
	document.getElementById('p').value = 1

	youLose()
	
}

function youLose_q() {
	document.getElementById('q').className = 'btn btn-danger btn-sm'
	document.getElementById('q').value = 1

	youLose()
	
}

function youLose_r() {
	document.getElementById('r').className = 'btn btn-danger btn-sm'
	document.getElementById('r').value = 1

	youLose()
	
}

function youLose_s() {
	document.getElementById('s').className = 'btn btn-danger btn-sm'
	document.getElementById('s').value = 1

	youLose()
	
}

function youLose_u() {
	document.getElementById('u').className = 'btn btn-danger btn-sm'
	document.getElementById('u').value = 1

	youLose()
	
}

function youLose_v() {
	document.getElementById('v').className = 'btn btn-danger btn-sm'
	document.getElementById('v').value = 1

	youLose()
	
}

function youLose_w() {
	document.getElementById('w').className = 'btn btn-danger btn-sm'
	document.getElementById('w').value = 1

	youLose()
	
}

function youLose_x() {
	document.getElementById('x').className = 'btn btn-danger btn-sm'
	document.getElementById('x').value = 1

	youLose()
	
}

function youLose_y() {
	document.getElementById('y').className = 'btn btn-danger btn-sm'
	document.getElementById('y').value = 1

	youLose()
	
}

function youLose_z() {
	document.getElementById('z').className = 'btn btn-danger btn-sm'
	document.getElementById('z').value = 1

	youLose()
	
}




function youLose() {
	
	let b = parseInt(document.getElementById('b').value)
	let c = parseInt(document.getElementById('c').value)
	let d = parseInt(document.getElementById('d').value)
	let e = parseInt(document.getElementById('e').value)
	let f = parseInt(document.getElementById('f').value)
	let h = parseInt(document.getElementById('h').value)
	let i = parseInt(document.getElementById('i').value)
	let j = parseInt(document.getElementById('j').value)
	let k = parseInt(document.getElementById('k').value)
	let l = parseInt(document.getElementById('l').value)
	let m = parseInt(document.getElementById('m').value)
	let n = parseInt(document.getElementById('n').value)
	let p = parseInt(document.getElementById('p').value)
	let q = parseInt(document.getElementById('q').value)
	let r = parseInt(document.getElementById('r').value)
	let s = parseInt(document.getElementById('s').value)
	let u = parseInt(document.getElementById('u').value)
	let v = parseInt(document.getElementById('v').value)
	let w = parseInt(document.getElementById('w').value)
	let x = parseInt(document.getElementById('x').value)
	let y = parseInt(document.getElementById('y').value)
	let z = parseInt(document.getElementById('z').value)

	let go = b+c+d+e+f+h+i+j+k+l+m+n+p+q+r+s+u+v+w+x+y+z

	if(go>=6){
		document.getElementById("parabens").className = ""
		document.getElementById("parabens").className = "col-8 col1f"
		document.getElementById('a').onclick = function(){return false}
		document.getElementById('g').onclick = function(){return false}
		document.getElementById('t').onclick = function(){return false}
		document.getElementById('o').onclick = function(){return false}
		
	}else if(go==1){
		document.getElementById("parabens").className = ""
		document.getElementById("parabens").className = "col-8 col1a"
	}else if(go==2){
		document.getElementById("parabens").className = ""
		document.getElementById("parabens").className = "col-8 col1b"
	}else if(go==3){
		document.getElementById("parabens").className = ""
		document.getElementById("parabens").className = "col-8 col1c"
	}else if(go==4){
		document.getElementById("parabens").className = ""
		document.getElementById("parabens").className = "col-8 col1d"
	}else if(go==5){
		document.getElementById("parabens").className = ""
		document.getElementById("parabens").className = "col-8 col1e"
	} else if(go==6) {
		document.getElementById("parabens").className = ""
		document.getElementById("parabens").className = "col-8 col1f"
	}
	
}






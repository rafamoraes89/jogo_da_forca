let audio1 = document.querySelector('#grito1')
let audio2 = document.querySelector('#grito2')
let audio3 = document.querySelector('#audio_success')
let audio4 = document.querySelector('#audio_success_2')

function apertarLetra_l() {
  audio4.play()
  document.getElementById('l_').innerHTML = 'L'
  document.getElementById('l_').className = 'btn btn-success btn-md'
  document.getElementById('l_').value = 'L'
  document.getElementById('l').disabled = true

  youWin()
}

function apertarLetra_a() {
  audio4.play()
  document.getElementById('a_').innerHTML = 'A'
  document.getElementById('a2_').innerHTML = 'A'
  document.getElementById('a3_').innerHTML = 'A'
  document.getElementById('a_').className = 'btn btn-success btn-md'
  document.getElementById('a2_').className = 'btn btn-success btn-md'
  document.getElementById('a3_').className = 'btn btn-success btn-md'
  document.getElementById('a_').value = 'A'
  document.getElementById('a').disabled = true

  youWin()
}

function apertarLetra_r() {
  audio4.play()
  document.getElementById('r_').innerHTML = 'R'
  document.getElementById('r_').className = 'btn btn-success btn-md'
  document.getElementById('r_').value = 'R'
  document.getElementById('r').disabled = true
  youWin()
}

function apertarLetra_n() {
  audio4.play()
  document.getElementById('n_').innerHTML = 'N'
  document.getElementById('n_').className = 'btn btn-success btn-md'
  document.getElementById('n_').value = 'N'
  document.getElementById('n').disabled = true
  youWin()
}

function apertarLetra_j() {
  audio4.play()
  document.getElementById('j_').innerHTML = 'J'
  document.getElementById('j_').className = 'btn btn-success btn-md'
  document.getElementById('j_').value = 'J'
  document.getElementById('j').disabled = true
  youWin()
}

document.getElementById('avancar').onclick = function () {
  return false
}
document.getElementById('ir').disabled = true

function youWin() {
  let l = document.getElementById('l_').value
  let a = document.getElementById('a_').value
  let r = document.getElementById('r_').value
  let n = document.getElementById('n_').value
  let j = document.getElementById('j_').value
  if (l == 'L' && a == 'A' && r == 'R' && n == 'N' && j == 'J') {
    audio3.play()
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col2g'
    document.getElementById('avancar').onclick = function () {
      return true
    }
    document.getElementById('ir').disabled = false
    document.getElementById('b').onclick = function () {
      return false
    }
    document.getElementById('c').onclick = function () {
      return false
    }
    document.getElementById('d').onclick = function () {
      return false
    }
    document.getElementById('e').onclick = function () {
      return false
    }
    document.getElementById('f').onclick = function () {
      return false
    }
    document.getElementById('g').onclick = function () {
      return false
    }
    document.getElementById('h').onclick = function () {
      return false
    }
    document.getElementById('i').onclick = function () {
      return false
    }
    document.getElementById('j').onclick = function () {
      return false
    }
    document.getElementById('k').onclick = function () {
      return false
    }
    document.getElementById('l').onclick = function () {
      return false
    }
    document.getElementById('m').onclick = function () {
      return false
    }
    document.getElementById('n').onclick = function () {
      return false
    }
    document.getElementById('p').onclick = function () {
      return false
    }
    document.getElementById('q').onclick = function () {
      return false
    }
    document.getElementById('r').onclick = function () {
      return false
    }
    document.getElementById('s').onclick = function () {
      return false
    }
    document.getElementById('u').onclick = function () {
      return false
    }
    document.getElementById('v').onclick = function () {
      return false
    }
    document.getElementById('w').onclick = function () {
      return false
    }
    document.getElementById('x').onclick = function () {
      return false
    }
    document.getElementById('y').onclick = function () {
      return false
    }
    document.getElementById('z').onclick = function () {
      return false
    }
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

function youLose_g() {
  document.getElementById('g').className = 'btn btn-danger btn-sm'
  document.getElementById('g').value = 1

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

function youLose_m() {
  document.getElementById('m').className = 'btn btn-danger btn-sm'
  document.getElementById('m').value = 1

  youLose()
}

function youLose_o() {
  document.getElementById('o').className = 'btn btn-danger btn-sm'
  document.getElementById('o').value = 1

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

function youLose_s() {
  document.getElementById('s').className = 'btn btn-danger btn-sm'
  document.getElementById('s').value = 1

  youLose()
}

function youLose_t() {
  document.getElementById('t').className = 'btn btn-danger btn-sm'
  document.getElementById('t').value = 1

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
  let b1 = parseInt(document.getElementById('b').value)
  let c1 = parseInt(document.getElementById('c').value)
  let d1 = parseInt(document.getElementById('d').value)
  let e1 = parseInt(document.getElementById('e').value)
  let f1 = parseInt(document.getElementById('f').value)
  let g1 = parseInt(document.getElementById('g').value)
  let h1 = parseInt(document.getElementById('h').value)
  let i1 = parseInt(document.getElementById('i').value)
  let k1 = parseInt(document.getElementById('k').value)
  let m1 = parseInt(document.getElementById('m').value)
  let o1 = parseInt(document.getElementById('o').value)
  let p1 = parseInt(document.getElementById('p').value)
  let q1 = parseInt(document.getElementById('q').value)
  let s1 = parseInt(document.getElementById('s').value)
  let t1 = parseInt(document.getElementById('t').value)
  let u1 = parseInt(document.getElementById('u').value)
  let v1 = parseInt(document.getElementById('v').value)
  let w1 = parseInt(document.getElementById('w').value)
  let x1 = parseInt(document.getElementById('x').value)
  let y1 = parseInt(document.getElementById('y').value)
  let z1 = parseInt(document.getElementById('z').value)

  let go =
    b1 +
    c1 +
    d1 +
    e1 +
    f1 +
    g1 +
    h1 +
    i1 +
    k1 +
    m1 +
    o1 +
    p1 +
    q1 +
    s1 +
    t1 +
    u1 +
    v1 +
    w1 +
    x1 +
    y1 +
    z1

  console.log(go)

  if (go >= 6) {
    audio2.play()
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1f'
    document.getElementById('l').onclick = function () {
      return false
    }
    document.getElementById('a').onclick = function () {
      return false
    }
    document.getElementById('r').onclick = function () {
      return false
    }
    document.getElementById('n').onclick = function () {
      return false
    }
    document.getElementById('j').onclick = function () {
      return false
    }
  } else if (go == 1) {
    audio1.play()
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1a'
  } else if (go == 2) {
    audio1.play()
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1b'
  } else if (go == 3) {
    audio1.play()
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1c'
  } else if (go == 4) {
    audio1.play()
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1d'
  } else if (go == 5) {
    audio1.play()
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1e'
  }
}

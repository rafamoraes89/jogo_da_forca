function apertarLetra_l() {
  document.getElementById('l_').innerHTML = 'L'
  document.getElementById('l_').className = 'btn btn-success btn-md'
  document.getElementById('l_').value = 'L'
  document.getElementById('l').disabled = true

  youWin()
}

function apertarLetra_a() {
  document.getElementById('a_').innerHTML = 'A'
  document.getElementById('a_').className = 'btn btn-success btn-md'

  document.getElementById('a_').value = 'A'
  document.getElementById('a').disabled = true

  youWin()
}

function apertarLetra_v() {
  document.getElementById('v_').innerHTML = 'V'
  document.getElementById('v_').className = 'btn btn-success btn-md'
  document.getElementById('v_').value = 'V'
  document.getElementById('v').disabled = true
  youWin()
}

function apertarLetra_i() {
  document.getElementById('i_').innerHTML = 'I'
  document.getElementById('i_').className = 'btn btn-success btn-md'
  document.getElementById('i_').value = 'I'
  document.getElementById('i').disabled = true
  youWin()
}

function apertarLetra_o() {
  document.getElementById('o_').innerHTML = 'O'
  document.getElementById('o_').className = 'btn btn-success btn-md'
  document.getElementById('o_').value = 'O'
  document.getElementById('o').disabled = true
  youWin()
}

function apertarLetra_e() {
  document.getElementById('e_').innerHTML = 'E'
  document.getElementById('e_').className = 'btn btn-success btn-md'
  document.getElementById('e_').value = 'E'
  document.getElementById('e').disabled = true
  youWin()
}

function apertarLetra_t() {
  document.getElementById('t_').innerHTML = 'T'
  document.getElementById('t_').className = 'btn btn-success btn-md'
  document.getElementById('t_').value = 'T'
  document.getElementById('t').disabled = true
  youWin()
}

document.getElementById('avancar').onclick = function () {
  return false
}
document.getElementById('ir').disabled = true

function youWin() {
  let v = document.getElementById('v_').value
  let i = document.getElementById('i_').value
  let o = document.getElementById('o_').value
  let l = document.getElementById('l_').value
  let e = document.getElementById('e_').value
  let t = document.getElementById('t_').value
  let a = document.getElementById('a_').value
  if (
    v == 'V' &&
    i == 'I' &&
    o == 'O' &&
    l == 'L' &&
    e == 'E' &&
    t == 'T' &&
    a == 'A'
  ) {
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col3g'
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
  let f1 = parseInt(document.getElementById('f').value)
  let g1 = parseInt(document.getElementById('g').value)
  let h1 = parseInt(document.getElementById('h').value)
  let j1 = parseInt(document.getElementById('j').value)
  let k1 = parseInt(document.getElementById('k').value)
  let m1 = parseInt(document.getElementById('m').value)
  let n1 = parseInt(document.getElementById('n').value)
  let p1 = parseInt(document.getElementById('p').value)
  let q1 = parseInt(document.getElementById('q').value)
  let r1 = parseInt(document.getElementById('r').value)
  let s1 = parseInt(document.getElementById('s').value)
  let u1 = parseInt(document.getElementById('u').value)
  let w1 = parseInt(document.getElementById('w').value)
  let x1 = parseInt(document.getElementById('x').value)
  let y1 = parseInt(document.getElementById('y').value)
  let z1 = parseInt(document.getElementById('z').value)

  let go =
    b1 +
    c1 +
    d1 +
    f1 +
    g1 +
    h1 +
    j1 +
    k1 +
    m1 +
    n1 +
    p1 +
    q1 +
    r1 +
    s1 +
    u1 +
    w1 +
    x1 +
    y1 +
    z1

  console.log(go)

  if (go >= 6) {
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1f'
    document.getElementById('v').onclick = function () {
      return false
    }
    document.getElementById('i').onclick = function () {
      return false
    }
    document.getElementById('o').onclick = function () {
      return false
    }
    document.getElementById('l').onclick = function () {
      return false
    }
    document.getElementById('e').onclick = function () {
      return false
    }
    document.getElementById('t').onclick = function () {
      return false
    }
    document.getElementById('a').onclick = function () {
      return false
    }
  } else if (go == 1) {
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1a'
  } else if (go == 2) {
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1b'
  } else if (go == 3) {
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1c'
  } else if (go == 4) {
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1d'
  } else if (go == 5) {
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1e'
  } else if (go == 6) {
    document.getElementById('parabens').className = ''
    document.getElementById('parabens').className = 'col-lg-8 mr-3 ml-3 col1f'
  }
}

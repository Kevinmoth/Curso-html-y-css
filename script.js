//------------------------Ventanas MODAL---------------------------
// Seleccionar todos los botones de cierre
var botonesCerrarModal = document.querySelectorAll(".cerrar-modal");

// Añadir el evento de clic a cada botón de cierre
botonesCerrarModal.forEach(function(boton) {
  boton.addEventListener("click", function(event) {
    event.stopPropagation(); // Detener la propagación del evento
    var modal = this.closest(".modal");
    modal.querySelector(".modal-contenido").style.opacity = 0;
    setTimeout(function() {
      modal.style.display = "none";
    }, 300);
  });
});
//------------------------Ventanas WAR---------------------------
document.getElementById("abrirModalGuiasWar").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasWar");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalGuiasWar").addEventListener("click", function(event) {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasWar");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
});

document.getElementById("abrirModalEquipoWar").addEventListener("click", function() {
  var modal = document.getElementById("miModalEquipoWar");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalEquipoWar").addEventListener("click", function(event) {
  event.stopPropagation(); // Detener la propagación del evento
  var modal = document.getElementById("miModalEquipoWar");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
});

//------------------------Ventanas PALA---------------------------
document.getElementById("abrirModalGuias").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuias");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10); 
});

document.getElementById("abrirModalEquipo").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipo");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalGuias").addEventListener("click", function() {
    event.stopPropagation();
    var modal = document.getElementById("miModalGuias");
    modal.querySelector(".modal-contenido").style.opacity = 0;
    setTimeout(function() {
        modal.style.display = "none";
    }, 300);
  });

document.getElementById("cerrarModalEquipo").addEventListener("click", function() {
    event.stopPropagation();
    var modal = document.getElementById("miModalEquipo");
    modal.querySelector(".modal-contenido").style.opacity = 0;
    setTimeout(function() {
        modal.style.display = "none";
    }, 300); 
  });

//------------------------Ventanas Hunter---------------------------

document.getElementById("abrirModalGuiasHunter").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasHunter");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalGuiasHunter").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasHunter");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
});

document.getElementById("abrirModalEquipoHunter").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoHunter");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalEquipoHunter").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoHunter");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
});
//------------------------Ventanas Rogue---------------------------

document.getElementById("abrirModalGuiasRogue").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasRogue");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalGuiasRogue").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasRogue");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
});

document.getElementById("abrirModalEquipoRogue").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoRogue");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalEquipoRogue").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoRogue");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
});


//------------------------Ventanas DK---------------------------

document.getElementById("abrirModalGuiasDK").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasDK");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalGuiasDK").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasDK");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
});

document.getElementById("abrirModalEquipoDK").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoDK");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalEquipoDK").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoDK");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
});

//------------------------Ventanas Chaman---------------------------
document.getElementById("abrirModalGuiasChaman").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasChaman");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalGuiasChaman").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasChaman");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
})

document.getElementById("abrirModalEquipoChaman").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoChaman");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalEquipoChaman").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoChaman");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
})

//------------------------Ventanas Mago---------------------------

document.getElementById("abrirModalGuiasMago").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasMago");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalGuiasMago").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasMago");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
})

document.getElementById("abrirModalEquipoMago").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoMago");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalEquipoMago").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoMago");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
})

//------------------------Ventanas Brujo---------------------------

document.getElementById("abrirModalGuiasBrujo").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasBrujo");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalGuiasBrujo").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasBrujo");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
})

document.getElementById("abrirModalEquipoBrujo").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoBrujo");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalEquipoBrujo").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoBrujo");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
})

//------------------------Ventanas Druida---------------------------

document.getElementById("abrirModalGuiasDruida").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasDruida");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalGuiasDruida").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalGuiasDruida");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
})

document.getElementById("abrirModalEquipoDruida").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoDruida");
  modal.style.display = "block";
  setTimeout(function() {
      modal.querySelector(".modal-contenido").style.opacity = 1;
  }, 10);
});

document.getElementById("cerrarModalEquipoDruida").addEventListener("click", function() {
  event.stopPropagation();
  var modal = document.getElementById("miModalEquipoDruida");
  modal.querySelector(".modal-contenido").style.opacity = 0;
  setTimeout(function() {
      modal.style.display = "none";
  }, 300);
})

//------------------------Ventanas xx---------------------------



// Cierra la ventana modal si el usuario hace clic fuera de ella
window.onclick = function(event) {
  var modales = document.getElementsByClassName("modal");
  for (var i = 0; i < modales.length; i++) {
    if (event.target == modales[i]) {
      modales[i].style.display = "none";
    }
  }
};




//------------------------FONDO ANIMADO---------------------------

let frag = `
vec4 abyssColor = vec4(0, 0, 0, 0);
vec4 tunnelColor = vec4(1.5, 1.2, 1.1, 1);

uniform float time;
uniform vec2 resolution;

void main() {

    vec2 uv = ( gl_FragCoord.xy - .5 * resolution.xy) / resolution.y * 0.6;
    
    float r = length(uv);
   	float y = fract( r / 0.005 / ( r - 0.01 ) + time * 1.);
	
    y = smoothstep( 0.01, 4., y );
   
   	float x = length(uv);
   	x = smoothstep( 0.5, .01, x );

    gl_FragColor = mix( tunnelColor, abyssColor, x ) * y;
}
`;

let scene, camera, renderer, animationId;
let uniforms, geometry, material, mesh;
let startTime = Date.now();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    2
  );
  camera.position.z = 1;

  geometry = new THREE.PlaneGeometry(25, 25);
  material = new THREE.ShaderMaterial({
    uniforms: {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() }
    },
    fragmentShader: frag
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });

  material.uniforms.resolution.value.x = window.innerWidth;
  material.uniforms.resolution.value.y = window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  animationId = requestAnimationFrame(animate);
  let elapsedMilliseconds = Date.now() - startTime;
  material.uniforms.time.value = elapsedMilliseconds / 1000;
  renderer.render(scene, camera);
}

init();
animate();

function resize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  material.uniforms.resolution.value.x = window.innerWidth;
  material.uniforms.resolution.value.y = window.innerHeight;
  renderer.setSize(innerWidth, innerHeight);
}

addEventListener("resize", resize);


document.addEventListener("DOMContentLoaded", function() {
  var menuImg = document.getElementById('menu-img');
  var menu = document.getElementById('menu');

  menuImg.addEventListener('click', function() {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });
});


  
  
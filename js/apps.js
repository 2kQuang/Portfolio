(function () {
    'use strict';
    var scene, camera, renderer;
    var container, aspectRatio,
        HEIGHT, WIDTH, fieldOfView,
        nearPlane, farPlane,
        mouseX, mouseY, windowHalfX,
        windowHalfY, geometry,
        starStuff, materialOptions, stars;

    init();
    animate();

    function init() {
        container = document.getElementById('star_menu');
        document.body.appendChild(container);
        HEIGHT = window.innerHeight;
        WIDTH = window.innerWidth;
        aspectRatio = WIDTH / HEIGHT;
        fieldOfView = 75;
        nearPlane = 1;
        farPlane = 400;
        mouseX = 0;
        mouseY = 0;

        windowHalfX = WIDTH / 2;
        windowHalfY = HEIGHT / 2;
        camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        camera.position.z = farPlane / 2;

        scene = new THREE.Scene({
            antialias: true
        });
        scene.fog = new THREE.FogExp2(0x000000, 0.0003);
        starForge();

        if (webGLSupport()) {
            renderer = new THREE.WebGLRenderer({
                alpha: true
            });

        } else {
            renderer = new THREE.CanvasRenderer();
        }

        renderer.setClearColor(0x000011, 1);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(WIDTH, HEIGHT);
        container.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);
        document.addEventListener('mousemove', onMouseMove, false);

    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }


    function render() {
        camera.position.x += (mouseX - camera.position.x) * 0.005;
        camera.position.y += (-mouseY - camera.position.y) * 0.005;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    }

    function webGLSupport() {
        try {
            var canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (
                canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    }
    function onWindowResize() {
        var WIDTH = window.innerWidth,
            HEIGHT = window.innerHeight;
        camera.aspect = aspectRatio;
        camera.updateProjectionMatrix();
        renderer.setSize(WIDTH, HEIGHT);
    }
    function starForge() {
        var starQty = 45000;
        geometry = new THREE.SphereGeometry(1000, 100, 50);

        materialOptions = {
            size: 1.0,
            transparency: true,
            opacity: 0.3,
        };
        starStuff = new THREE.PointCloudMaterial(materialOptions);
        for (var i = 0; i < starQty; i++) {
            var starVertex = new THREE.Vector3();
            starVertex.x = Math.random() * 2000 - 1000;
            starVertex.y = Math.random() * 2000 - 1000;
            starVertex.z = Math.random() * 2000 - 1000;
            geometry.vertices.push(starVertex);
        }
        stars = new THREE.PointCloud(geometry, starStuff);
        scene.add(stars);
    }
    function onMouseMove(e) {

        mouseX = e.clientX - windowHalfX;
        mouseY = e.clientY - windowHalfY;
    }
})();

if ($(".ul_menu .line")) {
    $(".ul_menu").each(function () {
        left = $(this).find("li.location").position().left;
        width = $(this).find("li.location").width();
        $(this).find(".line").css({ "width": width, "left": left })
    });
    $(".ul_menu li").hover(function () {
        left = $(this).position().left;
        width = $(this).width();
        $(this).parent(".ul_menu").find(".line").css({ "width": width, "left": left })
    }, function () {
        left = $(".ul_menu").find("li.location").position().left;
        width = $(".ul_menu").find("li.location").width();
        $(".ul_menu").find(".line").css({ "width": width, "left": left })
    });

}
if (".typing-text") {
    var typed = new Typed(".typing-text", {
        strings: ["Frontend Developer", "Backend Developer"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });
}
// sss avt
if (".sss") {
    $(document).ready(function () {
        var api = $(".sss").peShiner({ api: true, paused: true, reverse: true, repeat: 1, color: 'monoHL' }); //mã màu đặc biệt: monoHL, oceanHL, fireHL
        api.resume();
    });
}
// avt hover
if (".tilt") {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 18,
    });
}
if (".tilt1") {
    VanillaTilt.init(document.querySelectorAll(".tilt1"), {
        max: 10,
    });
}
// menu 
if ($("header")) {
    $(window).scroll(function () {
        var height_scrol_fix = $("header").outerHeight() + 20;
        if ($(window).scrollTop() >= height_scrol_fix) { $("header").addClass('fixed'); $("header").removeClass('no-fixed'); }
        else { $("header").removeClass('fixed'); $("header").addClass('no-fixed'); }
    });
}
if ($("menu")) {
    $(".icon_show span").click(function () {
        $(this).addClass("show");
        $(".box-mmenu").addClass("show");
    });
    $(".icon_close span").click(function () {
        $(".icon_show span").removeClass("show");
        $(".box-mmenu").removeClass("show");
    });
}
// scroll active
$(window).on('scroll load', function () {
    $('section').each(function () {
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).find(".scroll_page").attr('id');
        if (top > offset && top < offset + height) {
            $('.ul_menu li').removeClass('location');
            $('.ul_menu').find(`[href="#${id}"]`).parent("li").addClass('location');
            $('.ul_mmenu li').removeClass('location');
            $('.ul_mmenu').find(`[href="#${id}"]`).parent("li").addClass('location');
        }
    });
    $(".ul_menu").each(function () {
        left = $(this).find("li.location").position().left;
        width = $(this).find("li.location").width();
        $(this).find(".line").css({ "width": width, "left": left })
    });
});
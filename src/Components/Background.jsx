import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import SliderCards from "./SliderCards";

const Background = () => {
  const headerRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const pointsRef = useRef([]);
  const targetRef = useRef({ x: 0, y: 0 });
  const animateHeaderRef = useRef(true);

  const Circle = (pos, rad, color) => {
    const circle = {
      pos: pos || null,
      radius: rad || null,
      color: color || null,
      active: 0,
      draw: function (ctx) {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(156,217,249," + this.active + ")";
        ctx.fill();
      },
    };
    return circle;
  };

  const getDistance = (p1, p2) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  };

  const drawLines = (p, ctx) => {
    if (!p.active) return;
    for (let i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
      ctx.stroke();
    }
  };

  const shiftPoint = (p) => {
    gsap.to(p, {
      duration: 1 + 1 * Math.random(),
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: "circ.inOut",
      onComplete: () => shiftPoint(p),
    });
  };

  const initHeader = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (headerRef.current) {
      headerRef.current.style.height = height + "px";
    }

    if (canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }

    targetRef.current = { x: width / 2, y: height / 2 };

    pointsRef.current = [];
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        const p = { x: px, originX: px, y: py, originY: py };
        pointsRef.current.push(p);
      }
    }

    for (let i = 0; i < pointsRef.current.length; i++) {
      const closest = [];
      const p1 = pointsRef.current[i];
      for (let j = 0; j < pointsRef.current.length; j++) {
        const p2 = pointsRef.current[j];
        if (!(p1 === p2)) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    for (let i in pointsRef.current) {
      pointsRef.current[i].circle = Circle(
        pointsRef.current[i],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)"
      );
    }
  };

  const animate = () => {
    if (animateHeaderRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      for (let i in pointsRef.current) {
        const point = pointsRef.current[i];
        if (Math.abs(getDistance(targetRef.current, point)) < 4000) {
          point.active = 0.3;
          point.circle.active = 0.6;
        } else if (Math.abs(getDistance(targetRef.current, point)) < 20000) {
          point.active = 0.1;
          point.circle.active = 0.3;
        } else if (Math.abs(getDistance(targetRef.current, point)) < 40000) {
          point.active = 0.02;
          point.circle.active = 0.1;
        } else {
          point.active = 0;
          point.circle.active = 0;
        }
        drawLines(point, ctx);
        point.circle.draw(ctx);
      }
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    initHeader();
    animate();
    pointsRef.current.forEach((point) => shiftPoint(point));

    const handleMouseMove = (e) => {
      let posx = 0;
      let posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      targetRef.current = { x: posx, y: posy };
    };

    const handleScroll = () => {
      animateHeaderRef.current = !(
        document.body.scrollTop > window.innerHeight
      );
    };

    const handleResize = () => {
      initHeader();
    };

    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="overflow-y-hidden relative w-full min-h-screen   bg-cover bg-center z-[1] bg-[url('https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg')]"
    >
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
      <div className="relative z-10 w-full py-8">
        {/*  tittle */}
        <div className="max-w-7xl mx-auto">
          <h1 className="font-['Kalam'] font-extrabold text-white text-4xl md:text-7xl">
            {" "}
            Demo text
          </h1>
        </div>
        {/* container */}
        <div className="max-w-7xl mx-auto  mt-10">
          {/* cards */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {/* main card */}
            <div className="w-full md:w-[70%] md:min-h-[80vh] flex items-center">
              <Card />
            </div>
            {/* side cards with side bar */}
            <div className="w-full md:w-[30%] md:min-h-[80vh] flex items-center">
              <SliderCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;

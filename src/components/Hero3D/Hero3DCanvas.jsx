import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Hero3DCanvas.css';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for entire interactive object
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Elegant Outer Glass Torus (Healthcare Protection Ring)
    const torusGeo = new THREE.TorusGeometry(2.1, 0.18, 32, 100);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x004E9E,
      emissive: 0x001B3A,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.6,
      ior: 1.5,
      thickness: 0.5,
      transparent: true,
      opacity: 0.85
    });
    const torusMesh = new THREE.Mesh(torusGeo, glassMat);
    torusMesh.rotation.x = Math.PI / 3.5;
    mainGroup.add(torusMesh);

    // 2. Intersecting Secondary Orbit Ring
    const torusGeo2 = new THREE.TorusGeometry(1.65, 0.12, 24, 80);
    const glassMat2 = new THREE.MeshPhysicalMaterial({
      color: 0xDE347F,
      emissive: 0x38051E,
      roughness: 0.2,
      metalness: 0.2,
      transmission: 0.7,
      transparent: true,
      opacity: 0.8
    });
    const torusMesh2 = new THREE.Mesh(torusGeo2, glassMat2);
    torusMesh2.rotation.y = Math.PI / 2.8;
    torusMesh2.rotation.z = Math.PI / 4;
    mainGroup.add(torusMesh2);

    // 3. Central Pulsing Vitals Core (Heart of Care)
    const coreGeo = new THREE.IcosahedronGeometry(0.75, 4);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF,
      emissive: 0xDE347F,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 4. Orbiting Medical Data Nodes (Floating healthcare spheres)
    const nodesGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x60A5FA });
    const nodeCount = 18;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.4 + (Math.sin(i * 2) * 0.3);
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(
        Math.cos(angle) * radius,
        (Math.sin(i * 3) * 0.4),
        Math.sin(angle) * radius
      );
      nodesGroup.add(node);
    }
    mainGroup.add(nodesGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x60A5FA, 2.5);
    dirLight1.position.set(5, 6, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xFF80B2, 2.0);
    dirLight2.position.set(-5, -4, -3);
    scene.add(dirLight2);

    const coreLight = new THREE.PointLight(0xDE347F, 3, 6);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Mouse Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isVisible = true;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || prefersReducedMotion) {
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Smooth idle rotation
      torusMesh.rotation.z += 0.003;
      torusMesh2.rotation.x += 0.004;
      nodesGroup.rotation.y += 0.005;

      // Gentle vital core pulse (Heartbeat rhythm)
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.06;
      coreMesh.scale.set(pulse, pulse, pulse);

      // Smooth mouse damping
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Floating wave motion
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // Initial render for static/reduced motion
    renderer.render(scene, camera);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries and materials
      torusGeo.dispose();
      torusGeo2.dispose();
      coreGeo.dispose();
      nodeGeo.dispose();
      glassMat.dispose();
      glassMat2.dispose();
      coreMat.dispose();
      nodeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-3d-canvas-wrapper" ref={mountRef} aria-hidden="true">
      <div className="canvas-ambient-halo"></div>
    </div>
  );
}

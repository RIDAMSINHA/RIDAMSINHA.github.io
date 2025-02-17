
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BlockchainBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      canvas: document.createElement('canvas'),
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create cubes representing blockchain blocks
    const cubes: THREE.Mesh[] = [];
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    
    // Create more cubes for better visibility
    for (let i = 0; i < 20; i++) {
      const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0x9b87f5,
        opacity: 0.8,
        transparent: true,
        side: THREE.DoubleSide,
        specular: 0x444444,
        shininess: 30,
      });
      
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      
      // Distribute cubes in a more organized way
      const radius = 8;
      const segment = (2 * Math.PI * i) / 20;
      cube.position.x = radius * Math.cos(segment);
      cube.position.y = (Math.random() - 0.5) * 6;
      cube.position.z = radius * Math.sin(segment);
      
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      
      cubes.push(cube);
      scene.add(cube);
    }

    // Add lights for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x9b87f5, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x9b87f5, 2);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Position camera for better view
    camera.position.z = 12;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);

    // Add connecting lines between cubes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9b87f5,
      opacity: 0.4,
      transparent: true,
      linewidth: 1,
    });

    // Create connections between cubes
    for (let i = 0; i < cubes.length; i++) {
      const nextIndex = (i + 1) % cubes.length;
      const points = [
        cubes[i].position,
        cubes[nextIndex].position,
      ];
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);

      // Add some cross connections for more complexity
      if (i % 3 === 0) {
        const crossIndex = (i + 5) % cubes.length;
        const crossPoints = [
          cubes[i].position,
          cubes[crossIndex].position,
        ];
        const crossGeometry = new THREE.BufferGeometry().setFromPoints(crossPoints);
        const crossLine = new THREE.Line(crossGeometry, lineMaterial);
        scene.add(crossLine);
      }
    }

    // Interactive mouse movement effect
    const mouse = new THREE.Vector2();
    const windowHalf = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX - windowHalf.x) / windowHalf.x;
      mouse.y = (event.clientY - windowHalf.y) / windowHalf.y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate all cubes and add floating effect
      cubes.forEach((cube, index) => {
        cube.rotation.x += 0.002;
        cube.rotation.y += 0.003;
        cube.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      // Add subtle camera movement based on mouse position
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      windowHalf.x = window.innerWidth / 2;
      windowHalf.y = window.innerHeight / 2;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0"
      style={{ opacity: 0.9, zIndex: "auto" }}
    />
  );
};

export default BlockchainBackground;

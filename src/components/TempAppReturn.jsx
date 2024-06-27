;<>
  <div className='h-screen background-image relative'>
    <div className='absolute top-1/2 transform -translate-y-1/2'>
      <Home />
    </div>

    {displayMore && (
      <button className='btn bottom-1/4 translate-y-1/2 left-1/2 transform -translate-x-1/2 text-white border-white border-2 p-2 transition duration-150ms absolute'>
        More about me
      </button>
    )}

    <Canvas camera={{ position: [5, 5, 120], fov: 100 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <pointLight position={[0, 0, 0]} intensity={1} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={starHovered === true ? 3 : 2}
        />
        <mesh
          ref={planeRef}
          // onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <planeGeometry args={[300, 200]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
        <DeathStar
          position={[0, 0, 0]}
          onPointerOver={handlePointerOver}
          hovered={starHovered}
          onPointerOut={() => setStarHovered(false)}
        />
        {/* <Xwinganim position={[100, 0, 5]} />
            <Xwinganim position={[110, 10, 5]} /> */}
        {/* <Tiefighter
              position={[0, 20, 130]}
              scale={0.01}
              rotation={[0, Math.PI / 4, 0]}
            /> */}
        {/* <OrbitControls second={true} target0={[0, 0, 0]} /> */}
      </Suspense>
    </Canvas>

    <div className='fixed top-1/2 right-20 transform -translate-y-1/2'>
      <Links />
    </div>
  </div>
  <div className='h-screen bg-black flex items-center justify-center'>
    <h1 className='text-white'>hello world</h1>
  </div>
</>

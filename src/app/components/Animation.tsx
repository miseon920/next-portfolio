'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '@/assets/img/animation2.json'

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}
// lotiie에       style={{ width: 150, height: 150 }} 을 넣을 수 있다.
const stack: number[] = []
  const cars: { pos: number; time: number }[] = position
    .map((pos, idx) => {
      return { pos: pos, time: (target - pos) / speed[idx] }
    })
    .sort((a, b) => b.pos - a.pos)

  console.log(cars)
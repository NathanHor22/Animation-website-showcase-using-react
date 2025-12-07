function Home () {
  return (
    <>
        <div class = "dropdown-options">
        <h1>Check out the different type of animations!</h1>
        <select id="animations" name = "animations">
            <option value="idle">Idle</option>
            <option value="jump">Jump</option>
            <option value="fall">Fall</option>
            <option value="run">Run</option>
            <option value="dizzy">Dizzy</option>
            <option value="sit">Sit</option>
            <option value="roll">Roll</option>
            <option value="bite">Bite</option>
            <option value="ko">Ko</option>
            <option value="getHit">GetHit</option>
        </select>
    </div>
    <canvas id="myCanvas" class="myCanvas"></canvas>
    </>
  )
}

  export default Home;
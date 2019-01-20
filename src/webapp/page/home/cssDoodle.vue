
<template>
       <css-doodle>
  :doodle {
    @grid: 1x80 / 50vmin 90vmin;
  }

  :container {
    perspective: 200vmin;
    perspective-origin: 0 -100%;
    transform-style: preserve-3d;
    will-change: transform;
    animation: cycle 30s linear infinite;
    animation-delay: calc(-1s * @r(@size()));
  }

  --h: @r(70%, 100%, .1);

  background:
    linear-gradient(to left, #82D5BD44, #82D5BD44)
    calc(50% - .5px) 0 / .5px var(--h)
    no-repeat;

  @place-cell: center 0;
  @size: 1px 100%;

  transform-style: preserve-3d;
  transform: translate3d(
    calc(@cos(@PI() / @size() * 2 * @calc(@i() - 1)) * 18vmin),
    0,
    calc(@sin(@PI() / @size() * 2 * @calc(@i() - 1)) * 18vmin)
  );

  :after {
    content: '';
    position: absolute;
    top: calc(var(--h) - 2%);
    @size: 2vmin 5vmin;
    background: @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C);
    clip-path: polygon(50% 0, 100% 70%, 50% 100%, 0 70%);

    /* for Safari anyway */
    --start: @r(360deg);
    transform: rotateY(var(--start));

    will-change: transform;
    animation: spin @r(5s, 10s, .1) ease-in-out infinite;
    animation-delay: calc(-1s * @r(@size()));
  }

  @random(.3) {
    :after {
      background:
        @multi(5, (
          radial-gradient(
            @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C) 50%,
            transparent 50%
          )
          @r(100%) @r(100%) / @r(.3vmin, 1.5vmin) @lr()
          no-repeat
        )),
        linear-gradient(
          @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C),
          @lp()
        );
    }
  }

  @random(.3) {
    :after {
      background:
        @multi(100, (
          radial-gradient(
            @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C) 50%,
            transparent 50%
          ) @r(100%) @r(100%) / .2vmin .2vmin no-repeat
        )),
        linear-gradient(
          @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C),
          @lp()
        );
    }
  }

  @random(.3) {
    :after {
      background:
        repeating-radial-gradient(
          @multi(10, (
            @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C)
          ))
        ) 50% 50% / 50% 50%,
        linear-gradient(
          @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C),
          @lp()
        );
    }
  }

  @random(.3) {
    :after {
      background:
        repeating-linear-gradient(
          45deg,
          @multi(10, (
            @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C)
          ))
        ),
        linear-gradient(
          @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C),
          @lp()
        );
    }
  }
  
  @random(.3) {
    :after {
      background: 
        @multi(30, (
          linear-gradient(
            to left,
            @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C) 50%,
            transparent 50%
          )
          @r(100%) @r(100%) / .15vmin @r(60%)
          no-repeat
        )),
        linear-gradient(
          @p(#5AC4BD, #D0CDA3, #E34370, #4BA6AB, #D9E78C),
          @lp()
        ); 
    }
  }

  :before {
    content: '';
    position: absolute;
    left: 50%; top: 0;
    @size: .5px var(--h);
    background: #82D5BD22;
    transform: rotateY(60deg);
  }

  @keyframes spin {
    to {
      transform: rotateY(
        calc(var(--start, 0deg) + @r(2turn, 5turn))
      );
    }
  }

  @keyframes cycle {
    to { transform: rotateY(1turn); }
  }
</css-doodle>
</template>

<script>
    export default{
      name: 'home'
    }
</script>
<style scoped>
/* html, body { 
  height: 100%; 
  margin: 0; 
  overflow: hidden; 
}
body {
  background: #18173C;
  display: flex;
  justify-content: center;
} */
</style>
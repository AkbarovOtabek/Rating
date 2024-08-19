<template>
  <div class="quiz">
    <h2>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis repellat, tempora ad iste
      delectus fuga!
    </h2>
    <div class="cards">
      <div class="card">
        <img class="card-img" src="" alt="" />
        <div class="card-text">
          <h4>Тема 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis?</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="" alt="" />
        <div class="card-text">
          <h4>Тема 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis?</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="" alt="" />
        <div class="card-text">
          <h4>Тема 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis?</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="" alt="" />
        <div class="card-text">
          <h4>Тема 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis?</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="" alt="" />
        <div class="card-text">
          <h4>Тема 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis?</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="" alt="" />
        <div class="card-text">
          <h4>Тема 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis?</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="" alt="" />
        <div class="card-text">
          <h4>Тема 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis?</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="" alt="" />
        <div class="card-text">
          <h4>Тема 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis?</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="" alt="" />
        <div class="card-text">
          <h4>Тема 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis?</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.quiz {
  margin-left: 300px;
}
.quiz .cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  max-width: 963px;
  gap: 20px;
  min-height: 523px;
}
.quiz .cards .card {
  cursor: pointer;
  position: relative;
  width: 216px;
  height: 235px;
  border-radius: 10px;
  border: 1px solid #7c8db5;
  text-align: center;
  overflow: hidden;
}
.card-text {
  width: 100%;
  left: 0;
  bottom: -50px;
  position: absolute;
  transition: var(--tran-03);
}
.card-text::before {
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 60px;
  position: absolute;
  content: '';
  background: rgba(0, 0, 0, 0.685);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.card-text::after {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 55px;
  width: 40%;
  height: 24px;
  position: absolute;
  content: '';
  background: rgba(0, 0, 0, 0.685);
}
.quiz .cards .card h4 {
  font-size: 16px;
}
.quiz .cards .card p {
  font-size: 12px;
}
.quiz .cards .card:hover .card-text {
  bottom: 0px;
}
</style>

<script>
import NotificationCards from '../components/NotificationCards.vue'
export default {
  components: { NotificationCards },
  data() {
    return {
      notificationsData: [
        {
          id: 1,
          image:
            'https://skillbox.ru/upload/setka_images/10193718042023_0ed1686442ac630326a48ddcef43684fa02b904b.jpg',
          descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae alias labore laborum atque fugiat deleniti repellendus sequi quaerat veritatis?',
          title: 'Доступны новые вопросы',
          url: 'http://localhost:5173/quiz/questionType/8',
          date: '01 Dec 2024'
        },
        {
          id: 2,
          image: 'https://img.freepik.com/free-photo/a-flower-with-a-yellow-center_1340-35924.jpg',
          descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae alias labore laborum atque fugiat deleniti repellendus sequi quaerat veritatis?',
          title: 'Позидия в рейтинге изменен',
          url: 'http://localhost:5173/rating',
          date: '05 Dec 2024'
        },
        {
          id: 3,
          image:
            'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg',
          descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae alias labore laborum atque fugiat deleniti repellendus sequi quaerat veritatis?',
          title: 'Заканчивается время для ответа на вопросы',
          url: 'http://localhost:5173/quiz/questionType/1',
          date: '21 Dec 2024'
        },
        {
          id: 4,
          image:
            'https://optim.tildacdn.com/tild3965-3962-4636-a630-383865656236/-/resize/824x/-/format/webp/martam-1.jpg',
          descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae alias labore laborum atque fugiat deleniti repellendus sequi quaerat veritatis?',
          title: 'Заканчивается время для ответа на вопросы',
          url: 'http://localhost:5173/quiz/questionType/2',
          date: '16 Dec 2024'
        },
        {
          id: 4,
          image:
            'https://optim.tildacdn.com/tild3965-3962-4636-a630-383865656236/-/resize/824x/-/format/webp/martam-1.jpg',
          descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae alias labore laborum atque fugiat deleniti repellendus sequi quaerat veritatis?',
          title: 'Заканчивается время для ответа на вопросы',
          url: 'http://localhost:5173/quiz/questionType/2',
          date: '16 Dec 2024'
        },
        {
          id: 4,
          image:
            'https://optim.tildacdn.com/tild3965-3962-4636-a630-383865656236/-/resize/824x/-/format/webp/martam-1.jpg',
          descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae alias labore laborum atque fugiat deleniti repellendus sequi quaerat veritatis?',
          title: 'Заканчивается время для ответа на вопросы',
          url: 'http://localhost:5173/quiz/questionType/2',
          date: '16 Dec 2024'
        },
        {
          id: 5,
          image:
            'https://optim.tildacdn.com/tild3965-3962-4636-a630-383865656236/-/resize/824x/-/format/webp/martam-1.jpg',
          descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae alias labore laborum atque fugiat deleniti repellendus sequi quaerat veritatis?',
          title: 'Заканчивается время для ответа на вопросы',
          url: 'http://localhost:5173/quiz/questionType/2',
          date: '16 Dec 2024'
        },
        {
          id: 6,
          image:
            'https://optim.tildacdn.com/tild3965-3962-4636-a630-383865656236/-/resize/824x/-/format/webp/martam-1.jpg',
          descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae alias labore laborum atque fugiat deleniti repellendus sequi quaerat veritatis?',
          title: 'Заканчивается время для ответа на вопросы',
          url: 'http://localhost:5173/quiz/questionType/2',
          date: '16 Dec 2024'
        },
        {
          id: 7,
          image:
            'https://optim.tildacdn.com/tild3965-3962-4636-a630-383865656236/-/resize/824x/-/format/webp/martam-1.jpg',
          descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae alias labore laborum atque fugiat deleniti repellendus sequi quaerat veritatis?',
          title: 'Заканчивается время для ответа на вопросы',
          url: 'http://localhost:5173/quiz/questionType/2',
          date: '16 Dec 2024'
        }
      ]
    }
  }
}
</script>
<template>
  <div class="notification">
    <h2 class="notification-header">Уведомление</h2>
    <div class="notification-list">
      <NotificationCards
        v-for="element in notificationsData"
        :key="element.id"
        :element="element"
      />
    </div>
  </div>
</template>
<style scoped>
.notification {
  width: 98%;
}
.notification h2 {
  margin-bottom: 25px;
}

.notification-header {
  color: var(--primary-color);
  font-size: 22px;
  font-weight: 600;
}
.notification-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>

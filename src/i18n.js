import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    searchAndprofile: {
      headTitle: 'Welcome to our website'
    },
    navbar: {
      home: 'Home',
      quiz: 'Quiz',
      history: 'History',
      notification: 'Notification',
      rating: 'Rating',
      DarkTheme: 'Dark theme',
      lightTheme: 'Light theme',
      exit: 'Exit'
    },
    HomePage: {
      QuantityOfQuestions: 'Quantity of questions',
      QuantityOfAnswers: 'Quantity of answers',
      QuantityOfRemainQuestions: ' Remain questions',
      RatingOfSecurity: 'Rating of security',
      HistoryOfChanges: 'History of changes',
      StatusOfDoneChallenges: 'Status of done chalanges',
      Staff: 'Staff'
    },
    Quiz: {
      Title: 'Questions for {year} {quant}'
    },
    HistoryPage: {
      Year: '{year} year',
      Quant: '{quant} - quant'
    },
    LastQunatHistory: {
      Title: 'Themes for cheaking security for {quant} quarter',
      Done: 'compleated to {status}'
    },
    ThemeQuestions: {
      QuestionsByTheme: 'Questions by theme { name }',
      NumberOfQueston: 'Number of questions',
      Question: 'Question',
      MaxElo: 'Max. elo',
      EarnedElo: 'Earned elo',
      Answer: 'Answer {answered}',
      NoAnswer: 'no answer',
      Comments: 'Comments:',
      AnswerComments: '{comments}',
      DownloadFile: 'Download file '
    },
    Rating: {
      Number: 'Place in the ranking',
      NameOfBanks: 'Name of banks',
      EarnedAlo: 'Accumulated points',
      Title: 'Ranking table for {year}',
      SelectYear: '{year} year',
      SelectQuarts: '{quant}-quart'
    },
    Notification: 'Notification',
    QuestionType: {
      Elo: 'Elo:',
      answer1: 'Yes',
      answer2: 'No',
      Choose: 'Choose',
      ChooseTheFile1: 'No files selected',
      ChooseTheFile2: 'Selected files: {number}',
      Send: 'Send'
    }
  },
  ru: {
    searchAndprofile: {
      headTitle: 'Система мониторинга информационной и кибербезопасности'
    },
    navbar: {
      home: 'Домой',
      quiz: 'Опросник',
      history: 'История',
      notification: 'Уведомление',
      rating: 'Рейтинг',
      DarkTheme: 'Темный режим',
      lightTheme: 'Светлый режим',
      exit: 'Выход'
    },
    HomePage: {
      QuantityOfQuestions: 'Количество Вопросов',
      QuantityOfAnswers: 'Количество ответов',
      QuantityOfRemainQuestions: 'Количество оставшихся',
      RatingOfSecurity: 'Рейтинг по безопасности',
      HistoryOfChanges: 'История изменения положения',
      StatusOfDoneChallenges: 'Статус выполненых задач',
      Staff: 'Сотрудники организации'
    },
    Quiz: {
      Title: 'Вопросы для проверки безопасности {year}  за {quant} квартал'
    },
    HistoryPage: {
      Year: '{year} год',
      Quant: '{quant} - четверть'
    },
    LastQunatHistory: {
      Title: 'Темы для проверки безопасности за {quant} квартал ',
      Done: 'выполнен на {status}'
    },
    ThemeQuestions: {
      QuestionsByTheme: 'Вопросы по теме { name }',
      NumberOfQueston: 'Номер вопроса',
      Question: 'Вопрос',
      MaxElo: 'макс. бал',
      EarnedElo: 'заработанный бал',
      Answer: 'Ответ {answered}',
      Comments: 'Коментарии:',
      AnswerComments: '{comments}',
      DownloadFile: 'Скачать загруженый файл '
    },
    Rating: {
      Number: 'Место в рейтинге',
      NameOfBanks: 'Название банка',
      EarnedAlo: 'Накопленные очки',
      Title: 'Таблица ретинга за {year}',
      SelectYear: '{year} год',
      SelectQuarts: '{quant}-кварал'
    },
    Notification: 'Уведомление',
    QuestionType: {
      Elo: 'Баллы:',
      answer1: 'Да',
      answer2: 'Нет',
      Choose: 'Выбрать',
      ChooseTheFile1: 'Файлы не выбраны',
      ChooseTheFile2: 'Выбрано файлов: {number}',
      Send: 'Отправить'
    }
  }
}

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages
})

export default i18n
